import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, MessageSquare, BarChart3, Rocket, Globe2, Layers, CalendarClock, Phone, Mail, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-primefit.jpg";
import mockupImg from "@/assets/mockup-solution.jpg";
import compareImg from "@/assets/before-after.jpg";

const Index = () => {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = auraRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      el.style.setProperty("--mx", `${x}%`);
    };
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      el.addEventListener("mousemove", onMove);
    }
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "True Rise Company",
    url: "https://example.com",
    logo: "/lovable-uploads/832bebe1-2540-4c41-8455-047c311b0a44.png",
    sameAs: ["https://instagram.com", "https://facebook.com"],
    department: {
      "@type": "Organization",
      name: "Projeto Primefit",
      description:
        "Automação + IA para vendas, marketing e relatórios em tempo real: chatbot de vendas, social studio 1-clique e insights diários.",
    },
  };

  return (
    <div ref={auraRef} className="min-h-screen text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/832bebe1-2540-4c41-8455-047c311b0a44.png"
              alt="Logo Primefit – suplementos"
              className="h-8 w-auto"
              loading="eager"
            />
            <span className="text-sm text-muted-foreground">powered by</span>
            <span className="text-base font-semibold">True Rise Company</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#problema" className="hover:text-foreground transition-colors">Problema</a>
            <a href="#solucao" className="hover:text-foreground transition-colors">Solução</a>
            <a href="#caso" className="hover:text-foreground transition-colors">Caso Primefit</a>
            <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="brand">
              <a href="#cta" aria-label="Falar com True Rise">Quero aplicar na minha empresa</a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                TRUE RISE COMPANY
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-prose">
                Automação + Inteligência Artificial para Vendas e Marketing. Transformando a Primefit em um caso de sucesso replicável para empresas de todos os setores.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" className="px-6 py-6 text-base">
                  Começar agora <ArrowRight className="ml-1" />
                </Button>
                <Button asChild variant="outline" className="px-6 py-6 text-base">
                  <a href="#solucao">Ver como funciona</a>
                </Button>
              </div>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent" /> Chatbot de Vendas no WhatsApp</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent" /> Social Studio 1‑Clique</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent" /> Relatórios diários no WhatsApp</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent" /> Console de Automação</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Pessoa usando WhatsApp com chatbot de vendas, elementos de IA e dashboards"
                className="w-full h-auto rounded-lg border border-border shadow-[var(--shadow-elev)]"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="container mx-auto py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <article>
              <h2 className="text-3xl md:text-4xl font-semibold">O Problema</h2>
              <p className="mt-4 text-muted-foreground">
                Empresas perdem vendas e tempo com tarefas manuais por falta de tecnologia acessível para automatizar atendimento, marketing e análise.
              </p>
              <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                <li className="flex gap-3"><MessageSquare className="text-accent" /> Clientes esperam respostas imediatas (WhatsApp, redes sociais) — e muitas empresas não acompanham.</li>
                <li className="flex gap-3"><CalendarClock className="text-accent" /> Campanhas demoram dias para serem criadas e aprovadas.</li>
                <li className="flex gap-3"><Layers className="text-accent" /> Falta integração entre atendimento, vendas e marketing.</li>
                <li className="flex gap-3"><BarChart3 className="text-accent" /> Falta de relatórios rápidos para decisões estratégicas.</li>
              </ul>
            </article>
            <div>
              <img src={compareImg} alt="Antes e depois: processos manuais vs automação por IA" className="w-full h-auto rounded-lg border border-border" loading="lazy" />
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section id="solucao" className="border-y border-border bg-secondary/30">
          <div className="container mx-auto py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <img src={mockupImg} alt="Mockup do WhatsApp com chatbot e dashboard em tempo real" className="w-full h-auto rounded-lg border border-border" loading="lazy" />
            </div>
            <article>
              <h2 className="text-3xl md:text-4xl font-semibold">Nossa Solução</h2>
              <p className="mt-4 text-muted-foreground">
                Plataforma inteligente que combina chatbot de vendas, automação de marketing e relatórios em tempo real, operada por IA e invisível para o usuário final.
              </p>
              <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                <li className="flex gap-3"><MessageSquare className="text-accent" /> Cliente interage pelo WhatsApp e redes sociais, naturalmente.</li>
                <li className="flex gap-3"><Zap className="text-accent" /> Sistema cria, agenda e publica conteúdos em 1 clique.</li>
                <li className="flex gap-3"><BarChart3 className="text-accent" /> Relatórios diários enviam ações prontas para aumentar vendas.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-accent" /> Empresa não precisa conhecer tecnologia — apenas usar.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* CASO PRIMEFIT */}
        <section id="caso" className="container mx-auto py-16 md:py-24">
          <header className="flex items-center gap-4">
            <img src="/lovable-uploads/832bebe1-2540-4c41-8455-047c311b0a44.png" alt="Logo Primefit" className="h-8 w-auto" />
            <h2 className="text-3xl md:text-4xl font-semibold">O Caso Primefit</h2>
          </header>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Primefit: loja de suplementos referência no seu mercado. Primeiro case da True Rise para mostrar resultados reais e replicar a solução.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
            {[
              "Chatbot de Vendas no WhatsApp",
              "Social Studio 1‑Clique (Instagram e Facebook)",
              "Campanha Relâmpago",
              "Reativação Automática de Clientes e Carrinhos",
              "Relatório Diário no WhatsApp",
              "Console de Automação (interno True Rise)",
              "Sandbox de Postagem",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card p-4 flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="border-y border-border">
          <div className="container mx-auto py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-semibold">Como Funciona</h2>
            <div className="mt-8 grid md:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, title: "Responde em segundos", desc: "Recebe mensagens no WhatsApp e o chatbot atende instantaneamente." },
                { icon: Layers, title: "Cria em 1 clique", desc: "Campanhas e posts gerados e agendados em minutos." },
                { icon: Globe2, title: "Publica e acompanha", desc: "Integração com redes sociais e métricas de engajamento." },
                { icon: BarChart3, title: "Relatórios diários", desc: "Ações recomendadas no WhatsApp para vender mais." },
              ].map((s, i) => (
                <article key={i} className="rounded-xl border border-border bg-card p-6 h-full shadow-[var(--shadow-elev)]">
                  <s.icon className="text-accent" />
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="container mx-auto py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold">Diferenciais True Rise</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-base text-muted-foreground">
            <div className="rounded-lg border border-border p-6 bg-secondary/20"><strong className="text-foreground">Tecnologia invisível</strong> – tudo acontece nos bastidores, sem exigir conhecimento técnico.</div>
            <div className="rounded-lg border border-border p-6 bg-secondary/20"><strong className="text-foreground">Velocidade</strong> – de ideia à publicação em minutos.</div>
            <div className="rounded-lg border border-border p-6 bg-secondary/20"><strong className="text-foreground">Escalabilidade</strong> – pronto para qualquer tipo de negócio.</div>
            <div className="rounded-lg border border-border p-6 bg-secondary/20"><strong className="text-foreground">Economia</strong> – reduz custos e aumenta margem.</div>
            <div className="rounded-lg border border-border p-6 bg-secondary/20"><strong className="text-foreground">Foco no resultado</strong> – ferramentas criadas para gerar faturamento real.</div>
          </div>
        </section>

        {/* MERCADO */}
        <section id="mercado" className="border-y border-border bg-secondary/30">
          <div className="container mx-auto py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-semibold">Potencial de Mercado</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6"><p className="text-4xl font-bold">US$ 30 bi</p><p className="text-sm text-muted-foreground mt-2">Automação empresarial até 2030.</p></div>
              <div className="rounded-xl border border-border bg-card p-6"><p className="text-4xl font-bold">+25% a.a.</p><p className="text-sm text-muted-foreground mt-2">Crescimento de IA em marketing e vendas.</p></div>
              <div className="rounded-xl border border-border bg-card p-6"><p className="text-4xl font-bold">90%+</p><p className="text-sm text-muted-foreground mt-2">PMEs no Brasil: enorme espaço para crescer.</p></div>
            </div>
          </div>
        </section>

        {/* MODELO DE RECEITA */}
        <section id="modelo" className="container mx-auto py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold">Modelo de Receita</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: "Básico", points: ["Setup inicial", "Chatbot + relatórios", "Suporte padrão"] },
              { name: "Pro", points: ["Tudo do Básico", "Social Studio 1‑Clique", "Campanhas relâmpago"] },
              { name: "Premium", points: ["Tudo do Pro", "Integrações avançadas", "Consultoria de performance"] },
            ].map((plan) => (
              <article key={plan.name} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {plan.points.map((p) => (
                    <li key={p} className="flex gap-2"><CheckCircle2 className="text-accent" /> {p}</li>
                  ))}
                </ul>
                <Button variant="brand" className="mt-6 w-full">Quero este plano</Button>
              </article>
            ))}
          </div>
        </section>

        {/* PROJEÇÕES */}
        <section id="projecoes" className="border-y border-border bg-secondary/30">
          <div className="container mx-auto py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-semibold">Projeções com a Primefit</h2>
            <div className="mt-8 grid md:grid-cols-4 gap-6">
              <div className="rounded-xl border border-border bg-card p-6"><p className="text-4xl font-bold">+30%</p><p className="text-sm text-muted-foreground mt-2">em vendas online (3 meses)</p></div>
              <div className="rounded-xl border border-border bg-card p-6"><p className="text-4xl font-bold">+40%</p><p className="text-sm text-muted-foreground mt-2">de engajamento nas redes</p></div>
              <div className="rounded-xl border border-border bg-card p-6"><p className="text-4xl font-bold">-50%</p><p className="text-sm text-muted-foreground mt-2">de tempo operacional</p></div>
              <div className="rounded-xl border border-border bg-card p-6"><p className="text-4xl font-bold">Ready</p><p className="text-sm text-muted-foreground mt-2">para replicar em novos clientes</p></div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="container mx-auto py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-semibold">Roadmap</h2>
          <ol className="mt-8 grid md:grid-cols-5 gap-4 text-sm text-muted-foreground">
            {[
              "Implementação Primefit (4 semanas)",
              "Coleta e análise de resultados",
              "Material de marketing do case",
              "Lançamento comercial",
              "Expansão nacional e internacional",
            ].map((step, idx) => (
              <li key={idx} className="rounded-lg border border-border p-4 bg-secondary/20">
                <span className="text-foreground font-medium">{idx + 1}. </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* CTA FINAL */}
        <section id="cta" className="border-t border-border">
          <div className="container mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Junte-se à True Rise Company</h2>
              <p className="mt-4 text-muted-foreground">
                Faça parte da transformação digital que vai mudar a forma como empresas vendem e se comunicam.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" className="px-6 py-6 text-base">
                  <a href="mailto:contato@truerise.co" aria-label="Enviar e-mail para True Rise">
                    Falar com um especialista
                  </a>
                </Button>
                <Button asChild variant="brand" className="px-6 py-6 text-base">
                  <a href="tel:+550000000000" aria-label="Ligar para True Rise">
                    Ligar agora
                  </a>
                </Button>
              </div>
              <div className="mt-6 text-sm text-muted-foreground flex items-center gap-4">
                <span className="inline-flex items-center gap-1"><Mail className="size-4" /> contato@truerise.co</span>
                <span className="inline-flex items-center gap-1"><Phone className="size-4" /> +55 (00) 0000‑0000</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-elev)]">
              <h3 className="font-semibold">Por que investir agora</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Rocket className="text-accent" /> Momento único de mercado para automação e IA.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-accent" /> Primefit será prova viva do impacto.</li>
                <li className="flex gap-2"><Globe2 className="text-accent" /> Produto com potencial de recorrência e escala.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} True Rise Company · Todos os direitos reservados.</p>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Política de Privacidade</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Index;
