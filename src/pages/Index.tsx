
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import EnhancedHero from '@/components/EnhancedHero';
import About from '@/components/About';
import EnhancedGallery from '@/components/EnhancedGallery';
import EnhancedPackages from '@/components/EnhancedPackages';
import EnhancedTestimonials from '@/components/EnhancedTestimonials';
import EnhancedUpcomingEvents from '@/components/EnhancedUpcomingEvents';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

const Index = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const openWhatsAppModal = () => {
    setIsWhatsAppModalOpen(true);
  };

  const handlePackageBooking = (packageTitle: string, price: string) => {
    const message = encodeURIComponent(
      `Hi MahaCaptures, I'm interested in the ${packageTitle} package (${price}). Please share more details and availability.`
    );
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  const handleEventBooking = (eventDate: string, location: string) => {
    const message = encodeURIComponent(
      `Hi MahaCaptures, I'm interested in booking a session on ${eventDate} in ${location}. Please share availability and packages.`
    );
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  const handleGalleryBooking = () => {
    const message = encodeURIComponent(
      "Hi MahaCaptures, I'm interested in booking a similar photography session. Please share more details and packages."
    );
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onBookNowClick={openWhatsAppModal} />
      <EnhancedHero onBookNowClick={openWhatsAppModal} />
      <About />
      <EnhancedGallery onBookNowClick={handleGalleryBooking} />
      <EnhancedPackages onBookNowClick={handlePackageBooking} />
      <EnhancedTestimonials />
      <EnhancedUpcomingEvents onBookNowClick={handleEventBooking} />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
