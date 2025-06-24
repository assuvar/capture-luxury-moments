
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  images: string[];
}

interface GalleryModalProps {
  gallery: GalleryItem | null;
  onClose: () => void;
  onBookNowClick: () => void;
}

const GalleryModal = ({ gallery, onClose, onBookNowClick }: GalleryModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (gallery) {
      setCurrentImageIndex((prev) =>
        prev === gallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? gallery.images.length - 1 : prev - 1
      );
    }
  };

  if (!gallery) return null;

  return (
    <Dialog open={!!gallery} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] bg-black border-gray-800 p-0">
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-semibold text-white">{gallery.title}</h3>
              <p className="text-white/70">{gallery.date} • {gallery.category}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onBookNowClick}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
              >
                Book Similar
              </button>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Image Display */}
          <div className="flex-1 relative">
            <img
              src={gallery.images[currentImageIndex]}
              alt={`${gallery.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              {currentImageIndex + 1} / {gallery.images.length}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
