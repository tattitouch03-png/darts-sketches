import { User, Award, Palette, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <User className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About the Artist
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dharmneti Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-full opacity-20 blur-2xl" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Dharmneti Kumar
                </h3>
                <p className="text-xl text-amber-600 font-medium mb-6">
                  Contemporary Artist & Creative Visionary
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Dharmneti Kumar is a passionate artist whose work bridges traditional Indian art forms
                with contemporary expression. With over a decade of experience, Dharmneti has mastered
                multiple mediums including charcoal, watercolor, and the intricate Madhubani folk art tradition.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                Born and raised in Bihar, India, Dharmneti draws deep inspiration from cultural heritage
                while pushing artistic boundaries. Each piece is crafted with meticulous attention to detail,
                reflecting a unique blend of traditional techniques and modern sensibilities.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-bold text-2xl text-gray-800">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Palette className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-bold text-2xl text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Artworks Created</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-bold text-2xl text-gray-800">200+</p>
                  <p className="text-sm text-gray-600">Happy Collectors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
