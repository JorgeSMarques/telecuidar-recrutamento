import { Navigate, useLocation, Outlet, Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Role } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

interface ProtectedRouteProps {
  allowedRoles?: Role[]
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex-1 p-8 flex flex-col space-y-4 h-full">
        <Skeleton className="h-10 w-[200px]" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Acesso Negado</h2>
        <p className="text-muted-foreground max-w-[500px]">
          Você não tem as permissões necessárias para visualizar esta página. Se acredita que isso
          seja um erro, contate o administrador do sistema.
        </p>
        <Button asChild>
          <Link to="/">Voltar para o Dashboard</Link>
        </Button>
      </div>
    )
  }

  return <Outlet />
}
