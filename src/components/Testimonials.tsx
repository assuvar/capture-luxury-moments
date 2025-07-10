
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    const testimonials = [
  {
    name: "Santhosh S (Shakthi)",
    event: "Wedding",
    rating: 5,
    text: "Exceptional team! The coordination was amazing! We were delighted with the outcome of the album and videos. Special thanks to Mr. Vishnu for patiently guiding us and being accommodative. Very happy to have chosen Maha Captures!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Jagannathan R",
    event: "Puberty Function",
    rating: 5,
    text: "Studio Maha Captures has the best team of photographers. They were so friendly and polite. Special thanks to Mr. Vishnu for those candid shots. I will definitely recommend to my friends and family!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Preetha Ravichandran",
    event: "Birthday Party",
    rating: 5,
    text: "Vishnu & team clicked a few candid shots of my son. I'm so impressed! The pictures are absolutely beautiful—every smile and little moment was captured so perfectly. Thank you for these precious memories!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sivasankari Selvaraj",
    event: "Family Wedding",
    rating: 5,
    text: "Exceptional pictures! We had an opportunity to take some unique pictures of my baby boy. They came out as life-long memories, which I call signature moments. Thank you Maha Captures!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "MDhivya 016",
    event: "Wedding",
    rating: 5,
    text: "Extremely happy with the stunning pictures! Every shot is beautifully framed and full of life. These candid pics are very special to me. Thank you so much Maha Captures team!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
            Client <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Hear from our clients who trusted us to capture their most precious moments
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="min-w-full bg-gradient-to-br from-gray-900/50 to-black border-gray-800"
                >
                  <CardContent className="p-12">
                    <div className="max-w-4xl mx-auto text-center">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-2xl md:text-3xl font-light text-white/90 mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client info */}
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div className="text-left">
                          <div className="text-xl font-semibold text-white">{testimonial.name}</div>
                          <div className="text-primary">{testimonial.event}</div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
