"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { brainwaveServices, brainwaveServicesIcons, images } from "@/constants";
import Image from "next/image";
import Generating from "../../atoms/generating";
import { PhotoChatMessage, Gradient } from "@/components/design/services";
import { cn } from "@/lib/utils";

type Props = {};

const Services = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(2);
  const audioRef = useRef<HTMLAudioElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const serviceDetails = [
    {
      heading: "Digital Marketing",
      text: "1way2com unlocks the potential of AI-powered applications",
      // imageUrl: "/assets/service/service1.jpg",
      imageUrl: "/assets/service/service1.jpg",
    },
    {
      heading: "Digital Branding",
      text: "Automatically enhance your photos using our Digital Marketing and Branding. Try it now!",
      imageUrl: "/assets/service/service2.jpg",
    },
    {
      heading: "Salut 1Way2Com, Booste mon marketing digital!",
      text: "Maîtrisez l’excellence du bout des doigts : Demandez simplement, et laissez notre IA propulser vos campagnes vers de nouveaux sommets.",
      // imageUrl: "/assets/service/service3.jpg",
      imageUrl: "/assets/services/service-2.png",
    },
    {
      heading: "Video Generation",
      text: "The world’s most powerful AI photo and video art generation engine. What will you create?",
      imageUrl: "/assets/service/service4.jpg",
    },
    {
      heading: "Video Generation",
      text: "The world’s most powerful AI photo and video art generation engine. What will you create?",
      imageUrl: "/assets/service/service4.jpg",
    },
  ];

  useEffect(() => {
    if (selectedItem === 1 && audioRef.current) {
      audioRef.current.play();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [selectedItem]);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Solutions de Marketing Digital IA spécialement conçues pour les créateurs et les marques par 1Way2Com"
          text="Boostez votre créativité avec l'IA : Donnez à votre marque un avantage exceptionnel grâce à la technologie IA de 1Way2Com, qui transforme vos visions en réalité."
        />

        <div className="relative" ref={ref}>
          <motion.div
            className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full md:w-3/5 xl:w-auto">
              <Image
                src="/assets/services/service-1.png"
                alt="smartest ai"
                width={800}
                height={730}
                className="size-full object-cover md:object-right"
              />
            </div>

            <div className="relative z-1 ml-auto max-w-[26rem]">
              <h4 className="h4 mb-4 text-white">
                Découvrez tout le Potentiel deVotre Marque avec 1Way2Com
              </h4>
              <p className="body-2 mb-12 text-n-3">
                1way2com unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((service, index) => (
                  <li key={index} className="flex items-start border-t border-n-6 py-4">
                    <Image src={images.check} alt="check" width={24} height={24} />
                    <p className="ml-4 text-white">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute inset-x-4 bottom-4 border border-n-1/10 lg:bottom-8 lg:left-1/2 lg:right-auto lg:-translate-x-1/2" />
          </motion.div>

          <motion.div
            className="relative z-1 grid gap-5 lg:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative min-h-[39rem] bg-white overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <Image
                  src="/assets/service/service3.jpg"
                  className="size-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h4 className="h4 mb-4 text-white">Digital Branding</h4>
                <p className="body-2 mb-12 text-n-3">
                  Demandez simplement, et laissez notre IA propulser vos campagnes vers de nouveaux
                  sommets.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4 text-white">{serviceDetails[selectedItem].heading}</h4>
                <p className="body-2 mb-8 text-n-3">{serviceDetails[selectedItem].text}</p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedItem(index)}
                      className={cn(
                        "flex items-center justify-center rounded-2xl cursor-pointer",
                        index === selectedItem
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      )}
                    >
                      <div
                        className={cn(
                          index === selectedItem &&
                            "flex size-full items-center justify-center rounded-2xl bg-n-7"
                        )}
                      >
                        <Image src={item} alt="icon" width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-80 overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <Image
                  src={serviceDetails[selectedItem].imageUrl}
                  className="size-full object-cover"
                  width={520}
                  height={400}
                  alt="scary robot"
                />

                {/* <VideoChatMessage /> */}
                {/* <VideoBar /> */}
              </div>
            </div>
            <Gradient />
          </motion.div>
        </div>
      </div>
      {selectedItem === 1 && <audio ref={audioRef} src="/assets/bot/bots.mp3" />}
    </Section>
  );
};

export default Services;
