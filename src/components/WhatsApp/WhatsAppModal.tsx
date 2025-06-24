
import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MessageCircle, X } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import BookingForm from './BookingForm';

interface BookingFormData {
  name: string;
  eventType: string;
  eventDate: string;
  location: string;
  contact: string;
  message: string;
}

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BookingFormData) => void;
}

const WhatsAppModal = ({ isOpen, onClose, onSubmit }: WhatsAppModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <BookingForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppModal;
