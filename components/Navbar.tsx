import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Moon, Sun } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Departments', href: '#departments' },
  { label: 'Services', href: '#services' },
  { label: 'Documents', href: '#documents' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 shadow-md py-2' 
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-medical-600 p-2 rounded-lg text-white shadow-lg shadow-medical-500/30">
              <Activity size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900 dark:text-white leading-tight">CHC Dhamnagar</span>
              <span className="text-xs text-medical-600 dark:text-medical-400 font-medium tracking-wide">GOVT OF ODISHA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 font-medium transition-colors duration-200 text-sm"
              >
                {item.label}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-medical-600 dark:text-slate-400 dark:hover:text-medical-400 focus:outline-none transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href="#contact" 
              className="bg-medical-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-medical-700 transition-all shadow-md hover:shadow-lg text-sm"
            >
              Emergency
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-medical-600 dark:text-slate-400 dark:hover:text-medical-400 focus:outline-none"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-slate-600 dark:text-slate-300 hover:text-medical-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 hover:bg-medical-50 dark:hover:bg-slate-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};