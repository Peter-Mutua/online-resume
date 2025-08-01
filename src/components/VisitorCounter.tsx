import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Users, Calendar, Download, RotateCcw, ChevronUp, ChevronDown, Lock, Shield, Activity } from 'lucide-react';
import { useVisitorTracking } from '../hooks/useVisitorTracking';
import { toast } from 'react-toastify';

const VisitorCounter: React.FC = () => {
  const { totalVisitors, todayVisitors, lastVisit, isLoading, exportData, resetStats, isAdmin } = useVisitorTracking();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleExport = async () => {
    try {
      await exportData();
      toast.success('Visitor data exported successfully!');
      setShowActions(false);
    } catch (error) {
      toast.error('Failed to export data. Admin access required.');
    }
  };

  const handleReset = async () => {
    if (!confirm('Are you sure you want to reset visitor statistics? This action cannot be undone.')) return;
    
    try {
      await resetStats();
      toast.success('Visitor statistics reset successfully!');
      setShowActions(false);
    } catch (error) {
      toast.error('Failed to reset statistics. Admin access required.');
    }
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
            <span className="text-sm text-gray-600">Loading stats...</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Main Counter Display */}
        <div className="p-3 sm:p-4 min-w-[240px] sm:min-w-[260px]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-800 flex items-center">
              <Eye className="w-4 h-4 mr-1 text-blue-500" />
              Visitor Stats
              {isAdmin && (
                <Shield className="w-3 h-3 ml-1 text-green-500" title="Admin Access" />
              )}
            </h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              )}
            </button>
          </div>
          
          <div className="space-y-2 text-xs sm:text-sm">
            <motion.div 
              className="flex items-center justify-between"
              whileHover={{ scale: 1.02 }}
            >
              <span className="flex items-center text-gray-600">
                <Users className="w-3 h-3 mr-1" />
                Total Visitors
              </span>
              <motion.span 
                className="font-semibold text-blue-600"
                key={totalVisitors}
                initial={{ scale: 1.2, color: "#10B981" }}
                animate={{ scale: 1, color: "#2563EB" }}
                transition={{ duration: 0.3 }}
              >
                {totalVisitors.toLocaleString()}
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between"
              whileHover={{ scale: 1.02 }}
            >
              <span className="flex items-center text-gray-600">
                <Calendar className="w-3 h-3 mr-1" />
                Today
              </span>
              <motion.span 
                className="font-semibold text-green-600"
                key={todayVisitors}
                initial={{ scale: 1.2, color: "#F59E0B" }}
                animate={{ scale: 1, color: "#10B981" }}
                transition={{ duration: 0.3 }}
              >
                {todayVisitors.toLocaleString()}
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200 overflow-hidden"
            >
              <div className="p-3 sm:p-4 space-y-3">
                {/* Last Visit Info */}
                <div className="text-xs text-gray-500">
                  <div className="font-medium mb-1">Last Updated:</div>
                  <div>{new Date(lastVisit).toLocaleString()}</div>
                </div>

                {/* Real-time indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Activity className="w-3 h-3 text-green-500" />
                    </motion.div>
                    <span className="text-xs text-gray-500">Auto-sync</span>
                  </div>
                  
                  {isAdmin && (
                    <button
                      onClick={() => setShowActions(!showActions)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center"
                    >
                      <Lock className="w-3 h-3 mr-1" />
                      {showActions ? 'Hide Admin' : 'Admin Panel'}
                    </button>
                  )}
                </div>

                {/* Tracking info */}
                <div className="text-xs text-gray-400 bg-blue-50 p-2 rounded">
                  <div className="flex items-center mb-1">
                    <span className="font-medium">Cross-Platform Tracking:</span>
                  </div>
                  <div>
                    Syncs across all devices and browsers
                  </div>
                </div>

                {/* Admin Action Buttons */}
                <AnimatePresence>
                  {showActions && isAdmin && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2 overflow-hidden"
                    >
                      <div className="text-xs text-gray-600 font-medium border-b border-gray-100 pb-1">
                        Admin Controls
                      </div>
                      
                      <div className="flex space-x-2">
                        <motion.button
                          onClick={handleExport}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Export Data
                        </motion.button>
                        
                        <motion.button
                          onClick={handleReset}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition-colors"
                        >
                          <RotateCcw className="w-3 h-3 mr-1" />
                          Reset
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Non-admin message */}
                {showActions && !isAdmin && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-gray-500 bg-gray-50 p-2 rounded"
                  >
                    <Lock className="w-3 h-3 inline mr-1" />
                    Admin authentication required for data export
                  </motion.div>
                )}

                {/* Update frequency info */}
                <div className="text-xs text-gray-400 text-center">
                  Updates every minute • Cross-device sync
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;