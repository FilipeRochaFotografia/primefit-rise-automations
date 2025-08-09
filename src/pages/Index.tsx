import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, MessageSquare, BarChart3, Globe2, Layers, CalendarClock, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
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
            <a href="#problema" className="story-link">Problema</a>
            <a href="#solucao" className="story-link">Solução</a>
            <a href="#caso" className="story-link">Caso Primefit</a>
            <a href="#modelo" className="story-link">Modelo</a>
            <a href="#cta" className="story-link">Contato</a>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="brand" className="hover-scale">
              <a href="#cta" aria-label="Falar com True Rise">Quero aplicar na minha empresa</a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden ambient-red">
          <div className="container mx-auto py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-enter">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                TRUE RISE COMPANY
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-prose">
                Automação + Inteligência Artificial para Vendas e Marketing. Transformando a Primefit em um caso de sucesso replicável para empresas de todos os setores.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" className="px-6 py-6 text-base hover-scale">
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
            <div className="relative animate-fade-in">
              <img
                src={heroImg}
                alt="Pessoa usando WhatsApp com chatbot de vendas, elementos de IA e dashboards"
                className="w-full h-auto rounded-lg border border-border shadow-[var(--shadow-elev)]"
                loading="eager"
              />
              <Sparkles className="absolute -top-3 -right-3 text-accent" />
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="container mx-auto py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <article className="animate-enter">
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
            <div className="animate-fade-in">
              <img src={compareImg} alt="Antes e depois: processos manuais vs automação por IA" className="w-full h-auto rounded-lg border border-border" loading="lazy" />
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section id="solucao" className="border-y border-border bg-secondary/30">
          <div className="container mx-auto py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <img src={mockupImg} alt="Mockup do WhatsApp com chatbot e dashboard em tempo real" className="w-full h-auto rounded-lg border border-border" loading="lazy" />
            </div>
            <article className="animate-enter">
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
          <header className="flex items-center gap-4 animate-enter">
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
              <div key={item} className="rounded-lg border border-border bg-card p-4 flex items-start gap-2 hover-scale animate-enter">
                <CheckCircle2 className="mt-0.5 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MODELO DE RECEITA (Melhorado) */}
        <section id="modelo" className="border-y border-border ambient-red">
          <div className="container mx-auto py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-semibold">Modelo de Receita</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Combinação de setup inicial para implementação rápida e planos mensais que escalam conforme sua necessidade.
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[{
                name: 'Básico', price: 'R$ 490/mês', setup: 'Setup R$ 1.490', popular: false, points: ['Chatbot de Vendas', 'Relatórios diários no WhatsApp', 'Suporte padrão']
              }, {
                name: 'Pro', price: 'R$ 990/mês', setup: 'Setup R$ 2.490', popular: true, points: ['Tudo do Básico', 'Social Studio 1‑Clique', 'Campanhas relâmpago', 'Reativações automáticas']
              }, {
                name: 'Premium', price: 'Sob consulta', setup: 'Setup sob consulta', popular: false, points: ['Tudo do Pro', 'Integrações avançadas', 'Consultoria de performance', 'SLA prioritário']
              }].map((plan) => (
                <article key={plan.name} className={`relative rounded-2xl border ${plan.popular ? 'border-accent' : 'border-border'} bg-card p-6 shadow-[var(--shadow-elev)] animate-enter hover-scale`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-6 rounded-full px-3 py-1 text-xs bg-accent text-accent-foreground">Mais popular</span>
                  )}
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-2xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.setup}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {plan.points.map((p) => (
                      <li key={p} className="flex gap-2"><CheckCircle2 className="text-accent" /> {p}</li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? 'hero' : 'brand'} className="mt-6 w-full">Quero este plano</Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJEÇÕES (corrigido pt-br) */}
        <section id="projecoes" className="border-b border-border bg-secondary/30">
          <div className="container mx-auto py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-semibold">Projeções com a Primefit</h2>
            <div className="mt-8 grid md:grid-cols-4 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 animate-enter"><p className="text-4xl font-bold">+30%</p><p className="text-sm text-muted-foreground mt-2">em vendas online (3 meses)</p></div>
              <div className="rounded-xl border border-border bg-card p-6 animate-enter"><p className="text-4xl font-bold">+40%</p><p className="text-sm text-muted-foreground mt-2">de engajamento nas redes</p></div>
              <div className="rounded-xl border border-border bg-card p-6 animate-enter"><p className="text-4xl font-bold">-50%</p><p className="text-sm text-muted-foreground mt-2">de tempo operacional</p></div>
              <div className="rounded-xl border border-border bg-card p-6 animate-enter"><p className="text-4xl font-bold">Pronto</p><p className="text-sm text-muted-foreground mt-2">para replicar em novos clientes</p></div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="cta">
          <div className="container mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-enter">
              <h2 className="text-3xl md:text-4xl font-semibold">Junte-se à True Rise Company</h2>
              <p className="mt-4 text-muted-foreground">
                Faça parte da transformação digital que vai mudar a forma como empresas vendem e se comunicam.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" className="px-6 py-6 text-base hover-scale">
                  <a href="mailto:contato@truerise.co" aria-label="Enviar e-mail para True Rise">
                    Falar com um especialista
                  </a>
                </Button>
                <Button asChild variant="brand" className="px-6 py-6 text-base hover-scale">
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
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-elev)] animate-enter">
              <h3 className="font-semibold">Por que investir agora</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Globe2 className="text-accent" /> Mercado aquecido em automação e IA.</li>
                <li className="flex gap-2"><CheckCircle2 className="text-accent" /> Primefit como prova real do impacto.</li>
                <li className="flex gap-2"><BarChart3 className="text-accent" /> Produto com potencial de recorrência e escala.</li>
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
