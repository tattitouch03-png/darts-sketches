import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-2xl font-bold tracking-tight">Darts Sketches</p>
          <p className="text-gray-400 text-center max-w-md">
            Creating art that touches hearts and inspires minds
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Dharmneti Kumar</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Darts Sketches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
