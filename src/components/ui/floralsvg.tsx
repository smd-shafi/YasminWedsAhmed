import React from 'react';

const FloralSVG = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Long trailing leaves/stems */}
        <path d="M40 40 Q 40 150 70 180" stroke="#6B8E23" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 40 Q 150 40 180 70" stroke="#6B8E23" strokeWidth="3" strokeLinecap="round" />

        {/* Small Yellow Flowers */}
        <circle cx="65" cy="110" r="15" fill="#FFD700" opacity="0.8" />
        <circle cx="110" cy="65" r="15" fill="#FFD700" opacity="0.8" />

        {/* Main Red Flower Petals */}
        <g transform="translate(45, 45)">
            {[...Array(12)].map((_, i) => (
                <ellipse
                    key={i}
                    cx="0" cy="25" rx="8" ry="20"
                    fill="#E63946"
                    transform={`rotate(${i * 30})`}
                />
            ))}
            {/* Flower Center */}
            <circle r="12" fill="#3D0B0B" />
            <circle r="8" fill="#5E1A1A" />
        </g>

        {/* Decorative Leaf accents */}
        <path d="M20 10 Q 5 30 20 50" fill="#4F7942" />
        <path d="M10 20 Q 30 5 50 20" fill="#4F7942" />
    </svg>
);

export default FloralSVG;