import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  UserPlus,
  ClipboardCheck,
  CalendarDays,
  BarChart3,
  Settings,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
import { Role } from '@/types'

const items: Array<{ title: string; url: string; icon: any; roles: Role[] }> = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard,
    roles: ['Candidato', 'Gerente RH', 'Diretor Técnico'],
  },
  { title: 'Captação', url: '/captacao', icon: UserPlus, roles: ['Gerente RH', 'Diretor Técnico'] },
  {
    title: 'Candidatos',
    url: '/candidatos',
    icon: Users,
    roles: ['Gerente RH', 'Diretor Técnico'],
  },
  {
    title: 'Avaliação',
    url: '/avaliacao',
    icon: ClipboardCheck,
    roles: ['Gerente RH', 'Diretor Técnico'],
  },
  {
    title: 'Agendamento',
    url: '/agendamento',
    icon: CalendarDays,
    roles: ['Gerente RH', 'Diretor Técnico'],
  },
  {
    title: 'Relatórios',
    url: '/relatorios',
    icon: BarChart3,
    roles: ['Gerente RH', 'Diretor Técnico'],
  },
  {
    title: 'Configurações',
    url: '/configuracoes',
    icon: Settings,
    roles: ['Candidato', 'Gerente RH', 'Diretor Técnico'],
  },
]

export function AppSidebar() {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) return null

  const filteredItems = items.filter((item) => item.roles.includes(user.role))

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link
                        to={item.url}
                        className={cn(isActive && 'text-primary hover:text-primary')}
                      >
                        <item.icon className={cn('w-5 h-5', isActive && 'text-primary')} />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
