
import React from 'react';

interface GalleryCardProps {
  item: {
    id: number;
    title: string;
    date: string;
    category: string;
    heroImage: string;
  };
  index: number;
  onClick: () => void;
}

const GalleryCard = ({ item, index, onClick }: GalleryCardProps) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 aspect-[9/16]">
        <img
          src={item.heroImage}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-primary text-sm font-medium bg-primary/20 px-3 py-1 rounded-full">
            {item.category}
          </span>
          <h3 className="text-white text-xl font-semibold mb-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {item.title}
          </h3>
          <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
            {item.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
