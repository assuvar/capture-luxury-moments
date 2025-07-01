import React from 'react';
import { Camera, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/a539e6bf-7c4a-4fb1-8b6a-95e18a42c730.png" 
                alt="MahaCaptures" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">MahaCaptures</h3>
                <p className="text-white/70">Luxury Photography Studio</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Creating timeless memories through the art of photography. Based in Vellore and Bangalore, 
              we specialize in capturing life's most precious moments with unparalleled elegance and style.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mahacaptures2024/" className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-colors duration-300">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Wedding Photography</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Engagement Shoots</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Birthday Celebrations</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Corporate Events</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Fashion Photography</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors duration-300">Product Photography</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div className="text-white/70">
                  <p>Vellore, Tamil Nadu</p>
                  <p>Bangalore, Karnataka</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a href="tel:+919876543210" className="text-white/70 hover:text-primary transition-colors duration-300">
                  +91 9585966522
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:hello@mahacaptures.com" className="text-white/70 hover:text-primary transition-colors duration-300">
                  hello@mahacaptures.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm text-center md:text-left">
            <p>© {currentYear} MahaCaptures. All rights reserved.</p>
            <p className="mt-2">
              Website crafted by{' '}
              <a
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
               
              </a>
            </p>
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
