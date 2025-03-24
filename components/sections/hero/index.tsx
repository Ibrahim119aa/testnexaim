"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { images, heroIcons } from "@/constants";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/hero";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../../atoms/generating";
import Notification from "./notification";
import CompanyLogos from "./company-logos";

type Props = {};

const Hero = (props: Props) => {
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24"
        >
          <h1 className="h1 mb-6 text-white">
            Your Business, Our Strategy Shape your path to growth with
            <span className="relative inline-block">
              Nexaim!
              <Image
                src={images.curve}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className={cn("body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8")}>
            Boost Your Digital Presence with Nexaim Your Ultimate Digital Marketing Partner
          </p>
          <Button href="https://wa.me/+923432469633 " white>
            Get Your Offer
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24")}
        >
          <div className={cn("relative z-1 rounded-2xl p-0.5 bg-conic-gradient")}>
            <div className={cn("relative bg-n-8 rounded-[1rem]")}>
              <div className={cn("h-[1.4rem] bg-n-10 rounded-t-[0.9rem]")} />
              <div
                className={cn(
                  "aspect-[688/470] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"
                )}
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full relative z-[1000] translate-y-[8%] aspect-video scale-100 md:translate-y-[-10%] md:scale-100 lg:translate-y-[-23%]"
                >
                  <source src={images.heroVideo} type="video/mp4" />
                </video>

                <Generating className="absolute inset-x-4 bottom-5 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute bottom-[7.5rem] left-[-5.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 p-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image src={icon} height={24} width={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax> */}

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute bottom-44 right-[-5.5rem] hidden w-72 xl:flex"
                    title="Call AI"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
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

        {/* <CompanyLogos className="relative z-10 mt-20 hidden lg:block" /> */}
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
