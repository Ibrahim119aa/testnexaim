"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/hero";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../../atoms/generating";
import Notification from "../hero/notification";
import { images } from "@/constants";

interface HeroContent {
  heading: string;
  highlight: string;
  paragraphs: string[];
  button: {
    text: string;
    link: string;
  };
  image: string;
  backgroundImage: string;
  curveImage: string;
}

interface Props {
  content: HeroContent;
}

const ServiceHero = ({ content }: Props) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className={cn("pt-[12rem] -mt-[5.25rem]")}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Headline + Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24"
        >
          <h1 className="h1 mb-6 text-white">
            {content.heading}{" "}
            <span className="relative inline-block">
              {content.highlight}
              <Image
                src={content.curveImage}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>

          {content.paragraphs.map((text, idx) => (
            <p key={idx} className={cn("body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8")}>
              {text}
            </p>
          ))}

          <Button href={content.button.link} white>
            {content.button.text}
          </Button>
        </motion.div>

        {/* Video Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-16")}
        >
          <div className={cn("relative z-1 rounded-2xl bg-conic-gradient shadow-lg")}>
            <div className={cn("relative rounded-[1rem] pt-2 pb-2 px-1")}>
              {/* Rounded corners and overflow moved to this div */}
              <div
                className={cn(
                  "aspect-[688/470] overflow-hidden rounded-[1rem] md:aspect-[688/460] lg:aspect-[1024/460] px-1"
                )}
              >
                <Image
                  alt=""
                  src={content.image}
                  width={400}
                  height={300}
                  className="w-full relative z-[1000] aspect-video scale-100"
                />



              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[-40%] w-[200%] -translate-x-1/2 md:top-[-35%] md:w-[138%] lg:top-[-90%]">
            <Image
              src={images.heroBackground}
              width={1440}
              height={1880}
              className="w-full"
              alt="hero"
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </motion.div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default ServiceHero;
