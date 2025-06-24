
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Play } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi MahaCaptures, I'm interested in booking a photography session. Please share more details.");
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      {/* Camera lens animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`camera-lens w-96 h-96 ${isLoaded ? 'lens-animation' : 'opacity-0'}`}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="w-24 h-24 text-white/30" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 
          className="text-6xl md:text-8xl font-thin mb-6 tracking-tight text-white"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          Where Moments Become
          <br />
          <span className="text-gradient font-light">Masterpieces</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-white/70 mb-12 font-light max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="1000"
        >
          Luxury Wedding & Event Photography in Vellore & Bangalore
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="1600"
          data-aos-duration="1000"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-5 h-5 mr-2" />
            View Packages
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            onClick={openWhatsApp}
          >
            <Camera className="w-5 h-5 mr-2" />
            Book via WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
