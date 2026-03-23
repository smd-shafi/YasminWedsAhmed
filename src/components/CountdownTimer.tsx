import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    setPrevTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setPrevTimeLeft(timeLeft);
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days, prevValue: prevTimeLeft.days },
    { label: "Hours", value: timeLeft.hours, prevValue: prevTimeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes, prevValue: prevTimeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds, prevValue: prevTimeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 bg-gradient-to-b from-emerald-dark via-emerald to-emerald-dark overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 15 15 5-15 5-5 15-5-15-15-5 15-5z' fill='%23D4AF37' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Moon className="w-5 h-5 text-gold fill-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <h2 className="font-script text-4xl md:text-5xl text-gold mb-2">
            Counting Down To Forever
          </h2>
          <p className="font-display text-xl text-white font-medium shadow-sm">
            Until our special day
          </p>
        </motion.div>

        {/* Countdown Cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-[400px] lg:max-w-5xl mx-auto px-2 justify-items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="relative w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {/* Card */}
              <div className="relative w-full min-w-[140px] md:min-w-[180px] bg-white rounded-lg overflow-hidden shadow-2xl border-2 border-gold/40">
                {/* Top decorative border */}
                <div className="h-2 gradient-gold" />

                {/* Number display */}
                <div className="py-6 md:py-10 perspective-1000">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={unit.value}
                      className="text-5xl md:text-7xl font-display font-bold text-emerald-dark text-center"
                      initial={{ rotateX: -90, opacity: 0 }}
                      animate={{ rotateX: 0, opacity: 1 }}
                      exit={{ rotateX: 90, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Label */}
                <div className="pb-6 text-center">
                  <p className="font-body text-sm md:text-base font-bold text-emerald uppercase tracking-widest bg-emerald/5 py-1">
                    {unit.label}
                  </p>
                </div>

                {/* Bottom decorative border */}
                <div className="h-1 gradient-gold" />
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold z-10" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-gold z-10" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-gold z-10" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Wedding Date Display */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-display text-2xl md:text-3xl text-white font-bold drop-shadow-lg">
            Sunday, April 12th, 2026
          </p>
          <motion.div
            className="mt-6 inline-flex items-center gap-3 bg-gold/20 px-6 py-2 rounded-full border border-gold/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-base font-bold text-gold tracking-widest uppercase">
              Save the Date
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
          </motion.div>
        </motion.div>
      </div>


      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/40 shadow-gold animate-lantern-glow"
          style={{
            left: `${10 + i * 15}%`,
            bottom: "5%",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </section>
  );
};

export default CountdownTimer;
