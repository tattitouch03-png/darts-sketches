import { Palette } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 'charcoal',
    title: 'Charcoal Painting',
    description: 'Expressive monochromatic artworks that capture depth, emotion, and dramatic contrasts through the timeless medium of charcoal. Each piece tells a story through careful shading and bold strokes.',
    image: 'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'madhubani',
    title: 'Madhubani Painting',
    description: 'Traditional Indian folk art from Bihar featuring intricate patterns, vibrant colors, and mythological themes. These paintings celebrate cultural heritage with geometric designs and natural motifs.',
    image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'watercolor',
    title: 'Watercolor Art',
    description: 'Delicate and fluid compositions that blend colors seamlessly, creating ethereal landscapes and abstract expressions. The transparency of watercolors brings a unique lightness to each piece.',
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'abstract',
    title: 'Abstract Expression',
    description: 'Bold, contemporary works that explore form, color, and emotion beyond traditional representation. These pieces invite viewers to find their own meaning and connection.',
    image: 'https://images.pexels.com/photos/1428171/pexels-photo-1428171.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'portraits',
    title: 'Portrait Art',
    description: 'Capturing the essence and personality of subjects through careful observation and artistic interpretation. Each portrait reveals the unique character and story of the individual.',
    image: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'nature',
    title: 'Nature Studies',
    description: 'Detailed observations of the natural world, from sweeping landscapes to intimate botanical studies. These works celebrate the beauty and complexity found in nature.',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

interface WhatIDoProps {
  onCategoryClick: (categoryId: string) => void;
}

export default function WhatIDo({ onCategoryClick }: WhatIDoProps) {
  return (
    <section id="our-work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <Palette className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What I Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore diverse artistic expressions across various mediums and styles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
