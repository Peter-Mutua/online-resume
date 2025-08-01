import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science with comprehensive
            understanding of software engineering principles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 p-4 rounded-full mr-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-lg font-semibold text-blue-600">
                  Moi University
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 rounded-xl p-4">
              <div className="flex items-center mb-2 sm:mb-0">
                <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Completed: 2022</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Eldoret, Kenya</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-gray-700 italic">
                "Comprehensive computer science education covering software engineering, 
                algorithms, data structures, database management, and system design. 
                Strong foundation in programming languages and development methodologies."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;