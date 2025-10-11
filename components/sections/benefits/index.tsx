"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Sample slider data
const data = [
  { id: 1, title: "Slide 1", img: "/images/slide1.jpg" },
  { id: 2, title: "Slide 2", img: "/images/slide2.jpg" },
  { id: 3, title: "Slide 3", img: "/images/slide3.jpg" },
  { id: 4, title: "Slide 4", img: "/images/slide4.jpg" },
  { id: 5, title: "Slide 5", img: "/images/slide5.jpg" },
];

const Benefits = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ✅ Prevents SSR hydration mismatch
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3, // default desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // large → keep 3 slides
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-purple-600">
        Responsive Slick Slider
      </h2>

      <div className="max-w-[1400px] mx-auto px-4">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-4">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover"
                />
                <h3 className="text-center py-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Benefits;
