import React from 'react';
import { motion } from 'framer-motion';
// Replaced FloralImg with geometric CSS patterns

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FloralCornerProps {
    position: CornerPosition;
}

const FloralCorner: React.FC<FloralCornerProps> = ({ position }) => {
    const getTransform = () => {
        switch (position) {
            case 'top-left': return 'top-0 left-0';
            case 'top-right': return 'top-0 right-0 -scale-x-100';
            case 'bottom-left': return 'bottom-0 left-0 -scale-y-100';
            case 'bottom-right': return 'bottom-0 right-0 rotate-180';
            default: return '';
        }
    };

    return (
        <div className={`
      absolute ${getTransform()} 
      w-24 sm:w-32 md:w-48 lg:w-64 
      pointer-events-none z-10 p-4
    `}>
            <motion.div
                className="w-full h-full border-t-2 border-l-2 border-gold/40 relative"
                animate={{
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Geometric Star Pattern */}
                <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-gold/20"
                    style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                <div className="absolute top-4 left-4 w-4 h-4 md:w-6 md:h-6 bg-emerald/20 border border-gold/30"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            </motion.div>
        </div>
    );
};

export default FloralCorner;