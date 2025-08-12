import React from "react";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Nexaim",
    "url": "https://thenexaim.com/",
    "logo": "",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "03432469633",
      "contactType": "customer service",
      "areaServed": "PK",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.instagram.com/_thenexaim/",
      "https://www.facebook.com/thenexaim"
    ]
  };
  return (
    <html lang="en">
      <head>
        <Script
          id="adsbygoogle"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9713388182757013"
          crossOrigin="anonymous"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Nexaim",
              url: "https://thenexaim.com/",
              logo: "",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "03432469633",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.instagram.com/_thenexaim/",
                "https://www.facebook.com/thenexaim",
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Nexaim",
              image:
                "https://thenexaim.com/_next/image?url=%2Fassets%2F4-small.png&w=256&q=75",
              logo: "",
              "@id": "https://thenexaim.com/",
              url: "https://thenexaim.com/",
              telephone: "03432469633",
              priceRange: "PKR",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PAK",
                addressRegion: "KHI",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "06:00",
              },
            }),
          }}
        />
      </head>
      <body>
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Software House In Karachi - Social Media Marketing Agency in Pakistan| The Nexaim",
              image:
                "https://thenexaim.com/_next/image?url=%2Fassets%2F4-small.png&w=256&q=75",
              description:
                "Nexaim provides professional digital marketing services in Karachi and is recognized as one of the leading social media marketing agencies in Pakistan. We also offer expert SEO, creative graphic design, web design and development, and engaging video animation services. As a trusted company, we deliver innovative solutions for businesses across Pakistan.",
              brand: "The Nexaim",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "4.9",
                ratingCount: "43",
              },
            }),
          }}
        />

        {/* Service Schema */}
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Software House In Karachi - Social Media Marketing Agency in Pakistan| The Nexaim",
              description:
                "Nexaim provides professional digital marketing services in Karachi and is recognized as one of the leading social media marketing agencies in Pakistan. We also offer expert SEO, creative graphic design, web design and development, and engaging video animation services. As a trusted company, we deliver innovative solutions for businesses across Pakistan.",
              provider: {
                "@type": "Organization",
                name: "The Nexaim",
                url: "https://thenexaim.com/",
                logo: "",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "03432469633",
                  contactType: "Customer Service",
                  areaServed: "PAK, KHI",
                  availableLanguage: ["English"],
                },
              },
              areaServed: {
                "@type": "Place",
                name: "PAK",
              },
              serviceType:
                "best seo agency in Pakistan. software house in Karachi, graphic design services, graphic design agency in Pakistan, top seo expert in Pakistan, best web design company In Pakistan, web development services in Pakistan, social media marketing agency in Pakistan - digital marketing expert in Pakistan, podcast production & marketing services",
              category: "Digital Marketing",
              offers: {
                "@type": "Offer",
                priceCurrency: "PKR",
                price: "$",
                eligibleRegion: {
                  "@type": "Place",
                  name: "Pakistan",
                },
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        {children}

        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2052579801877656');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2052579801877656&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
