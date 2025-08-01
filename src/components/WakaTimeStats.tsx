import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Code, Calendar, ExternalLink } from 'lucide-react';

const WakaTimeStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg"
    >
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Clock className="w-6 h-6 text-blue-600" />
        </motion.div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Coding Activity
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-2">
          Real-time coding statistics powered by WakaTime
        </p>
        <p className="text-blue-600 text-xs sm:text-sm font-medium">
          Recording since October 17, 2023
        </p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {/* WakaTime Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
        >
          <a 
            href="https://wakatime.com/@018b3cd3-dc1d-43b4-a583-8c98d46648cf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src="https://wakatime.com/badge/user/018b3cd3-dc1d-43b4-a583-8c98d46648cf.svg" 
              alt="Peter's coding time tracked by WakaTime"
              className="h-6 sm:h-8"
            />
          </a>
        </motion.div>

        {/* Profile Link */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
        >
          <a 
            href="https://wakatime.com/@petermutua" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full WakaTime Profile
          </a>
        </motion.div>

        {/* Additional Stats Display */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg p-3 text-center shadow-sm"
          >
            <Code className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Active Coding</div>
            <div className="text-sm font-semibold text-gray-900">Daily Tracked</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-3 text-center shadow-sm"
          >
            <Calendar className="w-5 h-5 text-green-500 mx-auto mb-1" />
            <div className="text-xs text-gray-500">Tracking Since</div>
            <div className="text-sm font-semibold text-gray-900">Oct 2023</div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xs sm:text-sm text-gray-600 text-center max-w-md"
        >
          Tracking my coding activity across multiple projects and technologies since October 2023. 
          Click the links above to view detailed statistics, language breakdowns, and coding patterns.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WakaTimeStats;