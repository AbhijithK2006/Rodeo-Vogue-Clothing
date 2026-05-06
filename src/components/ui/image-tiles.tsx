'use client'
import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';

interface ImageRevealProps {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
}

export default function ImageReveal({ image1, image2, image3, image4, image5 }: ImageRevealProps) {
    const images = [image1, image2, image3, image4, image5];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const basePositions = isMobile ? [
        { rotate: -12, x: -140, y: 20, zIndex: 10 },
        { rotate: -6, x: -70, y: 10, zIndex: 20 },
        { rotate: 0, x: 0, y: 0, zIndex: 30 },
        { rotate: 6, x: 70, y: 10, zIndex: 20 },
        { rotate: 12, x: 140, y: 20, zIndex: 10 },
    ] : [
        { rotate: -16, x: -260, y: 30, zIndex: 10 },
        { rotate: -8, x: -130, y: 10, zIndex: 20 },
        { rotate: 0, x: 0, y: 0, zIndex: 30 },
        { rotate: 8, x: 130, y: 10, zIndex: 20 },
        { rotate: 16, x: 260, y: 30, zIndex: 10 },
    ];

    return (
        <div className="relative flex items-center justify-center w-full h-[400px] md:h-[500px] my-10 md:my-20">
            {images.map((src, index) => {
                const isHovered = hoveredIndex === index;
                const base = basePositions[index];
                
                let rotate = base.rotate;
                let x = base.x;
                let y = base.y;
                let zIndex = base.zIndex;
                let scale = 1;
                let filter = "brightness(1) contrast(1)";

                if (hoveredIndex !== null) {
                    if (isHovered) {
                        rotate = 0;
                        y = isMobile ? -20 : -40;
                        scale = isMobile ? 1.08 : 1.15;
                        zIndex = 50;
                        filter = "brightness(1.05) contrast(1.05) drop-shadow(0 25px 35px rgba(0,0,0,0.3))";
                    } else {
                        const distance = index - hoveredIndex;
                        const spreadFactor = isMobile ? 25 : 40;
                        x = base.x + (distance * spreadFactor);
                        rotate = base.rotate + (distance * 3);
                        y = base.y + Math.abs(distance) * (isMobile ? 10 : 15);
                        scale = 0.95;
                        filter = "brightness(0.6) contrast(0.9)";
                    }
                }

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 150, x: 0, rotate: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            rotate,
                            x,
                            y,
                            scale,
                            zIndex,
                            filter,
                            transition: {
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                                mass: 0.8,
                                delay: hoveredIndex === null ? index * 0.1 : 0 
                            }
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`absolute w-52 h-72 md:w-64 md:h-[22rem] origin-bottom overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] border border-white/60 cursor-pointer ${index === 0 || index === 4 ? "hidden md:block" : ""}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        whileTap={{ scale: isHovered ? 1.2 : 1 }}
                    >
                        <img 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            className="object-cover w-full h-full p-2.5 rounded-[1.25rem] transition-transform duration-700 hover:scale-105" 
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}
