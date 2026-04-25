"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules"
import { TripSlides } from "../../lib/data/data"

export default function TripSwiper() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full relative">
      <Swiper
        centeredSlides
        slidesPerView={1.2}
        effect="coverflow"
        modules={[EffectCoverflow, Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
        coverflowEffect={{
          rotate: 0,
          stretch: -300,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        loopAdditionalSlides={-1}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1.3 },
          1024: { slidesPerView: 1.4 },
          1280: { slidesPerView: 1.5 },
          1536: { slidesPerView: 1.2 },
        }}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        loop
        className="w-full"
      >
        {TripSlides.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="
              relative
              w-full
              max-w-[1240px]
              h-[400px]
              sm:h-[500px]
              lg:h-[540px]
              xl:h-[600px]
              2xl:h-[700px]
            ">
              <Image
                src={src}
                fill
                className="object-cover"
                alt={`Slide ${index}`}
                draggable={false}
                quality={60}
              />
            </div>
          </SwiperSlide>
        ))}

        <div slot="container-end" className="relative mt-10 mx-auto flex  max-w-[150px] sm:max-w-[360px] h-[200px]">
          <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-50">
            <Image src="/svg/Pagination/ButtonToLeftBlack.svg" width={64} height={64} alt="prev" />
          </button>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F4C5A1] w-[170px] h-[170px] flex flex-col items-center max-sm:hidden">
            <p className="font-[Cormorant] text-[60px] text-[#333] mt-3">
              {String(activeIndex + 1).padStart(2, "0")}
            </p>
            <p className="font-[Manrope] text-[18px] text-[#333]">Reception</p>
          </div>

          <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-50 rotate-180">
            <Image src="/svg/Pagination/ButtonToLeftBlack.svg" width={64} height={64} alt="next" />
          </button>
        </div>
      </Swiper>
    </div>
  )
}
