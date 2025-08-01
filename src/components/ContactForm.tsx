import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create mailto link for fallback
      const mailtoLink = `mailto:petermwendwa94@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;

      toast.success('Message prepared! Your email client should open now.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Please try contacting me directly at petermwendwa94@gmail.com', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-blue-300 max-w-3xl mx-auto">
            Ready to discuss your next project? Let's connect and explore how we can 
            work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-blue-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Whether you're looking for a solutions architect, full-stack developer, 
                or technical consultant, I'm here to help turn your vision into reality. 
                With over 7 years of experience in fintech, banking, and enterprise systems, 
                I bring both technical expertise and business acumen to every project.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-3 sm:p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
              >
                <div className="bg-blue-500 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">Email</h4>
                  <a 
                    href="mailto:petermwendwa94@gmail.com" 
                    className="text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base break-all"
                  >
                    petermwendwa94@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-3 sm:p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
              >
                <div className="bg-green-500 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Phone</h4>
                  <a 
                    href="tel:+254722626242" 
                    className="text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base"
                  >
                    +254 722 626 242
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-3 sm:p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm"
              >
                <div className="bg-purple-500 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Location</h4>
                  <span className="text-blue-300 text-sm sm:text-base">Nairobi, Kenya</span>
                </div>
              </motion.div>
            </div>

            <div className="pt-4 sm:pt-6">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Areas of Expertise</h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  'Solutions Architecture',
                  'Full-Stack Development',
                  'Banking & Fintech',
                  'Cloud Infrastructure',
                  'API Design',
                  'Database Optimization',
                  'Mobile Development',
                  'DevOps & CI/CD'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-blue-500 bg-opacity-20 text-blue-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 bg-white bg-opacity-20 border border-gray-300 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 bg-white bg-opacity-20 border border-gray-300 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 bg-white bg-opacity-20 border border-gray-300 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 bg-white bg-opacity-20 border border-gray-300 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  />
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-3 sm:p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-green-300 text-sm sm:text-base">
                    Message prepared! Your email client should open now.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-3 sm:p-4 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg"
                >
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-red-300 text-sm sm:text-base">
                    Please contact me directly at petermwendwa94@gmail.com
                  </span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? undefined : "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                animate={isSubmitting ? {
                  background: ["#3B82F6", "#1D4ED8", "#3B82F6"],
                } : {}}
                transition={isSubmitting ? {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : { duration: 0.2 }}
                className="relative w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 sm:py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:cursor-not-allowed overflow-hidden text-sm sm:text-base"
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0"
                  animate={isSubmitting ? {
                    opacity: [0, 0.3, 0],
                    x: ["-100%", "100%"]
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </section>
  );
};

export default ContactForm;