
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface EnhancedHeroProps {
  onBookNowClick: () => void;
}

const EnhancedHero = ({ onBookNowClick }: EnhancedHeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop",
      className: "top-20 left-10 w-48 h-64",
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=250&h=350&fit=crop",
      className: "top-32 right-16 w-40 h-56",
      delay: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=280&h=380&fit=crop",
      className: "bottom-40 left-20 w-44 h-60",
      delay: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=320&h=420&fit=crop",
      className: "bottom-20 right-10 w-52 h-68",
      delay: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=300&fit=crop",
      className: "top-1/2 left-1/4 w-36 h-48",
      delay: 800,
    },
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Floating Background Images */}
      {floatingImages.map((image, index) => (
        <div
          key={index}
          className={`absolute ${image.className} opacity-0 ${
            isLoaded ? 'animate-fade-in' : ''
          }`}
          style={{
            animationDelay: `${image.delay}ms`,
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px) scale(${
              1 + Math.sin(Date.now() * 0.001 + index) * 0.05
            })`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <img
            src={image.src}
            alt={`Floating image ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl shadow-2xl opacity-70 hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-thin mb-8 tracking-tight text-white opacity-0"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1200"
        >
          Unfold Your Story,
          <br />
          <span className="text-gradient font-light">Frame by Frame</span>
        </h1>

        <p
          className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 font-light max-w-4xl mx-auto leading-relaxed opacity-0"
          data-aos="fade-up"
          data-aos-delay="1400"
          data-aos-duration="1200"
        >
          Crafting timeless memories through luxury photography in Vellore & Bangalore
        </p>

        <div
          className="opacity-0"
          data-aos="fade-up"
          data-aos-delay="1800"
          data-aos-duration="1200"
        >
          <Button
            size="lg"
            onClick={onBookNowClick}
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            Book via WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 cursor-pointer"
        data-aos="fade-up"
        data-aos-delay="2200"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2">Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
