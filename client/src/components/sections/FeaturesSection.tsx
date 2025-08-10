import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: "💬",
      title: "Atendimento IA 24/7",
      color: "red",
      description: "IA treinada especificamente para seu negócio responde em 20 segundos no WhatsApp e redes sociais, convertendo visitantes em vendas.",
      features: [
        "IA personalizada para seu setor",
        "Integração WhatsApp Business API",
        "Treinamento com seus produtos/serviços"
      ]
    },
    {
      icon: "⚡",
      title: "Social Studio 1-Clique",
      color: "blue",
      description: "Criação de conteúdo personalizado para seu negócio e publicação automática em todas as redes sociais adaptado ao seu público.",
      features: [
        "Conteúdo adaptado ao seu setor",
        "Agendamento inteligente",
        "Templates do seu negócio"
      ]
    },
    {
      icon: "📊",
      title: "Dashboard Inteligente",
      color: "purple",
      description: "Painel unificado com métricas em tempo real e insights para decisões estratégicas rápidas.",
      features: [
        "Dados atualizados em tempo real",
        "Alertas personalizados",
        "Relatórios automatizados"
      ]
    },
    {
      icon: "📱",
      title: "Relatórios WhatsApp",
      color: "green",
      description: "Receba relatórios diários com análises e sugestões de ações direto no seu WhatsApp pessoal.",
      features: [
        "Relatórios diários automáticos",
        "Ações sugeridas por IA",
        "Alertas de oportunidades"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return "border-red-500/20 bg-red-500/5 text-red-400";
      case "blue":
        return "border-blue-500/20 bg-blue-500/5 text-blue-400";
      case "green":
        return "border-green-500/20 bg-green-500/5 text-green-400";
      case "purple":
        return "border-purple-500/20 bg-purple-500/5 text-purple-400";
      default:
        return "border-red-500/20 bg-red-500/5 text-red-400";
    }
  };

  const getIconBgColor = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-500/20 border-red-500/30";
      case "blue":
        return "bg-blue-500/20 border-blue-500/30";
      case "green":
        return "bg-green-500/20 border-green-500/30";
      case "purple":
        return "bg-purple-500/20 border-purple-500/30";
      default:
        return "bg-red-500/20 border-red-500/30";
    }
  };

  return (
    <section id="solucao" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Soluções <span className="text-red-500">Completas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automatize seu negócio com IA de ponta e transforme a forma como você atende clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`glass-primary rounded-2xl p-8 border ${getColorClasses(feature.color)} hover:scale-105 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${getIconBgColor(feature.color)} border flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 text-${feature.color}-400`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                    className="flex items-center text-gray-300"
                  >
                    <div className={`w-5 h-5 rounded-full ${getColorClasses(feature.color)} flex items-center justify-center mr-3 flex-shrink-0`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl ${getColorClasses(feature.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => scrollToSection('precos')}
            className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-2xl text-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Implementar Agora</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
