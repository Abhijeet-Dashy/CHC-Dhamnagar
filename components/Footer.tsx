import React from "react";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-slate-900 dark:bg-black text-slate-300 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {t.footer.about.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {t.footer.about.desc}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {t.footer.contact.title}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-medical-500 mr-3 mt-1 shrink-0" />
                <span className="whitespace-pre-line">
                  {t.footer.contact.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-medical-500 mr-3 shrink-0" />
                <a
                  href={`tel:${t.footer.contact.phone}`}
                  className="hover:text-medical-500 transition-colors"
                >
                  {t.footer.contact.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-lg overflow-hidden shadow-sm border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.008922732469!2d86.4347829752534!3d20.91196068070832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bf1a0da4f6d3d%3A0xad134ef45273e09!2sChc%20dhamnagar!5e0!3m2!1sen!2sin!4v1768591717366!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CHC Dhamnagar Location"
              ></iframe>
            </div>
          </div>

          {/* Quick Links / Map Placeholder */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {t.footer.emergency.title}
            </h3>
            <div className="bg-slate-800 dark:bg-slate-900 p-4 rounded-lg">
              <p className="text-sm text-slate-400 mb-2">
                {t.footer.emergency.ambulance.label}
              </p>
              <a
                href="tel:108"
                className="text-2xl font-bold text-white hover:text-medical-500 transition-colors block"
              >
                {t.footer.emergency.ambulance.number}
              </a>
              <div className="h-px bg-slate-700 my-3"></div>
              <p className="text-sm text-slate-400 mb-2">
                {t.footer.emergency.police.label}
              </p>
              <a
                href="tel:100"
                className="text-2xl font-bold text-white hover:text-medical-500 transition-colors block"
              >
                {t.footer.emergency.police.number}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>
            {t.footer.copyright.replace(
              "{year}",
              new Date().getFullYear().toString(),
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
