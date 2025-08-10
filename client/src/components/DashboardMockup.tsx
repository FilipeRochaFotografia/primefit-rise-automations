import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function DashboardMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-effect rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold mb-6 text-center">
        <i className="fas fa-chart-bar text-green-400 mr-2"></i>
        Dashboard PrimeFit - Últimos 30 dias
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Metric Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-green-900/50 to-green-700/50 rounded-xl p-6 text-center"
        >
          <div className="text-3xl font-black text-green-400 mb-2">
            <AnimatedCounter end={47} suffix="%" />
          </div>
          <div className="text-sm text-gray-300">Vendas Online</div>
          <div className="text-xs text-green-400 mt-1">↗ R$ 156.8k este mês</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-900/50 to-blue-700/50 rounded-xl p-6 text-center"
        >
          <div className="text-3xl font-black text-blue-400 mb-2">
            <AnimatedCounter end={2.1} suffix="s" />
          </div>
          <div className="text-sm text-gray-300">Tempo Resposta</div>
          <div className="text-xs text-blue-400 mt-1">↓ 98% mais rápido</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-900/50 to-purple-700/50 rounded-xl p-6 text-center"
        >
          <div className="text-3xl font-black text-purple-400 mb-2">
            <AnimatedCounter end={89} suffix="%" />
          </div>
          <div className="text-sm text-gray-300">Taxa Conversão</div>
          <div className="text-xs text-purple-400 mt-1">↗ +34% vs manual</div>
        </motion.div>
      </div>
      
      {/* Mini Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 bg-gray-900/50 rounded-xl p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-gray-300">Mensagens Processadas</h4>
          <span className="text-sm text-green-400">+127% vs mês anterior</span>
        </div>
        <div className="flex items-end justify-between h-20 space-x-2">
          {[8, 12, 16, 20, 18, 14, 19].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height * 4}px` }}
              transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              className="bg-red-500 w-4 rounded-t"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
