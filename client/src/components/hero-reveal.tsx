import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/BBP LOGO PRESENTATION 2_1764204475650.png";
import { Link } from "wouter";

interface HeroRevealProps {
  onComplete: () => void;
}

export const HeroReveal = ({ onComplete }: HeroRevealProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStartedExit, setHasStartedExit] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const startExit = useCallback(() => {
    if (!hasStartedExit && isReady) {
      setHasStartedExit(true);
    }
  }, [hasStartedExit, isReady]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Small delay before allowing scroll-triggered exit (ensures logo is visible first)
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 800);

    return () => {
      clearTimeout(readyTimer);
      document.body.style.overflow = '';
    };
  }, []);

  // Listen for scroll/wheel/touch events to trigger exit
  useEffect(() => {
    // Only attach listeners when ready AND before exit has started
    if (!isReady || hasStartedExit) return;

    const handleScroll = (e: Event) => {
      e.preventDefault();
      startExit();
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      startExit();
    };

    const handleTouch = () => {
      startExit();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        startExit();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isReady, hasStartedExit, startExit]);

  const handleAnimationComplete = () => {
    if (hasStartedExit) {
      setIsVisible(false);
      document.body.style.overflow = '';
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: hasStartedExit ? 0 : 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1]
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(26, 59, 110, 0.85) 0%, rgba(11, 31, 64, 0.85) 50%, rgba(5, 14, 31, 0.85) 100%)',
            }}
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: hasStartedExit ? 0 : 1,
            }}
            transition={{ 
              duration: 1, 
              ease: [0.4, 0, 0.2, 1]
            }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: hasStartedExit ? 0 : [0.3, 0.5, 0.3],
            }}
            transition={{ 
              opacity: hasStartedExit 
                ? { duration: 0.8 }
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#4A90E2] opacity-20 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37] opacity-15 blur-[80px] rounded-full" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            <Link href="/">
              <motion.img
                src={logoImage}
                alt="BenefitsBridge Partners Logo"
                className="object-contain"
                style={{
                  width: '75vw',
                  maxWidth: '800px',
                }}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ 
                  scale: hasStartedExit ? 0.6 : 1,
                  opacity: hasStartedExit ? 0 : 1,
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
            </Link>
            
            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-[-80px] flex flex-col items-center text-white/60"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: isReady && !hasStartedExit ? [0.4, 0.8, 0.4] : 0,
                y: isReady && !hasStartedExit ? [0, 5, 0] : -10
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-sm mb-2 tracking-wider uppercase">Scroll to enter</span>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
