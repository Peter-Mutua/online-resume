import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

  // Enhanced floating background elements for mobile
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
    { Icon: GitBranch, delay: 5, x: '15%', y: '60%' },
    { Icon: Globe, delay: 5.5, x: '75%', y: '12%' },
    { Icon: Settings, delay: 6, x: '40%', y: '70%' },
    { Icon: FileCode, delay: 6.5, x: '12%', y: '12%' },
    { Icon: Bug, delay: 7, x: '65%', y: '75%' },
    { Icon: Activity, delay: 7.5, x: '35%', y: '35%' },
    { Icon: LayoutDashboard, delay: 8, x: '25%', y: '55%' },
    { Icon: Network, delay: 8.5, x: '60%', y: '18%' },
    { Icon: UserCog, delay: 9, x: '45%', y: '45%' },
    // Additional mobile-specific elements
    { Icon: Code, delay: 9.5, x: '30%', y: '90%' },
    { Icon: Database, delay: 10, x: '90%', y: '40%' },
    { Icon: Cloud, delay: 10.5, x: '5%', y: '30%' },
    { Icon: Server, delay: 11, x: '70%', y: '60%' },
  ];

  // Enhanced code snippets for mobile visibility
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
    'let x = new Promise((resolve) => {});',
    'public static void main(String[] args)',
    'await fetch("/api/data");',
    'INSERT INTO logs (entry) VALUES (?);',
    'router.get("/api", handler);',
    'if (response.ok) return response.json();',
    'const [data, setData] = useState(null);',
    'useEffect(() => { fetchData(); }, []);',
    'return <div>Hello World</div>;',
    '@GetMapping("/home")',
    'async function initApp() {}',
    'echo "Starting app...";',
    'FROM node:18-alpine',
    'docker run -p 3000:3000 myapp',
    'spring.application.name=MyApp',
    'ENV NODE_ENV=production',
    'export DATABASE_URL=postgres://user',
    'curl -X POST http://localhost:8080/api',
    'npm install --save express',
    '#!/bin/bash',
    'console.warn("Deprecated API");',
    'throw new Error("Unexpected input");',
    'ALTER TABLE users ADD COLUMN active;',
    'git commit -m "Initial commit"',
    'kubectl get pods -A',
    'docker-compose up -d',
    'python manage.py migrate',
    'mvn clean install',
    'yarn add react@latest',
    'composer require laravel/framework',
    'go mod init project',
    'cargo build --release',
    'redis-cli SET key "value"',
    'mongosh --eval "db.users.find()"',
    'psql -d database -c "SELECT version();"',
    'terraform apply -auto-approve',
    'ansible-playbook deploy.yml',
    'helm install myapp ./chart',
    'ssh user@server "sudo systemctl restart"',
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Enhanced animated background elements for mobile */}
      <div className="absolute inset-0">
        {/* System icons - optimized for mobile */}
        {backgroundElements.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={`bg-${index}`}
            className="absolute opacity-30 sm:opacity-20 md:opacity-15"
            style={{ left: x, top: y }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1.2, 1.3, 1], 
              rotate: [0, 180, 360],
              opacity: [0, 0.5, 0.3, 0.4, 0.25],
              y: [0, -30, -15, -25, 0]
            }}
            transition={{
              duration: 4,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-400" />
          </motion.div>
        ))}

        {/* Enhanced floating code snippets for mobile */}
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={`code-${index}`}
            className="absolute text-blue-300 font-mono opacity-40 sm:opacity-30 md:opacity-20 font-normal"
            style={{
              left: `${Math.random() * 75 + 5}%`,
              top: `${Math.random() * 75 + 5}%`,
              fontSize: '12px',
              lineHeight: '1.2',
              whiteSpace: 'nowrap',
              zIndex: 1
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0, 0.6, 0.4, 0.5, 0],
              y: [50, -80, -160],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: 8,
              delay: index * 0.4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {snippet}
          </motion.div>
        ))}

        {/* Enhanced animated grid pattern for mobile */}
        <div className="absolute inset-0 opacity-15 sm:opacity-10 md:opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 grid-rows-10 sm:grid-rows-14 md:grid-rows-18 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={`grid-${i}`}
                className="border border-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0.3, 0.4, 0] }}
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

        {/* Enhanced pulsing circles for mobile */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border-2 border-blue-400 opacity-40 sm:opacity-30 md:opacity-20"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 120 + 40}px`,
              height: `${Math.random() * 120 + 40}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.8, 1.2, 1.5, 0],
              opacity: [0, 0.5, 0.3, 0.4, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Mobile-specific floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute bg-blue-400 rounded-full opacity-50 sm:opacity-40 md:opacity-30"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              width: '4px',
              height: '4px'
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0.5, 0.8, 0],
              scale: [1, 1.5, 0.5]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main content - enhanced for mobile */}
      <div className="text-center z-10 relative px-4 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Peter Mwendwa Mutua
          </motion.h1>
          <motion.p 
            className="text-blue-300 text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypewriterText 
              text="Solutions Architect & Full Stack Developer"
              speed={80}
              delay={1000}
            />
          </motion.p>
        </motion.div>

        {/* Enhanced animated tech icons for mobile */}
        <motion.div 
          className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[Code, Server, Database, Smartphone].map((Icon, index) => (
            <motion.div
              key={`main-icon-${index}`}
              className="relative"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400" />
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full opacity-40 sm:opacity-30 md:opacity-20"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0, 0.4]
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced progress bar for mobile */}
        <motion.div 
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-slate-800 rounded-full h-3 sm:h-4 overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-50 sm:opacity-40 md:opacity-30"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced loading text for mobile */}
        <motion.p 
          className="text-blue-300 text-sm sm:text-base animate-pulse mb-3 sm:mb-4"
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {currentText}
        </motion.p>

        {/* Enhanced progress percentage for mobile */}
        <motion.div 
          className="text-blue-400 text-sm sm:text-base font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {Math.round(progress)}% Complete
        </motion.div>

        {/* Enhanced system status indicators for mobile */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {['Frontend', 'Backend', 'Database', 'DevOps'].map((system, index) => (
            <motion.div
              key={system}
              className="flex items-center space-x-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <motion.div
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <span className="text-sm sm:text-base text-gray-400">{system}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;