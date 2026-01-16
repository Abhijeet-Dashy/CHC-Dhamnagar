import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Document } from '../types';
import { Section } from './Section';

const documents: Document[] = [
  { title: 'Bio-Medical Waste Management Report', year: '2024', url: '#' },
  { title: 'Bio-Medical Waste Management Report', year: '2023', url: '#' },
  { title: 'Bio-Medical Waste Management Report', year: '2022', url: '#' },
  { title: 'Bio-Medical Waste Management Report', year: '2021', url: '#' },
];

export const Documents: React.FC = () => {
  return (
    <Section 
      id="documents" 
      title="Important Documents" 
      subtitle="Transparency is key. Access our annual Bio-Medical Waste Management (BMWM) reports."
      bg="white"
    >
      <div className="max-w-4xl mx-auto overflow-hidden bg-white dark:bg-slate-900 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-slate-300 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-6">Document Name</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white">Year</th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Download</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
            {documents.map((doc, idx) => (
              <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-slate-200 sm:pl-6 flex items-center">
                  <FileText className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-2" />
                  {doc.title}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{doc.year}</td>
                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href={doc.url} className="text-medical-600 dark:text-medical-400 hover:text-medical-900 dark:hover:text-medical-300 flex items-center justify-end">
                    Download <Download className="w-4 h-4 ml-1" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};