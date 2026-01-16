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
  // Create a unique ID for the heading based on the section ID
  // This helps screen readers associate the section with its title
  const titleId = id ? `${id}-heading` : undefined;

  return (
    <section 
      id={id} 
      aria-labelledby={titleId} // <--- Links this section to its specific title
      className={`scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        bg === 'gray' 
          ? 'bg-slate-50 dark:bg-slate-800' 
          : 'bg-white dark:bg-slate-900'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <header className="text-center mb-12"> {/* Changed div to header for better semantics */}
            {title && (
              <h2 
                id={titleId} // <--- The target for aria-labelledby
                className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            {/* Decorative bar: aria-hidden tells Google to ignore this visual element */}
            <div 
              className="w-24 h-1 bg-medical-600 mx-auto mt-6 rounded-full opacity-80" 
              aria-hidden="true" 
            />
          </header>
        )}
        {children}
      </div>
    </section>
  );
};