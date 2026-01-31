import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import video1 from '/src/assets/video.mp4';
import video2 from '/src/assets/video2.mp4';
import video3 from '/src/assets/video3.mp4';


interface GalleryItem {
  id: number;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  images: string[];
}

interface VideoItem {
  id: string;
  title: string;
  filePath: string;
}

interface EnhancedGalleryProps {
  onBookNowClick: () => void;
}

const EnhancedGallery = ({ onBookNowClick }: EnhancedGalleryProps) => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Kiran & Kalpana',
      date: '',
      category: 'Reception',
      heroImage: 'https://i.postimg.cc/gcTH9KXk/post.jpg',
      images: [
        'https://i.postimg.cc/gjsJk2zP/5Q3A7607.jpg',
        'https://i.postimg.cc/025jXDn5/5Q3A7567.jpg',
        'https://i.postimg.cc/yNR83P1j/5Q3A7564.jpg'
      ]
    },
    {
      id: 2,
      title: 'Kannadhasan & Gayathri',
      date: '',
      category: 'Reception',
      heroImage: 'https://i.postimg.cc/SKPS24r9/1C8A4163.jpg',
      images: [
        'https://i.postimg.cc/NGC971CR/5Q3A6048.jpg',
        'https://i.postimg.cc/SKXk4Mfb/5Q3A6102.jpg',
        'https://i.postimg.cc/155xPFy7/5Q3A6123.jpg'
      ]
    },
    {
      id: 3,
      title: 'Vicky & Deepika',
      date: '',
      category: 'Pre Wed',
      heroImage: 'https://i.postimg.cc/8kZ21G1B/370A5482.jpg',
      images: [
        'https://i.postimg.cc/pVG1t6r4/370-A5330-Recovered.jpg',
        'https://i.postimg.cc/jSN8PqcY/370A5670.jpg',
        'https://i.postimg.cc/HxW3qwgT/370A5771.jpg'
      ]
    },
    {
      id: 4,
      title: 'Ram & Priya',
      date: '',
      category: 'Marriage',
      heroImage: 'https://i.postimg.cc/sxW48ZDQ/5Q3A2093.jpg',
      images: [
        'https://i.postimg.cc/pXT2DYrL/5Q3A2409.jpg',
        'https://i.postimg.cc/TP8fMz9K/5Q3A2106.jpg',
        'https://i.postimg.cc/wjNYVWpg/370A1366.jpg'
      ]
    },
    {
      id: 5,
      title: 'Swathi & madhan',
      date: '',
      category: 'Engagement',
      heroImage: 'https://i.postimg.cc/tRwbL84q/IMG-6805.jpg',
      images: [
        'https://i.postimg.cc/Ls9FtpNT/1C8A8308.jpg',
        'https://i.postimg.cc/m27rVTyf/1C8A8311.jpg',
        'https://i.postimg.cc/J0nhPXxp/1C8A8304.jpg'
      ]
    },
     {
      id: 6,
      title: 'Vicky & Deepika',
      date: '',
      category: 'Engagement',
      heroImage: 'https://i.postimg.cc/8C3YcJXq/1C8A4727.jpg',
      images: [
        'https://i.postimg.cc/zDhsL7rp/1C8A4647.jpg',
        'https://i.postimg.cc/pdGHZLGZ/1C8A4753.jpg',
        'https://i.ibb.co/XZB2vR5m/1-C8-A4686-1.jpg'
      ]
    },
    {
      id: 7,
      title: 'MADHU & SWATHI WEDDING',
      date: '',
      category: 'OUTDOOR',
      heroImage: 'https://i.postimg.cc/tCQssVvy/5Q3A0614.jpg',
      images: [
        'https://i.postimg.cc/3x3VJngD/370A5989.jpg',
        'https://i.postimg.cc/1tR3GGh0/370A6056.jpg',
        'https://i.postimg.cc/Kvppxxv9/370A6086.jpg',
        'https://i.postimg.cc/bv5t3Y8C/370A6140.jpg',
        'https://i.postimg.cc/tCD7BRNV/370A6149.jpg'
      ]
    },
        {
      id: 8,
      title: 'Anto & Shalini',
      date: '',
      category: 'PRE WEDDING',
      heroImage: 'https://i.postimg.cc/sx6v8mg9/003_n.jpg',
      images: [
        'https://i.postimg.cc/MK9720Lf/001-n.jpg',
        'https://i.postimg.cc/QtqBghGV/002_n.jpg',
        'https://i.postimg.cc/sx6v8mg9/003_n.jpg',
        'https://i.postimg.cc/2y812Mrh/004_n.jpg',
        'https://i.postimg.cc/cC4vX20t/005_n.jpg',
        'https://i.postimg.cc/yxYDvtsT/007_n.jpg',
        'https://i.postimg.cc/908rSbfX/IMG_2350.jpg',
        'https://i.postimg.cc/XqHphLvb/IMG_2351.jpg',
        'https://i.postimg.cc/WzWhK84j/IMG_2352.jpg',
        'https://i.postimg.cc/h4pzfD1r/IMG_2354.jpg'
      ]
    },
  ];

const videoClips: VideoItem[] = [
  {
    id: 'vid1',
    title: 'Wedding Highlights',
    filePath: video1
  },
  {
    id: 'vid2',
    title: 'Reception Recap',
    filePath: video3
  },
  {
    id: 'vid3',
    title: 'Engagement Moments',
    filePath: video2
  }
];


  const openGallery = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) =>
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
            Our <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Every frame tells a story. Explore our portfolio of unforgettable moments captured with precision and artistry.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => openGallery(item)}
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
          ))}
        </div>
     
     
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
            Our  <span className="text-gradient">Cinematic videos</span>
          </h2>
          
         
        

        {/* Video Clips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoClips.map((clip) => (
            <div key={clip.id} className="relative overflow-hidden rounded-2xl bg-gray-800">
              <video
                src={clip.filePath}
                controls
                className="w-full h-full object-cover aspect-video rounded-2xl"
              />
              <div className="p-4 bg-black text-white text-sm font-medium">{clip.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={!!selectedGallery} onOpenChange={() => setSelectedGallery(null)}>
        <DialogContent className="max-w-6xl h-[90vh] bg-black border-gray-800 p-0 overflow-hidden">
          {selectedGallery && (
            <div className="relative flex flex-col h-full overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{selectedGallery.title}</h3>
                  <p className="text-white/70">{selectedGallery.date} • {selectedGallery.category}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={onBookNowClick}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
                  >
                    Book Similar
                  </button>
                  <button
                    onClick={() => setSelectedGallery(null)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Image Display */}
              <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                <img
                  src={selectedGallery.images[currentImageIndex]}
                  alt={`${selectedGallery.title} - Image ${currentImageIndex + 1}`}
                  className="max-h-full w-auto mx-auto my-auto object-contain"
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
                  {currentImageIndex + 1} / {selectedGallery.images.length}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EnhancedGallery;
