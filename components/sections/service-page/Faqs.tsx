"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  data: FAQItem[];
  subtitle: string;

}

export default function FAQSection({ data, subtitle }: Props) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-n-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-color-1/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-color-6/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-color-5/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-color-2/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-color-1/5 to-color-6/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container">
        <div className="text-center mb-16 pt-16">
          <h1 className="h2 text-n-1 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-color-1 to-color-6 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="body-1 text-n-3 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-n-7/50 backdrop-blur-sm border border-n-6 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-n-6 hover:border-color-1/30"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-color-1/50 rounded-2xl"
              >
                <h3 className="h6 text-n-1 pr-4">{item.question}</h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-color-1" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-color-1" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openItems.includes(index)
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                  } overflow-hidden`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-color-1/30 to-transparent mb-4"></div>
                  <p className="body-2 text-n-2">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pb-16">
          <div className="bg-n-7/50 backdrop-blur-sm border border-n-6 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="h5 text-n-1 mb-4">Still have questions?</h3>
            <p className="body-2 text-n-3 mb-6">
              Can't find the answer you're looking for? Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button px-8 py-3 bg-gradient-to-r from-color-1 to-color-6 text-n-1 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                CONTACT US
              </button>
              <button className="button px-8 py-3 border border-color-1/50 text-color-1 rounded-full hover:bg-color-1/10 transition-all duration-300">
                WHATSAPP US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
