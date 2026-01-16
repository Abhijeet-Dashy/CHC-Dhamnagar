import React from "react";
import { FileText, Download, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <--- 1. Import this
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";
export const DocumentPage: React.FC = () => {
  const { t } = useLanguage();
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  const documents = [
    {
      title: "BMWM_2023_24_1.pdf",
      year: "2023-24",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2023_24_1.pdf",
    },
    {
      title: "BMWM_2021_22.pdf",
      year: "2021-22",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2021_22.pdf",
    },
    {
      title: "BMWM ANNUAL REPORT 2024 LETTER.pdf",
      year: "2024",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM%20ANNUAL%20REPORT%202024%20LETTER.pdf",
    },
    {
      title: "BMWM ANNUAL REPORT LETTER -2025.pdf",
      year: "2025",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM%20ANNUAL%20REPORT%20LETTER%20-2025.pdf",
    },
    {
      title: "BMWM_2022_23_2.pdf",
      year: "2022-23",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2022_23_2.pdf",
    },
    {
      title: "BMWM_2022_23_3.pdf",
      year: "2022-23",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2022_23_3.pdf",
    },
    {
      title: "BMWM_2022_23_4.pdf",
      year: "2022-23",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2022_23_4.pdf",
    },
    {
      title: "BMWM_2022_23_1.pdf",
      year: "2022-23",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMWM_2022_23_1.pdf",
    },
    {
      title: "BMW_AR_3.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMW_AR_3.pdf",
    },
    {
      title: "BMW LETTER02032024_0001.pdf",
      year: "2024",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMW%20LETTER02032024_0001.pdf",
    },
    {
      title: "BMW_AR_2.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMW_AR_2.pdf",
    },
    {
      title: "BMW_AR_1.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMW_AR_1.pdf",
    },
    {
      title: "BMW_AR_4.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/BMW_AR_4.pdf",
    },
    {
      title: "E Waste Annual Return.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/E%20Waste%20Annual%20Return.pdf",
    },
    {
      title: "PAGE-1.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/PAGE-1.pdf",
    },
    {
      title: "PAGE-2.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/PAGE-2.pdf",
    },
    {
      title: "PAGE-3.pdf",
      year: "N/A",
      size: "PDF",
      type: "PDF",
      link: "https://ik.imagekit.io/whyr6vf5a/FILES/PAGE-3.pdf",
    },
  ];

  return (
    <>
      {/* 2. SEO Block Start */}
      <Helmet>
        <title>Documents & Reports | CHC Dhamnagar</title>
        <meta 
          name="description" 
          content="Download official Annual Reports, Bio-Medical Waste Management (BMWM) records, and E-Waste returns from Community Health Center, Dhamnagar." 
        />
        <meta name="keywords" content="CHC Dhamnagar reports, BMWM reports, Bhadrak hospital documents, Odisha health reports, annual returns" />
        <link rel="canonical" href="https://chcdhamnagar.in/documents" />
        
        {/* Open Graph for WhatsApp/Facebook Sharing */}
        <meta property="og:title" content="Downloads & Reports - CHC Dhamnagar" />
        <meta property="og:description" content="Access official medical waste management reports and annual returns." />
        <meta property="og:url" content="https://chcdhamnagar.in/documents" />
      </Helmet>
      {/* SEO Block End */}

      <div className="mt-3 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-medical-600 hover:text-medical-800 dark:text-medical-400 dark:hover:text-medical-200 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.navbar.home}
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t.documents.title}
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
            {t.documents.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                    {doc.type}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {doc.title}
                </h3>

                <div className="mt-4 flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {doc.year}
                  </div>
                  <div>{doc.size}</div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-3 border-t border-slate-100 dark:border-slate-700">
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  // Note: 'download' attr only works for same-origin files usually. 
                  // Since these are on ImageKit, it will likely open in a new tab, which is fine.
                  download 
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.documents.table.download}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DocumentPage;