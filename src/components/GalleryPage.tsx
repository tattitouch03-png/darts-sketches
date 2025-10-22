import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

interface GalleryPageProps {
  categoryId: string;
  onBack: () => void;
}

const galleryData: Record<string, { title: string; images: GalleryImage[] }> = {
  charcoal: {
    title: 'Charcoal Paintings',
    images: [
      { id: 1, url: 'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Portrait Study I' },
      { id: 2, url: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Portrait Study II' },
      { id: 3, url: 'https://images.pexels.com/photos/159647/park-artist-graffiti-drawing-159647.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Urban Expression' },
      { id: 4, url: 'https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Nature Forms' },
      { id: 5, url: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800', title: 'Abstract Mood' },
      { id: 6, url: 'https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Emotional Depth' },
    ],
  },
  madhubani: {
    title: 'Madhubani Paintings',
    images: [
      { id: 1, url: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Traditional Motifs' },
      { id: 2, url: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Folk Heritage' },
      { id: 3, url: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Cultural Story' },
      { id: 4, url: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Vibrant Patterns' },
      { id: 5, url: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Nature Elements' },
      { id: 6, url: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Divine Figures' },
    ],
  },
  watercolor: {
    title: 'Watercolor Art',
    images: [
      { id: 1, url: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Fluid Landscape' },
      { id: 2, url: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Botanical Study' },
      { id: 3, url: 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Ocean Waves' },
      { id: 4, url: 'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Mountain Vista' },
      { id: 5, url: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Floral Dream' },
      { id: 6, url: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Sky & Clouds' },
    ],
  },
  abstract: {
    title: 'Abstract Expression',
    images: [
      { id: 1, url: 'https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Color Symphony' },
      { id: 2, url: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Emotional Flow' },
      { id: 3, url: 'https://images.pexels.com/photos/1660997/pexels-photo-1660997.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Geometric Dance' },
      { id: 4, url: 'https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Bold Expression' },
      { id: 5, url: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Energy Field' },
      { id: 6, url: 'https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modern Vision' },
    ],
  },
  portraits: {
    title: 'Portrait Art',
    images: [
      { id: 1, url: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Character Study' },
      { id: 2, url: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Contemplation' },
      { id: 3, url: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Inner Light' },
      { id: 4, url: 'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Silent Story' },
      { id: 5, url: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Essence Captured' },
      { id: 6, url: 'https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Human Spirit' },
    ],
  },
  nature: {
    title: 'Nature Studies',
    images: [
      { id: 1, url: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Forest Path' },
      { id: 2, url: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Peaceful Lake' },
      { id: 3, url: 'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Mountain Range' },
      { id: 4, url: 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Sunset Glory' },
      { id: 5, url: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Botanical Detail' },
      { id: 6, url: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Wild Beauty' },
    ],
  },
};

export default function GalleryPage({ categoryId, onBack }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const gallery = galleryData[categoryId];

  if (!gallery) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          {gallery.title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <h3 className="text-white text-2xl font-semibold mt-4 text-center">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
