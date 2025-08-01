import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Loader } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFDownload: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const generatePDF = async () => {
    setIsGenerating(true);
    setProgress(0);
    
    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      // Create a temporary container for PDF content
      const pdfContent = document.createElement('div');
      pdfContent.style.width = '210mm';
      pdfContent.style.minHeight = '297mm';
      pdfContent.style.padding = '20mm';
      pdfContent.style.backgroundColor = 'white';
      pdfContent.style.fontFamily = 'Arial, sans-serif';
      pdfContent.style.fontSize = '12px';
      pdfContent.style.lineHeight = '1.4';
      pdfContent.style.color = '#333';
      
      pdfContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3B82F6; padding-bottom: 20px;">
          <h1 style="font-size: 28px; margin: 0; color: #1F2937;">PETER MWENDWA MUTUA</h1>
          <p style="font-size: 16px; color: #3B82F6; margin: 5px 0;">Solutions Architect & Full Stack Developer</p>
          <div style="margin-top: 15px; font-size: 11px;">
            <p>📧 petermwendwa94@gmail.com | 📱 +254 722 626 242 | 📍 Nairobi, Kenya</p>
            <p>🔗 GitHub: github.com/Peter-Mutua | 💼 LinkedIn: linkedin.com/in/peter-mutua-65407a134</p>
          </div>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="color: #1F2937; border-bottom: 1px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px;">PROFESSIONAL SUMMARY</h2>
          <p>Highly organized and hard-working Solutions Architect with 7+ years of experience in banking applications, document management systems, HR systems, and fintech solutions. Proven track record in designing scalable systems and leading cross-functional teams.</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="color: #1F2937; border-bottom: 1px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px;">TECHNICAL SKILLS</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <h3 style="color: #3B82F6; margin-bottom: 8px;">Frontend Development</h3>
              <p>JavaScript, React.js, Vue.js, React Native, Flutter, Android (Java)</p>
            </div>
            <div>
              <h3 style="color: #3B82F6; margin-bottom: 8px;">Backend Development</h3>
              <p>Node.js, Spring Boot (Java), Python, PHP</p>
            </div>
            <div>
              <h3 style="color: #3B82F6; margin-bottom: 8px;">Databases</h3>
              <p>PostgreSQL, MySQL, MongoDB, Oracle</p>
            </div>
            <div>
              <h3 style="color: #3B82F6; margin-bottom: 8px;">DevOps & Cloud</h3>
              <p>Docker, Cloud Architecture, Performance Optimization</p>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="color: #1F2937; border-bottom: 1px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px;">WORK EXPERIENCE</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1F2937; margin-bottom: 5px;">Solutions Architect - NCBA BANK (2025 - Present)</h3>
            <ul style="margin-left: 20px; margin-bottom: 10px;">
              <li>Lead architectural design of scalable, maintainable systems</li>
              <li>Evaluate and recommend technologies, frameworks, and tools</li>
              <li>Maintain and improve legacy systems through refactoring</li>
              <li>Collaborate with cross-functional teams and mentor junior developers</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #1F2937; margin-bottom: 5px;">Full Stack Software Developer - Ronford Digital (2022 - 2025)</h3>
            <ul style="margin-left: 20px; margin-bottom: 10px;">
              <li>Contributed to architectural design ensuring scalability and performance</li>
              <li>Code maintenance and improvement of legacy systems</li>
              <li>Troubleshoot and debug production issues</li>
              <li>Provide mentorship to junior developers</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #1F2937; margin-bottom: 5px;">Software Engineer & System Administrator - Elsan Mechanical (2020 - 2022)</h3>
            <ul style="margin-left: 20px; margin-bottom: 10px;">
              <li>Design and implement scalable applications for data analysis</li>
              <li>Install and configure server software and databases</li>
              <li>Collaborate with IT team for smart solutions development</li>
            </ul>
          </div>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="color: #1F2937; border-bottom: 1px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px;">EDUCATION</h2>
          <p><strong>Bachelor of Science in Computer Science</strong> - Moi University, Eldoret (2022)</p>
        </div>

        <div style="margin-bottom: 25px;">
          <h2 style="color: #1F2937; border-bottom: 1px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px;">CERTIFICATIONS</h2>
          <ul style="margin-left: 20px;">
            <li>Certified Kubernetes Application Developer</li>
            <li>Certified Information System Security Professional (CISSP)</li>
            <li>MITRE ATT&CK Defender Team (MAD) ATT&CK Fundamentals</li>
            <li>Introduction to IT & Cybersecurity</li>
          </ul>
        </div>

        <div>
          <h2 style="color: #1F2937; border-bottom: 1px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px;">KEY PROJECTS</h2>
          <ul style="margin-left: 20px;">
            <li><strong>NCBA Loop Mobile Banking:</strong> Complete banking app for online transactions and loan management</li>
            <li><strong>Payment Notification System:</strong> Real-time transaction updates for mobile and bank payments</li>
            <li><strong>Scoring Engine:</strong> Credit scoring system with CRB integration and M-Pesa analysis</li>
            <li><strong>Document Management System:</strong> Secure document storage and organization platform</li>
            <li><strong>HR Management System:</strong> Employee portal for leave applications and salary advances</li>
          </ul>
        </div>
      `;

      // Temporarily add to DOM for rendering
      document.body.appendChild(pdfContent);
      
      // Generate canvas from HTML
      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Remove temporary element
      document.body.removeChild(pdfContent);

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Peter_Mwendwa_Mutua_Resume.pdf');
      
      setProgress(100);
      setTimeout(() => setProgress(0), 2000);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
      setProgress(0);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Download Resume
          </h2>
          <p className="text-blue-300 mb-8 max-w-2xl mx-auto">
            Get a PDF copy of my complete resume with all professional details, 
            experience, and project information for your records.
          </p>
          
          <motion.button
            onClick={generatePDF}
            disabled={isGenerating}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={isGenerating ? {
              background: ["#3B82F6", "#1D4ED8", "#3B82F6"],
            } : {}}
            transition={isGenerating ? {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            } : { duration: 0.2 }}
            className="relative inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed overflow-hidden"
          >
            {/* Progress bar */}
            {isGenerating && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-blue-300"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0"
              animate={isGenerating ? {
                opacity: [0, 0.3, 0],
                x: ["-100%", "100%"]
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {isGenerating ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Loader className="w-5 h-5 mr-3" />
                </motion.div>
                Generating PDF...
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Download className="w-5 h-5 mr-3" />
                </motion.div>
                {progress > 0 && progress < 100 ? `Generating... ${Math.round(progress)}%` : 'Download PDF Resume'}
              </>
            )}
          </motion.button>

          <div className="mt-6 flex items-center justify-center text-blue-300 text-sm">
            <FileText className="w-4 h-4 mr-2" />
            <span>Professional format • Complete details • Ready to print</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PDFDownload;