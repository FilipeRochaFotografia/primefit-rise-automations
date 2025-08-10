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
              className="bg-gray-800 rounded-lg p-3"
            >
              <div className="text-xs text-blue-400 mb-2">Preview Facebook</div>
              <div className="text-xs text-gray-400">{generatePreview("facebook")}</div>
            </motion.div>
          )}
          {selectedNetworks.includes("instagram") && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-lg p-3"
            >
              <div className="text-xs text-pink-400 mb-2">Preview Instagram</div>
              <div className="text-xs text-gray-400">{generatePreview("instagram")}</div>
            </motion.div>
          )}
        </div>
        
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
