import React from "react";
import { Ambulance, Syringe, Pill, Baby } from "lucide-react";
import { Section } from "./Section";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

export const Services: React.FC = () => {
  const { t } = useLanguage();

  // Define structured data for Google
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "EmergencyService",
          "name": "Ambulance Service (108)",
          "description": "24/7 Emergency Ambulance Service available via 108."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Vaccination & Immunization",
          "description": "Regular vaccination programs for children and adults."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Pharmacy",
          "name": "Niramaya Free Medicine",
          "description": "Free distribution of essential medicines under Niramaya scheme."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "MedicalSpecialty",
          "name": "Maternal & Child Health",
          "description": "Specialized care for expecting mothers and newborns."
        }
      }
    ]
  };

  const serviceItems = [
    { 
      icon: Ambulance, 
      label: t.services.items.ambulance, 
      link: "tel:108",
      ariaLabel: "Call 108 for Emergency Ambulance" 
    },
    { 
      icon: Syringe, 
      label: t.services.items.vaccination,
      ariaLabel: "Vaccination Services" 
    },
    { 
      icon: Pill, 
      label: t.services.items.medicine,
      ariaLabel: "Free Medicine Distribution" 
    },
    { 
      icon: Baby, 
      label: t.services.items.maternal,
      ariaLabel: "Maternal and Child Care" 
    },
  ];

  return (
    <Section id="services" title={t.services.title}>
      {/* Inject Schema for these specific services */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      {/* Semantic List Structure (Better for SEO than just divs) */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 list-none p-0 m-0">
        {serviceItems.map((item, idx) => (
          <li key={idx} className="h-full">
            {item.link ? (
              <a
                href={item.link}
                title={item.ariaLabel} // Hover tooltip
                aria-label={item.ariaLabel} // For Screen Readers & Bots
                className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg text-center border border-slate-100 dark:border-slate-700 hover:border-medical-200 dark:hover:border-medical-600 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50 group h-full cursor-pointer"
              >
                <item.icon 
                  className="w-10 h-10 text-medical-600 dark:text-medical-500 mb-3 group-hover:scale-110 transition-transform" 
                  aria-hidden="true" // Hide icon from screen readers, they read the label instead
                />
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                  {item.label}
                </h3>
              </a>
            ) : (
              <div
                className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg text-center border border-slate-100 dark:border-slate-700 hover:border-medical-200 dark:hover:border-medical-600 transition-colors h-full"
              >
                <item.icon 
                  className="w-10 h-10 text-medical-600 dark:text-medical-500 mb-3" 
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                  {item.label}
                </h3>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
};