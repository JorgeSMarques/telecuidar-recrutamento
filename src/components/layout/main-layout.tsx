import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from './app-sidebar'
import { Header } from './header'

export function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-h-screen bg-muted/20">
        <Header />
        <main className="flex-1 w-full max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in flex flex-col">
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
      </SidebarInset>
    </SidebarProvider>
  )
}
