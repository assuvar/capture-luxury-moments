
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const EnhancedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
  {
    name: "Santhosh S (Shakthi)",
    event: "Wedding",
    rating: 5,
    text: "Exceptional team! The coordination was amazing! We were delighted with the outcome of the album and videos. Special thanks to Mr. Vishnu for patiently guiding us and being accommodative. Very happy to have chosen Maha Captures!",

  },
  {
    name: "Jagannathan R",
    event: "Puberty Function",
    rating: 5,
    text: "Studio Maha Captures has the best team of photographers. They were so friendly and polite. Special thanks to Mr. Vishnu for those candid shots. I will definitely recommend to my friends and family!",

  },
  {
    name: "Preetha Ravichandran",
    event: "Birthday Party",
    rating: 5,
    text: "Vishnu & team clicked a few candid shots of my son. I'm so impressed! The pictures are absolutely beautiful—every smile and little moment was captured so perfectly. Thank you for these precious memories!",
   
  },
  {
    name: "Sivasankari Selvaraj",
    event: "Family Wedding",
    rating: 5,
    text: "Exceptional pictures! We had an opportunity to take some unique pictures of my baby boy. They came out as life-long memories, which I call signature moments. Thank you Maha Captures!",

  },
  {
    name: "MDhivya 016",
    event: "Wedding",
    rating: 5,
    text: "Extremely happy with the stunning pictures! Every shot is beautifully framed and full of life. These candid pics are very special to me. Thank you so much Maha Captures team!",
    
  }
];


  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-thin mb-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Client <span className="text-gradient">Stories</span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-2xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Hear from our clients who trusted us to capture their most precious moments
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="400">
          {/* Main testimonial display */}
          <div className="overflow-hidden rounded-3xl" ref={containerRef}>
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="min-w-full bg-gradient-to-br from-gray-900/50 to-black border-gray-800"
                >
                  <CardContent className="p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto text-center">
                      {/* Rating */}
                      <div className="flex justify-center mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-8 h-8 text-yellow-400 fill-current mr-1 animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text md:text-2xl font-light text-white/90 mb-10 leading-relaxed ">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client info */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <img
                          
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover mr-6 ring-4 ring-primary/20"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                        </div>
                        <div className="text-left">
                          <div className="text-2xl font-semibold text-white">{testimonial.name}</div>
                          <div className="text-primary text-lg font-medium">{testimonial.event}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-primary/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-primary/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
