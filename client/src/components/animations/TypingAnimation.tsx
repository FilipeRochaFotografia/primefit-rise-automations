import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingAnimationProps {
  words: string[];
  speed?: number;
  className?: string;
  cursorColor?: string;
  textColor?: string;
}

export default function TypingAnimation({ 
  words, 
  speed = 100, 
  className = "",
  cursorColor = "#ef4444",
  textColor = "#ef4444"
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText.length > 0) {
        setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < currentWord.length) {
        setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative"
          style={{ color: textColor }}
        >
          {currentText}
          {/* Glow effect */}
          <motion.span
            className="absolute inset-0 blur-sm"
            style={{ color: textColor }}
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {currentText}
          </motion.span>
        </motion.span>
      </AnimatePresence>
      
      {/* Futuristic cursor */}
      <motion.span
        className="ml-1 inline-block w-0.5 h-6 relative"
        animate={{ 
          opacity: cursorVisible ? 1 : 0,
          scaleY: cursorVisible ? 1 : 0.3
        }}
        transition={{ duration: 0.1 }}
        style={{ backgroundColor: cursorColor }}
      >
        {/* Cursor glow */}
        <motion.div
          className="absolute inset-0 blur-sm"
          style={{ backgroundColor: cursorColor }}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Cursor particles */}
        <motion.div
          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
          style={{ backgroundColor: cursorColor }}
          animate={{
            y: [0, -10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.5
          }}
        />
      </motion.span>
    </div>
  );
}

// Componente para texto com efeito de máquina de escrever holográfico
export function HolographicTyping({ 
  words, 
  speed = 80,
  className = ""
}: {
  words: string[];
  speed?: number;
  className?: string;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText.length > 0) {
        setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < currentWord.length) {
        setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <div className={`relative ${className}`}>
      {/* Holographic background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-lg blur-sm" />
      
      {/* Text layers for holographic effect */}
      <div className="relative">
        {/* Base text */}
        <span className="text-white font-mono text-lg">
          {currentText}
        </span>
        
        {/* Holographic overlay 1 */}
        <motion.span
          className="absolute inset-0 text-red-400 font-mono text-lg"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [0, 1, 0],
            y: [0, -1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {currentText}
        </motion.span>
        
        {/* Holographic overlay 2 */}
        <motion.span
          className="absolute inset-0 text-blue-400 font-mono text-lg"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            x: [0, -1, 0],
            y: [0, 1, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          {currentText}
        </motion.span>
        
        {/* Cursor */}
        <motion.span
          className="ml-1 inline-block w-0.5 h-6 bg-red-400"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

// Componente para texto com efeito de glitch
export function GlitchTyping({ 
  words, 
  speed = 120,
  className = ""
}: {
  words: string[];
  speed?: number;
  className?: string;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText.length > 0) {
        setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < currentWord.length) {
        setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Base text */}
      <span className="text-white font-mono text-lg relative z-10">
        {currentText}
      </span>
      
      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-red-400 font-mono text-lg"
        animate={{
          x: glitchActive ? [-2, 2, -2] : 0,
          y: glitchActive ? [1, -1, 1] : 0,
          opacity: glitchActive ? [0.8, 0.3, 0.8] : 0
        }}
        transition={{ duration: 0.1 }}
      >
        {currentText}
      </motion.span>
      
      <motion.span
        className="absolute inset-0 text-blue-400 font-mono text-lg"
        animate={{
          x: glitchActive ? [2, -2, 2] : 0,
          y: glitchActive ? [-1, 1, -1] : 0,
          opacity: glitchActive ? [0.6, 0.2, 0.6] : 0
        }}
        transition={{ duration: 0.1, delay: 0.05 }}
      >
        {currentText}
      </motion.span>
      
      {/* Cursor */}
      <motion.span
        className="ml-1 inline-block w-0.5 h-6 bg-red-400"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}
