import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-montserrat">LALO GIX</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#music" className="text-sm hover:text-accent transition-colors">MUSICA</a>
          <a href="#bio" className="text-sm hover:text-accent transition-colors">BIOGRAFÍA</a>
          <a href="#events" className="text-sm hover:text-accent transition-colors">EVENTOS</a>
          <a href="#newsletter" className="text-sm hover:text-accent transition-colors">CONTACTO</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-dark-bg bg-opacity-95 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#music" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              MUSIC
            </a>
            <a 
              href="#bio" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              BIO
            </a>
            <a 
              href="#events" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              EVENTS
            </a>
            <a 
              href="#newsletter" 
              className="py-2 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
