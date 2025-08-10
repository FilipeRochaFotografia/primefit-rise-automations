import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

interface AchievementSystemProps {
  className?: string;
}

export default function AchievementSystem({ className = "" }: AchievementSystemProps) {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "first-scroll",
      title: "Explorador",
      description: "Rolou pela primeira vez",
      icon: "fas fa-scroll",
      color: "blue",
      unlocked: false,
      progress: 0,
      maxProgress: 1
    },
    {
      id: "scroll-depth",
      title: "Mergulhador",
      description: "Rolou 50% da página",
      icon: "fas fa-water",
      color: "cyan",
      unlocked: false,
      progress: 0,
      maxProgress: 50
    },
    {
      id: "time-on-page",
      title: "Persistente",
      description: "Ficou 2 minutos na página",
      icon: "fas fa-clock",
      color: "green",
      unlocked: false,
      progress: 0,
      maxProgress: 120
    },
    {
      id: "interaction",
      title: "Interativo",
      description: "Interagiu com 3 elementos",
      icon: "fas fa-hand-pointer",
      color: "purple",
      unlocked: false,
      progress: 0,
      maxProgress: 3
    },
    {
      id: "social-share",
      title: "Influenciador",
      description: "Compartilhou o conteúdo",
      icon: "fas fa-share-alt",
      color: "pink",
      unlocked: false,
      progress: 0,
      maxProgress: 1
    }
  ]);

  const [showNotification, setShowNotification] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [interactions, setInteractions] = useState(0);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollDepth(scrollPercent);

      // Check for scroll achievements
      if (scrollPercent > 0 && !achievements.find(a => a.id === "first-scroll")?.unlocked) {
        unlockAchievement("first-scroll");
      }
      if (scrollPercent > 50 && !achievements.find(a => a.id === "scroll-depth")?.unlocked) {
        unlockAchievement("scroll-depth");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [achievements]);

  // Track time on page
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnPage(prev => {
        const newTime = prev + 1;
        if (newTime >= 120 && !achievements.find(a => a.id === "time-on-page")?.unlocked) {
          unlockAchievement("time-on-page");
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [achievements]);

  // Track interactions
  useEffect(() => {
    const handleInteraction = () => {
      setInteractions(prev => {
        const newCount = prev + 1;
        if (newCount >= 3 && !achievements.find(a => a.id === "interaction")?.unlocked) {
          unlockAchievement("interaction");
        }
        return newCount;
      });
    };

    // Listen for clicks, hovers, and other interactions
    document.addEventListener('click', handleInteraction);
    document.addEventListener('mouseenter', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('mouseenter', handleInteraction);
    };
  }, [achievements]);

  const unlockAchievement = (achievementId: string) => {
    setAchievements(prev => 
      prev.map(achievement => 
        achievement.id === achievementId 
          ? { ...achievement, unlocked: true, progress: achievement.maxProgress }
          : achievement
      )
    );

    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement) {
      setCurrentAchievement(achievement);
      setShowNotification(true);
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
        setCurrentAchievement(null);
      }, 5000);
    }
  };

  const getProgressPercentage = (achievement: Achievement) => {
    if (!achievement.progress || !achievement.maxProgress) return 0;
    return Math.min((achievement.progress / achievement.maxProgress) * 100, 100);
  };

  return (
    <div className={`achievement-system ${className}`}>
      {/* Achievement Notification */}
      <AnimatePresence>
        {showNotification && currentAchievement && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            className="fixed top-4 right-4 z-50"
          >
            <div className="glass-primary rounded-2xl p-6 border border-red-500/30 max-w-sm">
              <motion.div
                className="flex items-center space-x-4"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-${currentAchievement.color}-500/20 to-${currentAchievement.color}-600/20`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 1 }}
                >
                  <i className={`${currentAchievement.icon} text-${currentAchievement.color}-400 text-xl`}></i>
                </motion.div>
                
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg">
                    {currentAchievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {currentAchievement.description}
                  </p>
                </div>
              </motion.div>

              {/* Celebration Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: `var(--${currentAchievement.color}-400)`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [1, 0.8, 0],
                      y: [0, -100, 0],
                      x: [0, (Math.random() - 0.5) * 50, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Achievement Progress Bar */}
      <motion.div
        className="fixed bottom-4 left-4 z-40"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="glass-primary rounded-2xl p-4 border border-red-500/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
              <i className="fas fa-trophy text-red-400"></i>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Conquistas</h4>
              <p className="text-gray-400 text-xs">
                {achievements.filter(a => a.unlocked).length}/{achievements.length}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                  achievement.unlocked 
                    ? `bg-gradient-to-br from-${achievement.color}-500/20 to-${achievement.color}-600/20` 
                    : 'bg-gray-700/50'
                }`}>
                  <i className={`${achievement.icon} text-xs ${
                    achievement.unlocked ? `text-${achievement.color}-400` : 'text-gray-500'
                  }`}></i>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-xs font-medium ${
                      achievement.unlocked ? 'text-white' : 'text-gray-400'
                    }`}>
                      {achievement.title}
                    </span>
                    {achievement.progress !== undefined && achievement.maxProgress && (
                      <span className="text-xs text-gray-500">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    )}
                  </div>
                  
                  <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        achievement.unlocked 
                          ? `bg-gradient-to-r from-${achievement.color}-500 to-${achievement.color}-600` 
                          : 'bg-gray-600'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${getProgressPercentage(achievement)}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social Share Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-40 glass-primary rounded-2xl p-4 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'TRUE RISE COMPANY',
              text: 'Transforme sua empresa com automação inteligente!',
              url: window.location.href
            });
          } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href);
            unlockAchievement("social-share");
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-share-alt text-red-400 text-xl"></i>
      </motion.button>
    </div>
  );
}

// Hook para usar o sistema de achievements
export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const unlockAchievement = (achievementId: string) => {
    setAchievements(prev => 
      prev.map(achievement => 
        achievement.id === achievementId 
          ? { ...achievement, unlocked: true }
          : achievement
      )
    );
  };

  const updateProgress = (achievementId: string, progress: number) => {
    setAchievements(prev => 
      prev.map(achievement => 
        achievement.id === achievementId 
          ? { ...achievement, progress }
          : achievement
      )
    );
  };

  return { achievements, unlockAchievement, updateProgress };
}
