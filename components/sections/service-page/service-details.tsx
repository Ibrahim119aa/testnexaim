"use client";

import type React from "react";

import { Search, MessageSquare, MapPin, FileText } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO (Search Engine Optimization)",
    description:
      "From on-page optimization to backlink building, we handle every element that helps your website rank higher on Google. We optimize site structure, content, and technical aspects to increase visibility and drive more organic traffic.",
    color: "color-1",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "AEO (Answer Engine Optimization)",
    description:
      "AEO is the future of SEO. With voice search and AI assistants growing fast, we optimize your content to answer questions directly. Our AEO techniques help your website appear in featured snippets and voice results — making you the go-to source in your niche.",
    color: "color-1",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "GEO (Geo-targeted SEO)",
    description:
      "Targeting local customers? We specialize in local SEO strategies that put your business on the map — literally. From optimizing your Google Business Profile to managing local citations and maps, we help your business show up in local search results for maximum visibility.",
    color: "color-1",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Content Optimization",
    description:
      "Great content is the backbone of any successful SEO strategy. At Nexaim, We optimize it to meet both user and search engine expectations.",
    color: "color-1",
  },
];

export default function ServicesSectionDetails() {
  return (
    <div className="bg-n-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-40 h-40 bg-color-2/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-color-4/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-color-6/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-color-1/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="h2 text-n-1 mb-6">
            What Aspects We
            <span className="block bg-gradient-to-r from-color-1 to-color-6 bg-clip-text text-transparent">
              Cover
            </span>
          </h2>
          <p className="body-1 text-n-3 max-w-4xl mx-auto mb-4">
            SEO isn't just about keywords. It's about being in the right place at the right time —
            when your customers are searching.
          </p>
          <p className="body-2 text-n-4 max-w-3xl mx-auto">
            We offer a complete range of SEO services tailored to your business model and audience,
            including:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-n-7/50 backdrop-blur-sm border border-n-6 rounded-2xl p-8 transition-all duration-300 hover:bg-n-6 hover:border-color-1/30 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${service.color}/10 border border-${service.color}/20 mb-6 group-hover:bg-${service.color}/20 transition-all duration-300`}
              >
                <div
                  className={`text-${service.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="h5 text-n-1 mb-4 group-hover:text-color-1 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="body-2 text-n-3 leading-relaxed">{service.description}</p>

              {/* Hover Effect Line */}
              <div
                className={`w-0 h-0.25 bg-gradient-to-r from-${service.color} to-transparent mt-6 group-hover:w-full transition-all duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-n-7/80 to-n-6/80 backdrop-blur-sm border border-n-5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="h5 text-n-1 mb-4">Ready to Boost Your Rankings?</h3>
            <p className="body-2 text-n-3 mb-6 max-w-2xl mx-auto">
              Let us help you dominate search results with our comprehensive SEO strategies tailored
              specifically for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button px-8 py-3 bg-gradient-to-r from-color-1 to-color-6 text-n-1 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                GET STARTED TODAY
              </button>
              <button className="button px-8 py-3 border border-color-1/50 text-color-1 rounded-full hover:bg-color-1/10 transition-all duration-300">
                VIEW OUR PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
