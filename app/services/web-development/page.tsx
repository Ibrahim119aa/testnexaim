import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import {
    Video,
    Youtube,
    Megaphone,
    HelpCircle,
    Users,
    TextCursorInput,
    CalendarCheck,
    LayoutDashboard,
    Layers3,
    ShoppingCart,
    FileCode,
    RefreshCcw,
    Sliders,
    ShieldCheck,
    LifeBuoy,
    BarChartBig
} from "lucide-react";

import FAQSection, { FAQItem } from "@/components/sections/service-page/Faqs";
import ServiceBenefits, { BenefitItem } from "@/components/sections/service-page/service-benefits";
import ServicesSectionDetails, { Service } from "@/components/sections/service-page/service-details";
import ServiceHero from "@/components/sections/service-page/service-hero";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";
import { images } from "@/constants";

export default function Home() {

    const heroData = {
        heading: "Build a Website That Performs and ",
        highlight: "Converts!",
        paragraphs: [
            "At Nexaim, we don’t just develop websites — we craft digital experiences tailored to your brand, customers, and goals. Whether you're building a sleek business site or a robust e-commerce store, our websites are designed to be fast, secure, mobile-responsive, and optimized for search engines from day one.",
            "Our expert developers work closely with your team to create websites that load quickly, perform flawlessly, and drive measurable results. Backed by a team with proven experience in digital marketing and website SEO, we ensure your site looks stunning and works smart."

        ],
        image: "/assets/Web-Development.jpg",
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
            id: 9,
            title: "Custom Website Design & Development",
            text: "Tailored from scratch to fit your brand and user goals.",
            backgroundUrl: "/assets/benefits/card-1.svg",
            light: true,
        },
        {
            id: 10,
            title: "WordPress, Shopify & CMS Integration",
            text: "Flexible content management with your preferred platform.",
            backgroundUrl: "/assets/benefits/card-2.svg",
            light: true,
        },
        {
            id: 11,
            title: "E-commerce Website Development",
            text: "High-converting online stores built for sales and scalability.",
            backgroundUrl: "/assets/benefits/card-3.svg",
            light: true,
        },
        {
            id: 12,
            title: "Landing Page Design for Campaigns",
            text: "Conversion-focused pages for paid ads, email, or social media.",
            backgroundUrl: "/assets/benefits/card-4.svg",
            light: true,
        },
        {
            id: 13,
            title: "Website Redesign & Performance Optimization",
            text: "Refresh outdated websites for modern performance.",
            backgroundUrl: "/assets/benefits/card-5.svg",
            light: true,
        },
        {
            id: 14,
            title: "On-Page SEO Setup & Optimization",
            text: "Optimized structure, meta data, speed, and mobile UX.",
            backgroundUrl: "/assets/benefits/card-1.svg",
            light: true,
        },
        {
            id: 15,
            title: "Fast Loading, Secure & Scalable Websites",
            text: "Powered by best practices in UX and technical SEO.",
            backgroundUrl: "/assets/benefits/card-1.svg",
            light: true,
        },
        {
            id: 16,
            title: "Maintenance & Technical Support Plans",
            text: "Ongoing support to keep your site running smoothly.",
            backgroundUrl: "/assets/benefits/card-2.svg",
            light: true,
        },
        {
            id: 17,
            title: "Integration with Marketing Tools & Analytics",
            text: "Track, test, and grow with smart integrations.",
            backgroundUrl: "/assets/benefits/card-3.svg",
            light: true,
        },
    ];


    const seoServices: Service[] = [

        // New website & dev services
        {
            icon: LayoutDashboard,
            title: "Custom Website Design & Development",
            description: "Tailored from scratch to fit your brand and user goals.",
            color: "color-1",
        },
        {
            icon: Layers3,
            title: "WordPress, Shopify & CMS Integration",
            description: "Flexible content management with your preferred platform.",
            color: "color-1",
        },
        {
            icon: ShoppingCart,
            title: "E-commerce Website Development",
            description: "High-converting online stores built for sales and scalability.",
            color: "color-1",
        },
        {
            icon: FileCode,
            title: "Landing Page Design for Campaigns",
            description: "Conversion-focused pages for paid ads, email, or social media.",
            color: "color-1",
        },
        {
            icon: RefreshCcw,
            title: "Website Redesign & Performance Optimization",
            description: "Refresh outdated websites for modern performance.",
            color: "color-1",
        },
        {
            icon: Sliders,
            title: "On-Page SEO Setup & Optimization",
            description: "Optimized structure, meta data, speed, and mobile UX.",
            color: "color-1",
        },
        {
            icon: ShieldCheck,
            title: "Fast Loading, Secure & Scalable Websites",
            description: "Powered by best practices in UX and technical SEO.",
            color: "color-1",
        },
        {
            icon: LifeBuoy,
            title: "Maintenance & Technical Support Plans",
            description: "Ongoing support to keep your site running smoothly.",
            color: "color-1",
        },
        {
            icon: BarChartBig,
            title: "Integration with Marketing Tools & Analytics",
            description: "Track, test, and grow with smart integrations.",
            color: "color-1",
        },
    ];


    const faqData: FAQItem[] = [

        {
            question: "What types of websites does Nexaim develop?",
            answer: "We build everything from business websites, e-commerce platforms, and portfolios to landing pages, personal blogs, and branding sites. All our solutions are customized to your audience and digital marketing goals.",
        },
        {
            question: "How long does it take to develop a website?",
            answer: "Timeframes depend on the project size. A standard business site usually takes 2–3 weeks, while complex e-commerce or custom solutions may require 4–6 weeks or more. You'll receive a detailed timeline before development begins.",
        },
        {
            question: "Can Nexaim redesign my current website?",
            answer: "Yes! If your existing website looks outdated or performs poorly, we can modernize it for better usability, speed, SEO, and mobile compatibility — while preserving your brand essence.",
        },
        {
            question: "Will my new website be SEO-optimized?",
            answer: "Absolutely. SEO is a key part of our web development process. From structure and schema markup to page speed and meta content, we follow best practices to help your site rank better on Google.",
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes, we offer maintenance plans, performance monitoring, bug fixes, and updates to ensure your site continues to run efficiently and securely.",
        }
    ];


    const faqsubtitle = " Get answers to the most common questions about our  web development services"

    return (
        <main>
            <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
                <Navbar />
                <ServiceHero content={heroData} />
                {/* <Benefits /> */}
                {/* <ServiceBenefits
                    sectionTitle=""
                    benefits={benefitsData}
                /> */}
                <ServicesSectionDetails
                    title="Let’s Build a Website That Grows With You"
                    subheading="Whether you're launching a new business or scaling your digital presence, Nexaim is your go-to web development partner. Our development team understands not just code — but marketing, branding, and results. Let’s turn your vision into a high-impact, conversion-ready website"

                    heading="Our Website Development Services Include
"
                    gradientText=""
                    subtitle=""
                    description=""
                    services={seoServices}
                    primaryCta={{ text: "GET STARTED TODAY", link: "/contact" }}
                    secondaryCta={{ text: "VIEW OUR PORTFOLIO", link: "/portfolio" }}
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
