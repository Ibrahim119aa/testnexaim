import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/servicenavbar";

import { Search, MessageSquare, MapPin, FileText } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/sections/service-page/Faqs";
import ServiceBenefits, { BenefitItem } from "@/components/sections/service-page/service-benefits";
import ServicesSectionDetails, { Service } from "@/components/sections/service-page/service-details";
import ServiceHero from "@/components/sections/service-page/service-hero";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import { images } from "@/constants";


export default function Home() {

  const heroData = {
    heading: "Best SEO Agency in",
    image: "/assets/SEO.jpg",
    highlight: "Pakistan!",
    paragraphs: [
      "We’re not just another SEO company in Pakistan — we’re your growth partners. At Nexaim, we specialize in turning search traffic into real business by combining data-driven strategies with personalized SEO solutions. Whether you're a local startup or an international brand targeting Pakistan, our job is to make sure your customers find you before your competitors.",
      "With years of experience, a proven track record, and a passion for digital performance, we take your online visibility seriously — so you don’t have to."

    ],
    button: {
      text: "Get Your Offer",
      link: "https://wa.me/+923432469633",
    },
    videoSrc: images.heroVideo,
    backgroundImage: images.heroBackground,
    curveImage: images.curve,
  };
  const benefitsData: BenefitItem[] = [
    {
      id: 1,
      title: "SEO strategies:",
      text: "We don’t use copy-paste formulas. Every website is different, and so is our approach.",
      backgroundUrl: "/assets/benefits/card-1.svg",

      imageUrl: "/assets/images/seo-benefit-1.jpg",
      light: true,
    },
    {
      id: 2,
      title: "Transparent reporting",
      text: "You’ll always know what’s happening behind the scenes. No jargon, just clear updates.",
      backgroundUrl: "/assets/benefits/card-2.svg",
      light: true,
      imageUrl: "/assets/images/seo-benefit-2.jpg",
    },
    {
      id: 3,
      title: "Result-driven work",
      text: "Our focus isn’t just rankings, it's growth — in traffic, leads, and revenue.",
      backgroundUrl: "/assets/benefits/card-3.svg",
      light: true,
    },

    {
      id: 4,
      title: "White-hat SEO",
      text: "We follow Google-approved methods that bring long-term, stable results.",
      backgroundUrl: "/assets/benefits/card-4.svg",
      light: true,
    },
    {
      id: 5,
      title: "Local",
      text: "We’ve worked with clients in Pakistan.We care about your success as much as you do. Your goals become our goals — simple.",
      backgroundUrl: "/assets/benefits/card-5.svg",
      light: true,
    },
  ];

  const seoServices: Service[] = [
    {
      icon: Search,
      title: "SEO (Search Engine Optimization)",
      description: "From on-page optimization to backlink building, we handle every element that helps your website rank higher on Google. We optimize site structure, content, and technical aspects to increase visibility and drive more organic traffic.",
      color: "color-1",
    },
    {
      icon: MessageSquare,
      title: "AEO (Answer Engine Optimization)",
      description: "AEO is the future of SEO. With voice search and AI assistants growing fast, we optimize your content to answer questions directly. Our AEO techniques help your website appear in featured snippets and voice results — making you the go-to source in your niche.",
      color: "color-1",
    },
    {
      icon: MapPin,
      title: "GEO (Geo-targeted SEO)",
      description: "Targeting local customers? We specialize in local SEO strategies that put your business on the map — literally. From optimizing your Google Business Profile to managing local citations and maps, we help your business show up in local search results for maximum visibility.",
      color: "color-1",
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "Great content is the backbone of any successful SEO strategy. At Nexaim,We optimize it to meet both user and search engine expectations.",
      color: "color-1",
    },
  ];
  const faqData: FAQItem[] = [
    {
      question: "What is SEO and why do I need it?",
      answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. With better visibility, your website attracts more visitors, leading to increased traffic, leads, and ultimately sales. If you're not utilizing SEO, you're missing out on one of the most cost-effective ways to grow your business online.",
    },
    {
      question: "What is the difference between SEO and AEO?",
      answer: "While SEO focuses on improving your website’s ranking in search engines, AEO (Answer Engine Optimization) focuses on optimizing content to appear in featured snippets and voice search results. With the rise of voice assistants like Siri and Google Assistant, AEO is becoming an essential part of SEO to ensure your content answers user queries directly.",
    },

    {
      question: "Do you provide local SEO services in Pakistan?",
      answer: "Yes! We specialize in local SEO services to help your business get noticed by local customers. Whether you're in Karachi, Lahore, or Islamabad, our local SEO strategies ensure that your business shows up in search results for location-based queries. We also optimize your Google Business Profile, local citations, and maps for maximum visibility.",
    },
    {
      question: "What makes you different from other SEO agencies in Pakistan?",
      answer: "At Nexaim, we don’t believe in cookie-cutter solutions. Our SEO strategies are personalized for each client, ensuring we meet your specific needs and goals. With years of experience, a data-driven approach, and a team of experts, we focus on delivering sustainable results that drive traffic and business growth.",
    },
    {
      question: "What is Content Optimization?",
      answer: "Content optimization is the process of ensuring that the content on your website is valuable, relevant, and strategically optimized to rank higher in search engines. It involves more than just using keywords — it's about structuring the content correctly, improving readability, enhancing engagement, and ensuring that the right message reaches your audience.",
    },
    // Add more
  ];
  const faqsubtitle = " Get answers to the most common questions about our SEO and digital marketing services";
  return (
    <main>
      <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
        <Navbar />
        <ServiceHero content={heroData} />
        {/* <Benefits /> */}
        <ServiceBenefits
          sectionTitle="There are hundreds of SEO agencies in Pakistan. So, why trust us?"
          benefits={benefitsData}
        />
        <ServicesSectionDetails
          title="Ready to Rank?"
          subheading="Let's talk about how we can grow your business with SEO thats works."
          heading="What Aspects We"
          gradientText="Cover"
          subtitle="SEO isn't just about keywords. It's about being in the right place at the right time."
          description="We offer a complete range of SEO services tailored to your business model and audience, including:"
          services={seoServices}
          primaryCta={{ text: "VIEW OUR PORTFOLIO", link: "https://wa.me/+923432469633" }}
        />;
        <FAQSection data={faqData} subtitle={faqsubtitle} />
        {/* <Collaboration />
        <Services /> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        {/* <ContactForm /> */}
        <Footer />
      </div>
      <ButtonGradient />
    </main>
  );
}
