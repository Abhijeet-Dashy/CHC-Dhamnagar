import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import DocumentPage from "./pages/Document";
import { ScrollToTop } from "./components/ScrollToTop";
import { GalleryPage } from "./pages/GalleryPage";
import { LanguageProvider } from "./contexts/LanguageContext";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/documents" element={<DocumentPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;
