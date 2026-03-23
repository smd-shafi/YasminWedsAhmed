import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-b from-cream to-gold-light/30">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Couple Initials */}
          <motion.div
            className="inline-flex items-center gap-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-script text-5xl text-emerald">Y</span>
            <span className="text-3xl animate-heartbeat">🌙</span>
            <span className="font-script text-5xl text-gold-dark">A</span>
          </motion.div>

          {/* Quote */}
          <p className="font-display text-xl md:text-2xl text-foreground italic max-w-2xl mx-auto mb-2">
            "And We created you in pairs"
          </p>
          <p className="font-display text-lg text-muted-foreground mb-8">
            (Quran 78:8)
          </p>

          {/* Hashtag */}
          <div className="mb-8">
            <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-2">
              Share Your Moments
            </p>
            <p className="font-script text-3xl text-emerald">
              #YasminWedsAhmed
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gold/40" />
            <div className="text-2xl">✨</div>
            <div className="w-16 h-px bg-gold/40" />
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center">
            <p className="font-body text-xs text-muted-foreground">
              With love, Yasmin & Ahmed • April 2026
            </p>
            <p className="font-display font-bold text-lg md:text-xl text-emerald-dark/80 mt-8 tracking-widest uppercase">
              Made forcibly for bride 💔
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
