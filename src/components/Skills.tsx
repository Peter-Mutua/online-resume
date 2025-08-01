import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Search,
  GitBranch,
  Monitor,
  Globe,
  Layers,
  Package,
  Settings,
  Terminal,
  FileCode,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Activity,
  Gauge
} from 'lucide-react';

const Skills: React.FC = () => {
  // Programming language logos as SVG components
  const ProgrammingLogos = {
    React: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L19,8L21,9M15,4.5V2.5L13,3.5L15,4.5M9,4.5L11,3.5L9,2.5V4.5M3,9L5,8L3,7V9M7.5,12C7.5,10.61 8.61,9.5 10,9.5H14C15.39,9.5 16.5,10.61 16.5,12C16.5,13.39 15.39,14.5 14,14.5H10C8.61,14.5 7.5,13.39 7.5,12M12,10.5C11.17,10.5 10.5,11.17 10.5,12C10.5,12.83 11.17,13.5 12,13.5C12.83,13.5 13.5,12.83 13.5,12C13.5,11.17 12.83,10.5 12,10.5Z" fill="#61DAFB"/>
      </svg>
    ),
    JavaScript: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M7.5 15.5c0 1.5-1 2.5-2.5 2.5s-2.5-1-2.5-2.5 1-2.5 2.5-2.5 2.5 1 2.5 2.5zm9-1c0 2-1.5 3.5-3.5 3.5-2 0-3.5-1.5-3.5-3.5v-6h2v6c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5v-6h2v6z" fill="#000"/>
      </svg>
    ),
    NodeJS: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.32,6.61 3,7.12 3,7.66V16.34C3,16.88 3.32,17.39 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.68,17.39 21,16.88 21,16.34V7.66C21,7.12 20.68,6.61 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.05L19,7V17L12,21L5,17V7L12,3.05M8,12V16H10V12H8M14,12V16H16V12H14Z" fill="#68A063"/>
      </svg>
    ),
    Python: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M12,2A2,2 0 0,1 14,4V8A2,2 0 0,1 12,10H8V12H16V16A2,2 0 0,1 14,18H10A2,2 0 0,1 8,16V12A2,2 0 0,1 10,10H14V8H6V4A2,2 0 0,1 8,2H12M10,4V6H12V4H10M10,16V18H12V16H10Z" fill="#3776AB"/>
        <circle cx="10" cy="5" r="0.5" fill="#FFD43B"/>
        <circle cx="14" cy="19" r="0.5" fill="#FFD43B"/>
      </svg>
    ),
    Java: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M8.5,18.5C8.5,19.88 7.38,21 6,21C4.62,21 3.5,19.88 3.5,18.5C3.5,17.12 4.62,16 6,16C7.38,16 8.5,17.12 8.5,18.5M20.5,18.5C20.5,19.88 19.38,21 18,21C16.62,21 15.5,19.88 15.5,18.5C15.5,17.12 16.62,16 18,16C19.38,16 20.5,17.12 20.5,18.5M6,14C4.89,14 4,13.1 4,12V8C4,6.89 4.89,6 6,6H18C19.11,6 20,6.89 20,8V12C20,13.1 19.11,14 18,14H6M6,8V12H18V8H6Z" fill="#ED8B00"/>
      </svg>
    ),
    Flutter: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M14.5,16L9.5,21L12,23.5L19.5,16H14.5M14.5,8L19.5,3H14.5L7,10.5L9.5,13L14.5,8Z" fill="#02569B"/>
        <path d="M14.5,8L12,10.5L14.5,13H19.5L17,10.5L19.5,8H14.5Z" fill="#0175C2"/>
      </svg>
    ),
    Docker: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M21.81 10.25C21.75 10.21 21.25 9.82 20.17 9.82C19.89 9.82 19.61 9.85 19.33 9.9C19.12 8.5 18.35 7.75 17.19 7.35C16.98 7.27 16.76 7.27 16.55 7.35C16.33 7.43 16.17 7.58 16.09 7.78C15.86 8.29 15.85 9.73 16.74 10.79C16.27 11.09 15.61 11.14 15.18 11.14H2.62C2.28 11.14 2 11.42 2 11.76C2 13.37 2.53 14.93 3.54 16.2C4.64 17.58 6.26 18.25 8.35 18.25C12.85 18.25 16.14 16.61 17.85 12.78C18.58 12.84 19.96 12.84 20.92 11.34C20.98 11.25 21 11.14 20.96 11.04C20.92 10.94 20.84 10.86 20.74 10.82L21.81 10.25M3.85 10.16H5.59C5.65 10.16 5.7 10.11 5.7 10.05V8.5C5.7 8.44 5.65 8.39 5.59 8.39H3.85C3.79 8.39 3.74 8.44 3.74 8.5V10.05C3.74 10.11 3.79 10.16 3.85 10.16Z" fill="#2496ED"/>
      </svg>
    ),
    PostgreSQL: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M17.35,2.04C16.86,2.04 16.38,2.08 15.92,2.16C13.55,2.58 12.13,4.36 12.13,6.38V7.54C12.13,8.5 12.58,9.42 13.35,10.04C13.35,10.04 13.35,10.04 13.35,10.04C13.58,10.21 13.84,10.33 14.12,10.42C14.4,10.5 14.69,10.54 14.97,10.54H15.04C15.32,10.54 15.61,10.5 15.89,10.42C16.17,10.33 16.43,10.21 16.66,10.04C17.43,9.42 17.88,8.5 17.88,7.54V6.38C17.88,4.36 16.46,2.58 14.09,2.16C13.63,2.08 13.15,2.04 12.66,2.04C12.17,2.04 11.69,2.08 11.23,2.16C8.86,2.58 7.44,4.36 7.44,6.38V7.54C7.44,8.5 7.89,9.42 8.66,10.04C8.89,10.21 9.15,10.33 9.43,10.42C9.71,10.5 10,10.54 10.28,10.54H10.35C10.63,10.54 10.92,10.5 11.2,10.42C11.48,10.33 11.74,10.21 11.97,10.04C12.74,9.42 13.19,8.5 13.19,7.54V6.38C13.19,5.42 12.74,4.5 11.97,3.88C11.74,3.71 11.48,3.59 11.2,3.5C10.92,3.42 10.63,3.38 10.35,3.38H10.28C10,3.38 9.71,3.42 9.43,3.5C9.15,3.59 8.89,3.71 8.66,3.88C7.89,4.5 7.44,5.42 7.44,6.38V7.54C7.44,8.5 7.89,9.42 8.66,10.04" fill="#336791"/>
      </svg>
    ),
    MongoDB: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M12,2C11.5,2 11,2.19 10.59,2.59L2.59,10.59C1.8,11.37 1.8,12.63 2.59,13.41L10.59,21.41C11,21.81 11.5,22 12,22C12.5,22 13,21.81 13.41,21.41L21.41,13.41C22.2,12.63 22.2,11.37 21.41,10.59L13.41,2.59C13,2.19 12.5,2 12,2M12,4.83L19.17,12L12,19.17L4.83,12L12,4.83Z" fill="#47A248"/>
      </svg>
    ),
    PHP: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
        <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/>
        <path d="M7 10h2c1 0 2 .5 2 1.5S10 13 9 13H8v2H7v-5zm1 1v1h1c.5 0 1-.2 1-.5s-.5-.5-1-.5H8zm5-1h2c1 0 2 .5 2 1.5S15 13 14 13h-1v2h-1v-5zm1 1v1h1c.5 0 1-.2 1-.5s-.5-.5-1-.5h-1z" fill="white"/>
      </svg>
    )
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "bg-blue-500",
      skills: [
        { name: "JavaScript", Logo: ProgrammingLogos.JavaScript, icon: FileCode },
        { name: "React.js", Logo: ProgrammingLogos.React, icon: Code },
        { name: "React Native", Logo: ProgrammingLogos.React, icon: Smartphone },
        { name: "Flutter", Logo: ProgrammingLogos.Flutter, icon: Smartphone },
        { name: "Android (Java)", Logo: ProgrammingLogos.Java, icon: Smartphone },
        { name: "HTML/CSS", icon: Globe },
        { name: "TypeScript", icon: FileCode }
      ],
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "bg-green-500",
      skills: [
        { name: "Node.js", Logo: ProgrammingLogos.NodeJS, icon: Server },
        { name: "Spring Boot (Java)", Logo: ProgrammingLogos.Java, icon: Server },
        { name: "Python", Logo: ProgrammingLogos.Python, icon: Terminal },
        { name: "PHP", Logo: ProgrammingLogos.PHP, icon: Server },
        { name: "Express.js", icon: Network },
        { name: "Django", icon: Settings },
        { name: "REST APIs", icon: Globe }
      ],
      gradient: "from-green-100 to-emerald-100"
    },
    {
      title: "Database Management",
      icon: Database,
      color: "bg-purple-500",
      skills: [
        { name: "PostgreSQL", Logo: ProgrammingLogos.PostgreSQL, icon: Database },
        { name: "MySQL", icon: Database },
        { name: "MongoDB", Logo: ProgrammingLogos.MongoDB, icon: Database },
        { name: "Oracle", icon: Database },
        { name: "Redis", icon: HardDrive },
        { name: "Database Design", icon: Layers },
        { name: "Query Optimization", icon: Gauge }
      ],
      gradient: "from-purple-100 to-violet-100"
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "bg-orange-500",
      skills: [
        { name: "Docker", Logo: ProgrammingLogos.Docker, icon: Package },
        { name: "Kubernetes", icon: Cpu },
        { name: "Cloud Architecture", icon: Cloud },
        { name: "Performance Optimization", icon: Zap },
        { name: "CI/CD", icon: GitBranch },
        { name: "AWS/Azure", icon: Cloud },
        { name: "Monitoring", icon: Activity }
      ],
      gradient: "from-orange-100 to-amber-100"
    }
  ];

  const skillHighlights = [
    { 
      name: "Agile Methodology", 
      icon: GitBranch,
      description: "Scrum, Kanban, and iterative development practices"
    },
    { 
      name: "Performance & Scalability", 
      icon: Zap,
      description: "System optimization and horizontal scaling strategies"
    },
    { 
      name: "API Design & Implementation", 
      icon: Code,
      description: "RESTful APIs, GraphQL, and microservices architecture"
    },
    { 
      name: "Search Engine Optimization", 
      icon: Search,
      description: "Technical SEO, performance optimization, and analytics"
    },
    { 
      name: "Security & Compliance", 
      icon: Shield,
      description: "Authentication, authorization, and data protection"
    },
    { 
      name: "Mobile Development", 
      icon: Smartphone,
      description: "Cross-platform apps with React Native and Flutter"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive full-stack development expertise with 7+ years of experience
            across diverse technology stacks and business domains.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`bg-gradient-to-br ${category.gradient} p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                <div className={`${category.color} p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white bg-opacity-60 px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 flex items-center space-x-2 hover:bg-opacity-80 transition-all duration-200"
                  >
                    {skill.Logo ? (
                      <skill.Logo />
                    ) : skill.icon ? (
                      <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    ) : (
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    )}
                    <span className="truncate">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Core Competencies
          </h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {skillHighlights.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex items-center mb-2">
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="font-medium text-gray-800 text-sm sm:text-base">{skill.name}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 ml-8 sm:ml-9">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;