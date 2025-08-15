import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Card from '../ui/Card';
import { education } from '../../utils/data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Education 🎓
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            My academic journey and the foundation of my technical knowledge
          </p>
        </motion.div>

        <div className="space-y-8 relative ">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-600 transform-none w-1 -z-10" />

              <Card className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white dark:text-black" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                          : 'bg-black text-white dark:bg-white dark:text-black'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {edu.institution}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 dark:text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" />
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;