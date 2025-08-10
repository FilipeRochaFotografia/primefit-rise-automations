import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SocialStudioMockup() {
  const [theme, setTheme] = useState("");
  const [tone, setTone] = useState("profissional");
  const [selectedNetworks, setSelectedNetworks] = useState(["facebook", "instagram"]);
  
  const generatePreview = (network: string) => {
    if (!theme) return "Digite um tema para gerar o preview...";
    
    const templates = {
      facebook: {
        profissional: `🏋️‍♂️ Maximize seus resultados com ${theme}! Proteína de alta qualidade para seus treinos. #Suplementos #Fitness`,
        casual: `Gente, quem aí já experimentou ${theme}? É muito bom! 💪 #VidaSaudavel`,
        promocional: `🔥 OFERTA ESPECIAL: ${theme} com desconto! Não perca essa oportunidade! 🏃‍♂️`,
        educativo: `Você sabia? ${theme} ajuda na recuperação muscular pós-treino. Saiba mais! 📚`
      },
      instagram: {
        profissional: `💪 ${theme} ⚡ A escolha dos atletas! Disponível agora 🔥 #WheyProtein #Fitness #Suplementos`,
        casual: `${theme} chegou! Quem vai testar? 🙌 #NovaEra #Treino`,
        promocional: `⚡ SUPER PROMOÇÃO ⚡ ${theme} com preço especial! Stories para mais detalhes 👆`,
        educativo: `💡 Dica do dia: ${theme} e seus benefícios para o ganho de massa muscular 📈`
      }
    };
    
    return templates[network as keyof typeof templates]?.[tone as keyof typeof templates.facebook] || 
           `Preview para ${network} com tom ${tone}: ${theme}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-2xl p-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-center">
        <i className="fas fa-magic text-blue-400 mr-2"></i>
        Social Studio 1-Clique
      </h3>
      
      {/* Form Interface */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-300">Tema/Produto</label>
          <Input 
            type="text" 
            placeholder="Ex: Whey Protein Gold Standard"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-300">Tom da Publicação</label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger className="w-full bg-gray-800 border border-gray-600 rounded-xl text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border border-gray-600">
              <SelectItem value="profissional">Profissional</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="promocional">Promocional</SelectItem>
              <SelectItem value="educativo">Educativo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-300">Redes Sociais</label>
          <div className="flex space-x-3">
            <Button 
              variant={selectedNetworks.includes("facebook") ? "default" : "outline"}
              size="sm"
              onClick={() => {
                if (selectedNetworks.includes("facebook")) {
                  setSelectedNetworks(prev => prev.filter(n => n !== "facebook"));
                } else {
                  setSelectedNetworks(prev => [...prev, "facebook"]);
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <i className="fab fa-facebook mr-1"></i> Facebook
            </Button>
            <Button 
              variant={selectedNetworks.includes("instagram") ? "default" : "outline"}
              size="sm"
              onClick={() => {
                if (selectedNetworks.includes("instagram")) {
                  setSelectedNetworks(prev => prev.filter(n => n !== "instagram"));
                } else {
                  setSelectedNetworks(prev => [...prev, "instagram"]);
                }
              }}
              className="bg-pink-600 hover:bg-pink-700 text-white"
            >
              <i className="fab fa-instagram mr-1"></i> Instagram
            </Button>
          </div>
        </div>
        
        {/* Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          {selectedNetworks.includes("facebook") && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4"
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <i className="fab fa-facebook text-white text-sm"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">PrimeFit Suplementos</div>
                  <div className="text-xs text-gray-400">2 min • 🌍</div>
                </div>
              </div>
              <div className="text-sm text-gray-300 leading-relaxed mb-3">
                💪 Transforme seu treino com o Whey Protein Gold Standard! 
                
                ✅ 24g de proteína por dose
                ✅ Absorção rápida 
                ✅ Sabores incríveis
                
                🔥 OFERTA ESPECIAL: 25% OFF + Frete Grátis
                
                👆 Link na bio para garantir o seu!
                
                #WheyProtein #Suplementos #Treino #Fitness
              </div>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span>👍 127</span>
                <span>💬 23</span>
                <span>↗️ 8</span>
              </div>
            </motion.div>
          )}
          {selectedNetworks.includes("instagram") && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4"
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <i className="fab fa-instagram text-white text-sm"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">primefit_oficial</div>
                  <div className="text-xs text-gray-400">São Paulo, Brasil</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg h-24 mb-3 flex items-center justify-center">
                <div className="text-white font-bold text-center">
                  <div className="text-lg">WHEY PROTEIN</div>
                  <div className="text-sm">GOLD STANDARD</div>
                </div>
              </div>
              <div className="text-sm text-gray-300 leading-relaxed mb-2">
                <strong>primefit_oficial</strong> 🔥 Conquiste seus objetivos com qualidade premium! 
                Whey Gold Standard com 24g de proteína por dose 💪
                
                ✨ Use o código: PRIME25 
                🚚 Frete grátis para todo Brasil
                
                #wheyprotein #suplementos #fitness #gains
              </div>
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <span>❤️ 89</span>
                <span>💬 12</span>
                <span>↗️ 5</span>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Ready Post Example */}
        {theme && selectedNetworks.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 bg-green-900/20 border border-green-500/30 rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-check text-white"></i>
              </div>
              <div>
                <div className="text-lg font-bold text-green-400">Publicação Gerada!</div>
                <div className="text-sm text-gray-400">Pronta para {selectedNetworks.length} rede{selectedNetworks.length > 1 ? 's' : ''} social{selectedNetworks.length > 1 ? 'is' : ''}</div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-sm text-gray-300 mb-3">
                🎯 <strong>Conteúdo personalizado para:</strong> {theme}
              </div>
              <div className="text-sm text-gray-300 mb-3">
                📱 <strong>Redes selecionadas:</strong> {selectedNetworks.map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(", ")}
              </div>
              <div className="text-sm text-gray-300 mb-4">
                🎨 <strong>Tom:</strong> {tone.charAt(0).toUpperCase() + tone.slice(1)}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-green-400">
                  <i className="fas fa-clock mr-2"></i>
                  Gerado em 3.2 segundos
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <i className="fas fa-edit mr-1"></i>
                    Editar
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <i className="fas fa-share mr-1"></i>
                    Publicar
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
          disabled={!theme || selectedNetworks.length === 0}
        >
          <i className="fas fa-rocket mr-2"></i>
          Publicar em 1 Clique
        </Button>
      </div>
    </motion.div>
  );
}
