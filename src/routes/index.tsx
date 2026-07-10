import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Sparkles,
  Flower2,
  HeartPulse,
  ShieldCheck,
  Award,
  Stethoscope,
  Lock,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Star,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import whatsappIcon from "@/assets/whatsapp-icon.png.asset.json";


export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_NUMBER = "5585000000000"; // placeholder — substituir
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={visible ? "animate-fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border shadow-[0_1px_10px_-6px_rgba(0,0,0,0.1)]">
      <div className="container-narrow flex items-center justify-between h-18 py-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl text-primary tracking-tight">Dra. Leila Lopes</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Ginecologia · Estética Íntima
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full px-5">
            <a href={waLink("Olá Dra. Leila, gostaria de agendar uma consulta.")} target="_blank" rel="noopener">
              Agendar Consulta
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container-narrow py-4 flex flex-col gap-4">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <Button asChild size="sm" className="rounded-full">
              <a href={waLink("Olá Dra. Leila, gostaria de agendar uma consulta.")} target="_blank" rel="noopener">
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-narrow grid md:grid-cols-2 gap-12 md:gap-16 items-center py-16 md:py-28">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary mb-6">
              <span className="h-px w-8 bg-primary" />
              CRM 6968 · RQE 3081
            </div>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-foreground">
              Cuidado feminino com{" "}
              <span className="text-primary italic">delicadeza</span> e experiência.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Há 25 anos acolhendo mulheres em cada fase da vida, com escuta atenta,
              ciência atualizada e um olhar dedicado à ginecologia e à estética íntima.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
                <a href={waLink("Olá Dra. Leila, gostaria de agendar uma consulta.")} target="_blank" rel="noopener">
                  <MessageCircle className="mr-2" size={18} />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#servicos">Conhecer serviços</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-serif text-2xl text-primary">25+</div>
                <div>anos de experiência</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-serif text-2xl text-primary">Fortaleza</div>
                <div>Ceará</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 border border-primary/30 rounded-[2rem] -rotate-2" />
            <div className="relative aspect-[4/5] w-full rounded-[1.75rem] bg-[var(--blush)] border border-primary/15 flex flex-col items-center justify-center text-primary/60 shadow-elegant">
              <ImageIcon size={40} strokeWidth={1.5} />
              <span className="mt-3 text-xs uppercase tracking-[0.25em]">Foto da Dra. Leila</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="container-narrow grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="aspect-square w-full rounded-2xl bg-[var(--blush)] border border-primary/15 flex flex-col items-center justify-center text-primary/60 shadow-soft">
            <ImageIcon size={40} strokeWidth={1.5} />
            <span className="mt-3 text-xs uppercase tracking-[0.25em]">Foto secundária</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              Sobre a Dra. Leila
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
              Uma trajetória construída com <em className="text-primary not-italic">escuta</em> e ciência.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Formada em Medicina com especialização em Ginecologia e Obstetrícia, a Dra. Leila
              Lopes acumula 25 anos de prática clínica em Fortaleza. Sua abordagem une o rigor
              técnico da medicina baseada em evidências ao cuidado humanizado, porque cada
              mulher merece ser ouvida por inteiro.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Com atualização constante em estética íntima, saúde hormonal e novas tecnologias,
              oferece um ambiente seguro, discreto e acolhedor.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: "CRM 6968" },
                { icon: ShieldCheck, label: "RQE 3081" },
                { icon: Stethoscope, label: "25 anos" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="border border-border rounded-xl p-4 text-center">
                  <Icon className="mx-auto text-primary" size={22} />
                  <div className="mt-2 text-sm font-medium text-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    icon: HeartPulse,
    title: "DIU e Implanon",
    desc: "Inserção e acompanhamento de métodos contraceptivos de longa duração, com técnica precisa e conforto no procedimento.",
  },
  {
    icon: Sparkles,
    title: "Laser e Ninfoplastia",
    desc: "Estética íntima com tecnologia de laser e procedimentos cirúrgicos delicados para bem-estar, saúde e autoestima.",
  },
  {
    icon: Flower2,
    title: "Menopausa",
    desc: "Cuidado individualizado nesta fase de transição, com reposição hormonal moderna, orientação e escuta ativa.",
  },
];

