import React from "react";
import { ShieldCheck, UserX, Droplets } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

export const CovidGuidelines: React.FC = () => {
  const { t } = useLanguage();

  // Schema for Public Health Announcements
  const covidSchema = {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    "name": "COVID-19 Safety Protocols at CHC Dhamnagar",
    "category": "diseasePreventionInfo",
    "diseaseSpreadStatistics": "https://covid19.who.int/", // Links to authoritative source (Boosts Trust)
    "announcementLocation": {
      "@type": "CivicStructure",
      "name": "Community Health Center Dhamnagar"
    },
    "text": "Please sanitize hands, wear a mask, and maintain social distancing while visiting the hospital."
  };

  return (
    // 1. Semantic Tag: <aside> is perfect for "warnings" or "guidelines"
    <aside 
      className="bg-medical-900 py-12"
      aria-label="Public Health Safety Guidelines"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(covidSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.covid.title}
            </h3>
            <p className="text-medical-100">{t.covid.subtitle}</p>
          </div>

          {/* 2. Semantic List: Grouping items as a list instead of random divs */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto list-none m-0 p-0">
            
            {/* Item 1: Hand Wash */}
            <li className="flex flex-col items-center p-4 bg-medical-800 rounded-lg transform hover:scale-105 transition-transform duration-200">
              <Droplets className="w-8 h-8 text-white mb-3" aria-hidden="true" />
              <span className="text-white font-medium text-center">
                {t.covid.items.washHands}
              </span>
            </li>

            {/* Item 2: Mask */}
            <li className="flex flex-col items-center p-4 bg-medical-800 rounded-lg transform hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-8 h-8 text-white mb-3" aria-hidden="true" />
              <span className="text-white font-medium text-center">
                {t.covid.items.wearMask}
              </span>
            </li>

            {/* Item 3: Social Distancing */}
            <li className="flex flex-col items-center p-4 bg-medical-800 rounded-lg transform hover:scale-105 transition-transform duration-200">
              <UserX className="w-8 h-8 text-white mb-3" aria-hidden="true" />
              <span className="text-white font-medium text-center">
                {t.covid.items.socialDist}
              </span>
            </li>

          </ul>
        </div>
      </div>
    </aside>
  );
};