import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import SocialStudioMockup from "@/components/SocialStudioMockup";
import DashboardMockup from "@/components/DashboardMockup";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroSection3D from "@/components/sections/HeroSection3D";
import InteractiveButton from "@/components/ui/InteractiveButton";
import { ProblemCardsGrid } from "@/components/interactive/ProblemCard3D";


export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden font-inter">

      {/* Hero Section 3D */}
      <HeroSection3D />



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
          
          <ProblemCardsGrid />
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
              De atendimento manual para automação completa em 30 dias - <strong className="text-white">aplicável a qualquer setor</strong>
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
              { icon: "fas fa-bolt", color: "blue", title: "Social Studio 1-Clique", description: "Criação e publicação automática de conteúdo profissional" },
              { icon: "fas fa-chart-bar", color: "purple", title: "Dashboard Inteligente", description: "Painel unificado com métricas em tempo real" },
              { icon: "fas fa-mobile", color: "green", title: "Relatórios WhatsApp", description: "Relatórios diários com análises e sugestões" }
            ].map((implementation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 text-center group hover:bg-${implementation.color}-500/20 hover:border-${implementation.color}-500/30 transition-all duration-300`}
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
          
          {/* Dashboard Personalizado */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Dashboard <span className="text-red-500">Personalizado</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Controle total sobre suas métricas e performance em tempo real
            </p>
          </div>
          
          <DashboardMockup />
        </div>
      </motion.section>

      {/* Aplicável para Qualquer Negócio Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 relative bg-gradient-to-r from-red-900/20 to-purple-900/20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-red-500">Qualquer Negócio</span>, Qualquer Setor
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nossa IA é <strong className="text-white">treinada especificamente para sua empresa</strong>, adaptando-se perfeitamente ao seu ramo de atuação
            </p>
          </div>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{ minWidth: 'max-content' }}>
            {[
              { icon: "fas fa-store", title: "E-commerce", desc: "Suplementos, roupas, eletrônicos" },
              { icon: "fas fa-user-md", title: "Clínicas", desc: "Médicas, estéticas, odontológicas" },
              { icon: "fas fa-graduation-cap", title: "Educação", desc: "Cursos, consultorias, coaching" },
              { icon: "fas fa-home", title: "Imobiliárias", desc: "Vendas, locações, administração" },
                  { icon: "fas fa-car", title: "Serviços", desc: "Oficinas, salões, restaurantes" },
                  { icon: "fas fa-briefcase", title: "Consultoria", desc: "Empresarial, financeira, estratégica" },
                  { icon: "fas fa-utensils", title: "Restaurantes", desc: "Delivery, cardápio, pedidos" },
                  { icon: "fas fa-dumbbell", title: "Academias", desc: "Treinos, suplementos, personal" }
                            ].map((sector, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300 group"
                  >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${sector.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-red-400 mb-2">{sector.title}</h3>
                <p className="text-sm text-gray-400">{sector.desc}</p>
                <div className="mt-3 text-xs text-green-400 font-medium">✓ IA Personalizada</div>
              </div>
            ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(8)].map((_, index) => (
                <motion.button
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-600 hover:bg-red-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <motion.div
                className="inline-flex items-center text-gray-400 text-sm"
                animate={{
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>Deslize para ver mais setores</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                🧠 IA Treinada Especificamente para Seu Negócio
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nossa inteligência artificial não é genérica. Ela aprende sobre <strong className="text-red-400">seus produtos, serviços, linguagem e clientes</strong>. 
                O resultado? Respostas precisas, vendas qualificadas e atendimento que parece humano, mas com eficiência de máquina.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">20s</div>
                  <div className="text-sm text-gray-400">Resposta personalizada</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Adaptada ao seu setor</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Sempre aprendendo</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>





      {/* Pricing Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="precos"
        className="py-20 relative bg-black"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Modelo de <span className="text-red-500">Receita</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Investimento que se paga em menos de 30 dias com o aumento de vendas
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
            {[
                              {
                  icon: "fas fa-rocket",
                  color: "red",
                  title: "Setup Inicial",
                  price: "R$ 2.997",
                  description: "Implementação completa em 30 dias (Taxa Única)",
                  features: ["Chatbot WhatsApp configurado", "Social Studio implementado", "Dashboard personalizado", "Treinamento da equipe", "Suporte durante implementação"],
                  popular: false
                },
                              {
                  icon: "fas fa-sync",
                  color: "green",
                  title: "Assinatura Mensal",
                  price: "R$ 897",
                  description: "Manutenção e evolução contínua (Recorrente)",
                  features: ["Suporte técnico 24/7", "Atualizações automáticas", "Relatórios mensais", "Otimizações de IA", "Novas funcionalidades"],
                  popular: true
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 lg:p-10 text-center relative w-full lg:flex-1 lg:max-w-md ${plan.popular ? 'border-2 border-red-500 shadow-2xl shadow-red-500/20' : ''} hover:bg-${plan.color}-500/20 hover:border-${plan.color}-500/30 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                <div className={`w-20 h-20 bg-${plan.color}-600 rounded-full flex items-center justify-center mx-auto mb-8`}>
                  <i className={`${plan.icon} text-white text-3xl`}></i>
                </div>
                <h3 className={`text-3xl font-bold mb-6 text-${plan.color}-400`}>{plan.title}</h3>
                <div className="text-5xl font-black text-white mb-4">{plan.price}</div>
                <p className="text-gray-400 text-base mb-8">{plan.description}</p>
                <ul className="space-y-3 text-base text-gray-400 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold rounded-2xl text-lg transition-all duration-300 relative overflow-hidden group shadow-xl shadow-red-500/20 border border-red-400/20"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400/10 via-red-500/5 to-red-400/10 rounded-2xl blur-sm"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <motion.div
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-robot text-white text-sm"></i>
                </motion.div>
                <span className="font-semibold">Implemente IA na sua empresa</span>
                <motion.div
                  className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{
                    x: [0, 3, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <i className="fas fa-arrow-right text-white text-xs"></i>
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="resultados" 
        className="py-20 relative bg-black"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Resultados <span className="text-red-500">Esperados</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transformação comprovada baseada em dados reais do case PrimeFit
            </p>
          </div>
          
          {/* Before/After Comparison Carousel */}
          <div className="relative mb-16">
            {/* Carousel Container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 lg:gap-8 pb-4" style={{ minWidth: 'max-content' }}>
                {/* Before */}
                <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 lg:p-8 min-w-[300px] lg:min-w-[400px]">
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
                </div>
                
                {/* After */}
                <div className="bg-gray-900/80 backdrop-blur-md border border-green-500/50 rounded-2xl p-6 lg:p-8 min-w-[300px] lg:min-w-[400px]">
                  <h3 className="text-2xl font-bold mb-6 text-green-400 text-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    Depois da Automação
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Tempo de Resposta", value: "20 segundos", color: "green" },
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
                </div>
                

              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(2)].map((_, index) => (
                <motion.button
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-600 hover:bg-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <motion.div
                className="inline-flex items-center text-gray-400 text-sm"
                animate={{
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>Deslize para ver a comparação completa</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.div>
            </div>
          </div>
          
          {/* Key Metrics Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-8 pb-4" style={{ minWidth: 'max-content' }}>
                {[
                  { value: 76, suffix: "%", prefix: "+", title: "Aumento em Vendas", description: "De R$ 89k para R$ 157k mensais", color: "green" },
                  { value: 65, suffix: "%", prefix: "-", title: "Redução de Custos", description: "Economia de R$ 5.200 mensais", color: "green" },
                  { value: 98, suffix: "%", prefix: "", title: "Mais Rápido", description: "Resposta instantânea vs 4-8h", color: "green" },
                  { value: 213, suffix: "%", prefix: "+", title: "Taxa de Conversão", description: "De 15% para 47%", color: "green" },
                  { value: 567, suffix: "%", prefix: "+", title: "Posts por Semana", description: "De 2-3 para 15-20", color: "green" },
                  { value: 24, suffix: "h", prefix: "", title: "Disponibilidade", description: "Atendimento 24/7", color: "green" }
                ].map((metric, index) => (
                  <div
                    key={index}
                    className={`glass-effect rounded-2xl p-8 text-center group hover:bg-${metric.color}-500/10 transition-all duration-300 min-w-[320px]`}
                  >
                    <div className={`text-5xl font-black text-${metric.color}-400 mb-4 group-hover:scale-110 transition-transform`}>
                      <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                    <p className="text-gray-400">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(6)].map((_, index) => (
                <motion.button
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-600 hover:bg-green-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <motion.div
                className="inline-flex items-center text-gray-400 text-sm"
                animate={{
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>Deslize para ver mais resultados</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/50 to-transparent" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl" />
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
            className="text-xl lg:text-2xl font-bold mb-6 text-red-100"
          >
            com IA e automação inteligente
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Não fique para trás enquanto seus concorrentes automatizam e crescem. 
            Transforme sua empresa hoje mesmo com a tecnologia que já comprovou resultados.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center mb-12"
          >
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-16 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-2xl shadow-red-900/50">
              <i className="fas fa-rocket mr-4 text-red-600"></i>
              Implementar Agora
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-yellow-300 mb-2">30 dias</div>
              <p className="text-red-100 text-base font-medium">Implementação completa</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-yellow-300 mb-2">ROI 300%</div>
              <p className="text-red-100 text-base font-medium">Retorno comprovado</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-yellow-300 mb-2">24/7</div>
              <p className="text-red-100 text-base font-medium">Suporte garantido</p>
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
