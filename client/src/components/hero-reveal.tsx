import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/BBP LOGO PRESENTATION 2_1764204475650.png";
import { Link } from "wouter";

interface HeroRevealProps {
  onComplete: () => void;
}

export const HeroReveal = ({ onComplete }: HeroRevealProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStartedExit, setHasStartedExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setHasStartedExit(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

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

          <Link href="/" className="relative z-10">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
