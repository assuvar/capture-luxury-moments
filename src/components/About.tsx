
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Collage */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop"
                alt="About MahaCaptures"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              
              {/* Floating mini images */}
              <div className="absolute -top-8 -right-8 w-32 h-32 opacity-80">
                <img
                  src="https://i.postimg.cc/xCjCHgDr/1C8A4182.jpg"
                  alt="Wedding moment"
                  className="w-full h-full object-cover rounded-xl shadow-lg rotate-12 hover:rotate-6 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-28 h-28 opacity-80">
                <img
                  src="https://i.postimg.cc/rs3FBkdc/1C8A4172.jpg"
                  alt="Engagement shoot"
                  className="w-full h-full object-cover rounded-xl shadow-lg -rotate-12 hover:-rotate-6 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
                We're not just <span className="text-gradient">photographers</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
                We're storytellers with a lens, crafting elegance, love, and emotion into every frame.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="400">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/70 text-lg">
                  Over 100+ weddings and events captured across Vellore and Bangalore
                </p>
              </div>
              
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="600">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/70 text-lg">
                  Luxury photography with cutting-edge equipment and artistic vision
                </p>
              </div>
              
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="800">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/70 text-lg">
                  Every moment transformed into a timeless masterpiece
                </p>
              </div>
            </div>

            <div className="pt-6" data-aos="fade-up" data-aos-delay="1000">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-2xl border border-primary/20">
                <p className="text-white italic text-lg">
                  "Every frame tells a story, every story deserves to be told beautifully."
                </p>
                <p className="text-primary font-medium mt-2">- MahaCaptures Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
