
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
        <a href="#" className="text-2xl font-bold text-devops-700">
          Mohammed<span className="text-devops-500">.dev</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-devops-600 dark:text-gray-300 dark:hover:text-devops-400 transition-colors">Education</button>
          <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-devops-600 hover:bg-devops-700">Contact Me</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-300">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800">Projects</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-gray-800">Education</button>
            <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-devops-600 hover:bg-devops-700">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
