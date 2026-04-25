"use client"

import Image from "next/image"

import { Swiper,SwiperSlide } from "swiper/react"
import {Autoplay } from "swiper/modules"
import Button from "../../ui/Button"
import { useLocale, useTranslations } from "next-intl"
import {homeSlides} from "@/src/shared/lib/data/data"
import Link from "next/link"

export default function HomeSwiper( ){
  let t=useTranslations('main')
  let locale = useLocale();
    return (
        <div className="xl:h-225 max-sm:h-145">
        <Swiper 
          lazyPreloaderClass="swiper-lazy-preloader"
        autoHeight={false}
        slidesPerView={1}
        autoplay
        modules={[Autoplay]}
        loop
        draggable={false}
        simulateTouch={false}
        >
            {homeSlides.map((el,i)=>
               <SwiperSlide>
  <div className="relative h-145 max-lg:pb-10 xl:h-225 overflow-hidden">
    <div className="absolute inset-0 bg-black">
      <Image
        src={el.src}
        alt=""
        quality={60}
        sizes="100vw"
        fill
        className="opacity-50 object-cover"
        style={{ objectPosition: el.imageFocus }}
        fetchPriority={i === 0 ? "high" : "low"}
        priority={i === 0}
        loading={i === 0 ? "eager" : "lazy"}
      />
    </div>

    <div className="relative  h-full flex flex-col justify-end z-10">
      <div className="container mx-auto px-6 sm:px-14 md:px-19 lg:px-25 w-full max-w-[1400px] ">
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 sm:pb-10.5 lg:pb-30 xl:pb-40.5">
          
          <div className="flex flex-col gap-3 max-w-175">
            <h1 className="text-[32px] xl:text-[100px] leading-[110%] font-[Cormorant] font-medium tracking-[0%] text-white">
              SILK ROAD EMPIRE HOTEL
            </h1>
            <p className="text-[13px] xl:text-[18px] max-w-75 xl:max-w-114 leading-[1.6] font-[Manrope] font-medium xl:font-normal mt-3 lg:mt-2 text-white">
              {t("home.desc")}
            </p>

            <Link href={`/${locale}/rooms`} className="hidden md:block lg:hidden mt-4">
              <Button className="max-h-[50px]">Выбрать номер</Button>
            </Link>
          </div>

          <div className="hidden lg:block xl:w-70 xl:h-70 lg:w-40 lg:h-40 flex-shrink-0">
            <div className="relative w-full h-full">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(#FFFFFF 0% ${100 - (i + 1) * 25}%, #E0B08B ${100 - (i + 1) * 25}% 100%)`,
                  WebkitMask: 'radial-gradient(circle, transparent 61%, black 64%, black 63%, transparent 65%)',
                  mask: 'radial-gradient(circle, transparent 61%, black 64%, black 63%, transparent 65%)'
                }}
              />

              <div
                className="absolute inset-0 flex items-center justify-center font-bold"
                style={{
                  background: `conic-gradient(#CCCCCC 0% ${100 - (i + 1) * 25}%, #E0B08B ${100 - (i + 1) * 25}% 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                <p className="xl:text-[60px] lg:text-[44px] font-[Cormorant]">
                  0{i + 1} <span className="text-[0.55em]">/</span> <span className="text-[0.55em]">04</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link href={`/${locale}/rooms`} className="block sm:hidden">
          <Button className="w-full max-w-[90%] mx-auto">Выбрать номер</Button>
        </Link>
      </div>
    </div>
  </div>
</SwiperSlide>

            )} 
        </Swiper>
        </div>
    )
}