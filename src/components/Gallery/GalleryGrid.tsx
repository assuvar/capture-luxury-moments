
import React from 'react';
import GalleryCard from './GalleryCard';

interface GalleryItem {
  id: number;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  images: string[];
}

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

const GalleryGrid = ({ items, onItemClick }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          index={index}
          onClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
