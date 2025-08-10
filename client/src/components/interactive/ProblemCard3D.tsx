import { motion } from "framer-motion";
import { useState } from "react";

interface ProblemCard3DProps {
  title: string;
  description: string;
  icon: string;
  solution?: string;
  className?: string;
}

export default function ProblemCard3D({
  title,
  description,
  icon,
  solution,
  className = ""
}: ProblemCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`relative w-full h-64 perspective-1000 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{ 
          scale: 1.05,
          rotateY: isHovered && !isFlipped ? 5 : 0,
          rotateX: isHovered && !isFlipped ? -5 : 0
        }}
      >
        {/* Front Side - Problem */}
        <motion.div
          className="absolute inset-0 backface-hidden glass-primary rounded-3xl p-6 flex flex-col justify-between"
        >
          {/* Header */}
          <div className="text-center">
            <motion.div
              className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center"
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <i className={`${icon} text-xl text-red-400`}></i>
            </motion.div>
            
            <motion.h3
              className="text-lg font-bold text-white mb-3"
              animate={{
                textShadow: isHovered 
                  ? "0 0 20px rgba(239, 68, 68, 0.5)" 
                  : "none"
              }}
            >
              {title}
            </motion.h3>
          </div>

          {/* Content */}
          <motion.p
            className="text-gray-300 text-center leading-relaxed text-sm"
            animate={{
              opacity: isHovered ? 1 : 0.8
            }}
          >
            {description}
          </motion.p>

          {/* Footer */}
          <motion.div
            className="text-center"
            animate={{
              y: isHovered ? -5 : 0
            }}
          >
            <motion.div
              className="inline-flex items-center text-red-400 text-xs font-medium"
              animate={{
                scale: isHovered ? 1.05 : 1
              }}
            >
              <span>Clique para ver a solução</span>
              <motion.i
                className="fas fa-arrow-right ml-2"
                animate={{
                  x: isHovered ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Hover Effects */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Energy Particles */}
          {isHovered && (
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-red-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -30, 0],
                    x: [0, (Math.random() - 0.5) * 20, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Back Side - Solution */}
        {solution && (
          <motion.div
            className="absolute inset-0 backface-hidden glass-secondary rounded-3xl p-6 flex flex-col justify-center items-center text-center"
            style={{ 
              transform: "rotateY(180deg)"
            }}
          >
            <motion.div
              className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <i className="fas fa-check text-xl text-green-400"></i>
            </motion.div>

            <h4 className="text-lg font-bold text-white mb-3">
              Solução
            </h4>

            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
              {solution}
            </p>

            <motion.div
              className="inline-flex items-center text-green-400 text-xs font-medium"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <span>Clique para voltar</span>
              <motion.i
                className="fas fa-arrow-left ml-2"
                animate={{
                  x: [0, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </motion.div>

            {/* Success Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -50, 0],
                    x: [0, (Math.random() - 0.5) * 30, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Shadow */}
      <motion.div
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/20 rounded-full blur-xl"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.4 : 0.2
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Componente para grid de cards
export function ProblemCardsGrid() {
  const problems = [
    {
      title: "Perda de Vendas",
      description: "Clientes abandonam o carrinho por falta de atendimento rápido e personalizado",
      icon: "fas fa-chart-line",
      solution: "Chatbot 24/7 com IA que entende o contexto e resolve 80% das dúvidas automaticamente"
    },
    {
      title: "Tempo Desperdiçado",
      description: "Equipe gasta horas respondendo perguntas repetitivas e básicas",
      icon: "fas fa-clock",
      solution: "Automação inteligente que libera sua equipe para focar em vendas e relacionamento"
    },
    {
      title: "Custos Altos",
      description: "Manter equipe de atendimento 24/7 é caro e ineficiente",
      icon: "fas fa-dollar-sign",
      solution: "Redução de 70% nos custos de atendimento com ROI positivo em 30 dias"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {problems.map((problem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ProblemCard3D {...problem} />
        </motion.div>
      ))}
    </div>
  );
}
