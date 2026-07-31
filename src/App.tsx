import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster as ShadcnToaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'

import { MainLayout } from '@/components/layout/main-layout'
import { AuthLayout } from '@/components/layout/auth-layout'
import { PublicLayout } from '@/components/layout/public-layout'
import { ErrorBoundary } from '@/components/error-boundary'
import { ProtectedRoute } from '@/components/protected-route'
import { AuthProvider } from '@/hooks/use-auth'
import NotFound from '@/pages/NotFound'

const Landing = lazy(() => import('@/pages/landing'))
const Candidatar = lazy(() => import('@/pages/candidatar'))
const Dashboard = lazy(() => import('@/pages/dashboard'))
const Captacao = lazy(() => import('@/pages/captacao/index'))
const CaptacaoForm = lazy(() => import('@/pages/captacao/form'))
const Candidatos = lazy(() => import('@/pages/candidatos'))
const CandidatoDashboard = lazy(() => import('@/pages/candidatos/dashboard'))
const Avaliacao = lazy(() => import('@/pages/avaliacao'))
const Aprovacao = lazy(() => import('@/pages/aprovacao'))
const Agendamento = lazy(() => import('@/pages/agendamento'))
const Relatorios = lazy(() => import('@/pages/relatorios'))
const Configuracoes = lazy(() => import('@/pages/configuracoes'))
const Login = lazy(() => import('@/pages/login'))
const Signup = lazy(() => import('@/pages/signup'))

const Fallback = () => (
  <div className="space-y-4 p-4 w-full h-full flex flex-col">
    <Skeleton className="h-10 w-[200px]" />
    <Skeleton className="h-[400px] w-full" />
  </div>
)

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/candidatar', element: <Candidatar /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/configuracoes', element: <Configuracoes /> },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={['Candidato']} />,
        children: [{ path: '/candidatos/dashboard', element: <CandidatoDashboard /> }],
      },
      {
        element: <ProtectedRoute allowedRoles={['Gerente RH', 'Diretor Técnico']} />,
        children: [
          { path: '/captacao', element: <Captacao /> },
          { path: '/captacao/form', element: <CaptacaoForm /> },
          { path: '/candidatos', element: <Candidatos /> },
          { path: '/agendamento', element: <Agendamento /> },
          { path: '/relatorios', element: <Relatorios /> },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={['Gerente RH']} />,
        children: [{ path: '/avaliacao', element: <Avaliacao /> }],
      },
      {
        element: <ProtectedRoute allowedRoles={['Diretor Técnico']} />,
        children: [{ path: '/aprovacao', element: <Aprovacao /> }],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
])

const App = () => (
  <ErrorBoundary>
    <AuthProvider>
      <TooltipProvider>
        <ShadcnToaster />
        <Sonner />
        <Suspense fallback={<Fallback />}>
          <RouterProvider router={router} />
        </Suspense>
      </TooltipProvider>
    </AuthProvider>
  </ErrorBoundary>
)

export default App
