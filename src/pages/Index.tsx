
import React from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import UpcomingEvents from '@/components/UpcomingEvents';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

const Index = () => {
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
