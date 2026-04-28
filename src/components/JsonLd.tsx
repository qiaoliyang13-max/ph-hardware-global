import Script from 'next/script';

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PH Hardware",
    "url": "https://www.phhardware.com.cn",
    "logo": "https://www.phhardware.com.cn/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-123-4567-8901",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["en", "es", "fr", "ru"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ph-hardware"
    ]
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
