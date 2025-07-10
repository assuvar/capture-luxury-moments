import React, { useState, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    eventDate: '',
    location: '',
    contact: '',
    message: ''
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    // Reset form and close modal
    setFormData({
      name: '',
      eventType: '',
      eventDate: '',
      location: '',
      contact: '',
      message: ''
    });
    setIsOpen(false);
  };

  const quickWhatsApp = () => {
    const message = encodeURIComponent("Hi MahaCaptures, I'm interested in your photography services. Please share more details.");
    window.open(`https://wa.me/+919585966522?text=${message}`, '_blank');
  };

  const handleBookNow = () => {
    // Play the 20-second audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 20000); // Stop after 20 seconds
    }

    // Open the booking modal
    setIsOpen(true);
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src="/src/assets/bgm.mp3" preload="auto" />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end space-y-3">
          {/* Quick chat button */}
          <Button
            onClick={quickWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            size="sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>

          {/* Detailed form button */}
          <Button
            onClick={handleBookNow}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Booking Form Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md bg-black border-gray-800">
          <VisuallyHidden>
            <DialogTitle>Book Photography Session via WhatsApp</DialogTitle>
            <DialogDescription>
              Fill out the form below to send your booking details directly to MahaCaptures via WhatsApp
            </DialogDescription>
          </VisuallyHidden>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-green-500 p-2 rounded-full mr-3">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Book via WhatsApp</h3>
                <p className="text-white/70 text-sm">Fill details for quick booking</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm mb-2">Full Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Event Type *</label>
              <Select onValueChange={(value) => handleInputChange('eventType', value)} required>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="fashion">Fashion Shoot</SelectItem>
                  <SelectItem value="product">Product Photography</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Event Date</label>
              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleInputChange('eventDate', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Location</label>
              <Select onValueChange={(value) => handleInputChange('location', value)}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="vellore">Vellore</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="other">Other Location</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Contact Number *</label>
              <Input
                value={formData.contact}
                onChange={(e) => handleInputChange('contact', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white focus:border-primary focus:ring-primary"
                placeholder="Enter your contact number"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Additional Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-gray-900 border-gray-700 text-white resize-none focus:border-primary focus:ring-primary"
                placeholder="Any specific requirements or questions..."
                rows={3}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Send className="w-4 h-4 mr-2" />
              Send to WhatsApp
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppFloat;
