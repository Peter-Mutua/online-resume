import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Smartphone, 
  FileText, 
  MessageCircle, 
  Calculator, 
  Users, 
  Ticket, 
  ShoppingCart, 
  GraduationCap,
  Home,
  Eye,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Fintech Solutions Suite",
      icon: CreditCard,
      color: "bg-blue-500",
      category: "Banking & Payments",
      description: "Comprehensive financial technology solutions for NCBA Bank including payment processing, mobile banking, and loan management systems.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
      subProjects: [
        {
          name: "Instant Payment Notification System",
          description: "Real-time transaction update system handling callbacks from payment providers like M-Pesa, validating transactions, and updating statuses."
        },
        {
          name: "NCBA Loop Mobile Banking",
          description: "Complete mobile banking application enabling online transactions, loan applications, and savings management."
        },
        {
          name: "Loop Go Payment Platform",
          description: "Token purchase system for Nairobi Expressway tolls, Madaraka Express bookings, and bill payments."
        },
        {
          name: "Scoring Engine",
          description: "Credit scoring system integrating with CRB, KYC verification, and M-Pesa statement analysis for loan eligibility."
        }
      ]
    },
    {
      title: "Document Management System",
      icon: FileText,
      color: "bg-green-500",
      category: "Enterprise Systems",
      description: "Secure document storage, organization, and sharing platform for enterprise organizations.",
      technologies: ["Java Spring Boot", "PostgreSQL", "AWS S3", "React"],
      subProjects: [
        {
          name: "Document Storage & Retrieval",
          description: "Secure cloud-based document storage with advanced search and categorization capabilities."
        },
        {
          name: "Access Control & Permissions",
          description: "Role-based access control system ensuring document security and compliance."
        }
      ]
    },
    {
      title: "Human Resource Management System",
      icon: Users,
      color: "bg-purple-500",
      category: "HR & Operations",
      description: "Comprehensive HR solution for employee management, leave applications, and salary advances.",
      technologies: ["Vue.js", "PHP", "MySQL", "Laravel"],
      subProjects: [
        {
          name: "Employee Self-Service Portal",
          description: "Employee portal for leave applications, salary advance requests, and personal information management."
        },
        {
          name: "HR Analytics Dashboard",
          description: "Real-time analytics and reporting for HR operations and employee performance tracking."
        }
      ]
    },
    {
      title: "Survey & Feedback System",
      icon: MessageCircle,
      color: "bg-orange-500",
      category: "Customer Experience",
      description: "Customer feedback collection and analysis platform for service improvement.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      subProjects: [
        {
          name: "Multi-channel Survey Platform",
          description: "Mobile and web survey platform with real-time response collection and analysis."
        },
        {
          name: "Analytics & Reporting",
          description: "Advanced analytics dashboard for customer satisfaction metrics and insights."
        }
      ]
    },
    {
      title: "Point of Sale System",
      icon: Calculator,
      color: "bg-red-500",
      category: "Retail & Commerce",
      description: "Complete POS solution for inventory management, sales tracking, and invoice generation.",
      technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
      subProjects: [
        {
          name: "Inventory Management",
          description: "Real-time inventory tracking with automated reorder alerts and stock management."
        },
        {
          name: "Sales & Reporting",
          description: "Comprehensive sales reporting with invoice generation and delivery note creation."
        }
      ]
    },
    {
      title: "E-commerce Platform",
      icon: ShoppingCart,
      color: "bg-teal-500",
      category: "E-commerce",
      description: "Full-featured online shopping platform with delivery management and payment processing.",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
      subProjects: [
        {
          name: "Product Catalog & Search",
          description: "Advanced product catalog with search, filtering, and recommendation engine."
        },
        {
          name: "Order & Delivery Management",
          description: "Complete order processing system with delivery tracking and customer notifications."
        }
      ]
    },
    {
      title: "Student Information Management System",
      icon: GraduationCap,
      color: "bg-indigo-500",
      category: "Education",
      description: "Comprehensive student portal for admissions, academic records, and online learning.",
      technologies: ["Angular", "Spring Boot", "Oracle", "Docker"],
      subProjects: [
        {
          name: "Student Portal",
          description: "Complete student lifecycle management from application to graduation."
        },
        {
          name: "Academic Management",
          description: "Course registration, transcript generation, and academic record management."
        }
      ]
    },
    {
      title: "Ticketing & Events System",
      icon: Ticket,
      color: "bg-pink-500",
      category: "Events & Travel",
      description: "Event ticketing and travel booking platform with reservation management.",
      technologies: ["React", "Python Django", "PostgreSQL", "Redis"],
      subProjects: [
        {
          name: "Event Management",
          description: "Complete event creation, ticket design, and sales management platform."
        },
        {
          name: "Travel Booking",
          description: "Integrated travel booking system with seat selection and payment processing."
        }
      ]
    },
    {
      title: "Apartment Leasing System",
      icon: Home,
      color: "bg-yellow-500",
      category: "Real Estate",
      description: "Property management solution for landlords to manage rentals, tenants, and maintenance.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
      subProjects: [
        {
          name: "Property Management",
          description: "Complete property portfolio management with vacancy tracking and maintenance scheduling."
        },
        {
          name: "Tenant Portal",
          description: "Tenant self-service portal for rent payments, maintenance requests, and communication."
        }
      ]
    },
    {
      title: "OCR API Services",
      icon: Eye,
      color: "bg-cyan-500",
      category: "AI & Automation",
      description: "Optical Character Recognition APIs for automated text extraction from documents and images.",
      technologies: ["Python", "TensorFlow", "FastAPI", "OpenCV"],
      subProjects: [
        {
          name: "Document Processing",
          description: "Advanced OCR for PDF and image text extraction with high accuracy rates."
        },
        {
          name: "Auto-form Filling",
          description: "Automated form filling integration for merchant applications and data entry."
        }
      ]
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive portfolio of enterprise-grade applications spanning fintech, 
            healthcare, education, and e-commerce domains.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`${project.color} p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0`}>
                      <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{project.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{project.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleProject(index)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                    aria-label={expandedProject === index ? "Collapse project" : "Expand project"}
                  >
                    {expandedProject === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>

                <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-2 sm:gap-3 mb-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://github.com/Peter-Mutua/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 sm:px-3 py-1 sm:py-2 bg-gray-800 text-white rounded-lg text-xs sm:text-sm hover:bg-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    GitHub
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://demo.${project.title.toLowerCase().replace(/\s+/g, '-')}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 sm:px-3 py-1 sm:py-2 bg-blue-500 text-white rounded-lg text-xs sm:text-sm hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Live Demo
                  </motion.a>
                </div>

                {expandedProject === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Project Components:</h4>
                    <div className="space-y-3 sm:space-y-4">
                      {project.subProjects.map((subProject, subIndex) => (
                        <div
                          key={subIndex}
                          className="bg-gray-50 p-3 sm:p-4 rounded-lg"
                        >
                          <h5 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{subProject.name}</h5>
                          <p className="text-xs sm:text-sm text-gray-600">{subProject.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;