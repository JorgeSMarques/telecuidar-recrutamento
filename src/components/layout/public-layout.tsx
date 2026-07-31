import { Outlet, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  HeartPulse,
} from 'lucide-react'

export function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
              T
            </div>
            <span className="font-bold text-xl tracking-tight text-primary">Telecuidar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Área da Equipe</Link>
            </Button>
            <Button asChild size="sm" className="rounded-lg">
              <Link to="/candidatar">Candidatar-se</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button asChild variant="ghost" size="sm" className="justify-start">
                  <Link to="/login" onClick={() => setMobileOpen(false)}>
                    Área da Equipe
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  <Link to="/candidatar">Candidatar-se</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 animate-fade-in">
        <Outlet />
      </main>

      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
                  T
                </div>
                <span className="font-bold text-xl tracking-tight">Telecuidar</span>
              </div>
              <p className="text-sm text-background/70 mb-4">
                Conectando profissionais de saúde ao futuro da telemedicina e cuidado humano em todo
                o Brasil.
              </p>
              <div className="flex items-center gap-1 text-primary">
                <HeartPulse className="h-4 w-4" />
                <span className="text-xs font-medium text-background/70">
                  Cuidando de pessoas desde 2024
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/90">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#inicio" className="hover:text-primary transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-primary transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/90">
                Contato
              </h4>
              <ul className="space-y-3 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a
                    href="mailto:contato@telecuidar.com.br"
                    className="hover:text-primary transition-colors"
                  >
                    contato@telecuidar.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="tel:+551130000000" className="hover:text-primary transition-colors">
                    (11) 3000-0000
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Av. Paulista, 1000
                    <br />
                    São Paulo, SP
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/90">
                Redes Sociais
              </h4>
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <Button asChild size="sm" className="w-full rounded-lg">
                <Link to="/candidatar">Candidatar-se</Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-background/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © 2024 Telecuidar. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
