import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="mailto:petermwendwa94@gmail.com" className="hover:underline flex-1 min-w-0 break-all">
                  petermwendwa94@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="tel:+254722626242" className="hover:underline flex-1">
                  +254 722 626 242
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="flex-1">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Professional Profiles</h3>
            <div className="space-y-3">
              {/* GitHub */}
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-4 h-4 mr-3 flex-shrink-0" />
                <a 
                  href="https://github.com/Peter-Mutua" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline flex-1 min-w-0 truncate"
                >
                  GitHub Profile
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4 mr-3 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/peter-mutua-65407a134/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline flex-1 min-w-0 truncate"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solutions Architect & Full Stack Developer with 7+ years of experience 
              building scalable systems across banking, fintech, and enterprise applications. 
              Passionate about creating innovative solutions that drive business success.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>© {currentYear} Peter Mwendwa Mutua. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;