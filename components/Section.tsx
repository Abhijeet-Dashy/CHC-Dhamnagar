import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bg?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  bg = 'white' 
}) => {
  return (
    <section 
      id={id} 
      className={`scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        bg === 'gray' 
          ? 'bg-slate-50 dark:bg-slate-800' 
          : 'bg-white dark:bg-slate-900'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-medical-600 mx-auto mt-6 rounded-full opacity-80"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};