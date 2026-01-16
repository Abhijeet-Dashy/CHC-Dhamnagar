import React from "react";
import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Document } from "../types";
import { Section } from "./Section";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

const documents: Document[] = [
  {
    title: "BMWM ANNUAL REPORT LETTER -2025.pdf",
    year: "2025",
    url: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM%20ANNUAL%20REPORT%20LETTER%20-2025.pdf",
  },
  {
    title: "BMWM ANNUAL REPORT 2024 LETTER.pdf",
    year: "2024",
    url: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM%20ANNUAL%20REPORT%202024%20LETTER.pdf",
  },
  {
    title: "BMWM_2023_24_1.pdf",
    year: "2023-24",
    url: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2023_24_1.pdf",
  },
  {
    title: "BMWM_2022_23_2.pdf",
    year: "2022-23",
    url: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2022_23_2.pdf",
  },
];

export const Documents: React.FC = () => {
  const { t } = useLanguage();

  // Create Schema for Digital Documents
  const documentSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bio-Medical Waste Management Reports",
    "description": "Annual reports and returns for CHC Dhamnagar waste management.",
    "itemListElement": documents.map((doc, index) => ({
      "@type": "DigitalDocument",
      "position": index + 1,
      "name": doc.title,
      "datePublished": doc.year,
      "fileFormat": "application/pdf",
      "url": doc.url
    }))
  };

  return (
    <Section
      id="documents"
      title={t.documents.title}
      subtitle={t.documents.subtitle}
      bg="white"
    >
      {/* Inject Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(documentSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto overflow-x-auto bg-white dark:bg-slate-900 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-slate-300 dark:divide-slate-700">
          {/* SEO: Table Caption is crucial for Accessibility */}
          <caption className="sr-only">
            List of downloadable Bio-Medical Waste Management (BMWM) Annual Reports
          </caption>
          
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-6"
              >
                {t.documents.table.docName}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
              >
                {t.documents.table.year}
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">{t.documents.table.download}</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
            {documents.map((doc, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-slate-200 sm:pl-6 flex items-center">
                  <FileText className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-2" aria-hidden="true" />
                  {/* SEO: Use specific filename as text */}
                  {doc.title}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {doc.year}
                </td>
                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer" // Security best practice for opening new tabs
                    title={`Download ${doc.title}`} // Tooltip for users
                    aria-label={`Download PDF report: ${doc.title} for year ${doc.year}`} // SEO & Screen Reader text
                    className="text-medical-600 dark:text-medical-400 hover:text-medical-900 dark:hover:text-medical-300 flex items-center justify-end group"
                  >
                    <span className="group-hover:underline">{t.documents.table.download}</span>
                    <Download className="w-4 h-4 ml-1 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center bg-white dark:bg-slate-900">
        <Link
          to="/documents"
          title="View all available reports and documents"
          className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-700 transition-colors shadow-sm hover:shadow-md"
        >
          {t.navbar.documents}
        </Link>
      </div>
    </Section>
  );
};