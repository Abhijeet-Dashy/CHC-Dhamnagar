import React from "react";
import {
  Bed,
  UserPlus,
  Leaf,
  Scissors,
  Activity,
  HeartPulse,
} from "lucide-react";
import { Section } from "./Section";
import { useLanguage } from "../contexts/LanguageContext";

export const Departments: React.FC = () => {
  const { t } = useLanguage();

  const departments = [
    {
      title: t.departments.items.ipd.title,
      description: t.departments.items.ipd.desc,
      icon: Bed,
    },
    {
      title: t.departments.items.opd.title,
      description: t.departments.items.opd.desc,
      icon: UserPlus,
    },
    {
      title: t.departments.items.ayush.title,
      description: t.departments.items.ayush.desc,
      icon: Leaf,
    },
    {
      title: t.departments.items.ot.title,
      description: t.departments.items.ot.desc,
      icon: Scissors,
    },
    {
      title: t.departments.items.niramaya.title,
      description: t.departments.items.niramaya.desc,
      icon: HeartPulse,
    },
    {
      title: t.departments.items.pathology.title,
      description: t.departments.items.pathology.desc,
      icon: Activity,
    },
  ];

  return (
    <Section
      id="departments"
      title={t.departments.title}
      subtitle={t.departments.subtitle}
      bg="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 bg-medical-50 dark:bg-slate-800 text-medical-600 dark:text-medical-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
              <dept.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {dept.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {dept.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
