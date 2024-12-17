document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
});

// Données structurées pour le caviste et les produits
const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Clave d'Or",
    "description": "La Clave d'Or, caviste à Cagnes-sur-Mer, propose des vins, champagnes, spiritueux et produits d'exception, ainsi que des ateliers de dégustation.",
    "url": "https://laclavedor.com",
    "logo": "https://laclavedor.com/images/logo.webp",
    "image": "https://laclavedor.com/images/fond1.webp",
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
    ],
    "makesOffer": [
        {
            "@type": "Product",
            "name": "Pouilly-fuissé",
            "image": "https://laclavedor.com/images/appel1.webp",
            "description": "Vieilles vignes 2022",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Bouzeron",
            "image": "https://laclavedor.com/images/appel2.webp",
            "description": "Les Corcelles 2022",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Boutenac",
            "image": "https://laclavedor.com/images/appel3.webp",
            "description": "Famille Fabre 2020",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Crozes-Hermitage",
            "image": "https://laclavedor.com/images/appel4.webp",
            "description": "Le Pierrier 2021",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Pouilly-fumé",
            "image": "https://laclavedor.com/images/appel5.webp",
            "description": "La Villaudière 2023",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Nuits-Saint-Georges",
            "image": "https://laclavedor.com/images/appel6.webp",
            "description": "Vieilles vignes 2018",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Panier Festif de Noël",
            "image": "https://laclavedor.com/images/panier1.webp",
            "description": "Sélection de délices de Noël",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Coffret Gourmand de Noël",
            "image": "https://laclavedor.com/images/panier2.webp",
            "description": "Collection de saveurs festives",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Trésor de Noël",
            "image": "https://laclavedor.com/images/panier3.webp",
            "description": "Ensemble de délices festifs",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Délices Festifs de Noël",
            "image": "https://laclavedor.com/images/panier4.webp",
            "description": "Palette de gourmandises festives",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Surprise Gourmande de Noël",
            "image": "https://laclavedor.com/images/panier5.webp",
            "description": "Mélange de saveurs festives",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Merveilles de Noël",
            "image": "https://laclavedor.com/images/panier6.webp",
            "description": "Sélection festive de Noël",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Saint-Joseph - Coursodon",
            "image": "https://laclavedor.com/images/vin1.webp",
            "description": "Année 2022, Côte du Rhône",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Côte Rôtie - La Chavarine",
            "image": "https://laclavedor.com/images/vin2.webp",
            "description": "Année 2022, Côte du Rhône",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Maby - Nessun Dorma",
            "image": "https://laclavedor.com/images/vin3.webp",
            "description": "Année 2021, Côte du Rhône",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Margaux - Marquis de Mons",
            "image": "https://laclavedor.com/images/vin4.webp",
            "description": "Année 2016, Bordeaux",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Pomerol - Château Cantereau",
            "image": "https://laclavedor.com/images/vin5.webp",
            "description": "Année 2019, Bordeaux",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Charmes-Chambertin",
            "image": "https://laclavedor.com/images/vin6.webp",
            "description": "Année 2014, Côte-d'Or",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Saint-Véran",
            "image": "https://laclavedor.com/images/blanc1.webp",
            "description": "Bourgogne, Année 2022",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Sancerre",
            "image": "https://laclavedor.com/images/blanc2.webp",
            "description": "Loire, Année 2023",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Les Rieux de Marié",
            "image": "https://laclavedor.com/images/blanc3.webp",
            "description": "Languedoc-Roussillon, Année 2023",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Chateau Vessiere",
            "image": "https://laclavedor.com/images/blanc4.webp",
            "description": "Côte du Rhône, Année 2023",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Mon grand-père était limonadier",
            "image": "https://laclavedor.com/images/blanc5.webp",
            "description": "Côte du Rhône, Année 2023",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Chablis grand cru",
            "image": "https://laclavedor.com/images/blanc6.webp",
            "description": "Bourgogne, Année 2021",
            "brand": {
                "@type": "Brand",
                "name": "La Clave d'Or"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Clos des Crostes",
            "image": "images/rose1.webp",
            "description": "Var, Année 2022",
            "brand": {
                "@type": "Brand",
                "name": "Clos des Crostes"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Amorevolezza",
            "image": "images/rose2.webp",
            "description": "Var, Année 2022",
            "brand": {
                "@type": "Brand",
                "name": "Amorevolezza"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Lou Vin d'Aqui",
            "image": "images/rose3.webp",
            "description": "Saint Blaise, Alpes-Maritimes, Année 2022",
            "brand": {
                "@type": "Brand",
                "name": "Lou Vin d'Aqui"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Cesar",
            "image": "images/rose4.webp",
            "description": "Var, Année 2022",
            "brand": {
                "@type": "Brand",
                "name": "Cesar"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Coussin",
            "image": "images/rose5.webp",
            "description": "Côte de Provence, Année 2023",
            "brand": {
                "@type": "Brand",
                "name": "Coussin"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Le Songe",
            "image": "images/rose6.webp",
            "description": "Var, Année 2023",
            "brand": {
                "@type": "Brand",
                "name": "Le Songe"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Alexandre Demarjory - Nature sans dosage",
            "image": "images/prestige1.webp",
            "description": "Champagne-Ardenne",
            "brand": {
                "@type": "Brand",
                "name": "Alexandre Demarjory"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Initiation Dehu - Pinot noir et meunier",
            "image": "images/prestige2.webp",
            "description": "Champagne-Ardenne",
            "brand": {
                "@type": "Brand",
                "name": "Initiation Dehu"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Billecart-Salmon - Brut sous bois",
            "image": "images/prestige3.webp",
            "description": "Champagne-Ardenne",
            "brand": {
                "@type": "Brand",
                "name": "Billecart-Salmon"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Louis Roederer - Collection 244",
            "image": "images/prestige4.webp",
            "description": "Champagne-Ardenne",
            "brand": {
                "@type": "Brand",
                "name": "Louis Roederer"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Ruinart - Blanc de Blancs",
            "image": "images/prestige5.webp",
            "description": "Champagne-Ardenne",
            "brand": {
                "@type": "Brand",
                "name": "Ruinart"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Deutz - Brut Classic",
            "image": "images/prestige6.webp",
            "description": "Champagne-Ardenne",
            "brand": {
                "@type": "Brand",
                "name": "Deutz"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Shikotsu Toya",
            "image": "images/whisky1.webp",
            "description": "Whisky Japonais",
            "brand": {
                "@type": "Brand",
                "name": "Shikotsu Toya"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Islay STORM",
            "image": "images/whisky2.webp",
            "description": "Whisky Écossais",
            "brand": {
                "@type": "Brand",
                "name": "Islay STORM"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Macallan 15 ans d'âge",
            "image": "images/whisky3.webp",
            "description": "Whisky Écossais",
            "brand": {
                "@type": "Brand",
                "name": "Macallan"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Carnagh",
            "image": "images/whisky4.webp",
            "description": "Irish Whisky",
            "brand": {
                "@type": "Brand",
                "name": "Carnagh"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Caol Ila",
            "image": "images/whisky5.webp",
            "description": "Whisky Écossais",
            "brand": {
                "@type": "Brand",
                "name": "Caol Ila"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Johnny Drum",
            "image": "images/whisky6.webp",
            "description": "Kentucky Bourbon",
            "brand": {
                "@type": "Brand",
                "name": "Johnny Drum"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Bullion",
            "image": "images/rhum1.webp",
            "description": "Traditionnel Blanc, Île de la Réunion",
            "brand": {
                "@type": "Brand",
                "name": "Bullion"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Sodade",
            "image": "images/rhum2.webp",
            "description": "Rhum artisanal, Cap Vert",
            "brand": {
                "@type": "Brand",
                "name": "Sodade"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "William Hinton",
            "image": "images/rhum3.webp",
            "description": "Rhum de Madère, Portugal",
            "brand": {
                "@type": "Brand",
                "name": "William Hinton"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Bullion",
            "image": "images/rhum4.webp",
            "description": "Rhum jamaïcain, Jamaïque",
            "brand": {
                "@type": "Brand",
                "name": "Bullion"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Bullion millésimé",
            "image": "images/rhum5.webp",
            "description": "Rhum vieilli, Barbados",
            "brand": {
                "@type": "Brand",
                "name": "Bullion"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@type": "Product",
            "name": "Rhum Hardy",
            "image": "images/rhum6.webp",
            "description": "Vieux rhum agricole XO, Martinique",
            "brand": {
                "@type": "Brand",
                "name": "Rhum Hardy"
            },
            "offers": {
                "@type": "Offer",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
            }
        }
    ]
};
