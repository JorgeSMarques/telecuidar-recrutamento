import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster as ShadcnToaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'

import { MainLayout } from '@/components/layout/main-layout'
import { AuthLayout } from '@/components/layout/auth-layout'
import { ErrorBoundary } from '@/components/error-boundary'
import { ProtectedRoute } from '@/components/protected-route'
import { AuthProvider } from '@/hooks/use-auth'
import NotFound from '@/pages/NotFound'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const Captacao = lazy(() => import('@/pages/captacao'))
const Candidatos = lazy(() => import('@/pages/candidatos'))
const Avaliacao = lazy(() => import('@/pages/avaliacao'))
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

const App = () => (
  <ErrorBoundary>
    <AuthProvider>
      <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
        <TooltipProvider>
          <ShadcnToaster />
          <Sonner />
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>

              <Route element={<MainLayout />}>
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/configuracoes" element={<Configuracoes />} />
                </Route>

                <Route
                  element={<ProtectedRoute allowedRoles={['Gerente RH', 'Diretor Técnico']} />}
                >
                  <Route path="/captacao" element={<Captacao />} />
                  <Route path="/candidatos" element={<Candidatos />} />
                  <Route path="/avaliacao" element={<Avaliacao />} />
                  <Route path="/agendamento" element={<Agendamento />} />
                  <Route path="/relatorios" element={<Relatorios />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </TooltipProvider>
      </BrowserRouter>
    </AuthProvider>
  </ErrorBoundary>
)

export default App
