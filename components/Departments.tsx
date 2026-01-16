import React from 'react';
import { Bed, UserPlus, Leaf, Scissors, Activity, HeartPulse } from 'lucide-react';
import { Department } from '../types';
import { Section } from './Section';

const departments: Department[] = [
  {
    title: 'Indoor Patient Dept (IPD)',
    description: 'Equipped with general wards and special rooms. Round-the-clock monitoring by trained nursing staff and doctors.',
    icon: Bed,
  },
  {
    title: 'Outdoor Patient Dept (OPD)',
    description: '24/7 doctor consultation available for all general diseases, maternal care, and pediatric checkups.',
    icon: UserPlus,
  },
  {
    title: 'Ayush',
    description: 'Specialized holistic care focusing on lifestyle disorders, combining traditional wisdom with modern diagnostics.',
    icon: Leaf,
  },
  {
    title: 'Operation Theater',
    description: 'State-of-the-art sterile surgical rooms with overhead lights and modern anesthesia equipment for minor and major surgeries.',
    icon: Scissors,
  },
  {
    title: 'Niramaya',
    description: 'Free medicine distribution center ensuring availability of essential drugs to all patients.',
    icon: HeartPulse,
  },
  {
    title: 'Pathology Lab',
    description: 'Advanced diagnostic services for blood, urine, and other essential medical tests.',
    icon: Activity,
  },
];

export const Departments: React.FC = () => {
  return (
    <Section 
      id="departments" 
      title="Our Departments" 
      subtitle="Comprehensive healthcare services designed to meet the diverse needs of our community."
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
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{dept.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {dept.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};