import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../utils/data';

const Home: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Ring Effects */}
              <div className="absolute inset-0 rounded-full">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-blue-500/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-purple-500/30"
                  animate={{
                    scale: [1.1, 1.2, 1.1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-indigo-500/30"
                  animate={{
                    scale: [1.2, 1.3, 1.2],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
              
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-black dark:border-white shadow-2xl">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay for extra depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 dark:to-black/10" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-4"
          >
            {personalInfo.tagline}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-500 mb-12 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Say Hello
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;