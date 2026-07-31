import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Stethoscope,
  HeartPulse,
  Video,
  Users,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  HandHeart,
  Building2,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'

const services = [
  {
    icon: Video,
    title: 'Telemedicina',
    description:
      'Atendimentos remotos com tecnologia de ponta, conectando profissionais e pacientes em todo o território nacional com segurança e agilidade.',
  },
  {
    icon: Stethoscope,
    title: 'Saúde Pública (SUS)',
    description:
      'Apoio ao sistema público de saúde, levando profissionais qualificados para unidades de atendimento e programas comunitários.',
  },
  {
    icon: HeartPulse,
    title: 'Atendimento Humanizado',
    description:
      'Cuidado centrado no paciente, com escuta ativa e abordagem empática em cada interação clínica.',
  },
  {
    icon: HandHeart,
    title: 'Acompanhamento Contínuo',
    description:
      'Monitoramento e seguimento de pacientes crônicos, garantindo qualidade de vida e adesão ao tratamento.',
  },
]

const differentials = [
  {
    icon: ShieldCheck,
    title: 'Segurança e Conformidade',
    description:
      'Atuação em conformidade com a LGPD e os padrões do Conselho Federal de Medicina para telemedicina.',
  },
  {
    icon: Award,
    title: 'Profissionais Certificados',
    description:
      'Equipe composta exclusivamente por profissionais registrados nos respectivos conselhos regionais.',
  },
  {
    icon: Clock,
    title: 'Disponibilidade Ampliada',
    description:
      'Atendimentos estendidos com escalas flexíveis, ampliando o acesso da população ao cuidado.',
  },
]

const stats = [
  { value: '10.000+', label: 'Atendimentos realizados' },
  { value: '500+', label: 'Profissionais cadastrados' },
  { value: '27', label: 'Estados atendidos' },
  { value: '98%', label: 'Satisfação dos pacientes' },
]

const steps = [
  {
    number: '01',
    title: 'Cadastre-se',
    description: 'Preencha o formulário de candidatura com seus dados profissionais e experiência.',
  },
  {
    number: '02',
    title: 'Avaliação',
    description:
      'Nossa equipe de RH avalia seu perfil, experiência e alinhamento com a cultura da Telecuidar.',
  },
  {
    number: '03',
    title: 'Entrevista',
    description:
      'Participe de uma entrevista online para conhecer melhor nossa proposta de trabalho.',
  },
  {
    number: '04',
    title: 'Integração',
    description:
      'Após a aprovação, você é integrado à nossa rede de profissionais de telemedicina.',
  },
]

const faqs = [
  {
    question: 'Preciso ter experiência prévia em telemedicina?',
    answer:
      'Não é obrigatório. Valorizamos profissionais com experiência clínica sólida. Oferecemos treinamento de integração para a plataforma de telemedicina.',
  },
  {
    question: 'Quais profissões podem se candidatar?',
    answer:
      'Aceitamos candidaturas de Médicos, Enfermeiros, Psicólogos, Nutricionistas e Fisioterapeutas. Outras profissões da área da saúde podem ser avaliadas caso a caso.',
  },
  {
    question: 'O trabalho é presencial ou remoto?',
    answer:
      'Temos oportunidades tanto em telemedicina (100% remoto) quanto em atuações no sistema público de saúde (presencial). Você pode indicar sua preferência ao se candidatar.',
  },
  {
    question: 'Qual o prazo de resposta após a candidatura?',
    answer:
      'Nossa equipe entra em contato em até 7 dias úteis após o recebimento da sua candidatura para dar continuidade ao processo seletivo.',
  },
]

export default function Landing() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background scroll-mt-16"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
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
              A Telecuidar une tecnologia e cuidado humano para levar atendimento de qualidade a
              pacientes em todo o Brasil. Junte-se a uma rede de profissionais qualificados atuando
              em telemedicina e saúde pública.
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
                  <Link to="/login">Área da Equipe</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="container mx-auto px-4 py-16 md:py-24 scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Sobre a Telecuidar
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Cuidar de pessoas é a nossa essência
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A Telecuidar é uma empresa de saúde digital dedicada a expandir o acesso a
              atendimentos de qualidade em todo o Brasil. Atuamos na interseção entre tecnologia e
              cuidado humano, conectando profissionais de saúde qualificados a pacientes que
              precisam de atendimento, seja por telemedicina ou em unidades de saúde pública.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa missão é reduzir as desigualdades no acesso à saúde, capacitando profissionais e
              levando cuidado onde ele é mais necessário. Trabalhamos em parceria com o SUS e com
              iniciativas privadas para construir um sistema de saúde mais justo e eficiente.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Tecnologia proprietária',
                'Foco no paciente',
                'Parceria com o SUS',
                'Equipe certificada',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-12">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="rounded-xl bg-background p-6 text-center shadow-subtle">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold">Empresa Brasileira</p>
                </div>
                <div className="rounded-xl bg-background p-6 text-center shadow-subtle">
                  <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold">Conformidade LGPD</p>
                </div>
                <div className="rounded-xl bg-background p-6 text-center shadow-subtle">
                  <HeartPulse className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold">Cuidado Humano</p>
                </div>
                <div className="rounded-xl bg-background p-6 text-center shadow-subtle">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold">Qualidade Certificada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="bg-primary/5 border-y scroll-mt-16">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Soluções em saúde para um Brasil melhor
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos uma gama de serviços que combinam tecnologia, expertise clínica e
              compromisso social.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border shadow-subtle hover:shadow-elevation transition-shadow duration-300"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Diferenciais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Por que escolher a Telecuidar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Compromisso com excelência, segurança e impacto social em cada atendimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((item) => (
            <Card key={item.title} className="border shadow-subtle">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="bg-primary/5 border-y scroll-mt-16">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Como Funciona
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Seu caminho para fazer parte da Telecuidar
            </h2>
            <p className="text-lg text-muted-foreground">
              Um processo simples e transparente, do cadastro à integração.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-border" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 shadow-subtle z-10">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Perguntas Frequentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Dúvidas comuns sobre a candidatura
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid gap-4">
          {faqs.map((faq) => (
            <Card key={faq.question} className="border shadow-subtle">
              <CardContent className="p-6">
                <h3 className="font-semibold text-base mb-2 text-primary">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="bg-primary/5 border-y scroll-mt-16">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                Fale Conosco
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Estamos aqui para ajudar
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tem dúvidas sobre o processo de candidatura ou quer saber mais sobre a Telecuidar?
                Entre em contato pelos nossos canais de atendimento.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">E-mail</p>
                    <a
                      href="mailto:contato@telecuidar.com.br"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      contato@telecuidar.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Telefone</p>
                    <a
                      href="tel:+551130000000"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      (11) 3000-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Endereço</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Paulista, 1000 — São Paulo, SP
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Horário de Atendimento</p>
                    <p className="text-sm text-muted-foreground">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Card className="border shadow-elevation">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Pronto para começar?</h3>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Cadastre-se agora e dê o primeiro passo para novas oportunidades na saúde
                    digital. O processo é simples, rápido e totalmente gratuito.
                  </p>
                  <div className="space-y-3 mb-8">
                    {[
                      'Processo simples e rápido',
                      'Sem taxas ou custos',
                      'Resposta em até 7 dias',
                      'Oportunidades em todo o Brasil',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="w-full text-lg py-6 h-auto rounded-xl">
                    <Link to="/candidatar">
                      Candidatar-se Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
