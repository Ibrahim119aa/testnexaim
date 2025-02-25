"use client";

import Button from "@/components/atoms/button";
import Heading from "@/components/atoms/heading";
import TagLine from "@/components/atoms/tag-line";
import { Gradient } from "@/components/design/roadmap";
import Section from "@/components/layout/section";
import { images, roadmap } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";

type Props = {};

const Roadmap = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading
          tag="Faites un pas vers le succès de votre marque."
          title="Ce que nous accomplissons."
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28" ref={ref}>
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <motion.div
                key={item.id}
                className={cn(
                  "md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]",
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                )}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: item.id * 0.2 }}
              >
                <div className="relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15">
                  <div className="absolute left-0 top-0 max-w-full">
                    <Image
                      src={images.grid}
                      alt="grid"
                      width={550}
                      height={550}
                      className="w-full"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                      <TagLine>{item.date}</TagLine>

                      <div className="flex items-center rounded bg-n-1 px-4 py-1 text-n-8">
                        <Image
                          src={item.status === "done" ? images.done : images.loading1}
                          width={16}
                          height={16}
                          alt={status}
                          className="mr-2.5"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="-mx-15 -my-10 mb-10">
                      <Image
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>

                    <h4 className="h4 mb-4 text-white">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <Gradient />
        </div>

        <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
          <Button href="#roadmap">NOTRE ROADMAP</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
