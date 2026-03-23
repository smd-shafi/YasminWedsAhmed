import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

import gallery1 from "@/assets/img-gallery.jpeg";
import gallery2 from "@/assets/img-gall3.jpeg";
import gallery3 from "@/assets/img-gall4.jpeg";
import gallery4 from "@/assets/img-gall5.jpeg";
import gallery5 from "@/assets/img-gall6.jpeg";
import gallery6 from "@/assets/img-gall7.jpeg";
import gallery7 from "@/assets/img-gall8.jpeg";
import gallery8 from "@/assets/img-gall9.jpeg";
import gallery9 from "@/assets/img-gall10.jpeg";
import gallery10 from "@/assets/img-gall11.jpeg";
import gallery11 from "@/assets/img-gall1.jpeg";


interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  size: "tall" | "wide" | "normal";
}

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    { src: gallery1, alt: "Engagement Photo", caption: "The day we said yes 💍", size: "tall" },
    { src: gallery2, alt: "Candid Moment", caption: "Laughter is our love language", size: "wide" },
    { src: gallery3, alt: "Traditional Portrait", caption: "Made for each other", size: "normal" },
    { src: gallery4, alt: "Mehndi Ceremony", caption: "Beautiful moments", size: "normal" },
    { src: gallery5, alt: "Sunset Silhouette", caption: "Together into the sunset", size: "normal" },
    { src: gallery6, alt: "Sangeet Night", caption: "Dancing through life together", size: "tall" },
    { src: gallery7, alt: "Family Gathering", caption: "Our family's love", size: "normal" },
    { src: gallery8, alt: "Wedding Ceremony", caption: "The moment we became one", size: "normal" },
    { src: gallery9, alt: "First Dance", caption: "Our first dance as husband and wife", size: "tall" },
    { src: gallery10, alt: "Bridal Party", caption: "The beautiful bridal party", size: "tall" },
    { src: gallery11, alt: "Couple Portrait", caption: "Our love in a single frame", size: "normal" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-cream via-gold-light/10 to-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23B8860B' stroke-width='1' fill='none'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%23B8860B' stroke-width='1' fill='none'/%3E%3Ccircle cx='50' cy='50' r='20' stroke='%23B8860B' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
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
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-royal-red" />
            <Heart className="w-5 h-5 text-royal-red fill-royal-red" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-royal-red" />
          </motion.div>
          <h2 className="font-script text-4xl md:text-5xl text-royal-red mb-2">
            Our Love Story
          </h2>
          <p className="font-display text-lg text-muted-foreground">
            हमारी प्रेम कहानी • Moments that led to forever
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-lg ${
                image.size === "tall" ? "aspect-[3/4]" : image.size === "wide" ? "aspect-[4/3]" : "aspect-square"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <p className="font-script text-xl text-gold">{image.caption}</p>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/50 transition-all duration-300 rounded-sm pointer-events-none" />
              
              {/* Corner decorations on hover */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-maroon/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-gold hover:text-gold-light transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative rounded-lg overflow-hidden border-4 border-gold/30">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-maroon to-transparent">
                  <p className="font-script text-2xl text-gold text-center">
                    {selectedImage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
