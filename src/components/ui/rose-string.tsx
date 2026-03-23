import { motion } from "framer-motion";
import React from "react";

const MarigoldFlower = ({ isOrange }) => {
    const colors = isOrange
        ? { primary: "#E65100", light: "#FB8C00", dark: "#BF360C" }
        : { primary: "#FBC02D", light: "#FFEB3B", dark: "#F9A825" };

    return (
        <div className="relative w-10 h-10 md:w-12 md:h-12 drop-shadow-md transform hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="petalNoise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
                        <feDisplacementMap in="SourceGraphic" scale="3" />
                    </filter>
                </defs>
                {/* Outer Ruffled Layer */}
                <path
                    d="M50 5 L58 15 L70 10 L75 22 L88 20 L85 33 L95 40 L88 50 L95 60 L85 67 L88 80 L75 78 L70 90 L58 85 L50 95 L42 85 L30 90 L25 78 L12 80 L15 67 L5 60 L12 50 L5 40 L15 33 L12 20 L25 22 L30 10 L42 15 Z"
                    fill={colors.primary}
                    filter="url(#petalNoise)"
                />
                {/* Middle Petal Layer */}
                <path
                    d="M50 15 L55 25 L65 22 L68 32 L78 30 L75 40 L83 45 L78 52 L83 60 L75 65 L78 75 L68 73 L65 83 L55 78 L50 85 L45 78 L35 83 L32 73 L22 75 L25 65 L17 60 L22 52 L17 45 L25 40 L22 30 L32 32 L35 22 L45 25 Z"
                    fill={colors.light}
                />
                {/* Inner Core */}
                <circle cx="50" cy="50" r="12" fill={colors.dark} opacity="0.8" />
            </svg>
        </div>
    );
};

const RealisticLeaf = ({ rotation = 0 }) => (
    <div className="w-6 h-10 md:w-8 md:h-12 -mt-2 -mb-2 z-10" style={{ transform: `rotate(${rotation}deg)` }}>
        <svg viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 0C20 0 35 20 35 45C35 70 20 80 20 80C20 80 5 70 5 45C5 20 20 0 20 0Z"
                fill="url(#leafGradient)"
            />
            <path d="M20 0V80" stroke="#1B3F16" strokeWidth="0.5" opacity="0.5" />
            <defs>
                <linearGradient id="leafGradient" x1="20" y1="0" x2="20" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2D5A27" />
                    <stop offset="1" stopColor="#1B3F16" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

const MarigoldLadi = ({ position = "left" }) => {
    // Define the base config (Longest to Shortest)
    const baseConfig = [
        { height: 9, delay: 0.2, sway: 4 },
        { height: 7, delay: 0.4, sway: 2.5 },
        { height: 4, delay: 0.1, sway: 3.5 },
        { height: 2, delay: 0.1, sway: 3.5 },
    ];

    // Mirror the array if on the right side
    const garlandConfig = position === "right" ? [...baseConfig].reverse() : baseConfig;

    return (
        <div className={`absolute top-0 ${position === "left" ? "left-4 md:left-12" : "right-4 md:right-12"} -z-1 md:z-50 flex gap-1 md:gap-3`}>
            {garlandConfig.map((config, i) =>{ 
                const isHiddenOnMobile = position === "left" ? i < 2 : i >= 2;
                return (
                <motion.div
                    key={`${position}-${i}`} // Unique key for side-specific animation
                    initial={{ y: -500 }}
                    animate={{
                        y: 0,
                        // Reverse sway direction for the right side to look balanced
                        rotate: position === "left"
                            ? [-(config.sway), config.sway, -(config.sway)]
                            : [config.sway, -(config.sway), config.sway],
                    }}
                    transition={{
                        y: { duration: 1.8, delay: config.delay, type: "spring", damping: 15 },
                        rotate: { duration: config.sway + 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                        className={`${isHiddenOnMobile ? "hidden md:flex" : "flex"} flex-col items-center origin-top pointer-events-none`}
                >
                    <div className="w-[2px] h-8 bg-[#5D4037] opacity-60" />
                    <div className="flex flex-col items-center -space-y-3">
                        {[...Array(config.height)].map((_, j) => (
                            <MarigoldFlower key={j} isOrange={j % 2 === 0} />
                        ))}
                    </div>
                </motion.div>
                );
            })}
        </div>
    );
};

export default MarigoldLadi;