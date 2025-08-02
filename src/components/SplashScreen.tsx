import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Server, Database, Smartphone, Cloud, Cpu, HardDrive, Wifi,
  TerminalSquare, ShieldCheck, GitBranch, Globe, Settings, FileCode,
  Bug, Activity, LayoutDashboard, Network, UserCog 
} from 'lucide-react';
import TypewriterText from './TypewriterText';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const texts = [
    'Initializing systems...',
    'Loading components...',
    'Connecting to servers...',
    'Preparing systems...',
    'Optimizing performance...',
    'Almost ready...',
    'All systems go...'
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * texts.length);
    setCurrentText(texts[Math.min(textIndex, texts.length - 1)]);
  }, [progress]);

  // Background elements
  const backgroundElements = [
    { Icon: Code, delay: 0, x: '5%', y: '15%' },
    { Icon: Server, delay: 0.5, x: '85%', y: '20%' },
    { Icon: Database, delay: 1, x: '10%', y: '45%' },
    { Icon: Smartphone, delay: 1.5, x: '80%', y: '50%' },
    { Icon: Cloud, delay: 2, x: '50%', y: '8%' },
    { Icon: Cpu, delay: 2.5, x: '8%', y: '75%' },
    { Icon: HardDrive, delay: 3, x: '85%', y: '80%' },
    { Icon: Wifi, delay: 3.5, x: '55%', y: '85%' },
    { Icon: TerminalSquare, delay: 4, x: '20%', y: '25%' },
    { Icon: ShieldCheck, delay: 4.5, x: '70%', y: '30%' },
  ];

  const codeSnippets = [
    'const app = express();',
    'System.out.println("Hello World");',
    'function getData() {}',
    'SELECT * FROM users;',
    'const result = await fetch("/api");',
    'try { process(); } catch (e) {}',
    'import { useState } from "react";',
    'app.listen(3000);',
    'def fetch_data():',
    'console.log("Server running...");',
  ];

  return (
    <div className="splash-container">
      <div className="splash-background">
        {/* Floating Icons */}
        {backgroundElements.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={`icon-${index}`}
            className="splash-icon"
            style={{ left: x, top: y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.4, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        ))}

        {/* Floating Code Snippets */}
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={`code-${index}`}
            className="splash-code-snippet"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [50, -100]
            }}
            transition={{
              duration: 8,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {snippet}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="border border-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.02,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>

      <div className="splash-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h1 
            className={`font-bold text-white mb-3 ${isMobile ? 'text-3xl' : 'text-4xl'}`}
          >
            Peter Mwendwa Mutua
          </motion.h1>
          <motion.p className="text-blue-300 text-lg">
            <TypewriterText 
              text="Solutions Architect & Full Stack Developer"
              speed={80}
              delay={1000}
            />
          </motion.p>
        </motion.div>

        {/* Tech Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {[Code, Server, Database, Smartphone].map((Icon, index) => (
            <motion.div
              key={`tech-${index}`}
              className="relative"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-8 h-8 text-blue-400" />
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full opacity-30"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0, 0.4]
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="splash-progress-container">
          <motion.div 
            className="splash-progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="splash-progress-glow"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Loading Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentText}
            className="text-blue-300 text-sm mt-4 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </AnimatePresence>

        {/* Progress Percentage */}
        <p className="text-blue-400 text-sm font-mono">
          {Math.round(progress)}% Complete
        </p>

        {/* System Status */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Frontend', 'Backend', 'Database', 'DevOps'].map((system, index) => (
            <motion.div
              key={system}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-green-400"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <span className="text-xs text-gray-400">{system}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;