import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "NCBA Bank",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Peter's architectural expertise transformed our payment systems. His ability to design scalable solutions while mentoring the team made him invaluable to our fintech initiatives."
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Ronford Digital",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Working with Peter was exceptional. His full-stack expertise and problem-solving skills helped us deliver complex projects on time. He's a natural leader and mentor."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "CTO",
      company: "TechVenture Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Peter's technical depth across multiple technologies is impressive. His work on our document management system exceeded expectations and his code quality is outstanding."
    },
    {
      name: "James Kimani",
      role: "Engineering Manager",
      company: "Elsan Mechanical",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Peter combines strong technical skills with excellent communication. His system administration expertise and software development capabilities made him a key team member."
    },
    {
      name: "Lisa Thompson",
      role: "Project Director",
      company: "International Leadership University",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "During his practical attachment, Peter showed remarkable dedication and learning ability. His contributions to our software projects were significant and professional."
    },
    {
      name: "David Ochieng",
      role: "Lead Developer",
      company: "FinTech Innovations",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      feedback: "Peter's expertise in banking systems and payment processing is exceptional. His work on our scoring engine and payment notification systems was flawless."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Feedback from colleagues, managers, and clients who have experienced 
            my technical expertise and professional collaboration firsthand.
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main testimonial display */}
          <div className="relative h-96 sm:h-80 md:h-72 lg:h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />
                    <p className="text-gray-700 italic leading-relaxed text-base sm:text-lg mb-6">
                      "{testimonials[currentIndex].feedback}"
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center">
                          <User className="w-6 h-6 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-xs sm:text-sm text-blue-600 font-medium">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isAutoPlaying ? 'Pause Auto-scroll' : 'Resume Auto-scroll'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;