import React from 'react';

// Reusable programming language logos component
export const ProgrammingLogos = {
  React: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
      <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L19,8L21,9M15,4.5V2.5L13,3.5L15,4.5M9,4.5L11,3.5L9,2.5V4.5M3,9L5,8L3,7V9M7.5,12C7.5,10.61 8.61,9.5 10,9.5H14C15.39,9.5 16.5,10.61 16.5,12C16.5,13.39 15.39,14.5 14,14.5H10C8.61,14.5 7.5,13.39 7.5,12M12,10.5C11.17,10.5 10.5,11.17 10.5,12C10.5,12.83 11.17,13.5 12,13.5C12.83,13.5 13.5,12.83 13.5,12C13.5,11.17 12.83,10.5 12,10.5Z" fill="#61DAFB"/>
    </svg>
  ),
  
  JavaScript: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" fill="#F7DF1E"/>
      <path d="M7.5 15.5c0 1.5-1 2.5-2.5 2.5s-2.5-1-2.5-2.5 1-2.5 2.5-2.5 2.5 1 2.5 2.5zm9-1c0 2-1.5 3.5-3.5 3.5-2 0-3.5-1.5-3.5-3.5v-6h2v6c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5v-6h2v6z" fill="#000"/>
    </svg>
  ),
  
  NodeJS: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.32,6.61 3,7.12 3,7.66V16.34C3,16.88 3.32,17.39 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.68,17.39 21,16.88 21,16.34V7.66C21,7.12 20.68,6.61 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.05L19,7V17L12,21L5,17V7L12,3.05M8,12V16H10V12H8M14,12V16H16V12H14Z" fill="#68A063"/>
    </svg>
  ),
  
  Python: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12,2A2,2 0 0,1 14,4V8A2,2 0 0,1 12,10H8V12H16V16A2,2 0 0,1 14,18H10A2,2 0 0,1 8,16V12A2,2 0 0,1 10,10H14V8H6V4A2,2 0 0,1 8,2H12M10,4V6H12V4H10M10,16V18H12V16H10Z" fill="#3776AB"/>
      <circle cx="10" cy="5" r="0.5" fill="#FFD43B"/>
      <circle cx="14" cy="19" r="0.5" fill="#FFD43B"/>
    </svg>
  ),
  
  Java: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M8.5,18.5C8.5,19.88 7.38,21 6,21C4.62,21 3.5,19.88 3.5,18.5C3.5,17.12 4.62,16 6,16C7.38,16 8.5,17.12 8.5,18.5M20.5,18.5C20.5,19.88 19.38,21 18,21C16.62,21 15.5,19.88 15.5,18.5C15.5,17.12 16.62,16 18,16C19.38,16 20.5,17.12 20.5,18.5M6,14C4.89,14 4,13.1 4,12V8C4,6.89 4.89,6 6,6H18C19.11,6 20,6.89 20,8V12C20,13.1 19.11,14 18,14H6M6,8V12H18V8H6Z" fill="#ED8B00"/>
    </svg>
  ),
  
  Flutter: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M14.5,16L9.5,21L12,23.5L19.5,16H14.5M14.5,8L19.5,3H14.5L7,10.5L9.5,13L14.5,8Z" fill="#02569B"/>
      <path d="M14.5,8L12,10.5L14.5,13H19.5L17,10.5L19.5,8H14.5Z" fill="#0175C2"/>
    </svg>
  ),
  
  Docker: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M21.81 10.25C21.75 10.21 21.25 9.82 20.17 9.82C19.89 9.82 19.61 9.85 19.33 9.9C19.12 8.5 18.35 7.75 17.19 7.35C16.98 7.27 16.76 7.27 16.55 7.35C16.33 7.43 16.17 7.58 16.09 7.78C15.86 8.29 15.85 9.73 16.74 10.79C16.27 11.09 15.61 11.14 15.18 11.14H2.62C2.28 11.14 2 11.42 2 11.76C2 13.37 2.53 14.93 3.54 16.2C4.64 17.58 6.26 18.25 8.35 18.25C12.85 18.25 16.14 16.61 17.85 12.78C18.58 12.84 19.96 12.84 20.92 11.34C20.98 11.25 21 11.14 20.96 11.04C20.92 10.94 20.84 10.86 20.74 10.82L21.81 10.25M3.85 10.16H5.59C5.65 10.16 5.7 10.11 5.7 10.05V8.5C5.7 8.44 5.65 8.39 5.59 8.39H3.85C3.79 8.39 3.74 8.44 3.74 8.5V10.05C3.74 10.11 3.79 10.16 3.85 10.16Z" fill="#2496ED"/>
    </svg>
  ),
  
  PostgreSQL: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M17.35,2.04C16.86,2.04 16.38,2.08 15.92,2.16C13.55,2.58 12.13,4.36 12.13,6.38V7.54C12.13,8.5 12.58,9.42 13.35,10.04C13.35,10.04 13.35,10.04 13.35,10.04C13.58,10.21 13.84,10.33 14.12,10.42C14.4,10.5 14.69,10.54 14.97,10.54H15.04C15.32,10.54 15.61,10.5 15.89,10.42C16.17,10.33 16.43,10.21 16.66,10.04C17.43,9.42 17.88,8.5 17.88,7.54V6.38C17.88,4.36 16.46,2.58 14.09,2.16C13.63,2.08 13.15,2.04 12.66,2.04C12.17,2.04 11.69,2.08 11.23,2.16C8.86,2.58 7.44,4.36 7.44,6.38V7.54C7.44,8.5 7.89,9.42 8.66,10.04C8.89,10.21 9.15,10.33 9.43,10.42C9.71,10.5 10,10.54 10.28,10.54H10.35C10.63,10.54 10.92,10.5 11.2,10.42C11.48,10.33 11.74,10.21 11.97,10.04C12.74,9.42 13.19,8.5 13.19,7.54V6.38C13.19,5.42 12.74,4.5 11.97,3.88C11.74,3.71 11.48,3.59 11.2,3.5C10.92,3.42 10.63,3.38 10.35,3.38H10.28C10,3.38 9.71,3.42 9.43,3.5C9.15,3.59 8.89,3.71 8.66,3.88C7.89,4.5 7.44,5.42 7.44,6.38V7.54C7.44,8.5 7.89,9.42 8.66,10.04" fill="#336791"/>
    </svg>
  ),
  
  TypeScript: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" fill="#3178C6"/>
      <path d="M12.5 8.5h3v1h-1v6h-1v-6h-1v-1zm-3 1v6h-1v-2.5h-2v2.5h-1v-6h1v2.5h2v-2.5h1z" fill="white"/>
    </svg>
  ),
  
  Kubernetes: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12,2L13.09,8.26L22,9L13.09,15.74L12,22L10.91,15.74L2,9L10.91,8.26L12,2Z" fill="#326CE5"/>
    </svg>
  )
};

