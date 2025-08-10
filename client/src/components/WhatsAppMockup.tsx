import { motion } from "framer-motion";

export default function WhatsAppMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative animate-float"
    >
      <div className="glass-effect rounded-3xl p-6 max-w-sm mx-auto">
        {/* Phone Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <i className="fas fa-chevron-left text-gray-400"></i>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">P</span>
            </div>
            <div>
              <p className="font-semibold text-sm">PrimeFIT | Luiz</p>
            </div>
          </div>
          <div className="flex space-x-3 text-gray-400">
            <i className="fas fa-video"></i>
            <i className="fas fa-phone"></i>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="space-y-3 h-80 overflow-y-auto">
          {/* User Message */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex justify-end"
          >
            <div className="bg-green-600 text-white px-4 py-2 rounded-l-2xl rounded-tr-2xl text-sm max-w-xs">
              Oi, tem whey?
              <div className="text-xs opacity-75 mt-1">6:20 PM ✓✓</div>
            </div>
          </motion.div>
          
          {/* Bot Response */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-700 text-white px-4 py-2 rounded-r-2xl rounded-tl-2xl text-sm max-w-xs">
              Oi! Temos uma ótima variedade de whey protein que você vai adorar! 🎉
              <div className="text-xs opacity-75 mt-1">6:21 PM</div>
            </div>
          </motion.div>
          
          {/* Product Options */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="flex justify-start"
          >
            <div className="bg-gray-700 text-white px-4 py-3 rounded-r-2xl rounded-tl-2xl text-sm max-w-xs">
              <p className="mb-2">Aqui vão algumas opções:</p>
              <ul className="space-y-2 text-xs">
                <li>• <strong>100% Pure Whey Refil (900g)</strong>: R$139,99 (R$119,99 no Pix)</li>
                <li>• <strong>100% WHEY GOLD STANDARD - 900g</strong>: R$350,00 (R$279,99 no Pix)</li>
              </ul>
              <div className="text-xs opacity-75 mt-2">6:21 PM</div>
            </div>
          </motion.div>
          
          {/* Follow-up */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="flex justify-start"
          >
            <div className="bg-gray-700 text-white px-4 py-2 rounded-r-2xl rounded-tl-2xl text-sm max-w-xs">
              Gostou de alguma dessas? Posso ajudar com mais opções! 💪 😊
              <div className="text-xs opacity-75 mt-1">6:21 PM</div>
            </div>
          </motion.div>
        </div>
        
        {/* Input Area */}
        <div className="flex items-center mt-4 pt-3 border-t border-gray-700">
          <i className="fas fa-plus text-gray-400 mr-3"></i>
          <div className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-sm text-gray-400">
            Digite uma mensagem...
          </div>
          <i className="fas fa-camera text-gray-400 ml-3"></i>
          <i className="fas fa-microphone text-gray-400 ml-3"></i>
        </div>
      </div>
    </motion.div>
  );
}
