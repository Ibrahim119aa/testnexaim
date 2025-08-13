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

  );
}
