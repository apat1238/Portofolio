import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://portofolioarapat.netlify.app';

const SEO = ({ 
  title, 
  description,
  keywords,
  author = "Muhammad Arapat Rahman",
  type = "website",
  image = `${SITE_URL}/pas_foto.png`,
}) => {
  const location = useLocation();
  const currentUrl = `${SITE_URL}${location.pathname}`;

  const defaultTitle = "Arafat Rahman | IT Professional & React Developer";
  const seoTitle = title ? `${title} | Arafat Rahman` : defaultTitle;

  const seoDescription = description
    || "Portfolio resmi Muhammad Arapat Rahman - IT Supervisor, System Administrator, dan React Web Developer dengan pengalaman 10+ tahun di industri pertambangan dan forestry di Jambi, Indonesia.";

  const seoKeywords = keywords
    || "Arafat Rahman, Muhammad Arapat Rahman, Portfolio Arafat Rahman, Arafat Developer, Arafat React Developer, IT Supervisor Jambi, Web Developer Jambi, React Developer Indonesia, IT Support Mining";

  // JSON-LD Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Arapat Rahman",
    "alternateName": "Arafat Rahman",
    "jobTitle": "IT Supervisor & React Developer",
    "url": SITE_URL,
    "image": `${SITE_URL}/pas_foto.png`,
    "email": "arafat.forestry@yahoo.com",
    "telephone": "+6285378601404",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jambi",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://www.linkedin.com/in/muhammad-arapat-rahman-43004714b/"
    ],
    "knowsAbout": [
      "System Administration", "Network Infrastructure", "React Development",
      "Mikrotik", "Cisco", "Windows Server", "CCTV Systems", "Python", "PHP"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": SITE_URL,
    "name": "Muhammad Arapat Rahman Portfolio",
    "description": seoDescription,
    "author": {
      "@type": "Person",
      "name": "Muhammad Arapat Rahman"
    }
  };

  const schemas = [personSchema, websiteSchema];

  if (type === 'profile') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "dateCreated": "2026-06-01T00:00:00+07:00",
      "dateModified": new Date().toISOString(),
      "url": currentUrl,
      "mainEntity": {
        "@type": "Person",
        "name": "Muhammad Arapat Rahman",
        "description": seoDescription
      }
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={type === 'profile' ? 'profile' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="800" />
      <meta property="og:site_name" content="Arafat Rahman Portfolio" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
};

export default SEO;
