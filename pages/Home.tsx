import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Departments } from '../components/Departments';
import { Services } from '../components/Services';
import { Documents } from '../components/Documents';
import { Gallery } from '../components/Gallery';
import { CovidGuidelines } from '../components/CovidGuidelines';
import { Helmet } from 'react-helmet-async'; // <--- Import this

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Schema for Local Hospital SEO
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Community Health Center (CHC), Dhamnagar",
    "image": "https://chcdhamnagar.in/assets/hospital-building.jpg", // Update with a real image path if you have one
    "url": "https://chcdhamnagar.in",
    "telephone": "+91-6786-234234", // Replace with real phone if available
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dhamnagar",
      "addressLocality": "Bhadrak",
      "addressRegion": "Odisha",
      "postalCode": "756117",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.9200", 
      "longitude": "86.4300"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "department": [
      {
        "@type": "MedicalSpecialty",
        "name": "Emergency Department"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "OPD"
      }
    ]
  };

  return (
    <>
      {/* --- SEO START --- */}
      <Helmet>
        <title>CHC Dhamnagar | Government Community Health Center, Bhadrak</title>
        <meta 
          name="description" 
          content="Official website of CHC Dhamnagar. Providing 24/7 Emergency, OPD, Maternity Care, and Free Medicine (Niramaya) services in Dhamnagar, Bhadrak, Odisha." 
        />
        <meta 
          name="keywords" 
          content="CHC Dhamnagar, Dhamnagar Hospital, Bhadrak Health Center, Government Hospital Odisha, OPD Doctor List, Niramaya, Mo Sarkar" 
        />
        <link rel="canonical" href="https://chcdhamnagar.in/" />

        {/* Facebook / WhatsApp / LinkedIn Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CHC Dhamnagar - Serving the Community" />
        <meta property="og:description" content="Access doctor schedules, health reports, and emergency contacts for CHC Dhamnagar." />
        <meta property="og:url" content="https://chcdhamnagar.in/" />
        <meta property="og:site_name" content="CHC Dhamnagar" />
        
        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CHC Dhamnagar | Community Health Center" />
        <meta name="twitter:description" content="24/7 Medical Services in Dhamnagar, Bhadrak." />

        {/* Inject JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(hospitalSchema)}
        </script>
      </Helmet>
      {/* --- SEO END --- */}

      <Hero />
      <Services />
      <Departments />
      <Documents />
      <Gallery />
      <CovidGuidelines />
    </>
  );
};