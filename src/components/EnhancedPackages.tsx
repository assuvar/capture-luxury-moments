import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Camera, Clock, Users, Palette, Sparkles } from 'lucide-react';
import bgm from '/src/assets/bgm.mp3';


const EnhancedPackages = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // ✅ Correct path - make sure the file is in public/src/assets
    audioRef.current = new Audio(bgm);
    audioRef.current.load();
  }, []);

  const handleBookNowClick = (packageTitle: string, price: string) => {
    // 🔊 Play the audio if loaded
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn('Audio failed to play:', err);
      });
    }

    const message = encodeURIComponent(
      `Hi MahaCaptures, I'm interested in the ${packageTitle} package priced at ${price}. Please share more details.`
    );
    window.open(`https://wa.me/919585966522?text=${message}`, '_blank');
  };

  const packages = [
    {
      title: "Standard",
      price: "₹79,999",
      features: [
        "Traditional photographer x 4",
        "Traditional videographer x 2",
        "Candid photographer x 1",
        "Dronography x 1",
        "64 GB pendrive",
        "Reels - 1 video",
        "Premium album - 2 (30 sheets)",
        "Traditional video - 1hr x 2",
        "12x18 Frame - 1"
      ],
      icon: Camera,
      popular: false,
      gradient: "from-gray-600/20 to-gray-800/20"
    },
    {
      title: "Premium",
      price: "₹1,79,999",
      features: [
        "Traditional photographer x 6",
        "Traditional videographer x 4",
        "Candid photographer x 2",
        "Candid videographer x 1",
        "Dronography x 1",
        "LED wall x 2",
        "Pre-wed photography & videography",
        "128 GB pendrive",
        "Reels - 2 videos",
        "Song - 1",
        "Premium album - 4 (30 sheets)",
        "Traditional video - 2hr x 2",
        "20x30 Frame - 1",
        "12x18 Frame - 2"
      ],
      icon: Sparkles,
      popular: true,
      gradient: "from-primary/20 to-blue-600/20"
    },
    {
      title: "Elite",
      price: "₹2,99,999",
      features: [
        "Traditional photographer x 6",
        "Traditional videographer x 6",
        "Candid photographer x 2",
        "Candid videographer x 1",
        "Dronography x 3",
        "LED wall x 2",
        "Pre-wed photography & videography",
        "128 GB pendrive",
        "Reels - 4 videos",
        "Song - 2",
        "Premium album - 6 (30 sheets)",
        "Traditional video - 2hr x 2",
        "20x30 Frame - 4",
        "12x18 Frame - 4"
      ],
      icon: Palette,
      popular: false,
      gradient: "from-purple-600/20 to-pink-600/20"
    }
  ];

  return (
    <section id="packages" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
            Choose Your <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            From intimate moments to grand celebrations, we have the perfect package to capture your story with unparalleled elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.title}
                className={`relative bg-gradient-to-b ${pkg.gradient} to-black border-gray-800 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${
                  pkg.popular ? 'scale-105 border-primary/30 shadow-xl shadow-primary/10' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-3xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {pkg.title}
                    </h3>
                    <div className="text-5xl font-bold text-gradient mb-3">{pkg.price}</div>
                    <div className="flex items-center justify-center text-white/70">
                      <Clock className="w-5 h-5 mr-2" />
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-4 rounded-full transition-all duration-300 hover:scale-105 ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary/90 text-white hover:shadow-lg hover:shadow-primary/25'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-primary/50'
                    }`}
                    onClick={() => handleBookNowClick(pkg.title, pkg.price)}
                  >
                    Book via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/60 mb-6 text-lg">Need a custom package tailored to your vision?</p>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:border-primary/50 text-lg"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch((err) => {
                  console.warn('Audio failed to play:', err);
                });
              }

              const message = encodeURIComponent(
                "Hi MahaCaptures, I need a custom photography package. Can we discuss my requirements?"
              );
              window.open(`https://wa.me/+919585966522?text=${message}`, '_blank');
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

export default EnhancedPackages;
