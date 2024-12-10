document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
});

// Données structurées pour le caviste
const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Clave d'Or",
    "description": "La Clave d'Or, caviste à Cagnes-sur-Mer, propose des vins, champagnes, spiritueux et produits d'exception, ainsi que des ateliers de dégustation.",
    "url": "https://example.com/la-clave-dor",
    "logo": "https://example.com/images/la-clave-dor-banner.jpg",
    "image": "https://example.com/images/la-clave-dor-banner.jpg",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "161 Av. de Nice",
        "addressLocality": "Cagnes-sur-Mer",
        "postalCode": "06800",
        "addressCountry": "FR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6636,
        "longitude": 7.1486
    },
    "telephone": "+33658984377",
    "sameAs": [
        "https://www.instagram.com/la_clave_dor/"
    ],
    "openingHours": [
        "Mo 10:00-13:00, 16:00-20:00",
        "Tu 10:00-13:00, 16:00-20:00",
        "We 10:00-13:00, 16:00-20:00",
        "Th 10:00-13:00, 16:00-20:00",
        "Fr 10:00-13:00, 16:00-22:00",
        "Sa 10:00-13:00, 16:00-22:00",
        "Su 10:00-13:00"
    ]

    // Rajouter les produits
};