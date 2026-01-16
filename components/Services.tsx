import React from "react";
import { Ambulance, Syringe, Pill, Baby } from "lucide-react";
import { Section } from "./Section";
import { useLanguage } from "../contexts/LanguageContext";

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="services" title={t.services.title}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            icon: Ambulance,
            label: t.services.items.ambulance,
            link: "tel:108",
          },
          { icon: Syringe, label: t.services.items.vaccination },
          { icon: Pill, label: t.services.items.medicine },
          { icon: Baby, label: t.services.items.maternal },
        ].map((item, idx) =>
          item.link ? (
            <a
              key={idx}
              href={item.link}
              className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg text-center border border-slate-100 dark:border-slate-700 hover:border-medical-200 dark:hover:border-medical-600 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50 group"
            >
              <item.icon className="w-10 h-10 text-medical-600 dark:text-medical-500 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {item.label}
              </span>
            </a>
          ) : (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg text-center border border-slate-100 dark:border-slate-700 hover:border-medical-200 dark:hover:border-medical-600 transition-colors"
            >
              <item.icon className="w-10 h-10 text-medical-600 dark:text-medical-500 mb-3" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {item.label}
              </span>
            </div>
          ),
        )}
      </div>
    </Section>
  );
};
