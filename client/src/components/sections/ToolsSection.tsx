import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ToolsSection() {
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

  return (
    <section className="py-20 bg-black relative overflow-hidden">
             {/* Background Effects */}
       <div className="absolute inset-0">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
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
             Ferramentas <span className="text-red-500">Poderosas</span>
           </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça as principais ferramentas que transformarão seu negócio com automação inteligente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Chatbot WhatsApp Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Chatbot no <span className="text-green-500">WhatsApp</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Atendimento inteligente 24/7 que converte visitantes em clientes
              </p>
            </div>

            {/* WhatsApp Mockup */}
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                                     {/* Header */}
                   <div className="bg-green-600 p-4 flex items-center space-x-3">
                     <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                       <span className="text-white font-bold text-xs">PRIME FIT</span>
                     </div>
                     <div>
                       <div className="text-white font-semibold">PrimeFIT | Luiz</div>
                       <div className="text-green-100 text-sm">Online • Responde instantaneamente</div>
                     </div>
                   </div>

                                     {/* Chat Messages */}
                   <div className="bg-gray-100 p-4 h-96 overflow-y-auto">
                     {/* User Message */}
                     <div className="flex justify-end mb-4">
                       <div className="bg-green-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                         <p className="text-sm">Oi, tem whey?</p>
                         <div className="text-xs text-green-100 mt-1 text-right">6:20 PM</div>
                       </div>
                     </div>

                     {/* Bot Response 1 */}
                     <div className="flex justify-start mb-4">
                       <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs shadow-sm">
                         <p className="text-sm">Oi! Temos uma ótima variedade de whey protein que você vai adorar! 🎉</p>
                         <div className="text-xs text-gray-500 mt-1">6:21 PM</div>
                       </div>
                     </div>

                     {/* Bot Response 2 */}
                     <div className="flex justify-start mb-4">
                       <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs shadow-sm">
                         <p className="text-sm">Aqui vão algumas opções:</p>
                                                   <div className="mt-2 space-y-2">
                            <div className="text-sm">
                              <strong>100% Pure Whey Refil (900g)</strong>: R$139,99 (R$119,99 no Pix)
                            </div>
                            <div className="text-sm">
                              <strong>100% WHEY GOLD STANDARD - 900g</strong>: R$350,00 (R$279,99 no Pix)
                            </div>
                          </div>
                         <div className="text-xs text-gray-500 mt-1">6:21 PM</div>
                       </div>
                     </div>

                     {/* Bot Response 3 */}
                     <div className="flex justify-start mb-4">
                       <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs shadow-sm">
                         <p className="text-sm">Gostou de alguma dessas? Posso ajudar com mais opções! 💪😊</p>
                         <div className="text-xs text-gray-500 mt-1">6:21 PM</div>
                       </div>
                     </div>
                   </div>

                  {/* Input Area */}
                  <div className="bg-white p-4 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="Digite sua mensagem..." 
                        className="w-full bg-transparent text-gray-800 text-sm outline-none"
                        disabled
                      />
                    </div>
                    <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-paper-plane text-white text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>

          {/* Social Studio Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="text-purple-500">Social</span> Studio
              </h3>
              <p className="text-gray-300 text-lg">
                Criação e publicação automática de conteúdo profissional
              </p>
            </div>

            {/* Social Studio Mockup */}
            <div className="relative max-w-lg mx-auto">
              {/* Main Container */}
              <div className="glass-primary rounded-3xl p-6 border border-purple-500/20">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <i className="fas fa-magic text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Social Studio</h4>
                      <p className="text-gray-400 text-sm">Criação Inteligente</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Tema/Produto</label>
                    <input 
                      type="text" 
                      value="Whey Protein Gold Standard"
                      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Tom da Publicação</label>
                    <select className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm">
                      <option>Profissional</option>
                      <option>Casual</option>
                      <option>Motivacional</option>
                    </select>
                  </div>
                </div>

                {/* Social Networks Selection */}
                <div className="mb-6">
                  <label className="block text-gray-300 text-sm font-medium mb-3">Redes Sociais</label>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2">
                      <i className="fab fa-facebook"></i>
                      <span className="text-sm font-medium">Facebook</span>
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2">
                      <i className="fab fa-instagram"></i>
                      <span className="text-sm font-medium">Instagram</span>
                    </button>
                  </div>
                </div>

                {/* Preview Section */}
                <div className="space-y-4">
                  <h5 className="text-white font-semibold">Prévia dos Posts</h5>
                  
                  {/* Facebook Preview */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="fab fa-facebook text-white text-sm"></i>
                      </div>
                      <div>
                        <div className="text-gray-800 font-semibold text-sm">PrimeFit Suplementos</div>
                        <div className="text-gray-500 text-xs">2 min • 🌎</div>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm mb-3">
                      💪 <strong>Whey Protein Gold Standard</strong> - O suplemento mais vendido do Brasil!
                      <br/><br/>
                      ✅ 100% Proteína isolada
                      ✅ 24g de proteína por dose
                      ✅ Zero açúcar
                      <br/><br/>
                      🔥 <strong>25% OFF + Frete Grátis</strong>
                      <br/>
                      Use o código: PRIME25
                      <br/><br/>
                      #WheyProtein #Suplementos #Treino #Fitness
                    </p>
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <span>👍 127</span>
                      <span>💬 23</span>
                      <span>🔄 8</span>
                    </div>
                  </div>

                  {/* Instagram Preview */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <i className="fab fa-instagram text-white text-sm"></i>
                      </div>
                      <div>
                        <div className="text-gray-800 font-semibold text-sm">primefit_oficial</div>
                        <div className="text-gray-500 text-xs">São Paulo, Brasil</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-4 mb-3 text-center">
                      <div className="text-white font-bold text-lg">WHEY PROTEIN GOLD STANDARD</div>
                    </div>
                    <p className="text-gray-800 text-sm mb-3">
                      💪 Whey Gold Standard - O melhor para seus ganhos!
                      <br/><br/>
                      ✅ Proteína de alta qualidade
                      ✅ Absorção rápida
                      ✅ Resultados comprovados
                      <br/><br/>
                      🚚 Frete grátis em todo Brasil
                      Código: PRIME25
                      <br/><br/>
                      #wheyprotein #suplementos #fitness #gains
                    </p>
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <span>❤️ 89</span>
                      <span>💬 12</span>
                      <span>📤 5</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 rounded-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <i className="fas fa-rocket"></i>
                    <span>Publicar em 1 Clique</span>
                  </span>
                </motion.button>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
            <span className="relative z-10">Experimentar Ferramentas</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
