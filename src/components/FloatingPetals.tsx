import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Star } from "lucide-react";

interface FloatingElement {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  type: "moon" | "star";
  color: "emerald" | "gold" | "cream";
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const colors: ("emerald" | "gold" | "cream")[] = ["emerald", "gold", "cream"];
    const types: ("moon" | "star")[] = ["moon", "star"];
    const newElements: FloatingElement[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 15,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 15,
      rotation: Math.random() * 360,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setElements(newElements);
  }, []);

  const getColor = (color: "emerald" | "gold" | "cream") => {
    switch (color) {
      case "emerald": return "hsl(160, 84%, 19%)";
      case "gold": return "hsl(45, 80%, 50%)";
      case "cream": return "hsl(40, 30%, 95%)";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.left}%`,
            color: getColor(element.color),
            fontSize: element.size,
          }}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.8, 0.8, 0],
            rotate: [element.rotation, element.rotation + 360],
            x: [0, 20, -20, 10, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {element.type === "moon" ? (
            <Moon size={element.size} fill={element.color === "gold" ? getColor(element.color) : "none"} />
          ) : (
            <Star size={element.size} fill={element.color === "gold" ? getColor(element.color) : "none"} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;

