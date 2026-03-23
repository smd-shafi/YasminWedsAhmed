import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation = ({ onComplete }: OpeningAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState<"initial" | "message" | "opening">("initial");

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("message"), 500);
    const timer2 = setTimeout(() => setStage("opening"), 3500);
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Curtain - Rich Maroon */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full gradient-curtain"
            initial={{ x: 0 }}
            animate={stage === "opening" ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
          >
            {/* Islamic geometric pattern overlay */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 15 15 5-15 5-5 15-5-15-15-5 15-5z' fill='%23D4AF37' fill-opacity='0.35'/%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-dark/20 to-emerald-dark/40" />
            <motion.div
              className="absolute right-0 top-0 w-16 h-full"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
              }}
            />
          </motion.div>

          {/* Right Curtain */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full gradient-curtain"
            initial={{ x: 0 }}
            animate={stage === "opening" ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.5, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 15 15 5-15 5-5 15-5-15-15-5 15-5z' fill='%23D4AF37' fill-opacity='0.35'/%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-emerald-dark/20 to-emerald-dark/40" />
            <motion.div
              className="absolute left-0 top-0 w-16 h-full"
              style={{
                background: "linear-gradient(-90deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
              }}
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              stage === "message"
                ? { opacity: 1, scale: 1 }
                : stage === "opening"
                  ? { opacity: 0, scale: 1.5 }
                  : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Bismillah Calligraphy-style Text */}
            <motion.div
              className="mb-8"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <h1 className="font-script text-3xl md:text-5xl text-gold-light leading-relaxed">
                Bismillah-ir-Rahman-ir-Raheem
              </h1>
            </motion.div>

            <motion.div
              className="mb-6"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-12 h-12 text-gold fill-gold" />
            </motion.div>

            <motion.h2
              className="font-script text-4xl md:text-6xl text-gold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              You're Invited
            </motion.h2>

            <motion.p
              className="mt-3 font-display text-xl text-gold-light/90 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Assalamu Alaikum
            </motion.p>

            <motion.div
              className="mt-6 w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>

          {/* Decorative Sparkles (Stars) */}
          {stage === "message" && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="w-2 h-2 text-gold fill-gold opacity-40" />
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
