import { Link } from 'react-router-dom'
import { Moon, Sun, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useAuth } from '@/hooks/use-auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
  const { theme, setTheme } = useTheme()
  const { user, signOut, isAuthenticated } = useAuth()

  const getInitials = () => {
    if (!user?.name) return 'U'
    return user.name.substring(0, 2).toUpperCase()
  }

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden" />
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
              T
            </div>
            <span className="font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
              Telecuidar
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 transition-all" />
            ) : (
              <Moon className="h-5 w-5 transition-all" />
            )}
          </Button>

          {isAuthenticated && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 rounded-full p-0">
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-medium text-sm">
                    {getInitials()}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {user?.name && <p className="font-medium">{user.name}</p>}
                    {user?.email && (
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>
                <DropdownMenuItem
                  onClick={signOut}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  )
}
