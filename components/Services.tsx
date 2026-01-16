import React from 'react';
import { Ambulance, Syringe, Pill, Baby } from 'lucide-react';
import { Section } from './Section';

export const Services: React.FC = () => {
  return (
    <Section id="services" title="Public Services">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: Ambulance, label: '108 Ambulance' },
          { icon: Syringe, label: 'Free Vaccination' },
          { icon: Pill, label: 'Free Medicine' },
          { icon: Baby, label: 'Maternal Care' },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg text-center border border-slate-100 dark:border-slate-700 hover:border-medical-200 dark:hover:border-medical-600 transition-colors">
            <item.icon className="w-10 h-10 text-medical-600 dark:text-medical-500 mb-3" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">{item.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};