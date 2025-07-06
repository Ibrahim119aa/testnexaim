"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";

import Image from "next/image";
import Arrow from "@/components/svg/arrow";
import { GradientLight } from "@/components/design/benefits";
import ClipPath from "@/components/svg/clip-path";
import { div } from "framer-motion/client";
import style from "styled-jsx/style";



export interface BenefitItem {
  id: number | string;
  title: string;
  text: string;
  backgroundUrl: string;
  imageUrl?: string;
  light?: boolean;
}

interface Props {
  sectionTitle: string;
  benefits: BenefitItem[];
}


const ServiceBenefits = ({ sectionTitle, benefits }: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section id="features">
      <div className="container relative z-[10]">
        <Heading
          className="md:max-w-md lg:max-w-2xl z-[10] relative"
          title={sectionTitle}
          text=""
        />

        <div className="mb-10 flex flex-wrap gap-10" ref={ref}>
          {benefits.map((item) => (
            <motion.div
              key={item.id}
              className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-sm"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-[1000] flex min-h-[22rem] flex-col p-[2.4rem]">
                <h5 className="h5 mb-5 text-white">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <a
                  href="https://wa.me/+923432469633"
                  className="mt-auto flex items-center relative z-[10000]"
                >
                  {/* <Image src={item.iconUrl} className="" width={48} height={48} alt={item.title} /> */}
                  <div className="ml-auto font-code text-xs font-bold uppercase tracking-wider cursor-pointer text-n-1">
                    Learn More
                  </div>
                  <Arrow />
                </a>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 -z-10"
                style={{ clipPath: `url(#benefits)` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="size-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServiceBenefits;
