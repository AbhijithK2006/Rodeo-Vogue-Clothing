import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ExpandableGalleryProps {
  images: string[];
  className?: string;
  containerClassName?: string;
}

export const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({ images, className = '', containerClassName = 'h-96' }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) {
      return 1;
    }
    return hoveredIndex === index ? 2 : 0.5;
  };

  return (
    <div className={className}>
      {/* Horizontal Expandable Gallery */}
      <div className={`flex gap-1 w-full ${containerClassName}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-md ${index === 0 ? "hidden md:block" : ""}`}
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            onMouseEnter={() => {
              if (window.matchMedia('(hover: hover)').matches) {
                setHoveredIndex(index);
              }
            }}
            onMouseLeave={() => {
              if (window.matchMedia('(hover: hover)').matches) {
                setHoveredIndex(null);
              }
            }}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 0 : 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
