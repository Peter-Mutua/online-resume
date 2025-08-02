import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Server, Database, Cloud, Cpu, HardDrive, Wifi, Smartphone,
  Terminal, GitBranch, Globe, Settings, FileCode, Activity, Network
} from 'lucide-react';

const BackgroundEffects: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const techIcons = [
    Code, Server, Database, Cloud, Cpu, HardDrive, Wifi, Smartphone,
    Terminal, GitBranch, Globe, Settings, FileCode, Activity, Network
  ];

  const codeSnippets = [
    'const app = express();',
    'SELECT * FROM users;',
    'docker build -t myapp .',
    'npm install react',
    'git commit -m "feat"',
    'kubectl apply',
    'import { useState }',
    'app.listen(3000);',
    'def fetch_data():',
    'console.log("Ready");',
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Tech Icons */}
      {Array.from({ length: isMobile ? 15 : 25 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        return (
          <motion.div
            key={`tech-${i}`}
            className="absolute text-blue-400 opacity-20"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              fontSize: isMobile ? '1rem' : '1.25rem'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.3, 0.2],
              rotate: [0, 180, 360],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-blue-300 font-mono opacity-25 text-xs sm:text-sm"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: [60, -150],
            x: [0, Math.random() * 40 - 20, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Pulsing Circles */}
      {Array.from({ length: isMobile ? 6 : 10 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-blue-400 opacity-20"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid Pattern */}
      {!isMobile && (
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="border border-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.02,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundEffects;