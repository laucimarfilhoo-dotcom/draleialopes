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
  Plus,
  Zap,
  Camera,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
const whatsappIcon = { url: "/images/whatsapp-icon.png" };
const draLeilaHero = { url: "/images/dra-leila-hero.webp" };
const draLeilaAbout = { url: "/images/dra-leila-about.webp" };
const logoLeila = { url: "/images/logo-leila-menu.png" };


export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          q: "A colocação do DIU dói?",
          a: "A maioria das mulheres relata apenas um leve desconforto, semelhante a uma cólica menstrual, e o procedimento é rápido. Para quem prefere, a colocação também pode ser feita com sedação anestésica, sem dor.",
        },
        {
          q: "Quanto tempo dura o DIU?",
          a: "Depende do modelo. O DIU de cobre pode durar até 10 anos e o hormonal costuma durar de 5 a 8 anos.",
        },
        {
          q: "Quanto tempo dura o Implanon?",
          a: "O Implanon (implante hormonal subcutâneo) tem duração de cerca de 3 anos.",
        },
        {
          q: "Ninfoplastia é só estética ou também tem função de saúde?",
          a: "Além do resultado estético, a ninfoplastia pode aliviar desconforto em atividades físicas, na intimidade e no uso de determinadas roupas.",
        },
        {
          q: "Para que serve o laser íntimo?",
          a: "O laser íntimo é indicado para tratar flacidez, ressecamento, perda de tônus e promover o rejuvenescimento da regi íntima, de forma não cirúrgica.",
        },
        {
          q: "A radiofrequência íntima é invasiva?",
          a: "Não. A radiofrequência íntima é um procedimento não invasivo que estimula o colágeno e melhora o tônus e a lubrificação da região.",
        },
        {
          q: "Como sei se estou entrando na menopausa?",
          a: "Alterações no ciclo, ondas de calor, insônia e ressecamento vaginal são sinais comuns. Exames laboratoriais ajudam a confirmar.",
        },
        {
          q: "A reposição hormonal é segura?",
          a: "Quando bem indicada e acompanhada, a reposição hormonal moderna é segura e traz benefícios para qualidade de vida.",
        },
      ].map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
    return {
      links: [{ rel: "canonical", href: "/" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
});


const WHATSAPP_NUMBER = "5585996424910";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

type FaqItem = { q: string; a: string };
const faqGroups: { id: string; label: string; items: FaqItem[] }[] = [
  {
    id: "diu",
    label: "DIU",
    items: [
      {
        q: "A colocação do DIU dói?",
        a: "A maioria das mulheres relata apenas um leve desconforto, semelhante a uma cólica menstrual, e o procedimento é rápido. Para quem prefere maior conforto, a colocação do DIU também pode ser feita com sedação anestésica, sem dor. Converse com a Dra. Leila na consulta para uma avaliação individualizada.",
      },
      {
        q: "Quanto tempo dura o DIU?",
        a: "Depende do modelo. O DIU de cobre pode durar até 10 anos e o DIU hormonal costuma durar de 5 a 8 anos.",
      },
      {
        q: "O DIU engorda ou causa outros efeitos colaterais?",
        a: "O DIU de cobre não é hormonal e não engorda. Os modelos hormonais podem provocar mudanças leves no ciclo, como redução ou ausência de menstruação, e raramente alteração de peso. Cada organismo responde de um jeito.",
      },
      {
        q: "Quem não pode usar DIU?",
        a: "Existem contraindicações específicas, como algumas infecções em atividade, malformações uterinas ou sangramentos sem causa esclarecida. A indicação sempre depende de uma avaliação clínica. Converse com a Dra. Leila para saber se é o método ideal para você.",
      },
      {
        q: "Depois de retirar o DIU, quanto tempo leva para engravidar?",
        a: "A fertilidade costuma retornar rapidamente, muitas vezes já no primeiro ciclo após a retirada. Não há efeito prolongado sobre a capacidade de engravidar.",
      },
    ],
  },
  {
    id: "implanon",
    label: "Implanon",
    items: [
      {
        q: "O que é o Implanon?",
        a: "O Implanon é um implante hormonal subcutâneo, fino e flexível, que libera progesterona de forma gradual. É um método contraceptivo de longa duração e reversível.",
      },
      {
        q: "Quanto tempo dura o Implanon?",
        a: "O Implanon tem duração de cerca de 3 anos. Após esse período, deve ser trocado ou retirado conforme orientação médica.",
      },
      {
        q: "A colocação do Implanon dói?",
        a: "O procedimento é rápido e geralmente bem tolerado. Aplica-se anestesia local no braço antes da inserção, minimizando qualquer desconforto.",
      },
      {
        q: "O Implanon engorda?",
        a: "Algumas mulheres podem notar leve alteração de peso, mas isso varia bastante de pessoa para pessoa. A Dra. Leila orienta sobre os possíveis efeitos e acompanha cada paciente de forma individualizada.",
      },
      {
        q: "Depois de retirar o Implanon, quanto tempo leva para engravidar?",
        a: "A fertilidade geralmente retorna logo após a retirada do implante, muitas vezes já no primeiro ciclo seguinte.",
      },
    ],
  },
  {
    id: "ninfoplastia",
    label: "Ninfoplastia",
    items: [
      {
        q: "Ninfoplastia é só estética ou também tem função de saúde?",
        a: "Além do resultado estético, a ninfoplastia pode aliviar desconforto em atividades físicas, na intimidade e no uso de determinadas roupas. Muitas pacientes procuram por motivos funcionais.",
      },
      {
        q: "O procedimento afeta a sensibilidade?",
        a: "Quando realizada com técnica adequada, a ninfoplastia preserva a sensibilidade da região. O objetivo é sempre unir estética e função, mantendo o bem-estar da paciente.",
      },
      {
        q: "Como é a recuperação e em quanto tempo volto às atividades normais?",
        a: "Atividades leves geralmente retornam em poucos dias, exercícios físicos e relações íntimas costumam ser liberados após cerca de 30 dias. O tempo exato varia de paciente para paciente. Converse com a Dra. Leila para orientações individualizadas.",
      },
      {
        q: "As cicatrizes ficam visíveis?",
        a: "As suturas são finas e feitas em locais estratégicos, ficando bastante discretas com o tempo. O cuidado no pós-operatório é fundamental para o melhor resultado.",
      },
      {
        q: "Quem pode fazer ninfoplastia?",
        a: "A ninfoplastia é indicada para mulheres que sentem desconforto físico, insatisfação estética ou dificuldades na intimidade relacionadas ao tamanho ou formato dos pequenos lábios. A avaliação médica define a melhor abordagem para cada caso.",
      },
    ],
  },
  {
    id: "laser",
    label: "Laser e Radiofrequência",
    items: [
      {
        q: "Para que serve o laser íntimo?",
        a: "O laser íntimo é um procedimento não cirúrgico indicado para tratar flacidez, ressecamento, perda de tônus e promover o rejuvenescimento da região íntima. As sessões são rápidas e a recuperação é praticamente imediata.",
      },
      {
        q: "O laser íntimo é seguro?",
        a: "Sim, quando realizado por profissional qualificado e com equipamento adequado, o laser íntimo é seguro. A Dra. Leila avalia cada paciente para indicar a melra tecnologia e o número de sessões ideais.",
      },
      {
        q: "Quantas sessões de laser são necessárias?",
        a: "O número de sessões varia conforme o objetivo e a resposta de cada organismo. Em geral, são recomendadas de 3 a 5 sessões, com intervalos definidos na consulta.",
      },
      {
        q: "A radiofrequência íntima é invasiva?",
        a: "Não. A radiofrequência íntima é um procedimento não invasivo que utiliza calor controlado para estimular o colágeno, melhorando o tônus, a lubrificação e a aparência da região sem cortes.",
      },
      {
        q: "Qual a diferença entre laser e radiofrequência íntima?",
        a: "Ambos são procedimentos não cirúrgicos, mas atuam de formas complementares. O laser costuma focar mais no rejuvenescimento superficial e na hidratação, enquanto a radiofrequência trabalha o tônus e a firmeza em camadas mais profundas. A combinação pode potencializar os resultados.",
      },
    ],
  },
  {
    id: "menopausa",
    label: "Menopausa",
    items: [
      {
        q: "Como sei se estou entrando na menopausa?",
        a: "Alterações no ciclo menstrual, ondas de calor, insônia, mudanças de humor e ressecamento vaginal costumam ser os primeiros sinais. Exames laboratoriais ajudam a confirmar. Converse com a Dra. Leila para uma avaliação completa.",
      },
      {
        q: "A reposição hormonal é segura?",
        a: "Quando bem indicada e acompanhada, a reposição hormonal moderna é segura e traz muitos benefícios para qualidade de vida, ossos e sono. A indicação é sempre individualizada, considerando histórico e exames de cada paciente.",
      },
      {
        q: "Quais sintomas da menopausa merecem atenção médica?",
        a: "Ondas de calor intensas, insônia persistente, alterações de humor, dor nas relações, ressecamento vaginal e sangramentos fora do padrão devem ser avaliados sem demora.",
      },
      {
        q: "A menopausa afeta a libido e isso tem tratamento?",
        a: "Sim, alterações hormonais e emocionais podem impactar a libido. Existem tratamentos eficazes, hormonais e não hormonais, além de cuidados com bem-estar geral. Converse com a Dra. Leila para uma abordagem personalizada.",
      },
      {
        q: "Com que frequência devo consultar o ginecologista durante a menopausa?",
        a: "Recomenda-se acompanhamento anual, ou em intervalos menores quando houver sintomas ativos ou tratamentos em curso. O acompanhamento próximo faz toda a diferença nessa fase.",
      },
    ],
  },
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
    <header className="sticky top-0 z-40 bg-primary/95 backdrop-blur border-b border-primary-hover/40 shadow-[0_1px_10px_-6px_rgba(0,0,0,0.3)]">
      <div className="container-narrow flex items-center justify-between h-24 py-3">
        <a href="#top" className="flex items-center" aria-label="Dra. Leila Lopes - Ginecologia">
          <img
            src={logoLeila.url}
            alt="Dra. Leila Lopes - Ginecologia"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
          <Button asChild size="sm" variant="secondary" className="rounded-full px-5 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <a href={waLink("Olá Dra. Leila, gostaria de agendar uma consulta.")} target="_blank" rel="noopener">
              Agendar Consulta
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-primary-hover/40 bg-primary">
          <div className="container-narrow py-4 flex flex-col gap-4">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-primary-foreground/85 hover:text-primary-foreground"
              >
                {n.label}
              </a>
            ))}
            <Button asChild size="sm" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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
    <section id="top" className="overflow-hidden h-auto min-h-0">
      <div className="container-narrow grid md:grid-cols-2 gap-12 md:gap-16 items-center pt-16 md:pt-28 pb-6 md:pb-16 min-h-0">
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
            <div className="relative mt-8 md:hidden">
              <div className="absolute -inset-3 border border-primary/30 rounded-[2rem] -rotate-2" />
              <div className="relative aspect-[4/5] w-full rounded-[1.75rem] overflow-hidden bg-[var(--blush)] border border-primary/15 shadow-elegant">
                <img
                  src={draLeilaHero.url}
                  alt="Dra. Leila Lopes"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
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
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 md:-inset-6 border border-primary/30 rounded-[2rem] -rotate-2" />
            <div className="relative aspect-[4/5] w-full rounded-[1.75rem] overflow-hidden bg-[var(--blush)] border border-primary/15 shadow-elegant">
              <img
                src={draLeilaHero.url}
                alt="Dra. Leila Lopes"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="pt-6 md:pt-16 pb-20 md:pb-28 bg-white">
      <div className="container-narrow grid md:grid-cols-2 gap-16 items-center">
        <div className="hidden md:block">
          <Reveal>
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[var(--blush)] border border-primary/15 shadow-soft">
              <img
                src={draLeilaAbout.url}
                alt="Dra. Leila Lopes"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              Sobre a Dra. Leila
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
              Uma trajetória construída com <em className="text-primary not-italic">escuta</em> e ciência.
            </h2>
            <div className="mt-8 md:hidden aspect-square w-full rounded-2xl overflow-hidden bg-[var(--blush)] border border-primary/15 shadow-soft">
              <img
                src={draLeilaAbout.url}
                alt="Dra. Leila Lopes"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
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
    icon: Stethoscope,
    title: "Ginecologia Geral",
    desc: "Acompanhamento ginecológico completo, com consultas de rotina, prevenção e cuidado com a saúde da mulher em todas as fases da vida.",
  },
  {
    icon: Zap,
    title: "Laser e Radiofrequência",
    desc: "Tratamentos não invasivos para saúde e bem-estar íntimo, indicados para rejuvenescimento vaginal, ressecamento e outras queixas comuns.",
  },
  {
    icon: Sparkles,
    title: "Ninfoplastia",
    desc: "Procedimento cirúrgico para correção estética e funcional dos pequenos lábios, realizado com técnica cuidadosa e foco na recuperação tranquila.",
  },
  {
    icon: ShieldCheck,
    title: "DIU e Implanon",
    desc: "Colocação e acompanhamento de métodos contraceptivos de longa duração, com orientação individualizada sobre a melhor opção para cada paciente.",
  },
  {
    icon: Flower2,
    title: "Estética Íntima",
    desc: "Cuidados estéticos voltados para a saúde e autoestima da região íntima, com procedimentos seguros e atendimento acolhedor.",
  },
  {
    icon: Camera,
    title: "Videohisteroscopia",
    desc: "Exame que permite visualizar o interior do útero através de uma câmera, indicado para investigar sangramentos, pólipos e outras alterações uterinas.",
  },
];

