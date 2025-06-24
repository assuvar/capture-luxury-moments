
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';

interface BookingFormData {
  name: string;
  eventType: string;
  eventDate: string;
  location: string;
  contact: string;
  message: string;
}

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
}

const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    eventType: '',
    eventDate: '',
    location: '',
    contact: '',
    message: ''
  });

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
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
  );
};

export default BookingForm;
