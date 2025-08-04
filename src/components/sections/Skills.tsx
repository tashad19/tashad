import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Database, PenTool as Tool } from 'lucide-react';
import Card from '../ui/Card';
import { technicalSkills, softSkills } from '../../utils/data';

const Skills: React.FC = () => {
  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'language': return <Code className="h-5 w-5" />;
      case 'framework': return <Tool className="h-5 w-5" />;
      case 'database': return <Database className="h-5 w-5" />;
      case 'tool': return <Tool className="h-5 w-5" />;
      default: return <Code className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language': return 'from-blue-500 to-blue-600';
      case 'framework': return 'from-purple-500 to-purple-600';
      case 'database': return 'from-emerald-500 to-emerald-600';
      case 'tool': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Skills & Expertise 🧑‍💻
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and soft skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-white dark:text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Technical Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`
                      bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                      text-gray-800 dark:text-gray-200 p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200
                      flex items-center justify-center space-x-2 text-sm font-medium
                    `}
                  >
                    {getSkillIcon(skill.category)}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="h-6 w-6 text-white dark:text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;