// Tech stack showcase component
export const TechStackShowcase: React.FC<{ className?: string }> = ({ className = "" }) => {
  const techStack = [
    { name: 'React', Logo: ProgrammingLogos.React, color: '#61DAFB' },
    { name: 'JavaScript', Logo: ProgrammingLogos.JavaScript, color: '#F7DF1E' },
    { name: 'Node.js', Logo: ProgrammingLogos.NodeJS, color: '#68A063' },
    { name: 'Spring Boot', Logo: ProgrammingLogos.Java, color: '#6DB33F' },
    { name: 'Python', Logo: ProgrammingLogos.Python, color: '#3776AB' },
    { name: 'Java', Logo: ProgrammingLogos.Java, color: '#ED8B00' },
    { name: 'Flutter', Logo: ProgrammingLogos.Flutter, color: '#02569B' },
    { name: 'Docker', Logo: ProgrammingLogos.Docker, color: '#2496ED' },
    { name: 'Kubernetes', Logo: ProgrammingLogos.Kubernetes, color: '#326CE5' },
    { name: 'PostgreSQL', Logo: ProgrammingLogos.PostgreSQL, color: '#336791' }
  ];

  return (
    <div className={`flex flex-wrap gap-1 sm:gap-2 justify-center ${className}`}>
      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          className="flex items-center space-x-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-2 py-1 hover:bg-opacity-20 transition-all duration-200"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <tech.Logo className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs font-medium text-white">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingLogos;