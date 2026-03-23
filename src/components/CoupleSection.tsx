import { motion } from "framer-motion";
import meccaImage from "@/assets/islamic/mecca.png";
import medinaImage from "@/assets/islamic/medina.png";
import RoseString from "./ui/rose-string";
import CornerFrame from "./CornerFrame";
import { ChevronDown, Heart } from "lucide-react";


const CoupleSection = () => {
  const scrollToJourney = () => {
    document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-cream via-gold-light/20 to-cream background-tint">

      {/* 🌹 Rose Strings for Corners */}
      <div className="block z-50 pointer-events-none">
        <RoseString position="left" />
        <RoseString position="right" />
      </div>

      {/* Decorative Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-8 border-gold/30 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-4 border-emerald/30 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
        <div className="absolute inset-0 bg-islamic-pattern" />
      </div>

      <div className="container mx-auto px-4 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-emerald-dark text-3xl md:text-4xl lg:text-5xl mb-8 block drop-shadow-sm opacity-90 font-arabic leading-relaxed"
            dir="rtl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center gap-4 md:gap-8 mt-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="font-script text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] text-emerald-dark drop-shadow-md m-0 leading-none">
              Yasmin
            </h1>
            
            <div className="flex items-center justify-center gap-6 w-full max-w-[16rem] md:max-w-lg">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent opacity-80" />
              <span className="text-3xl md:text-5xl font-display text-gold-dark italic px-2">Weds</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent opacity-80" />
            </div>

            <h1 className="font-script text-[6.5rem] md:text-[8.5rem] lg:text-[10rem] text-emerald-dark drop-shadow-md m-0 leading-none">
              Ahmed
            </h1>
          </motion.div>
          <motion.p
            className="font-display text-2xl md:text-4xl text-emerald-dark font-semibold italic max-w-3xl mx-auto drop-shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Request the pleasure of your company at their Nikah celebration
          </motion.p>
        </motion.div>

        {/* Islamic Landmarks */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-5xl mx-auto mb-16">
          {/* Mecca */}
          <motion.div
            className="relative w-full max-w-[16rem] md:max-w-[18rem]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden border-[6px] border-gold/40 shadow-2xl relative group bg-emerald-dark">
              <div className="absolute inset-0 border-2 border-gold/60 rounded-t-full rounded-b-[1.25rem] z-10 m-2 opacity-50 pointer-events-none" />
              <img
                src={meccaImage}
                alt="Holy Kaaba - Mecca"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

          </motion.div>

          {/* Center Heart */}
          <motion.div
            className="z-20 my-10 md:my-0"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-gold flex items-center justify-center shadow-gold border-4 border-gold-light animate-heartbeat shrink-0 relative">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
              <div className="absolute inset-0 border border-white/30 rounded-full m-1 pointer-events-none" />
            </div>
          </motion.div>

          {/* Medina */}
          <motion.div
            className="relative w-full max-w-[16rem] md:max-w-[18rem]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden border-[6px] border-gold/40 shadow-2xl relative group bg-emerald-dark">
              <div className="absolute inset-0 border-2 border-gold/60 rounded-t-full rounded-b-[1.25rem] z-10 m-2 opacity-50 pointer-events-none" />
              <img
                src={medinaImage}
                alt="Masjid an-Nabawi - Medina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToJourney}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          whileHover={{ y: 5 }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
