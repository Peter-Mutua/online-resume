import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Code } from 'lucide-react';
import { TechStackShowcase } from './TechLogos';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left flex-1"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4"
            >
              <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-400 mr-2 sm:mr-3 flex-shrink-0" />
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                Peter Mwendwa Mutua
              </h1>
            </motion.div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-300 mb-2 sm:mb-3">
              Solutions Architect & Full Stack Developer
            </p>
            <p className="text-gray-300 max-w-2xl text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 lg:mb-6">
              7+ years of experience in building scalable systems across banking, 
              document management, HR systems, and more.
            </p>
            
            {/* Tech Stack Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TechStackShowcase />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-2 w-full lg:w-auto lg:min-w-[260px] xl:min-w-[280px]"
          >
            {/* Email */}
            <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              <a href="mailto:petermwendwa94@gmail.com" className="hover:underline break-all flex-1 min-w-0">
                petermwendwa94@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <a href="tel:+254722626242" className="hover:underline flex-1">
                +254 722 626 242
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-300 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="flex-1">Nairobi, Kenya</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
              <Github className="w-4 h-4 mr-2 flex-shrink-0" />
              <a href="https://github.com/Peter-Mutua" target="_blank" rel="noopener noreferrer" className="hover:underline flex-1 min-w-0 truncate">
                GitHub Profile
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm">
              <Linkedin className="w-4 h-4 mr-2 flex-shrink-0" />
              <a href="https://www.linkedin.com/in/peter-mutua-65407a134/" target="_blank" rel="noopener noreferrer" className="hover:underline flex-1 min-w-0 truncate">
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;