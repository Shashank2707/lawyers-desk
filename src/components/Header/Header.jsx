import React, { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { navLinks } from '../../data/constants';

const Header = ({ onConsultationClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-2xl font-extrabold text-gray-900 tracking-wider">
            <Scale className="text-emerald-600 w-8 h-8" />
            <span>Lawyers <span className="text-emerald-600">Desk</span></span>
          </a>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-emerald-600 font-medium transition duration-150 ease-in-out px-1 py-1"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onConsultationClick}
              className="px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-emerald-600 hover:bg-justice shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Schedule Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl py-2">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { setIsOpen(false); onConsultationClick(); }}
              className="block w-full text-center mt-3 px-4 py-2 border border-transparent text-base font-medium rounded-lg text-black bg-emerald-600 hover:bg-emerald-700 shadow-md"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;