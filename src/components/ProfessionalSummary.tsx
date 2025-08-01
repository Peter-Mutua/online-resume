import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, TrendingUp } from 'lucide-react';
import TypewriterText from './TypewriterText';
import { ProgrammingLogos } from './TechLogos';
import WakaTimeStats from './WakaTimeStats';

const ProfessionalSummary: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Summary
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Highly Organized & Experienced
                </h3>
                <p className="text-gray-600">
                  Over 7+ years of experience working with diverse systems including 
                  banking applications, document management, HR systems, and more.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-green-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Versatile Technology Stack
                </h3>
                <p className="text-gray-600">
                  Proficient in full-stack development with expertise in modern 
                  frontend frameworks, backend technologies, and database management.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Continuous Growth
                </h3>
                <p className="text-gray-600">
                  Committed to expanding knowledge and skills while incorporating 
                  training and professional development to drive organizational success.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Background tech logos */}
            <div className="absolute inset-0 opacity-5">
              {[
                { Logo: ProgrammingLogos.React, x: '10%', y: '20%' },
                { Logo: ProgrammingLogos.NodeJS, x: '80%', y: '15%' },
                { Logo: ProgrammingLogos.Python, x: '15%', y: '70%' },
                { Logo: ProgrammingLogos.Java, x: '75%', y: '75%' },
                { Logo: ProgrammingLogos.Docker, x: '50%', y: '10%' },
                { Logo: ProgrammingLogos.PostgreSQL, x: '85%', y: '45%' }
              ].map(({ Logo, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: x, top: y }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 8,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Logo className="w-8 h-8" />
                </motion.div>
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "
              <TypewriterText 
                text="I am a highly organized and hard-working individual with extensive experience in various systems. This has equipped me with skills, knowledge, and experience, expanding my learning to fully utilize my potential while making significant contributions to organizational success."
                speed={30}
                delay={500}
              />
              "
            </blockquote>
          </motion.div>
        </motion.div>

        {/* WakaTime Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <WakaTimeStats />
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;