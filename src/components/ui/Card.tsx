import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
      className={`
        bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
        rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;