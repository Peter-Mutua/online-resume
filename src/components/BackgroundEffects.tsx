import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Server, Cloud, Cpu, HardDrive, Wifi, Monitor, Smartphone, GitBranch,
  Bug, Shield, Terminal, Globe, Layers, Package, BatteryCharging, Zap, Settings, FileCode,
  Activity, LayoutDashboard, Network, UserCog, Lock, Search, Wrench, Gauge, Cog, Binary
} from 'lucide-react';

const BackgroundEffects: React.FC = () => {
  const techIcons = [
    Code, Database, Server, Cloud, Cpu, HardDrive, Wifi, Monitor, Smartphone, GitBranch,
    Bug, Shield, Terminal, Globe, Layers, Package, BatteryCharging, Zap, Settings, FileCode,
    Activity, LayoutDashboard, Network, UserCog, Lock, Search, Wrench, Gauge, Cog, Binary
  ];

  const codeSnippets = [
    'const app = express();',
    'SELECT * FROM users WHERE active = true;',
    'docker build -t myapp:latest .',
    'npm install react@latest',
    'git commit -m "feat: add new feature"',
    'kubectl apply -f deployment.yaml',
    'import React, { useState } from "react";',
    'app.listen(3000, () => console.log("Server running"));',
    'db.collection("users").find({})',
    'spring.datasource.url=jdbc:postgresql://localhost/db',
    '@RestController @RequestMapping("/api")',
    'public class UserService implements IUserService',
    'kubectl get pods --all-namespaces',
    'FROM node:18-alpine AS builder',
    'CREATE TABLE users (id SERIAL PRIMARY KEY);',
    'const [state, setState] = useState(null);',
    'async function fetchData() { return await api.get(); }',
    'try { const result = await api.post(data); }',
    'export default function Component() {}',
    'function handleSubmit(event) { event.preventDefault(); }',
    'useEffect(() => { fetchData(); }, [dependency]);',
    'return <div className="container">{children}</div>',
    'pip install django==4.2.0',
    'mvn clean install -DskipTests',
    'composer require laravel/framework',
    'yarn add @types/node --dev',
    'go mod init github.com/user/project',
    'cargo build --release --target x86_64',
    'python manage.py migrate',
    'java -jar application.jar --server.port=8080',
    'redis-cli SET key "value" EX 3600',
    'mongosh --eval "db.users.find()"',
    'psql -d database -c "SELECT version();"',
    'curl -X POST http://api.example.com/data',
    'ssh user@server "sudo systemctl restart nginx"',
    'terraform apply -auto-approve',
    'ansible-playbook deploy.yml -i inventory',
    'helm install myapp ./chart',
    'docker-compose up -d --scale web=3'
  ];

  // Reduce motion for battery optimization
  const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating tech icons - reduced for battery optimization */}
      {Array.from({ length: shouldReduceMotion ? 15 : 25 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        return (
          <motion.div
            key={`tech-${i}`}
            className="absolute opacity-8 sm:opacity-6 md:opacity-4"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={shouldReduceMotion ? {
              scale: 1,
              rotate: 0
            } : {
              scale: [0, 1.2, 0.9, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              y: [0, -40, -20, -30, 0],
              x: [0, Math.random() * 30 - 15, 0]
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 12 + Math.random() * 8,
              delay: i * 0.3,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-500" />
          </motion.div>
        );
      })}

      {/* Floating code snippets - reduced for battery optimization */}
      {codeSnippets.slice(0, shouldReduceMotion ? 20 : 35).map((snippet, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-blue-300 font-mono opacity-15 sm:opacity-12 md:opacity-8 text-xs font-normal"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            fontSize: '11px',
            lineHeight: '1.2'
          }}
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={shouldReduceMotion ? {
            opacity: 0.1,
            y: 0,
            scale: 1
          } : {
            opacity: [0, 0.15, 0.1, 0.08, 0],
            y: [60, -120, -250],
            scale: [0.8, 1, 1.1, 1, 0.9]
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 15 + Math.random() * 10,
            delay: i * 0.8,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear"
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Animated grid - simplified for battery optimization */}
      <div className="absolute inset-0 opacity-4 sm:opacity-3 md:opacity-2">
        <motion.div
          className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-20 grid-rows-8 sm:grid-rows-12 md:grid-rows-16 lg:grid-rows-20 h-full w-full"
          initial={{ opacity: 0 }}
          animate={shouldReduceMotion ? {
            opacity: 0.02
          } : {
            opacity: [0, 0.04, 0.02, 0.03, 0]
          }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 8, 
            repeat: shouldReduceMotion ? 0 : Infinity 
          }}
        >
          {Array.from({ length: 320 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="border border-blue-300"
              initial={{ opacity: 0 }}
              animate={shouldReduceMotion ? {
                opacity: 0.02
              } : {
                opacity: [0, 0.1, 0.05, 0.08, 0]
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 6,
                delay: i * 0.005,
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Pulsing circles - reduced for battery optimization */}
      {Array.from({ length: shouldReduceMotion ? 6 : 10 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-blue-400 opacity-4 sm:opacity-3 md:opacity-2"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={shouldReduceMotion ? {
            scale: 1,
            opacity: 0.02
          } : {
            scale: [0, 1.3, 0.8, 1.1, 0],
            opacity: [0, 0.04, 0.02, 0.03, 0]
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 10 + Math.random() * 6,
            delay: i * 0.6,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Mobile-enhanced floating elements - reduced for battery optimization */}
      <div className="block">
        {Array.from({ length: shouldReduceMotion ? 8 : 12 }).map((_, i) => (
          <motion.div
            key={`mobile-${i}`}
            className="absolute opacity-6 sm:opacity-4 md:opacity-3"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
            }}
          >
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              animate={shouldReduceMotion ? {
                scale: 1,
                opacity: 0.04
              } : {
                scale: [1, 1.5, 1.2, 1.3, 1],
                opacity: [0.06, 0.12, 0.08, 0.1, 0.06],
                y: [0, -30, -15, -25, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 8 + Math.random() * 4,
                delay: i * 0.3,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Binary/hex patterns - reduced for battery optimization */}
      {['01010101', '0xFF', '0x1A2B', '101010', '0xDEAD', '11001100'].slice(0, shouldReduceMotion ? 3 : 6).map((pattern, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-green-400 font-mono opacity-8 sm:opacity-6 md:opacity-4 text-xs font-normal"
          style={{
            left: `${Math.random() * 85}%`,
            top: `${Math.random() * 85}%`,
          }}
          animate={shouldReduceMotion ? {
            opacity: 0.04
          } : {
            opacity: [0, 0.08, 0.04, 0.06, 0],
            y: [0, -100, -200],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 18 + Math.random() * 8,
            delay: i * 3,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear"
          }}
        >
          {pattern}
        </motion.div>
      ))}

      {/* Floating geometric shapes - reduced for battery optimization */}
      {Array.from({ length: shouldReduceMotion ? 4 : 6 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute opacity-4 sm:opacity-3 md:opacity-2"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
        >
          <motion.div
            className={`w-3 h-3 ${
              i % 3 === 0 ? 'bg-purple-400 rounded-full' :
              i % 3 === 1 ? 'bg-pink-400 rotate-45' :
              'bg-indigo-400 rounded-sm'
            }`}
            animate={shouldReduceMotion ? {
              scale: 1,
              opacity: 0.02
            } : {
              scale: [1, 1.3, 1],
              rotate: [0, 360],
              opacity: [0.04, 0.08, 0.04]
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 10 + Math.random() * 6,
              delay: i * 0.8,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundEffects;