import { motion } from "framer-motion";
import { MapPin, Navigation, Hotel, Car, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueMap = () => {
  const venueDetails = {
    name: "Shalimar Function Hall",
    address: "Valisab Road, Kadiri, Ananatapur, Andraparadesh",
    coordinates: { lat: 14.111301688869, lng: 78.1579735749729 },
  };

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${venueDetails.coordinates.lat},${venueDetails.coordinates.lng}`;
    window.open(url, "_blank");
  };

  const handleViewOnMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${venueDetails.coordinates.lat},${venueDetails.coordinates.lng}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-royal-red-dark via-maroon to-royal-red-dark overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0Z' stroke='%23D4AF37' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
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
            <MapPin className="w-5 h-5 text-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <h2 className="font-script text-4xl md:text-5xl text-gold mb-2">
            Venue & Directions
          </h2>
          <p className="font-display text-lg text-gold-light/80">
            स्थान • Join us at our celebration
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Map Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-xl overflow-hidden border-4 border-gold/30 shadow-gold">
              {/* Map Embed */}
              <div className="aspect-[4/3] bg-cream">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.421335074466!2d78.1579735749729!3d14.111301688869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3cef4f0018f59%3A0xfdfd9960952d936!2sShalimar%20Function%20Hall!5e0!3m2!1sen!2sin!4v1774263023181!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Venue Map"
                  className="w-full h-full"
                />
              </div>

              {/* Venue Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-maroon via-maroon/90 to-transparent">
                <h3 className="font-script text-2xl text-gold mb-1">{venueDetails.name}</h3>
                <p className="font-body text-sm text-gold-light/80 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {venueDetails.address}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <Button
                onClick={handleGetDirections}
                className="flex-1 gradient-gold text-foreground hover:opacity-90 shadow-gold"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Button
                onClick={handleViewOnMap}
                variant="outline"
                className="flex-1 border-gold text-gold hover:bg-gold/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Map
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

       {/* Decorative Diyas */}
              <motion.div
                className="flex justify-center mt-12 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: "radial-gradient(circle, hsl(45, 100%, 70%) 0%, hsl(35, 90%, 55%) 100%)",
                      boxShadow: "0 0 10px hsla(45, 100%, 60%, 0.6)",
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
    </section>
  );
};

export default VenueMap;
