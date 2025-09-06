"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { Play } from "lucide-react";

type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <Section
      className={cn("lg:pt-[12rem] md:pt-[12rem] pt-[10rem] -mt-[5.25rem]")}
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
          className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-16")}
        >
          <div className="relative z-1 rounded-2xl bg-conic-gradient shadow-lg">
            <div className="relative rounded-[1rem] pt-2 pb-2 px-1">
              <div className="relative">
                <video
                  ref={videoRef}
                  loop
                  muted
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="rounded-lg cursor-pointer"
                  onClick={togglePlay} // Now clicking the video will toggle play/pause
                >
                  <source src={images.heroVideo} type="video/mp4" />
                </video>

                {/* Play button overlay */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.button
                      key="play-overlay"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      onClick={togglePlay}
                      className="absolute inset-0 z-10 grid place-items-center"
                    >
                      <div className="relative">
                        {/* Outer glowing aura */}
                        <motion.div
                          className="absolute inset-0 rounded-full blur-xl"
                          style={{
                            background: "radial-gradient(circle, rgba(255,100,50,0.6), transparent 70%)",
                          }}
                          animate={{
                            opacity: [0.6, 0.3, 0.6],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* First pulsing ring */}
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full"
                          style={{
                            boxShadow: "0 0 0 0 rgba(255,100,50,0.5), 0 0 0 8px rgba(255,100,50,0.25)",
                          }}
                          animate={{
                            opacity: [0.6, 0, 0.6],
                            scale: [1, 1.4, 1],
                          }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Second pulsing ring (delayed) */}
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full"
                          style={{
                            boxShadow: "0 0 0 0 rgba(255,180,50,0.5), 0 0 0 8px rgba(255,180,50,0.25)",
                          }}
                          animate={{
                            opacity: [0.6, 0, 0.6],
                            scale: [1, 1.6, 1],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4,
                          }}
                        />

                        {/* Play button */}
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            backgroundColor: ["rgba(30,30,30,0.85)", "rgba(50,50,50,0.9)", "rgba(30,30,30,0.85)"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative z-10 h-20 w-20 rounded-full text-white backdrop-blur grid place-items-center shadow-2xl ring-2 ring-white/20"
                        >
                          <Play className="h-9 w-9 translate-x-0.5" />
                        </motion.div>
                      </div>
                    </motion.button>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>
        </motion.div>




      </div>
      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
