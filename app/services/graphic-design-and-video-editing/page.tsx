import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import {
    Video,
    Youtube,
    Megaphone,
    HelpCircle,
    Users,
    TextCursorInput,
    CalendarCheck
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
        heading: "Graphic Design & Video Editing Services at  ",
        highlight: "Nexaim!",
        paragraphs: [
            "At Nexaim, we blend creativity with strategy to deliver compelling, high-impact visuals. Whether you're a growing business or an established brand, our graphic design and video editing services are built to help you stand out, connect with your audience, and drive real results.",
            "From social media posts to brand videos, we bring your vision to life with precision and purpose. As one of the best digital marketing agencies, we ensure every creative asset not only looks professional—but performs across platforms."

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
            title: " Logo Design & Branding:",
            text: "Unique logos and visual identity systems tailored to your business personality.",
            backgroundUrl: "/assets/bg/seo-bg-1.png",
            imageUrl: "/assets/images/seo-benefit-1.jpg",
            light: true,
        },
        {
            id: 2,
            title: "Social Media Post & Story Design",
            text: "Scroll-stopping creatives for Instagram, Facebook, LinkedIn, and more.",
            backgroundUrl: "/assets/bg/seo-bg-2.png",
            imageUrl: "/assets/images/seo-benefit-2.jpg",
        },
        {
            id: 4,
            title: "Website Banners & Visual Content  ",
            text: "Visually engaging elements that boost user experience and click-through rates.",
            backgroundUrl: "/assets/bg/seo-bg-3.png",
        },
        {
            id: 5,
            title: "Ad Creatives (Static & Animated) ",
            text: "Conversion-driven ad designs optimized for paid campaigns.",
            backgroundUrl: "/assets/bg/seo-bg-3.png",
        },

        {
            id: 6,
            title: "Business Cards, Flyers & Brochures ",
            text: "Print-ready, branded materials that leave a lasting impression.",
            backgroundUrl: "/assets/bg/seo-bg-3.png",
        },
        {
            id: 7,
            title: "Infographics & Custom Illustrations",
            text: "Visual storytelling tools to simplify complex information.",
            backgroundUrl: "/assets/bg/seo-bg-3.png",
        },
        {
            id: 8,
            title: "Product Packaging Mockups",
            text: " Eye-catching packaging designs that enhance product appeal.",
            backgroundUrl: "/assets/bg/seo-bg-3.png",
        },
        {
            id: 9,
            title: "YouTube Thumbnails & Channel Art",
            text: " Designs that attract clicks and elevate your YouTube presence.",
            backgroundUrl: "/assets/bg/seo-bg-3.png",
        },
    ];

    const seoServices: Service[] = [
        {
            icon: Video, // Represents short videos like Reels & Shorts
            title: "Social Media Reels & Shorts",
            description: "Fast-paced, engaging edits for Instagram, TikTok, and Facebook",
            color: "color-13",
        },
        {
            icon: Youtube, // Clearly represents YouTube editing
            title: "YouTube Video Editing",
            description: "Complete editing for vlogs, tutorials, intros, and outros.",
            color: "color-14",
        },
        {
            icon: Megaphone, // Represents advertisements and promotions
            title: "Promotional & Ad Videos",
            description: "High-impact visuals that spark interest and boost conversions.",
            color: "color-15",
        },
        {
            icon: HelpCircle, // A metaphor for explaining something clearly
            title: "Explainer Videos",
            description: "Clear and creative content that simplifies your product or service.",
            color: "color-16",
        },
        {
            icon: Users, // Represents people giving testimonials or case studies
            title: "Testimonial & Case Study Videos",
            description: "Real stories told through authentic, compelling edits.",
            color: "color-17",
        },
        {
            icon: TextCursorInput, // Represents motion and animated text
            title: "Motion Graphics & Text Animation",
            description: "Dynamic visuals that bring your brand to life.",
            color: "color-18",
        },
        {
            icon: CalendarCheck, // Symbolizes event coverage
            title: "Event Highlights",
            description: "Capture the energy and essence of your corporate or social events.",
            color: "color-19",
        },
    ];


    const faqData: FAQItem[] = [

        {
            question: "What industries do you serve?",
            answer: "We work across sectors—fashion, tech, education, real estate, e-commerce, and more. Each design is customized to match your industry and audience.",
        },
        {
            question: "How fast is the turnaround?",
            answer: "Most graphic designs are ready within 2–3 business days. Video editing typically takes 3–7 days, depending on length and revisions.",
        },
        {
            question: "Are revisions included?",
            answer: "Yes! We offer multiple revision rounds to ensure you're fully satisfied with the outcome.",
        },
        {
            question: "Do you offer monthly packages?",
            answer: "Absolutely. We offer flexible monthly plans for businesses needing regular creative support, perfect for social media and ad campaigns.",
        },
        {
            question: "How do I get started?",
            answer: "Reach out via our contact form or social media. We’ll guide you through every step of the process—from idea to delivery.",
        }
    ];


    const faqsubtitle = " Get answers to the most common questions about our  graphic designing services"

    return (
        <main>
            <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
                <Navbar />
                <ServiceHero content={heroData} />
                {/* <Benefits /> */}
                <ServiceBenefits
                    sectionTitle="Graphic Design That Builds Brands"
                    benefits={benefitsData}
                />
                <ServicesSectionDetails
                    heading="Video Editing That Connects and Converts 
"
                    title="Let’s Build Something Visual. Let’s Build Nexaim."
                    subheading="Whether you're launching a new brand or scaling up your online presence, Nexaim delivers the creative expertise you need. Let’s make something amazing together.
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
