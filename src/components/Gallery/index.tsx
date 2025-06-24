import React, { useState } from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';

interface GalleryItem {
  id: number;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  images: string[];
}

interface EnhancedGalleryProps {
  onBookNowClick: () => void;
}

const EnhancedGallery = ({ onBookNowClick }: EnhancedGalleryProps) => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Royal Wedding - Priya & Arjun",
      date: "December 2024",
      category: "Wedding",
      heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0bdc6bed629?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Corporate Gala - Tech Summit",
      date: "November 2024",
      category: "Corporate",
      heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Fashion Portfolio - Maya Singh",
      date: "October 2024",
      category: "Fashion",
      heroImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Birthday Celebration - Rajesh Family",
      date: "September 2024",
      category: "Birthday",
      heroImage: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Engagement Shoot - Kavya & Vikram",
      date: "August 2024",
      category: "Engagement",
      heroImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Product Showcase - Luxury Watches",
      date: "July 2024",
      category: "Product",
      heroImage: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1517242027094-631f8c218a0f?w=1200&h=800&fit=crop"
      ]
    }
  ];

  const openGallery = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-thin mb-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our <span className="text-gradient">Works</span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-2xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Every frame tells a story. Explore our portfolio of unforgettable moments captured with precision and artistry.
          </p>
        </div>

        <GalleryGrid items={galleryItems} onItemClick={openGallery} />
      </div>

      <GalleryModal
        gallery={selectedGallery}
        onClose={() => setSelectedGallery(null)}
        onBookNowClick={onBookNowClick}
      />
    </section>
  );
};

export default EnhancedGallery;
