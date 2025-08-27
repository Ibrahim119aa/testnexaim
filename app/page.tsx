import React from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import ContactForm from "@/components/sections/contactus";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
const TestimonialsSection = React.lazy(() => import("@/components/sections/testimoinal/Testimonial"));
// import Roadmap from "@/components/sections/roadmap";
import Services from "@/components/sections/services";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: 'Software House in Karachi - The Nexaim',
  description: 'Nexaim is Pakistan\'s leading digital marketing agency offering data-driven strategies for startups and brands. Grow your business online with our expert team!',
  keywords: ['Software House Karachi', 'Digital Marketing Pakistan', 'Nexaim Agency'],
  alternates: {
    canonical: 'https://thenexaim.com',
  },
  openGraph: {
    title: 'Software House in Karachi - The Nexaim',
    description: 'Grow your business online with Pakistan\'s trusted digital marketing agency, Nexaim.',
    url: 'https://thenexaim.com',
    type: 'website',
  },
};
export default function Home() {


  return (

    <html>
      <head>
        <meta name="google-site-verification" content="rSmgiUi5hClwP2sfbwSV1xX0POJwTuw5IjXRyxhtECs" />

      </head>
      <body>
        <main>
          <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
            <Navbar />
            <Hero />
            <Benefits />
            <Collaboration />
            <Services />
            {/* <Pricing /> */}
            {/* <Roadmap /> */}
            <ContactForm />
            <TestimonialsSection />
            <Footer />
          </div>
          <ButtonGradient />
        </main>
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
