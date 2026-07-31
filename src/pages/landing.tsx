import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Stethoscope, HeartPulse, Video, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'

export default function Landing() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-fade-in-down">
              <HeartPulse className="h-4 w-4" />
              Plataforma de Recrutamento em Saúde
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Conectando profissionais de saúde ao{' '}
              <span className="text-primary">futuro da telemedicina</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up">
              Junte-se à Telecuidar e faça parte de uma rede de profissionais qualificados atuando
              em telemedicina e saúde pública em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 h-auto rounded-xl">
                <Link to="/candidatar">
                  Candidatar-se
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {isAuthenticated ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto rounded-xl"
                >
                  <Link to="/dashboard">Ir para o Dashboard</Link>
                </Button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto rounded-xl"
                >
                  <Link to="/login">Entrar</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="border shadow-subtle">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Telemedicina</h3>
              <p className="text-sm text-muted-foreground">
                Atue em atendimentos remotos com flexibilidade e tecnologia de ponta.
              </p>
            </CardContent>
          </Card>
          <Card className="border shadow-subtle">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Saúde Pública</h3>
              <p className="text-sm text-muted-foreground">
                Contribua para o SUS e impacte a vida de milhares de pacientes.
              </p>
            </CardContent>
          </Card>
          <Card className="border shadow-subtle">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Rede Profissional</h3>
              <p className="text-sm text-muted-foreground">
                Faça parte de uma comunidade de profissionais de saúde dedicados.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-primary/5 border-y">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Cadastre-se agora e dê o primeiro passo para novas oportunidades na saúde digital.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {['Processo simples e rápido', 'Sem taxas', 'Resposta em até 7 dias'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto rounded-xl">
            <Link to="/candidatar">
              Candidatar-se Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