function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[oklch(0.94_0.02_75)]">
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
            <Reveal key={d.title} delay={i * 120}>
              <div className="group relative border-t border-primary pt-6 transition-all duration-500 hover:border-t-[3px] hover:-translate-y-2 cursor-default">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-elegant">
                  <d.icon size={24} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-serif text-xl text-foreground mt-4 transition-colors duration-300 group-hover:text-primary">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <div className="mt-4 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
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
    <section className="py-20 md:py-28 bg-[var(--beige)]">
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

function FaqTrigger({ children }: { children: React.ReactNode }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-5 text-left font-serif text-lg md:text-xl text-foreground transition-colors hover:text-primary cursor-pointer",
        )}
      >
        {children}
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground group-data-[state=open]:border-primary">
          <Plus
            size={18}
            className="transition-transform duration-300 group-data-[state=open]:rotate-45"
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Dúvidas</div>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">
              Tire suas dúvidas
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reunimos as perguntas mais frequentes sobre nossos principais serviços. Se ficar
              qualquer dúvida, fale conosco pelo WhatsApp.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 max-w-3xl mx-auto">
            <Tabs defaultValue={faqGroups[0].id} className="w-full">
              <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent p-0 mb-8">
                {faqGroups.map((g) => (
                  <TabsTrigger
                    key={g.id}
                    value={g.id}
                    className="rounded-full px-5 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-primary/20 data-[state=active]:border-primary transition-all"
                  >
                    {g.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqGroups.map((g) => (
                <TabsContent key={g.id} value={g.id} className="mt-0">
                  <Accordion type="single" collapsible className="w-full">
                    {g.items.map((item, i) => (
                      <AccordionItem
                        key={item.q}
                        value={`${g.id}-${i}`}
                        className="border-b border-primary/15 last:border-b-0"
                      >
                        <FaqTrigger>{item.q}</FaqTrigger>
                        <AccordionContent className="pb-6 pr-14 text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 text-center max-w-xl mx-auto rounded-2xl bg-[var(--beige)] border border-primary/15 p-8">
            <h3 className="font-serif text-2xl text-primary">Ainda tem dúvidas?</h3>
            <p className="mt-2 text-muted-foreground">
              Fale diretamente com a nossa equipe pelo WhatsApp. Teremos prazer em ajudar você.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-full px-8 h-12">
              <a
                href={waLink("Olá Dra. Leila, gostaria de tirar algumas dúvidas.")}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle className="mr-2" size={18} />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
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
                    Rua Chico Lemos, 566 · Cidade dos Funcionários · Fortaleza, CE
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
              src="https://www.google.com/maps?q=Rua+Chico+Lemos+566+Cidade+dos+Funcionarios+Fortaleza+CE&output=embed"
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
            <li className="flex items-center gap-2"><MapPin size={14} /> Rua Chico Lemos, 566 · Cidade dos Funcionários · Fortaleza, CE</li>
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
        <Faq />
        <Contact />

      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
