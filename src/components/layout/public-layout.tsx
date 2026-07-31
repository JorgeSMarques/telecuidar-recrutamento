import { Outlet, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
              T
            </div>
            <span className="font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
              Telecuidar
            </span>
          </Link>
          <Button asChild variant="ghost">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 animate-fade-in">
        <Outlet />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t mt-auto">
        <p>© 2024 Telecuidar. Todos os direitos reservados.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">
            Privacidade
          </a>
          <a href="#" className="hover:underline">
            Termos de Uso
          </a>
        </div>
      </footer>
    </div>
  )
}
