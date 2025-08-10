import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import SocialStudioMockup from "@/components/SocialStudioMockup";
import DashboardMockup from "@/components/DashboardMockup";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden font-inter">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 glass-effect border-b border-red-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">TRUE</span><span className="text-red-500">RISE</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('solucao')} className="hover:text-red-400 transition-colors">Solução</button>
              <button onClick={() => scrollToSection('case')} className="hover:text-red-400 transition-colors">Case</button>
              <button onClick={() => scrollToSection('como-funciona')} className="hover:text-red-400 transition-colors">Como Funciona</button>
              <button onClick={() => scrollToSection('resultados')} className="hover:text-red-400 transition-colors">Resultados</button>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
              Contato
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-white">TRUE RISE</span><br/>
              <span className="text-red-500 glow-text">COMPANY</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-300">
              Eliminando o trabalho manual com <span className="text-red-400">IA</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Transformando a <strong className="text-white">Primefit Suplementos</strong> em um case de sucesso replicável e escalável para empresas de todos os setores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 animate-glow">
                <i className="fas fa-rocket mr-2"></i>
                Quero Conhecer a Solução
              </Button>
              <Button variant="outline" className="glass-effect hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                <i className="fas fa-play mr-2"></i>
                Ver Demonstração
              </Button>
            </div>
          </motion.div>
          
          <WhatsAppMockup />
        </div>
      </section>

      {/* Problem Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="problema" 
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              O <span className="text-red-500">Problema</span> é Real
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empresas perdem vendas e tempo todos os dias por falta de automação inteligente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fas fa-clock",
                color: "red",
                title: "Respostas Lentas",
                description: "Clientes esperando horas por respostas no WhatsApp, perdendo interesse e migrando para concorrência."
              },
              {
                icon: "fas fa-turtle",
                color: "yellow",
                title: "Campanhas Demoradas",
                description: "Criação de conteúdo manual consome dias quando deveria levar minutos para publicar."
              },
              {
                icon: "fas fa-unlink",
                color: "orange",
                title: "Falta de Integração",
                description: "Sistemas isolados gerando retrabalho e dificultando a visão completa do negócio."
              },
              {
                icon: "fas fa-chart-line",
                color: "purple",
                title: "Dados Fragmentados",
                description: "Falta de relatórios rápidos e ações sugeridas para tomada de decisões estratégicas."
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-${problem.color}-600 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                  <i className={`${problem.icon} text-white text-xl`}></i>
                </div>
                <h3 className={`text-xl font-bold mb-3 text-${problem.color}-400`}>{problem.title}</h3>
                <p className="text-gray-400 text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="solucao" 
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Nossa <span className="text-red-500 glow-text">Solução</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Automação inteligente que transforma sua empresa em uma máquina de vendas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Solution Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: "fas fa-comments",
                  color: "red",
                  title: "Atendimento IA 24/7",
                  description: "ChatBot inteligente responde instantaneamente no WhatsApp e redes sociais, convertendo visitantes em vendas automaticamente.",
                  features: ["Respostas em menos de 3 segundos", "Integração WhatsApp Business API", "Processamento de linguagem natural"]
                },
                {
                  icon: "fas fa-bolt",
                  color: "blue",
                  title: "Social Studio 1-Clique",
                  description: "Criação e publicação automática de conteúdo profissional em todas as redes sociais com apenas um comando.",
                  features: ["Posts criados em 30 segundos", "Agendamento inteligente", "Templates personalizados"]
                },
                {
                  icon: "fas fa-chart-bar",
                  color: "green",
                  title: "Dashboard Inteligente",
                  description: "Painel unificado com métricas em tempo real e insights para decisões estratégicas rápidas.",
                  features: ["Dados atualizados em tempo real", "Alertas personalizados", "Relatórios automatizados"]
                },
                {
                  icon: "fas fa-mobile-alt",
                  color: "purple",
                  title: "Relatórios WhatsApp",
                  description: "Receba relatórios diários com análises e sugestões de ações direto no seu WhatsApp pessoal.",
                  features: ["Relatórios diários automáticos", "Ações sugeridas por IA", "Alertas de oportunidades"]
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`glass-effect rounded-2xl p-6 hover:bg-${solution.color}-500/10 transition-all duration-300 group`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${solution.color}-600 to-${solution.color}-800 rounded-xl flex items-center justify-center group-hover:animate-pulse`}>
                      <i className={`${solution.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 text-${solution.color}-400`}>{solution.title}</h3>
                      <p className="text-gray-400">{solution.description}</p>
                      <ul className="mt-3 space-y-1 text-sm text-gray-500">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <SocialStudioMockup />
          </div>
        </div>
      </motion.section>

      {/* PrimeFit Case Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="case" 
        className="py-20 relative bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Case <span className="text-red-500">PrimeFit Suplementos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              De atendimento manual para automação completa em 30 dias
            </p>
          </div>
          
          {/* PrimeFit Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-black px-8 py-4 rounded-2xl border border-red-500/30">
              <span className="text-3xl font-black text-white">PRIME</span><span className="text-3xl font-black text-red-500">FIT</span>
              <div className="text-sm text-gray-400 mt-1">suplementos</div>
            </div>
          </motion.div>
          
          {/* Implementation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "fas fa-robot", color: "red", title: "Atendimento IA 24/7", description: "ChatBot inteligente responde instantaneamente no WhatsApp e redes sociais" },
              { icon: "fas fa-lightning-bolt", color: "blue", title: "Social Studio 1-Clique", description: "Criação e publicação automática de conteúdo profissional" },
              { icon: "fas fa-chart-line", color: "green", title: "Dashboard Inteligente", description: "Painel unificado com métricas em tempo real" },
              { icon: "fas fa-mobile-alt", color: "purple", title: "Relatórios WhatsApp", description: "Relatórios diários com análises e sugestões" }
            ].map((implementation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-effect rounded-2xl p-6 text-center group hover:bg-${implementation.color}-500/10 transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-${implementation.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}>
                  <i className={`${implementation.icon} text-white text-2xl`}></i>
                </div>
                <h3 className={`text-lg font-bold mb-2 text-${implementation.color}-400`}>{implementation.title}</h3>
                <p className="text-sm text-gray-400">{implementation.description}</p>
                <div className="mt-3 text-xs text-green-400">✓ Implementado</div>
              </motion.div>
            ))}
          </div>
          
          <DashboardMockup />
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="como-funciona" 
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Como <span className="text-red-500 glow-text">Funciona</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              4 passos simples para transformar sua empresa com automação inteligente
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 transform -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { icon: "fas fa-headset", color: "red", title: "Suporte 24/7 com IA", description: "Implementamos chatbots inteligentes que respondem clientes instantaneamente, qualificam leads e geram vendas automaticamente." },
                { icon: "fas fa-magic", color: "blue", title: "Sistema de Criação de Posts", description: "Nossa IA cria conteúdo profissional e publica automaticamente em todas as redes sociais com apenas um clique." },
                { icon: "fas fa-chart-bar", color: "green", title: "Dashboard Informações Atualizadas", description: "Painel unificado mostra todas as métricas importantes em tempo real com insights para decisões rápidas." },
                { icon: "fas fa-mobile-alt", color: "purple", title: "Relatórios direto no WhatsApp", description: "Receba relatórios diários com análises completas e sugestões de ações direto no seu WhatsApp pessoal." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br from-${step.color}-600 to-${step.color}-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <div className={`glass-effect rounded-2xl p-6 group-hover:bg-${step.color}-500/10 transition-all duration-300`}>
                    <h3 className={`text-xl font-bold mb-3 text-${step.color}-400`}>{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Market Potential Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 relative bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Potencial de <span className="text-red-500">Mercado</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              O mercado de automação e IA está explodindo - posicione sua empresa na vanguarda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "$394B", title: "Mercado Global IA", description: "Crescimento de 37.3% ao ano até 2030", progress: 75, color: "red" },
              { value: "R$42B", title: "Mercado Brasil", description: "Automação para PMEs em crescimento acelerado", progress: 65, color: "blue" },
              { value: "17M", title: "PMEs no Brasil", description: "Empresas necessitando automação inteligente", progress: 80, color: "green" }
            ].map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 text-center"
              >
                <div className={`text-4xl font-black text-${market.color}-400 mb-4 animate-counter`}>{market.value}</div>
                <h3 className="text-xl font-bold mb-3">{market.title}</h3>
                <p className="text-gray-400 text-sm">{market.description}</p>
                <div className={`mt-4 bg-${market.color}-500/20 rounded-full h-2`}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${market.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={`bg-${market.color}-500 h-2 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Modelo de <span className="text-red-500 glow-text">Receita</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Investimento que se paga em menos de 30 dias com o aumento de vendas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "fas fa-rocket",
                color: "red",
                title: "Setup Inicial",
                price: "R$ 2.997",
                description: "Implementação completa em 30 dias",
                features: ["Chatbot WhatsApp configurado", "Social Studio implementado", "Dashboard personalizado", "Treinamento da equipe", "Suporte durante implementação"],
                popular: false
              },
              {
                icon: "fas fa-sync",
                color: "green",
                title: "Assinatura Mensal",
                price: "R$ 897",
                description: "Manutenção e evolução contínua",
                features: ["Suporte técnico 24/7", "Atualizações automáticas", "Relatórios mensais", "Otimizações de IA", "Novas funcionalidades"],
                popular: true
              },
              {
                icon: "fas fa-crown",
                color: "blue",
                title: "Serviços Premium",
                price: "Sob consulta",
                description: "Desenvolvimento personalizado",
                features: ["Integrações customizadas", "IA treinada para seu negócio", "Consultoria estratégica", "Automações específicas", "Suporte dedicado"],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-effect rounded-2xl p-8 text-center relative ${plan.popular ? 'border-2 border-red-500' : ''} hover:bg-${plan.color}-500/10 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                <div className={`w-16 h-16 bg-${plan.color}-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${plan.icon} text-white text-2xl`}></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-${plan.color}-400`}>{plan.title}</h3>
                <div className="text-4xl font-black text-white mb-2">{plan.price}</div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-2 text-sm text-gray-400 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>✓ {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="resultados" 
        className="py-20 relative bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Resultados <span className="text-red-500 glow-text">Esperados</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transformação comprovada baseada em dados reais do case PrimeFit
            </p>
          </div>
          
          {/* Before/After Comparison */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-red-400 text-center">
                <i className="fas fa-times-circle mr-2"></i>
                Antes da Automação
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Tempo de Resposta", value: "4-8 horas", color: "red" },
                  { label: "Taxa de Conversão", value: "15%", color: "red" },
                  { label: "Posts por Semana", value: "2-3", color: "red" },
                  { label: "Custo Operacional", value: "R$ 8.000/mês", color: "red" },
                  { label: "Vendas Online", value: "R$ 89k/mês", color: "red" }
                ].map((metric, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className={`text-${metric.color}-400 font-bold`}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* After */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-8 border border-green-500/30"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-400 text-center">
                <i className="fas fa-check-circle mr-2"></i>
                Depois da Automação
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Tempo de Resposta", value: "2.1 segundos", color: "green" },
                  { label: "Taxa de Conversão", value: "47%", color: "green" },
                  { label: "Posts por Semana", value: "15-20", color: "green" },
                  { label: "Custo Operacional", value: "R$ 2.800/mês", color: "green" },
                  { label: "Vendas Online", value: "R$ 157k/mês", color: "green" }
                ].map((metric, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className={`text-${metric.color}-400 font-bold`}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: 76, suffix: "%", prefix: "+", title: "Aumento em Vendas", description: "De R$ 89k para R$ 157k mensais", color: "green" },
              { value: 65, suffix: "%", prefix: "-", title: "Redução de Custos", description: "Economia de R$ 5.200 mensais", color: "blue" },
              { value: 98, suffix: "%", prefix: "", title: "Mais Rápido", description: "Resposta instantânea vs 4-8h", color: "purple" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-effect rounded-2xl p-8 text-center group hover:bg-${metric.color}-500/10 transition-all duration-300`}
              >
                <div className={`text-5xl font-black text-${metric.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                  <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </div>
                <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                <p className="text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 relative bg-gradient-to-r from-red-600 to-red-800 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-black mb-6 text-white"
          >
            Sua empresa pronta para o <span className="text-yellow-300">futuro</span>
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl lg:text-3xl font-bold mb-8 text-red-100"
          >
            com IA e automação inteligente
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-red-100 mb-12 max-w-3xl mx-auto"
          >
            Não fique para trás enquanto seus concorrentes automatizam e crescem. 
            Transforme sua empresa hoje mesmo com a tecnologia que já comprovou resultados.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-12 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <i className="fas fa-rocket mr-3"></i>
              Implementar Agora
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300">
              <i className="fas fa-calendar mr-3"></i>
              Agendar Demonstração
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-300 mb-2">30 dias</div>
              <p className="text-red-100">Implementação completa</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-300 mb-2">ROI 300%</div>
              <p className="text-red-100">Retorno comprovado</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-300 mb-2">24/7</div>
              <p className="text-red-100">Suporte garantido</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-white">TRUE</span><span className="text-red-500">RISE</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando empresas com automação inteligente e IA de vanguarda.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-linkedin text-gray-400 hover:text-red-400 cursor-pointer transition-colors"></i>
                <i className="fab fa-instagram text-gray-400 hover:text-red-400 cursor-pointer transition-colors"></i>
                <i className="fab fa-twitter text-gray-400 hover:text-red-400 cursor-pointer transition-colors"></i>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-400 transition-colors">Chatbot WhatsApp</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Social Studio</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Dashboard IA</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Relatórios Automáticos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li><i className="fas fa-envelope mr-2"></i>contato@truerise.com.br</li>
                <li><i className="fas fa-phone mr-2"></i>(11) 9999-9999</li>
                <li><i className="fas fa-map-marker-alt mr-2"></i>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 True Rise Company. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
