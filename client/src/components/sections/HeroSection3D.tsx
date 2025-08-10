import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhatsAppMockup from "../WhatsAppMockup";

// Registrar ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Removed opacity transform to prevent text from disappearing
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Mouse tracking para efeitos 3D
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Animar elementos de fundo
    tl.to(".floating-orb", {
      y: -100,
      rotation: 360,
      duration: 1
    }, 0);

    tl.to(".cyber-grid", {
      y: -200,
      opacity: 0.3,
      duration: 1
    }, 0);

    // Animar texto principal
    tl.to(".hero-title", {
      y: -50,
      duration: 1
    }, 0);

    // Animar chatbot
    tl.to(".chatbot-container", {
      y: -30,
      scale: 0.95,
      duration: 1
    }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Futurista */}
      <div className="absolute inset-0">
        {/* Cyber Grid */}
        <div className="cyber-grid absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${mousePosition.y * 20}px) translateX(${mousePosition.x * 20}px)`
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="floating-orb absolute top-20 left-20 w-72 h-72"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-red-500/30 via-purple-600/20 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
        </motion.div>

        <motion.div
          className="floating-orb absolute bottom-20 right-20 w-96 h-96"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-green-600/20 to-yellow-500/30 rounded-full blur-3xl animate-pulse" />
        </motion.div>

        <motion.div
          className="floating-orb absolute top-1/2 left-1/2 w-64 h-64"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-yellow-500/30 via-red-600/20 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
        </motion.div>

        {/* Energy Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Holographic Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,25 50,50 T100,50"
              stroke="url(#holographic-gradient)"
              strokeWidth="0.1"
              fill="none"
              animate={{
                d: [
                  "M0,50 Q25,25 50,50 T100,50",
                  "M0,50 Q25,75 50,50 T100,50",
                  "M0,50 Q25,25 50,50 T100,50"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="holographic-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                <stop offset="50%" stopColor="rgba(239, 68, 68, 0.8)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Side - Text Content */}
          <motion.div 
            className="hero-title flex-1 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 40px rgba(239, 68, 68, 0.8)",
                  "0 0 20px rgba(239, 68, 68, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-6xl lg:text-8xl font-black mb-6">
                <span className="text-white">TRUE RISE</span>
                <br />
                <span className="text-red-500 font-bold">
                  COMPANY
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-2xl lg:text-3xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Otimizando o trabalho manual com{" "}
              <span className="text-red-400 font-bold">IA</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                onClick={() => scrollToSection('precos')}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-2xl text-lg transition-all duration-300 relative overflow-hidden group"
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

              <motion.button
                onClick={() => scrollToSection('precos')}
                className="px-8 py-4 bg-transparent border-2 border-red-500 hover:bg-red-500/10 text-white font-bold rounded-2xl text-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+76%</div>
                <div className="text-sm text-gray-400 font-medium">Aumento em Vendas</div>
                <div className="text-xs text-gray-500">De R$ 89k para R$ 157k mensais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">-65%</div>
                <div className="text-sm text-gray-400 font-medium">Redução de Custos</div>
                <div className="text-xs text-gray-500">Economia de R$ 5.200 mensais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
                <div className="text-sm text-gray-400 font-medium">Mais Rápido</div>
                <div className="text-xs text-gray-500">Resposta instantânea vs 4-8h</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Chatbot Mockup */}
          <motion.div 
            className="chatbot-container flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`
            }}
          >
            <div className="relative">
              {/* Holographic Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse" />
              
              {/* Chatbot Container */}
              <div className="relative glass-primary rounded-3xl p-6 backdrop-blur-xl border border-red-500/20">
                <WhatsAppMockup />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full"
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-red-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
