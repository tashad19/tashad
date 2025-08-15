import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcons: React.FC = () => {
  const techIcons = [
    { name: 'Python', symbol: 'Py', color: '#3776ab' },
    { name: 'JavaScript', symbol: 'JS', color: '#f7df1e' },
    { name: 'Java', symbol: 'Jv', color: '#ed8b00' },
    { name: 'C++', symbol: 'C++', color: '#00599c' },
    { name: 'React', symbol: 'Re', color: '#61dafb' },
    { name: 'Node', symbol: 'Nd', color: '#339933' },
    { name: 'HTML', symbol: 'H5', color: '#e34f26' },
    { name: 'CSS', symbol: 'C3', color: '#1572b6' }
  ];

  const getRandomPosition = (index: number) => {
    const angle = (index / techIcons.length) * 2 * Math.PI;
    const radius = 200 + Math.random() * 100;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {techIcons.map((icon, index) => {
        const position = getRandomPosition(index);
        return (
          <motion.div
            key={icon.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ 
              x: position.x, 
              y: position.y,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: position.x + Math.sin(Date.now() * 0.001 + index) * 20,
              y: position.y + Math.cos(Date.now() * 0.001 + index) * 20,
              opacity: 0.7,
              scale: 1,
              rotate: 360
            }}
            transition={{
              duration: 3 + index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg backdrop-blur-sm border border-white/20"
              style={{ 
                backgroundColor: `${icon.color}aa`,
                boxShadow: `0 0 20px ${icon.color}44`
              }}
              whileHover={{ scale: 1.2 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2 + index * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {icon.symbol}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;