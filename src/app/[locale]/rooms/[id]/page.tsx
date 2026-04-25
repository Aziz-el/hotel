'use client'

import { useRoomStore } from "@/src/entities/Rooms/model/RoomsStore"
import RoomSwiper from "@/src/shared/components/Swipers/RoomSwiper"
import { amenities } from "@/src/shared/lib/data/data"
import Button from "@/src/shared/ui/Button"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function RoomDetailPage({roomId}:{roomId:number}) {
  const t = useTranslations()
  const params = useParams()
  const locale = useLocale()

  const { rooms } = useRoomStore()
  const roomPk = Number(params.id) 
  const [room, setRoom] = useState<any>(null)


useEffect(() => {
  if (rooms.length) {
    const found = rooms.find(r => r.pk === roomPk)
    setRoom(found ? found.fields : null) 
  }
}, [rooms, roomPk]);

 if (!room) {
  return (
    <div>
      <div className="bg-[#0A3153] w-full h-[250px] md:h-[300px]"></div>
    <div className="flex items-center justify-center h-screen">
      
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#0A3153] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#0A3153] text-sm font-[Manrope]">
          Загрузка данных...
        </p>
      </div>
    </div>
    </div>
  );
}


  return (
    <div className="w-full h-auto">
      <div className="bg-[#0A3153] w-full h-[250px] md:h-[300px]"></div>

      <div className="max-w-[1200px] mx-auto mt-15 md:mt-35 mb-10 px-4 md:px-0">
        <div className="flex flex-col items-center lg:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <RoomSwiper />
          </div>

          <div className="flex flex-col gap-4 w-full md:w-1/2 mt-6 md:mt-0 px-0 md:px-6">
            <span className="w-[112px] h-[42px] border text-[#333333] text-sm md:text-[18px] font-[Manrope] font-semibold px-3 py-2 rounded-full text-center">
              {room.category.toUpperCase()}
            </span>

            <h2 className="text-[24px] sm:text-[36px] md:text-[60px] font-[Cormorant] leading-tight font-semibold mt-4 md:mt-6 uppercase break-words ">
              {locale == "en" ? room.name_en : room.name_ru }
            </h2>

            <div className="pt-6 grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6 gap-y-2 font-[Manrope] text-sm sm:text-base md:text-[18px]">
              <h1>{locale == "en" ? 'Bed Type:': "Тип кровати:" }</h1>
              <h2>{room.bedType}</h2>

              <h1>{locale == "en" ? 'Capacity:': "Вместимость:" }</h1>
              <h2>{room.capacityType} {t("adults")}</h2>

              <h1>{locale == "en" ? 'Square:': "Площадь:" }</h1>
              <h2>{room.squareType} М2</h2>
            </div>

            <div className="mt-6 md:mt-9">
              <p className="text-[20px] sm:text-[24px] md:text-[24px] font-bold font-[Manrope]">
                {room.price.toLocaleString("ru-RU")} /Сутки
              </p>
            </div>

            <div className="mt-4 md:mt-8">
              <p className="text-[#333333] text-sm sm:text-[16px] md:text-[18px] leading-snug font-[Manrope]">
                {locale == 'en' ? room.description_en: room.description_ru }
              </p>
            </div>

            <div className="mt-4 md:mt-auto flex flex-col md:flex-row gap-3">
              <Link href={`/${locale}/booking`} className="w-full sm: max-w-[479px]">              
              <Button variant="secondary" className="w-full sm: max-w-[479px]">
                {t("btn.book.title")}
              </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[20px] sm:text-[22px] md:text-[32px] font-[600] font-[Cormorant] uppercase mb-6 md:mb-8">
            {t("convenience")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-20 gap-y-4 md:gap-y-6">
            {amenities.map((item, index) => (
              <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-15 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={locale === "en" ? item.label.en : item.label.ru}
                    width={item.w}
                    height={item.h}
                  />
                </div>
                <p className={`text-[14px] sm:text-[16px] md:text-[18px] font-[Manrope] leading-snug ${item.highlight ? 'w-full sm:w-80 md:w-80' : 'w-full sm:w-60 md:w-62'}`}>
                  {locale === "en" ? item.label.en : item.label.ru}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
