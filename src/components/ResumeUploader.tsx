import { useState, useRef, useCallback } from 'react'
import { UploadCloud, FileText, CheckCircle2, XCircle, Loader2, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import pb from '@/lib/pocketbase/client'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

interface UploadStatus {
  id: string
  file: File
  status: 'pending' | 'uploading' | 'success' | 'error'
  progress: number
  message?: string
}

export function ResumeUploader() {
  const [uploads, setUploads] = useState<UploadStatus[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const { toast } = useToast()

  const handleFiles = useCallback(
    (files: FileList | File[]) => {
      const validFiles = Array.from(files).filter(
        (f) =>
          f.name.toLowerCase().endsWith('.pdf') ||
          f.name.toLowerCase().endsWith('.doc') ||
          f.name.toLowerCase().endsWith('.docx'),
      )

      if (validFiles.length === 0) {
        toast({
          title: 'Arquivo inválido',
          description: 'Apenas arquivos PDF ou DOCX são permitidos.',
          variant: 'destructive',
        })
        return
      }

      const newUploads: UploadStatus[] = validFiles.map((file) => ({
        id: Math.random().toString(36).substring(7),
        file,
        status: 'pending',
        progress: 0,
      }))

      setUploads((prev) => {
        const updated = [...prev, ...newUploads]
        setTimeout(() => processQueue(updated), 100)
        return updated
      })
    },
    [toast],
  )

  const processQueue = async (currentList: UploadStatus[]) => {
    const pending = currentList.filter((u) => u.status === 'pending')

    for (const item of pending) {
      setUploads((prev) =>
        prev.map((u) =>
          u.id === item.id
            ? { ...u, status: 'uploading', progress: 50, message: 'Processando...' }
            : u,
        ),
      )

      try {
        const formData = new FormData()
        formData.append('resumes', item.file)

        const res = await pb.send('/backend/v1/candidates/upload-resumes', {
          method: 'POST',
          body: formData,
        })

        const result = res.results?.[0]

        if (result && result.success) {
          setUploads((prev) =>
            prev.map((u) =>
              u.id === item.id ? { ...u, status: 'success', progress: 100, message: 'Sucesso' } : u,
            ),
          )
        } else {
          const errorMsg = result?.error || 'Não foi possível extrair o texto deste arquivo'
          setUploads((prev) =>
            prev.map((u) =>
              u.id === item.id ? { ...u, status: 'error', progress: 100, message: errorMsg } : u,
            ),
          )
        }
      } catch (err: any) {
        setUploads((prev) =>
          prev.map((u) =>
            u.id === item.id
              ? {
                  ...u,
                  status: 'error',
                  progress: 100,
                  message: 'Não foi possível extrair o texto deste arquivo',
                }
              : u,
          ),
        )
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const removeFile = (id: string) => {
    setUploads((prev) => prev.filter((u) => u.id !== id))
  }

  return (
    <div className="space-y-6">
      <div
        className={cn(
          'border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer',
          isDragging
            ? 'border-primary bg-primary/5 scale-[1.02]'
            : 'border-border hover:border-primary/50 hover:bg-muted/50',
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <UploadCloud className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-1">
          Arraste e solte os currículos aqui ou clique para selecionar
        </h3>
        <p className="text-sm text-muted-foreground">Suporta arquivos PDF, DOC e DOCX (máx. 5MB)</p>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files)
            e.target.value = ''
          }}
        />
      </div>

      {uploads.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium flex items-center gap-2">
            Fila de Processamento
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-semibold">
              {uploads.length}
            </span>
          </h4>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {uploads.map((upload) => (
              <div
                key={upload.id}
                className="bg-card border rounded-lg p-4 flex items-start gap-4 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <div className="bg-muted p-2 rounded shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-sm truncate pr-4">{upload.file.name}</p>
                    {upload.status === 'pending' && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 shrink-0"
                        onClick={() => removeFile(upload.id)}
                      >
                        <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                      </Button>
                    )}
                    {upload.status === 'uploading' && (
                      <Loader2 className="w-5 h-5 animate-spin text-muted-foreground shrink-0" />
                    )}
                    {upload.status === 'success' && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    )}
                    {upload.status === 'error' && (
                      <XCircle className="w-5 h-5 text-destructive shrink-0" />
                    )}
                  </div>

                  {upload.status === 'uploading' && (
                    <div className="mt-2 space-y-1">
                      <Progress value={upload.progress} className="h-1.5" />
                      <p className="text-xs text-muted-foreground font-medium">{upload.message}</p>
                    </div>
                  )}

                  {upload.status === 'success' && (
                    <p className="text-xs text-green-600 font-medium mt-1">{upload.message}</p>
                  )}

                  {upload.status === 'error' && (
                    <p className="text-xs text-destructive font-medium mt-1">{upload.message}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
