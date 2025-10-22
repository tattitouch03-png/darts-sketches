import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['home', 'our-work', 'about', 'contact'];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com', label: 'YouTube' },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Darts Sketches
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      <nav
        className={`bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors capitalize font-medium"
                >
                  {item.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
