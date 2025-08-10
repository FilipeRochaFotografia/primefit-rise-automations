import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";

export default function DashboardMockup() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900/90 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <i className="fas fa-chart-line text-white text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Dashboard PrimeFit</h3>
            <p className="text-gray-400 text-sm">Últimos 30 dias</p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="flex space-x-3">
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            onClick={() => setActiveSection("social")}
          >
            <i className="fas fa-magic mr-2"></i>
            Social Studio
          </Button>
          <Button 
            size="sm" 
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl"
            onClick={() => setActiveSection("reports")}
          >
            <i className="fas fa-file-alt mr-2"></i>
            Relatórios
          </Button>
          <Button 
            size="sm" 
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
            onClick={() => setActiveSection("chatbot")}
          >
            <i className="fas fa-robot mr-2"></i>
            Chatbot
          </Button>
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-green-900/60 to-green-700/60 border border-green-500/30 rounded-2xl p-6 text-center hover:border-green-400/50 transition-all duration-300"
        >
          <div className="text-4xl font-black text-green-400 mb-2">
            <AnimatedCounter end={47} suffix="%" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Vendas Online</div>
          <div className="text-xs text-green-400 mt-2 font-medium">↗ R$ 156.8k este mês</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-900/60 to-blue-700/60 border border-blue-500/30 rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all duration-300"
        >
          <div className="text-4xl font-black text-blue-400 mb-2">
            <AnimatedCounter end={20} suffix="s" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Tempo Resposta</div>
          <div className="text-xs text-blue-400 mt-2 font-medium">↓ IA treinada para negócio</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-900/60 to-purple-700/60 border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-400/50 transition-all duration-300"
        >
          <div className="text-4xl font-black text-purple-400 mb-2">
            <AnimatedCounter end={89} suffix="%" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Taxa Conversão</div>
          <div className="text-xs text-purple-400 mt-2 font-medium">↗ +34% vs manual</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-red-900/60 to-red-700/60 border border-red-500/30 rounded-2xl p-6 text-center hover:border-red-400/50 transition-all duration-300"
        >
          <div className="text-4xl font-black text-red-400 mb-2">
            <AnimatedCounter end={1847} suffix="" />
          </div>
          <div className="text-sm font-semibold text-gray-300">Mensagens/dia</div>
          <div className="text-xs text-red-400 mt-2 font-medium">↗ +284% automático</div>
        </motion.div>
      </div>
      
      {/* Dynamic Content Based on Active Section */}
      {activeSection === "overview" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/60 border border-gray-600/50 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold text-white">Mensagens Processadas - Últimos 7 dias</h4>
            <span className="text-sm text-green-400 font-medium">+127% vs mês anterior</span>
          </div>
          <div className="flex items-end justify-between h-24 space-x-3">
            {[8, 12, 16, 20, 18, 14, 19].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height * 4}px` }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                className="bg-gradient-to-t from-red-600 to-red-400 w-8 rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {height * 50}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-3">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => (
              <span key={index}>{day}</span>
            ))}
          </div>
        </motion.div>
      )}

      {activeSection === "social" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/60 border border-gray-600/50 rounded-2xl p-6"
        >
          <div className="flex items-center mb-6">
            <i className="fas fa-magic text-blue-400 text-xl mr-3"></i>
            <h4 className="text-lg font-bold text-white">Social Studio 1-Clique</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-2">Posts publicados hoje</div>
                <div className="text-2xl font-bold text-blue-400">12</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-2">Engajamento médio</div>
                <div className="text-2xl font-bold text-green-400">+34%</div>
              </div>
            </div>
            <div className="bg-gray-700/30 rounded-xl p-4">
              <div className="text-sm text-gray-300 mb-3">Últimas publicações</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Instagram - Whey Gold</span>
                  <span className="text-green-400">142 likes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Facebook - Promoção BCAA</span>
                  <span className="text-blue-400">89 compartilhamentos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Instagram - Treino + Suplementação</span>
                  <span className="text-purple-400">67 comentários</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeSection === "reports" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/60 border border-gray-600/50 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <i className="fas fa-file-alt text-green-400 text-xl mr-3"></i>
              <h4 className="text-lg font-bold text-white">Relatórios WhatsApp</h4>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
              <i className="fas fa-download mr-2"></i>
              Gerar Relatório
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">156</div>
              <div className="text-sm text-gray-300">Leads qualificados</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">89%</div>
              <div className="text-sm text-gray-300">Taxa de resposta</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">R$ 47k</div>
              <div className="text-sm text-gray-300">Vendas diretas</div>
            </div>
          </div>
        </motion.div>
      )}

      {activeSection === "chatbot" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/60 border border-gray-600/50 rounded-2xl p-6"
        >
          <div className="flex items-center mb-6">
            <i className="fas fa-robot text-purple-400 text-xl mr-3"></i>
            <h4 className="text-lg font-bold text-white">Atendimentos Chatbot</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-2">Conversas ativas</div>
                <div className="text-2xl font-bold text-green-400">47</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-2">Tempo médio de resposta</div>
                <div className="text-2xl font-bold text-blue-400">20s</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-2">Satisfação do cliente</div>
                <div className="text-2xl font-bold text-yellow-400">4.8/5</div>
              </div>
            </div>
            <div className="bg-gray-700/30 rounded-xl p-4">
              <div className="text-sm text-gray-300 mb-3">Conversas recentes</div>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Cliente #1234</span>
                  </div>
                  <span className="text-green-400">Vendeu - R$ 139</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Cliente #1235</span>
                  </div>
                  <span className="text-blue-400">Qualificando</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Cliente #1236</span>
                  </div>
                  <span className="text-yellow-400">Aguardando</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Cliente #1237</span>
                  </div>
                  <span className="text-green-400">Vendeu - R$ 279</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
