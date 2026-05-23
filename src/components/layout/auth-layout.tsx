import { Outlet, Link } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl leading-none">
              T
            </div>
            <span className="font-bold text-2xl tracking-tight text-primary">Telecuidar</span>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