function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[var(--blush)]">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Serviços</div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Cuidados especializados em cada etapa
            </h2>
            <p className="mt-4 text-muted-foreground">
              Um portfólio focado em ginecologia moderna e estética íntima, pensado para
              atender a mulher de forma completa.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Card className="h-full border border-primary/15 bg-white hover:border-primary transition-all hover:shadow-elegant rounded-2xl group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon size={26} />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mt-6">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const differentials = [
  { icon: HeartPulse, title: "Atendimento humanizado", desc: "Escuta atenta e tempo dedicado a cada paciente." },
  { icon: Award, title: "25 anos de experiência", desc: "Trajetória sólida em ginecologia e estética íntima." },
  { icon: Sparkles, title: "Tecnologia atualizada", desc: "Procedimentos com equipamentos modernos e seguros." },
  { icon: Lock, title: "Sigilo e discrição", desc: "Ambiente seguro, privado e absolutamente confidencial." },
];

function Differentials() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Diferenciais</div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Um cuidado que vai além da consulta
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="border-t border-primary pt-6">
                <d.icon className="text-primary" size={28} />
                <h3 className="font-serif text-xl text-foreground mt-4">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Ana Paula",
    text: "Fui recebida com carinho e respeito. A Dra. Leila explica tudo com calma, me senti muito segura durante todo o tratamento.",
  },
  {
    name: "Camila R.",
    text: "Atendimento excepcional. Depois de anos procurando uma ginecologista de confiança, encontrei a profissional perfeita.",
  },
  {
    name: "Marina S.",
    text: "Consultório impecável e uma médica que realmente escuta. Recomendo de olhos fechados para qualquer mulher.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[var(--blush)]">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Depoimentos</div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              O que dizem as pacientes
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <Card className="h-full bg-white border-none rounded-2xl shadow-soft">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-foreground/85 leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-serif text-lg text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Paciente</div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container-narrow grid md:grid-cols-2 gap-14 items-start">
        <Reveal>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mb-4">
              Localização e Contato
            </div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Venha nos visitar em Fortaleza
            </h2>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed max-w-md">
              Nosso consultório é um espaço pensado para o seu conforto. Agende sua consulta
              pelo WhatsApp. Respondemos com brevidade.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0" size={20} />
                <div>
                  <div className="font-medium">Endereço</div>
                  <div className="text-primary-foreground/80 text-sm">
                    Av. Santos Dumont, 0000 · Aldeota · Fortaleza, CE
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 shrink-0" size={20} />
                <div>
                  <div className="font-medium">Horário</div>
                  <div className="text-primary-foreground/80 text-sm">
                    Seg a Sex · 08h às 18h
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0" size={20} />
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <a
                    href={waLink("Olá Dra. Leila, gostaria de mais informações.")}
                    target="_blank"
                    rel="noopener"
                    className="text-primary-foreground/80 text-sm hover:text-white underline underline-offset-4"
                  >
                    Enviar mensagem
                  </a>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-8 rounded-full px-8 h-12 bg-white text-primary hover:bg-white/90">
              <a href={waLink("Olá Dra. Leila, gostaria de agendar uma consulta.")} target="_blank" rel="noopener">
                <MessageCircle className="mr-2" size={18} />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-elegant">
            <iframe
              title="Localização do consultório"
              src="https://www.google.com/maps?q=Aldeota,Fortaleza,CE&output=embed"
              className="w-full h-[420px] md:h-[520px] grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.06_15)] text-white/90 py-14">
      <div className="container-narrow grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl">Dra. Leila Lopes</div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/60 mt-1">
            Ginecologia · Estética Íntima
          </div>
          <p className="text-sm text-white/70 mt-4 max-w-xs leading-relaxed">
            Cuidado feminino humanizado em Fortaleza.
          </p>
        </div>
        <div>
          <div className="text-sm font-medium">Credenciais</div>
          <ul className="mt-3 space-y-1 text-sm text-white/70">
            <li>CRM 6968</li>
            <li>RQE 3081</li>
            <li>25 anos de experiência</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Contato</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail size={14} /> contato@draleilalopes.com.br</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Fortaleza, CE</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="container-narrow mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
        <div>© {new Date().getFullYear()} Dra. Leila Lopes. Todos os direitos reservados.</div>
        <div>Fortaleza · Ceará</div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Olá Dra. Leila, gostaria de agendar uma consulta.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-elegant hover:scale-105 transition-transform"
    >
      <img
        src={whatsappIcon.url}
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-full h-full object-contain drop-shadow-md"
      />
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
