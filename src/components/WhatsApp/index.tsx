
import React, { useState } from 'react';
import FloatingButton from './FloatingButton';
import WhatsAppModal from './WhatsAppModal';

interface BookingFormData {
  name: string;
  eventType: string;
  eventDate: string;
  location: string;
  contact: string;
  message: string;
}

const WhatsAppFloat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quickWhatsApp = () => {
    const message = encodeURIComponent("Hi MahaCaptures, I'm interested in your photography services. Please share more details.");
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
  };

  const handleSubmit = (formData: BookingFormData) => {
    const whatsappMessage = `Hi MahaCaptures, I'm interested in booking a photography session.

📝 Details:
• Name: ${formData.name}
• Event Type: ${formData.eventType}
• Event Date: ${formData.eventDate}
• Location: ${formData.location}
• Contact: ${formData.contact}

💬 Message: ${formData.message}

Please share more details and package options. Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/+919876543210?text=${encodedMessage}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      <FloatingButton 
        onQuickChat={quickWhatsApp}
        onBookNow={() => setIsModalOpen(true)}
      />
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default WhatsAppFloat;
