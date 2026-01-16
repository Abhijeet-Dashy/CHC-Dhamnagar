import React from 'react';
import { Section } from './Section';

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" title="Gallery" bg="gray">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[200, 201, 202, 203].map((id, index) => (
          <div key={index} className="relative aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-md group">
            <img 
              src={`https://picsum.photos/400/300?random=${id}`} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};