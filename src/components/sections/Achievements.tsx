import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../utils/data';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Achievements ⭐
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Key milestones and accomplishments throughout my journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  <span className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;