'use client'

import Image from "next/image"
import { Room } from "../model/types"
import { useTranslations, useLocale } from "next-intl"
import Button from "@/src/shared/ui/Button"
import Link from "next/link"
import { amenitiess } from "@/src/shared/lib/data/data"

export const RoomCard = ({ room }: { room: Room }) => {
  const t = useTranslations("btn.book")
  const locale = useLocale() 


  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] w-full overflow-hidden mt-10 md:mt-20 h-auto md:h-[670px]">
      <div className="relative w-full md:w-[575px] aspect-video md:aspect-auto md:h-full">
      <Image src={room.fields.historicalImage} alt={room.pk + "room"} fill className="object-cover"  loading="lazy"/>
      </div>

      <div className="px-6 md:px-13 flex flex-col gap-4 w-full md:w-1/2 mt-6 md:mt-0">
        <span className="w-fit border text-[#333333] text-sm md:text-[18px] font-[Manrope] font-semibold px-3 py-1 rounded-full text-center">
          {room.fields.category}
        </span>

        <h2 className="text-[24px] md:text-[32px] font-[Cormorant] font-semibold  uppercase">
          {locale == "en" ? room.fields.name_en : room.fields.name_ru }
        </h2>

        <p className="w-full md:w-[508px] text-[#333333] text-sm md:text-[18px] text-start font-[Manrope] font-medium">
          {locale == "en" ? room.fields.description_en : room.fields.description_ru}
        </p>

        <div className="hidden lg:flex mt-2  gap-6 font-[Manrope]">
          <div className="flex gap-3">
          <Image src={'/svg/icon/floor.svg'} width={29} height={29} alt="floor plan" loading="lazy" />
             <h2 className="lg:text-[18px]"> 26 М2</h2>
          </div>
          <div className="flex gap-3">
          <Image src={'/svg/icon/user.svg'} width={22} height={26} alt="floor plan" loading="lazy" />
             <h2 className="lg:text-[18px]">2 Взрослых</h2>
          </div>
          <div>
          </div>
        </div>
        <div className="w-full max-w-[420px] h-[175px]">
              <h1 className="w-full text-[20px] md:text-[24px] mb-4">Удобства в номере</h1>
              <div className="grid grid-cols-5 gap-x-2 gap-y-4 items-center justify-items-center">
                {amenitiess.map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Image 
                      src={item.icon} 
                      width={item.w} 
                      height={item.h} 
                      alt="amenity" 
                      className="w-auto" 
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>
          </div>

        <div className="mt-2 md:mt-auto flex flex-col  md:flex-row gap-3 ">
          <Link href={`/${locale}/rooms/${room.pk}`}  className="w-full sm:w-[278px]">
            <Button variant="primary" className="w-full">
              {t("details")}
            </Button>
          </Link>

          <Link href={`/${locale}/booking`} className="w-full sm:w-[278px]">
            <Button variant="secondary" className="w-full">
              {t("title")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}