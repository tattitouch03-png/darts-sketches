import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import WhatsAppButton from './components/WhatsAppButton';

type View = 'home' | 'gallery';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      setCurrentView('home');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />

      {currentView === 'home' ? (
        <>
          <div id="home">
            <HeroSlider />
          </div>
          <WhatIDo onCategoryClick={handleCategoryClick} />
          <About />
          <Contact />
          <Footer />
        </>
      ) : (
        <GalleryPage categoryId={selectedCategory} onBack={handleBackToHome} />
      )}

      <WhatsAppButton />
    </div>
  );
}

export default App;
