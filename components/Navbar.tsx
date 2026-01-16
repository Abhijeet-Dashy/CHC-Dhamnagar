import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Activity, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { NavItem } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../translation";

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] =
    useState(false);
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileLangDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);
  const toggleMobileLangDropdown = () =>
    setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
    setIsMobileLangDropdownOpen(false);
  };

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case "en":
        return "English";
      case "hi":
        return "हिंदी";
      case "od":
        return "ଓଡ଼ିଆ";
    }
  };

  const getLanguageShortLabel = (lang: Language) => {
    switch (lang) {
      case "en":
        return "EN";
      case "hi":
        return "हि";
      case "od":
        return "ଓଡ଼ି";
    }
  };

  const navItems: NavItem[] = [
    { label: t.navbar.home, href: "/#home" },
    { label: t.navbar.services, href: "/#services" },
    { label: t.navbar.departments, href: "/#departments" },
    { label: t.navbar.documents, href: "/#documents" },
    { label: t.navbar.gallery, href: "/#gallery" },
    { label: t.navbar.contact, href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 shadow-md py-2"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-transparent p-0 rounded-lg">
              <img
                src="https://ik.imagekit.io/Adutta1908/CHC_DHAMNAGAR_PHOTOS/logo_chcd.png"
                alt="CHC Dhamnagar Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 font-medium transition-colors duration-200 text-sm"
              >
                {item.label}
              </a>
            ))}

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleLangDropdown}
                className="flex items-center p-2 text-slate-500 hover:text-medical-600 dark:text-slate-400 dark:hover:text-medical-400 focus:outline-none transition-colors border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800"
                aria-label="Switch Language"
              >
                <Globe size={18} className="mr-1" />
                <span className="text-sm font-semibold mr-1">
                  {getLanguageShortLabel(language)}
                </span>
                <ChevronDown
                  size={14}
                  className={`transform transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "en" ? "bg-medical-50 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("hi")}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "hi" ? "bg-medical-50 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                  >
                    हिंदी
                  </button>
                  <button
                    onClick={() => handleLanguageChange("od")}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "od" ? "bg-medical-50 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                  >
                    ଓଡ଼ିଆ
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-medical-600 dark:text-slate-400 dark:hover:text-medical-400 focus:outline-none transition-colors"
              aria-label={t.navbar.toggleTheme}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contact"
              className="bg-medical-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-medical-700 transition-all shadow-md hover:shadow-lg text-sm"
            >
              {t.general.emergency}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative" ref={mobileDropdownRef}>
              <button
                onClick={toggleMobileLangDropdown}
                className="flex items-center p-2 text-slate-500 hover:text-medical-600 dark:text-slate-400 dark:hover:text-medical-400 focus:outline-none transition-colors rounded-md border border-slate-200 dark:border-slate-700"
              >
                <Globe size={18} className="mr-1" />
                <span className="text-xs font-bold mr-1">
                  {getLanguageShortLabel(language)}
                </span>
                <ChevronDown
                  size={14}
                  className={`transform transition-transform ${isMobileLangDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mobile Dropdown Positioned Absolute */}
              {isMobileLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "en" ? "bg-medical-50 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("hi")}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "hi" ? "bg-medical-50 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                  >
                    हिंदी
                  </button>
                  <button
                    onClick={() => handleLanguageChange("od")}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "od" ? "bg-medical-50 dark:bg-medical-900/30 text-medical-600 dark:text-medical-400" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                  >
                    ଓଡ଼ିଆ
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-medical-600 dark:text-slate-400 dark:hover:text-medical-400 focus:outline-none"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-slate-600 dark:text-slate-300 hover:text-medical-600 p-2 focus:outline-none"
              aria-label={t.navbar.toggleMenu}
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
                key={item.href}
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
