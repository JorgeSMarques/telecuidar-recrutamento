import React, { useState, useRef, useCallback } from 'react'
import pb from '@/lib/pocketbase/client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { UploadCloud, FileText, Loader2, X, Plus, AlertCircle, CheckCircle2 } from 'lucide-react'
import { extractFieldErrors } from '@/lib/pocketbase/errors'
import { cn } from '@/lib/utils'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

export default function CaptacaoPage() {
  const { toast } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    name: string
    email: string
    warning: string | null
  } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (selectedFile: File) => {
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (
      !validTypes.includes(selectedFile.type) &&
      !selectedFile.name.endsWith('.pdf') &&
      !selectedFile.name.endsWith('.docx')
    ) {
      toast({
        title: 'Arquivo inválido',
        description: 'Por favor, selecione apenas arquivos PDF ou DOCX.',
        variant: 'destructive',
      })
      return
    }
    setFile(selectedFile)
    setResult(null)
  }

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('curriculo', file)
      formData.append('fileName', file.name)

      const response = await pb.send('/backend/v1/candidates/upload-resumes', {
        method: 'POST',
        body: formData,
      })

      setResult({
        name: response.name,
        email: response.email,
        warning: response.warning,
      })

      toast({
        title: 'Sucesso!',
        description: 'Currículo processado e candidato criado na base.',
      })

      setFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error: any) {
      const fieldErrors = extractFieldErrors(error)
      if (fieldErrors.email) {
        toast({
          variant: 'destructive',
          title: 'Candidato Duplicado',
          description: fieldErrors.email,
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Erro no processamento',
          description: error.message || 'Erro desconhecido ao processar currículo.',
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Captação de Candidatos</h1>
          <p className="text-muted-foreground mt-2">
            Faça upload de currículos para processamento automático. A inteligência artificial
            extrairá o texto, nome e e-mail.
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Upload de Currículo</CardTitle>
            <CardDescription>
              Arraste e solte o arquivo ou clique para selecionar. Formatos suportados: PDF, DOCX.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!file ? (
              <div
                className={cn(
                  'border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center gap-4 transition-colors duration-200 cursor-pointer',
                  isDragging
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:bg-secondary/20',
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="rounded-full bg-secondary p-4">
                  <UploadCloud className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium">Clique para selecionar ou arraste o arquivo aqui</p>
                  <p className="text-sm text-muted-foreground mt-1">PDF ou DOCX até 5MB</p>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                />
              </div>
            ) : (
              <div className="flex items-center justify-between p-4 border rounded-lg bg-secondary/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium truncate max-w-[200px] sm:max-w-[400px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setFile(null)
                    setResult(null)
                  }}
                  disabled={loading}
                >
                  <X className="w-5 h-5 text-muted-foreground hover:text-destructive" />
                </Button>
              </div>
            )}

            {result && (
              <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {result.warning ? (
                  <Alert
                    variant="destructive"
                    className="bg-destructive/10 text-destructive border-none"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Atenção na extração</AlertTitle>
                    <AlertDescription>{result.warning}</AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-900">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                    <AlertTitle>Extração Concluída</AlertTitle>
                    <AlertDescription>
                      O currículo foi lido e os dados extraídos com sucesso.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg bg-card">
                  <div>
                    <Label className="text-xs text-muted-foreground">Nome Identificado</Label>
                    <p className="font-medium mt-1 text-lg">{result.name}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">E-mail Identificado</Label>
                    <p className="font-medium mt-1 text-lg">{result.email}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end gap-3 border-t p-6 bg-secondary/20">
            {file && !result && (
              <Button onClick={handleUpload} disabled={loading} className="w-full sm:w-auto">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando com IA...
                  </>
                ) : (
                  <>
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Enviar e Extrair
                  </>
                )}
              </Button>
            )}
            {result && (
              <Button
                onClick={() => {
                  setFile(null)
                  setResult(null)
                }}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Plus className="mr-2 h-4 w-4" />
                Novo Upload
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
