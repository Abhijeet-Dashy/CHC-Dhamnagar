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
import { Helmet } from "react-helmet-async";

export const Departments: React.FC = () => {
  const { t } = useLanguage();

  const departments = [
    {
      title: t.departments.items.ipd.title,
      description: t.departments.items.ipd.desc,
      icon: Bed,
      type: "InpatientService", // Schema specific type
    },
    {
      title: t.departments.items.opd.title,
      description: t.departments.items.opd.desc,
      icon: UserPlus,
      type: "OutpatientService",
    },
    {
      title: t.departments.items.ayush.title,
      description: t.departments.items.ayush.desc,
      icon: Leaf,
      type: "TraditionalMedicine",
    },
    {
      title: t.departments.items.ot.title,
      description: t.departments.items.ot.desc,
      icon: Scissors,
      type: "SurgicalProcedure",
    },
    {
      title: t.departments.items.niramaya.title,
      description: t.departments.items.niramaya.desc,
      icon: HeartPulse,
      type: "Pharmacy",
    },
    {
      title: t.departments.items.pathology.title,
      description: t.departments.items.pathology.desc,
      icon: Activity,
      type: "DiagnosticLab",
    },
  ];

  // Generate Schema for Google
  const departmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "CHC Dhamnagar Departments",
    "department": departments.map((dept) => ({
      "@type": "HospitalDepartment",
      "name": dept.title,
      "description": dept.description,
      "medicalSpecialty": {
        "@type": "MedicalSpecialty",
        "name": dept.type // Matches the 'type' field added above
      }
    }))
  };

  return (
    <Section
      id="departments"
      title={t.departments.title}
      subtitle={t.departments.subtitle}
      bg="gray"
    >
      {/* Inject Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(departmentSchema)}
        </script>
      </Helmet>

      {/* Semantic List Structure */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
        {departments.map((dept, index) => (
          <li 
            key={index}
            className="h-full" // Ensures cards are same height
          >
            <article 
              className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col"
              itemScope
              itemType="https://schema.org/HospitalDepartment" // Inline Microdata as backup
            >
              <header>
                <div 
                  className="w-14 h-14 bg-medical-50 dark:bg-slate-800 text-medical-600 dark:text-medical-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300"
                  aria-hidden="true" // Hides icon from screen readers (purely decorative)
                >
                  <dept.icon size={28} />
                </div>
                <h3 
                  className="text-xl font-bold text-slate-900 dark:text-white mb-3"
                  itemProp="name"
                >
                  {dept.title}
                </h3>
              </header>
              
              <p 
                className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-grow"
                itemProp="description"
              >
                {dept.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
};