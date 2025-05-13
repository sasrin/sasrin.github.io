
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold group">
          <span className="inline-block animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-devops-700 to-devops-500 transition-all duration-300 group-hover:from-devops-600 group-hover:to-devops-400">
              Mohamed
            </span>
            <span className="text-devops-500 transition-all duration-300 group-hover:text-devops-400">
              Sasrin
            </span>
            <span className="block h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-devops-700 to-devops-500 transition-all duration-300 mt-0.5"></span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-devops-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-devops-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-devops-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-devops-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Projects</button>
          <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-devops-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Education</button>
          <Button 
            onClick={() => scrollToSection('contact')} 
            variant="default" 
            className="bg-devops-600 hover:bg-devops-700 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-devops-500 to-devops-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-300 transition-transform duration-200 hover:scale-110">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800 transform transition-all duration-200 hover:translate-x-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800 transform transition-all duration-200 hover:translate-x-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800 transform transition-all duration-200 hover:translate-x-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800 transform transition-all duration-200 hover:translate-x-2">Projects</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800 transform transition-all duration-200 hover:translate-x-2">Education</button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="default" 
              className="bg-devops-600 hover:bg-devops-700 transition-all duration-300 hover:shadow-lg w-full"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
