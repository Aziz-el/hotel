"use client"
import Image from "next/image"
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";
import Button from "../../ui/Button"
import { useLocale, useTranslations } from "next-intl"
import { roomSlides } from "../../lib/data/data"
import Link from "next/link";
export default function RoomsSwiper() {
  const t = useTranslations("main.roomsSwiper")
  let locate = useLocale();
  return (
    <div className="relative w-full max-w-312.5 mx-auto xl:h-250 rooms-swiper-wrapper">
      <Swiper
    
        slidesPerView={3.5}
        breakpoints={{
          320: { slidesPerView: 1.7 },
          370: { slidesPerView: 2 },
          570: { slidesPerView: 2.5 },
          640: { slidesPerView: 2.7 },
          720: { slidesPerView: 3 },
          870: { slidesPerView: 3.5 },
          1024: { slidesPerView: 3.4 },
          1240: { slidesPerView: 3.7 },
          1540: { slidesPerView: 3.5 }
        }}
        centeredSlides
        loop
        speed={500}
        autoplay
        slideToClickedSlide
        watchSlidesProgress
        modules={[EffectCoverflow, Navigation, Autoplay]}
        effect="coverflow"
        navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
        coverflowEffect={{
          rotate: 0,
          stretch: -60,
          depth: 300,
          modifier: 1,
          slideShadows: false
        }}
        className="w-full max-sm:h-156 xl:h-250 lg:h-200 md:h-190 sm:h-180 min-[480px]:h-180 min-[320px]:h-165"
       
      >
        {roomSlides.map((slide, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center pt-25">
            <div className="flex flex-col items-center text-center">
              <div className="slide-inner relative w-full xl:h-146.25 lg:h-120 min-[480px]:h-100 md:h-101 sm:h-100 max-sm:h-80 rounded-[200px] border-2 border-[#F4C5A1] flex items-center justify-center cursor-pointer">
                <div className="slide-glow absolute w-[110%] h-[110%] bg-[#907112] z-[-1] blur-[25px] rounded-[200px]" />
                <Image
                  src={slide.src}
                  alt={t(`names.${index}`)}
                  fill
                  className="relative z-10 object-cover rounded-[200px]"
                  draggable={false}
                  fetchPriority={index === 0 ? "high" : "low"} 
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 480px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 360px, (max-width: 1280px) 420px, 460px"
                  quality={50}
                />
              </div>

              <div className="slider_info xl:mt-12 max-sm:mt-2.5 flex flex-col gap-2 max-xl:mt-4">
                <p className="xl:text-xl text-[14px] text-white opacity-60 tracking-widest uppercase">
                  {t("type")}
                </p>
                <h3 className="font-[Cormorant] xl:text-4xl text-[23px] text-[#FFD0AB] font-bold tracking-wider leading-none">
                  {t(`names.${index}`)}
                </h3>
                <Link href={`/${locate}/rooms/`}>
                  <Button>{t("button")}</Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="buttons relative xl:w-40 w-28.75 mx-auto">
          <button className="prev-btn absolute left-0 -translate-y-full z-50 transition-transform active:scale-90">
            <Image src="/svg/Pagination/ButtonToLeft.svg" width={64} height={64} alt="Prev" className="xl:w-16 xl:h-16 w-12.5 h-12.5" />
          </button>

          <button className="next-btn absolute right-0 -translate-y-full z-50 rotate-180 transition-transform active:scale-90">
            <Image src="/svg/Pagination/ButtonToLeft.svg" width={64} height={64} alt="Next" className="xl:w-16 xl:h-16 w-12.5 h-12.5" />
          </button>
        </div>
      </Swiper>
    </div>
  )
}
