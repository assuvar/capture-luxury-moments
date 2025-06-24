
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface FloatingButtonProps {
  onQuickChat: () => void;
  onBookNow: () => void;
}

const FloatingButton = ({ onQuickChat, onBookNow }: FloatingButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Quick chat button */}
        <Button
          onClick={onQuickChat}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          size="sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
        
        {/* Detailed form button */}
        <Button
          onClick={onBookNow}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default FloatingButton;
