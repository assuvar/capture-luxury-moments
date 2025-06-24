
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const EnhancedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Priya & Arjun",
      event: "Wedding",
      rating: 5,
      text: "MahaCaptures turned our special day into a cinematic masterpiece. Every emotion, every detail was captured with such precision and artistry. The team's professionalism and creativity exceeded all our expectations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Event",
      rating: 5,
      text: "Outstanding photography service for our tech summit. The team captured the energy and innovation of our event perfectly. The final deliverables were beyond professional quality.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Maya Singh",
      event: "Fashion Portfolio",
      rating: 5,
      text: "Working with MahaCaptures was an absolute dream. They understood my vision perfectly and created stunning portfolio shots that have elevated my modeling career.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Kavya & Vikram",
      event: "Engagement",
      rating: 5,
      text: "The engagement shoot was magical! They made us feel so comfortable and natural. The photos perfectly captured our love story and the beautiful locations in Bangalore.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Anitha Reddy",
      event: "Birthday Celebration",
      rating: 5,
      text: "MahaCaptures made our daughter's birthday celebration unforgettable. The attention to detail and the candid moments they captured will be treasured forever.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
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
                      <blockquote className="text-2xl md:text-4xl font-light text-white/90 mb-10 leading-relaxed italic">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client info */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <img
                            src={testimonial.image}
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
