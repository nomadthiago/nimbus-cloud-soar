
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, CloudIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CloudIcon className="h-8 w-8 text-nimbus-salesforce" />
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue bg-clip-text text-transparent">
            Flying Nimbus
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-nimbus-salesforce font-medium transition-colors">
            Home
          </Link>
          <a href="/#services" className="text-gray-700 hover:text-nimbus-salesforce font-medium transition-colors">
            Services
          </a>
          <Link to="/about" className="text-gray-700 hover:text-nimbus-salesforce font-medium transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue text-white hover:opacity-90 px-4 py-2 rounded-md">
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-nimbus-salesforce py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="/#services" 
              className="text-gray-700 hover:text-nimbus-salesforce py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-nimbus-salesforce py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-nimbus-salesforce to-nimbus-blue text-white hover:opacity-90 py-2 px-4 rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
