import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function UnsavedChangesModal({
  blocker,
  onDiscard,
}: {
  blocker: any
  onDiscard: () => void
}) {
  if (blocker.state !== 'blocked') return null

  return (
    <Dialog
      open={true}
      onOpenChange={(open) => {
        if (!open) blocker.reset()
      }}
    >
      <DialogContent className="sm:max-w-md animate-fade-in duration-300">
        <DialogHeader>
          <DialogTitle>Rascunho não salvo</DialogTitle>
          <DialogDescription>
            Você tem alterações não salvas. Deseja descartar ou continuar editando?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button variant="outline" onClick={() => blocker.reset()}>
            Continuar Editando
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onDiscard()
              blocker.proceed()
            }}
          >
            Descartar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
