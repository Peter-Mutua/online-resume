import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Server, Monitor, Download, Eye } from 'lucide-react';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: "Certified Kubernetes Application Developer",
      icon: Server,
      color: "bg-blue-500",
      description: "Advanced container orchestration and application deployment",
      pdfUrl: "/certificates/kubernetes-cert.pdf",
      issueDate: "2024"
    },
    {
      title: "Certified Information System Security Professional (CISSP)",
      icon: Shield,
      color: "bg-red-500",
      description: "Comprehensive cybersecurity and information systems security",
      pdfUrl: "/certificates/cissp-cert.pdf",
      issueDate: "2023"
    },
    {
      title: "MITRE ATT&CK Defender Team (MAD) ATT&CK Fundamentals",
      icon: Shield,
      color: "bg-orange-500",
      description: "Cyber threat detection and defense frameworks",
      pdfUrl: "/certificates/mitre-cert.pdf",
      issueDate: "2023"
    },
    {
      title: "Introduction to IT & Cybersecurity",
      icon: Monitor,
      color: "bg-green-500",
      description: "Foundational knowledge in IT infrastructure and security",
      pdfUrl: "/certificates/it-security-cert.pdf",
      issueDate: "2022"
    }
  ];

  const handleCertClick = (index: number) => {
    setSelectedCert(selectedCert === index ? null : index);
  };

  const handleDownloadCert = (pdfUrl: string, title: string) => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    link.click();
  };

  const handleViewCert = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`cert-bg-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Award className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Professional Certifications
          </motion.h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Continuous learning and professional development in cutting-edge
            technologies and security practices.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
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
              className="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
              onClick={() => handleCertClick(index)}
            >
              <div className="flex items-start mb-4">
                <div className={`${cert.color} p-2 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {cert.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{
                  height: selectedCert === index ? 'auto' : 0,
                  opacity: selectedCert === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewCert(cert.pdfUrl);
                      }}
                      className="flex items-center px-2 sm:px-3 py-1 sm:py-2 bg-blue-500 text-white rounded-lg text-xs sm:text-sm hover:bg-blue-600 transition-colors"
                    >
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View Certificate
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadCert(cert.pdfUrl, cert.title);
                      }}
                      className="flex items-center px-2 sm:px-3 py-1 sm:py-2 bg-green-500 text-white rounded-lg text-xs sm:text-sm hover:bg-green-600 transition-colors"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Download
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-2" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Professional Certification</span>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;