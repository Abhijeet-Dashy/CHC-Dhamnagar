import React from "react";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-slate-900 dark:bg-black text-slate-300 transition-colors duration-300"
      // SEO: Mark this entire footer as information about a Government Building
      itemScope
      itemType="https://schema.org/GovernmentBuilding"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4" itemProp="name">
              {t.footer.about.title} {/* "Community Health Center, Dhamnagar" */}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4" itemProp="description">
              {t.footer.about.desc}
            </p>
          </div>

          {/* 2. Contact Info with Local SEO Schema */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {t.footer.contact.title}
            </h3>
            <address className="not-italic"> {/* Semantic tag for addresses */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-medical-500 mr-3 mt-1 shrink-0" aria-hidden="true" />
                  {/* Inline Schema for Address */}
                  <span 
                    className="whitespace-pre-line"
                    itemProp="address" 
                    itemScope 
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">{t.footer.contact.address}</span>
                    <meta itemProp="addressLocality" content="Bhadrak" />
                    <meta itemProp="addressRegion" content="Odisha" />
                    <meta itemProp="postalCode" content="756117" />
                    <meta itemProp="addressCountry" content="IN" />
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-medical-500 mr-3 shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${t.footer.contact.phone}`}
                    className="hover:text-medical-500 transition-colors"
                    itemProp="telephone"
                    aria-label={`Call CHC Dhamnagar at ${t.footer.contact.phone}`}
                  >
                    {t.footer.contact.phone}
                  </a>
                </li>
              </ul>
            </address>

            {/* Google Map Embed */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-sm border border-slate-700">
              <iframe
                // Updated to a valid search query for CHC Dhamnagar
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.527376043876!2d86.4293043149174!3d20.92051698605557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1be706cba3f373%3A0x7e29783f88045507!2sCHC%20Dhamnagar!5e0!3m2!1sen!2sin!4v1698245612345!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing location of Community Health Center Dhamnagar"
                aria-label="Google Map location of CHC Dhamnagar"
              ></iframe>
            </div>
          </div>

          {/* 3. Emergency Links */}
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
                aria-label="Call Ambulance Service at 108"
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
                aria-label="Call Police at 100"
              >
                {t.footer.emergency.police.number}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 dark:border-slate-900 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {currentYear} {t.footer.copyright.replace("{year}", "")} | 
            <span className="ml-1">Maintained by Videntur Executors Pvt Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};