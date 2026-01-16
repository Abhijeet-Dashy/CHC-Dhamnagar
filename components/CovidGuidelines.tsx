import React from "react";
import { ShieldCheck, UserX, Droplets } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const CovidGuidelines: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-medical-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.covid.title}
            </h3>
            <p className="text-medical-100">{t.covid.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
            <div className="flex flex-col items-center p-4 bg-medical-800 rounded-lg">
              <Droplets className="w-8 h-8 text-white mb-3" />
              <span className="text-white font-medium">
                {t.covid.items.washHands}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-medical-800 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-white mb-3" />
              <span className="text-white font-medium">
                {t.covid.items.wearMask}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-medical-800 rounded-lg">
              <UserX className="w-8 h-8 text-white mb-3" />
              <span className="text-white font-medium">
                {t.covid.items.socialDist}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
