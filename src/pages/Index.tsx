
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import UpcomingEvents from '@/components/UpcomingEvents';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Gallery />
      <Packages />
      <Testimonials />
      <UpcomingEvents />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
