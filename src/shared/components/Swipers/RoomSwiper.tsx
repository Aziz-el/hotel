"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

const slides = [
  "/webp/about/About.webp",
  "/webp/about/PinkRoom.webp",
  "/webp/room/room.webp",
];

const RoomSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-[600px] flex flex-col gap-6">
      
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper)=> setActiveIndex(swiper.activeIndex) }
        className="
          w-full
          md:max-w-[575px]
          md:h-[516px]
        "
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Room image ${index + 1}`}
                width={575}
                height={516}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 575px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


        <div className="block sm:hidden w-full mt-4">
              <div className="flex justify-between h-1 bg-gray-300 rounded overflow-hidden">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`
                        flex-1 mx-0.5 h-full rounded
                        transition-colors duration-300
                        ${index === activeIndex ? "bg-[#E0B08B]" : "bg-gray-300"}
                      `}
                    />
                  ))}
              </div>
          </div>


      <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          slidesPerView={3}
          spaceBetween={16}
          watchSlidesProgress
          className="
            hidden!
            sm:block!
            w-full
            max-w-[575px]
          "
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index} className="group">
              <div
                className="
                  relative
                  max-w-[185px]
                  max-h-[160px]
                  w-full
                  h-full
                  cursor-pointer
                  overflow-hidden
                "
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={185}
                  height={160}
                  className="object-cover w-full h-full"
                />
                <div
                  className="
                    absolute inset-0 bg-black/40
                    transition-opacity duration-300
                    group-[.swiper-slide-thumb-active]:opacity-0
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default RoomSwiper;
