import { useState, useCallback } from 'react'
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useToast } from '@/components/ui/use-toast'
import pb from '@/lib/pocketbase/client'

type FileStatus = 'idle' | 'text' | 'ai' | 'success' | 'error'

interface UploadFile {
  id: string
  file: File
  status: FileStatus
  progress: number
  error?: string
  result?: { nome: string; email: string }
}

export default function CaptacaoPage() {
  const [files, setFiles] = useState<UploadFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const { toast } = useToast()

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const processFile = async (uploadFile: UploadFile) => {
    const updateFile = (updates: Partial<UploadFile>) => {
      setFiles((prev) => prev.map((f) => (f.id === uploadFile.id ? { ...f, ...updates } : f)))
    }

    updateFile({ status: 'text', progress: 30 })
    const textTimer = setTimeout(() => updateFile({ status: 'ai', progress: 70 }), 2500)

    try {
      const formData = new FormData()
      formData.append('resumes', uploadFile.file)

      const uploadWithRetry = async (retries = 1): Promise<any> => {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 28000)
        try {
          const res = await pb.send('/backend/v1/candidates/upload-resumes', {
            method: 'POST',
            body: formData,
            signal: controller.signal,
          })
          clearTimeout(timeoutId)
          return res
        } catch (err: any) {
          clearTimeout(timeoutId)
          if (err.status === 503 && retries > 0) {
            await new Promise((r) => setTimeout(r, 2000))
            return uploadWithRetry(retries - 1)
          }
          throw err
        }
      }

      const res = await uploadWithRetry()
      clearTimeout(textTimer)

      const result = res.results?.[0]
      if (result && result.success) {
        updateFile({
          status: 'success',
          progress: 100,
          result: { nome: result.nome, email: result.email },
        })
        toast({
          title: 'Sucesso',
          description: `Currículo de ${result.nome} processado e salvo com sucesso.`,
        })
      } else {
        const errorMsg = result?.error || 'Falha na análise do arquivo.'
        updateFile({ status: 'error', progress: 0, error: errorMsg })
        toast({ variant: 'destructive', title: 'Erro na Captação', description: errorMsg })
      }
    } catch (error: any) {
      clearTimeout(textTimer)
      let errorMsg = 'Ocorreu um erro interno ao processar o arquivo.'

      if (error.name === 'AbortError') {
        errorMsg = 'Tempo de requisição esgotado. Tente novamente.'
      } else if (error.status === 503) {
        errorMsg = 'Serviço temporariamente indisponível.'
      } else if (error.response?.data?.resumes?.message) {
        errorMsg = error.response.data.resumes.message
      }

      updateFile({ status: 'error', progress: 0, error: errorMsg })
      toast({ variant: 'destructive', title: 'Erro na Captação', description: errorMsg })
    }
  }

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
        .filter(
          (f) =>
            f.type === 'application/pdf' ||
            f.name.toLowerCase().endsWith('.pdf') ||
            f.name.toLowerCase().endsWith('.docx'),
        )
        .map((file) => ({
          id: Math.random().toString(36).substring(7),
          file,
          status: 'idle' as FileStatus,
          progress: 0,
        }))

      setFiles((prev) => [...newFiles, ...prev])
      newFiles.forEach((f) => processFile(f))
    }
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substring(7),
        file,
        status: 'idle' as FileStatus,
        progress: 0,
      }))
      setFiles((prev) => [...newFiles, ...prev])
      newFiles.forEach((f) => processFile(f))
      e.target.value = ''
    }
  }

  const getStatusText = (status: FileStatus) => {
    switch (status) {
      case 'text':
        return 'Processando texto...'
      case 'ai':
        return 'IA analisando...'
      case 'success':
        return 'Salvo com sucesso'
      case 'error':
        return 'Falha no processamento'
      default:
        return 'Aguardando na fila...'
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Captação Automática de Currículos
        </h1>
        <p className="text-muted-foreground mt-2">
          Faça o upload de currículos em formato PDF. Nossa Inteligência Artificial extrairá e
          criará os perfis automaticamente no banco de talentos.
        </p>
      </div>

      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={cn(
          'border-2 border-dashed rounded-2xl p-14 text-center transition-all duration-300 cursor-pointer mb-10 relative overflow-hidden',
          isDragging
            ? 'border-primary bg-primary/5 scale-[1.02] shadow-sm'
            : 'border-border hover:border-primary/50 hover:bg-muted/50',
        )}
      >
        <input
          type="file"
          multiple
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          title="Clique para selecionar os currículos"
        />
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <div
            className={cn(
              'p-4 rounded-full mb-4 transition-colors',
              isDragging ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground',
            )}
          >
            <UploadCloud className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Arraste e solte os currículos aqui</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm">
            Suporta múltiplos arquivos PDF simultaneamente. O processamento é feito individualmente
            para maior precisão.
          </p>
          <Button variant="outline" className="pointer-events-none">
            Selecionar do Computador
          </Button>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="font-semibold text-lg">Fila de Processamento ({files.length})</h3>
          </div>

          <div className="grid gap-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="bg-card border rounded-xl p-5 flex flex-col gap-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div
                      className={cn(
                        'p-3 rounded-full shrink-0 transition-colors',
                        file.status === 'success'
                          ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                          : file.status === 'error'
                            ? 'bg-destructive/10 text-destructive dark:bg-destructive/20'
                            : 'bg-primary/10 text-primary',
                      )}
                    >
                      {file.status === 'success' ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : file.status === 'error' ? (
                        <AlertCircle className="w-5 h-5" />
                      ) : (
                        <FileText className="w-5 h-5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-base truncate" title={file.file.name}>
                        {file.file.name}
                      </p>
                      <p
                        className={cn(
                          'text-sm flex items-center gap-2 mt-1',
                          file.status === 'error'
                            ? 'text-destructive'
                            : file.status === 'success'
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-muted-foreground',
                        )}
                      >
                        {(file.status === 'text' || file.status === 'ai') && (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        )}
                        {getStatusText(file.status)}
                      </p>
                    </div>
                  </div>

                  {file.result && (
                    <div className="text-right text-sm bg-muted/50 p-3 rounded-lg border shrink-0 max-w-[220px] sm:max-w-[320px]">
                      <p className="font-semibold truncate text-foreground">{file.result.nome}</p>
                      <p className="text-muted-foreground truncate" title={file.result.email}>
                        {file.result.email}
                      </p>
                    </div>
                  )}
                </div>

                {(file.status === 'text' || file.status === 'ai') && (
                  <div className="w-full px-1">
                    <Progress value={file.progress} className="h-2 w-full" />
                  </div>
                )}

                {file.status === 'error' && file.error && (
                  <div className="text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-md border border-destructive/20 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{file.error}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
