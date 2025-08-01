import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Solutions Architect",
      company: "NCBA BANK",
      location: "Nairobi",
      period: "2025 to Present",
      color: "bg-blue-500",
      responsibilities: [
        "Lead architectural design of scalable, maintainable, and high-performance systems",
        "Evaluate and recommend appropriate technologies, frameworks, and tools",
        "Maintain and improve legacy systems through refactoring and performance tuning",
        "Diagnose and resolve complex technical issues in production environments",
        "Collaborate with cross-functional teams including developers, product managers, and QA",
        "Ensure system architectures meet security, regulatory, and compliance requirements",
        "Enforce coding standards and development methodologies across teams",
        "Mentor junior developers and engineers, fostering career growth",
        "Design and optimize cloud-based solutions for scalability and cost efficiency",
        "Communicate technical solutions effectively with stakeholders"
      ]
    },
    {
      title: "Full Stack Software Developer",
      company: "Ronford Digital",
      location: "Nairobi",
      period: "2022 to 2025",
      color: "bg-green-500",
      responsibilities: [
        "Contributed to architectural design ensuring scalability, maintainability and performance",
        "Code maintenance and improvement of legacy systems including refactoring",
        "Troubleshoot and debug issues in production and development phases",
        "Collaborate with cross-functional teams including product managers and designers",
        "Ensure adherence to coding standards and established development processes",
        "Provide mentorship and guidance to junior developers",
        "Actively participate in coding and development activities in critical areas"
      ]
    },
    {
      title: "Software Engineer and System Administrator",
      company: "Elsan Mechanical Engineering",
      location: "Nairobi",
      period: "2020 - 2022",
      color: "bg-purple-500",
      responsibilities: [
        "Design and implement scalable applications for data analysis and retrieval",
        "Install and configure server software, programming languages, and databases",
        "Software design and development with focus on user experience",
        "Collaborate with IT team members to plan and develop smart solutions",
        "Estimate interface requirements between hardware and software",
        "Work with business analysts and technical support for optimal specifications"
      ]
    },
    {
      title: "Practical Attachment (Software Engineer)",
      company: "International Leadership University",
      location: "Nairobi",
      period: "08/2019 to 12/2019",
      color: "bg-orange-500",
      responsibilities: [
        "Consulted regularly with users and management on project status",
        "Transformed existing software to correct errors and upgrade interfaces",
        "Collaborated with IT team members to plan and develop solutions",
        "Improved software efficiency and performance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Progressive career growth across banking, fintech, and engineering domains
            with increasing responsibilities and technical leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="hidden md:flex absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"
                ></motion.div>

                {/* Content */}
                <div className="md:ml-20 w-full">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex items-center mb-3 lg:mb-0">
                        <div className={`${exp.color} p-2 rounded-lg mr-4`}>
                          <Building className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div
                          key={respIndex}
                          className="flex items-start group hover:bg-white hover:shadow-sm rounded-lg p-2 transition-all duration-200"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0 group-hover:text-blue-600" />
                          <span className="text-gray-700 group-hover:text-gray-900">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;