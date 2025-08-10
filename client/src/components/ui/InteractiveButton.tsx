import { motion } from "framer-motion";
import { useState } from "react";

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "holographic" | "cyber";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  disabled?: boolean;
}

export default function InteractiveButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false
}: InteractiveButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white",
    secondary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
    outline: "bg-transparent border-2 border-red-500 hover:bg-red-500/10 text-white",
    holographic: "bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 border border-red-500/30 text-white backdrop-blur-sm",
    cyber: "bg-gradient-to-r from-gray-900 to-gray-800 border border-red-500 text-red-400 hover:bg-gradient-to-r hover:from-red-900/20 hover:to-red-800/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: variant === "holographic" 
        ? "0 10px 30px rgba(239, 68, 68, 0.4), 0 0 20px rgba(147, 51, 234, 0.3)" 
        : "0 10px 30px rgba(239, 68, 68, 0.3)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        rounded-2xl font-bold transition-all duration-300
        relative overflow-hidden group
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black
      `}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Holographic Effect for holographic variant */}
      {variant === "holographic" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Cyber Grid Effect for cyber variant */}
      {variant === "cyber" && (
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '4px 4px'
          }}
          animate={{
            x: isHovered ? [0, -2, 0] : 0,
            y: isHovered ? [0, 2, 0] : 0
          }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Energy Particles */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
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
                y: [0, -20, 0],
                x: [0, (Math.random() - 0.5) * 20, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={{ y: isPressed ? 1 : 0 }}
      >
        {children}
      </motion.span>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: variant === "holographic" 
            ? "radial-gradient(circle at center, rgba(239, 68, 68, 0.2) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)"
        }}
        animate={{
          opacity: isHovered ? [0.3, 0.6, 0.3] : 0
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
}

// Botão com efeito de loading futurista
export function LoadingButton({
  children,
  loading = false,
  onClick,
  variant = "primary",
  size = "md",
  className = ""
}: {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "holographic" | "cyber";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  return (
    <InteractiveButton
      onClick={onClick}
      variant={variant}
      size={size}
      className={className}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <span>Processando...</span>
        </div>
      ) : (
        children
      )}
    </InteractiveButton>
  );
}

// Botão com efeito de partículas
export function ParticleButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = ""
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "holographic" | "cyber";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  const createParticles = () => {
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setParticles(newParticles);
    
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <div className="relative">
      <InteractiveButton
        onClick={() => {
          createParticles();
          onClick?.();
        }}
        variant={variant}
        size={size}
        className={className}
      >
        {children}
      </InteractiveButton>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-red-400 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [1, 0.8, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100]
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
