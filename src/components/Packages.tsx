
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Camera, Clock, Image, Users, Palette } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      title: "Classic",
      price: "₹25,000",
      duration: "4 Hours",
      features: [
        "Professional Photography",
        "50+ Edited Photos",
        "Digital Gallery Access",
        "Basic Color Grading",
        "WhatsApp Support"
      ],
      icon: Camera,
      popular: false
    },
    {
      title: "Premium",
      price: "₹45,000", 
      duration: "6 Hours",
      features: [
        "Premium Photography & Videography",
        "100+ Edited Photos",
        "Same Day Highlights",
        "Advanced Color Grading",
        "Drone Coverage (if applicable)",
        "Physical Photo Album",
        "24/7 Support"
      ],
      icon: Image,
      popular: true
    },
    {
      title: "Royal",
      price: "₹75,000",
      duration: "Full Day",
      features: [
        "Luxury Photography & Videography",
        "200+ Edited Photos",
        "4K Video Production", 
        "Premium Color Grading",
        "Drone & 360° Coverage",
        "Designer Photo Album",
        "Same Day Preview",
        "Dedicated Support Team"
      ],
      icon: Palette,
      popular: false
    }
  ];

  const openWhatsApp = (packageTitle: string, price: string) => {
    const message = encodeURIComponent(
      `Hi MahaCaptures, I'm interested in the ${packageTitle} package (${price}). Please share more details and availability.`
    );
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="packages" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-thin mb-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Choose Your <span className="text-gradient">Experience</span>
          </h2>
          <p 
            className="text-xl text-white/70 max-w-3xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            From intimate moments to grand celebrations, we have the perfect package to capture your story with unparalleled elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={pkg.title}
                className={`package-card relative bg-gradient-to-b from-gray-900/50 to-black border-gray-800 hover:border-primary/50 transition-all duration-300 ${
                  pkg.popular ? 'scale-105 border-primary/30' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{pkg.title}</h3>
                    <div className="text-4xl font-bold text-gradient mb-2">{pkg.price}</div>
                    <div className="flex items-center justify-center text-white/70">
                      <Clock className="w-4 h-4 mr-2" />
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-3 rounded-full transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary/90 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                    onClick={() => openWhatsApp(pkg.title, pkg.price)}
                  >
                    Book via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <p className="text-white/60 mb-4">Need a custom package?</p>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
            onClick={() => {
              const message = encodeURIComponent(
                "Hi MahaCaptures, I need a custom photography package. Can we discuss my requirements?"
              );
              window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
            }}
          >
            <Users className="w-5 h-5 mr-2" />
            Discuss Custom Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
