import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Moon } from "lucide-react";
import meccaImage from "@/assets/islamic/mecca.png";

const WeddingDetails = () => {
  const events = [
    {
      icon: Moon,
      title: "Nikah Ceremony",
      date: "Sunday, April 12th 2026",
      time: "11:00 AM",
      venue: "Shalimar Function Hall, Valisab Road, Kadiri, Ananatapur, Andraparadesh",
      delay: 0.2,
    },
    {
      icon: Clock,
      title: "Walima & Lunch",
      date: "Sunday, April 12th 2026",
      time: "To Follow",
      venue: "Shalimar Function Hall, Valisab Road, Kadiri, Ananatapur, Andraparadesh",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={meccaImage}
          alt="Islamic Pattern Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/95 via-emerald-dark/85 to-emerald-dark/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
          <h2 className="font-script text-4xl md:text-5xl text-gold mb-4">
            Religious Ceremonies
          </h2>
          <div className="font-display text-gold-light/80 max-w-2xl mx-auto flex flex-col items-center gap-4">
            <p className="text-xl md:text-2xl text-gold leading-loose opacity-90" dir="rtl">
              بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>
            <p className="text-lg italic">
              Join us for a celebration of faith and commitment
            </p>
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative bg-white/10 backdrop-blur-xl rounded-xl p-8 text-center border-2 border-gold/30 hover:border-gold/60 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: event.delay }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 gradient-gold rounded-b-full shadow-gold" />

              {/* Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-gold border-2 border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <event.icon className="w-8 h-8 text-white drop-shadow-md" />
              </motion.div>

              {/* Event Title */}
              <h3 className="font-script text-4xl text-white mb-2 drop-shadow-md">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-4 bg-emerald/20 p-4 rounded-lg border border-gold/10">
                <p className="font-body text-gold-light font-bold text-xl drop-shadow-sm">
                  {event.date}
                </p>
                <p className="font-body text-base text-white/90 font-medium">
                  {event.time}
                </p>
                <div className="flex items-center justify-center gap-2 text-gold-light font-bold">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm tracking-wide">{event.venue}</span>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/60 shadow-gold" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold/60 shadow-gold" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold/60 shadow-gold" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/60 shadow-gold" />
            </motion.div>
          ))}
        </div>

        {/* Islamic Ornamentation */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-32 h-32 border-4 border-gold/20 rounded-full flex items-center justify-center rotate-45">
            <div className="w-24 h-24 border-2 border-gold/30 rounded-full flex items-center justify-center -rotate-90">
              <Moon className="w-12 h-12 text-gold opacity-50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingDetails;

