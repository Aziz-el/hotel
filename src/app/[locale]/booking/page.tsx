"use client"

import BookingChooseForm from "@/src/entities/Bookings/ui/Forms/BookingChooseForm"
import BookingForm from "@/src/entities/Bookings/ui/Forms/BookingForm"
import GuestInfo from "@/src/entities/Bookings/ui/Forms/GuestInfo"
import { BookingInfo } from "@/src/entities/Rooms/model/types"
import Modal from "@/src/shared/ui/Modal"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState, useTransition } from "react"

export default function Page () {
    // let [stape,setStape] = useState(1)
    // let [info,setInfo] = useState<BookingInfo>({adults:1,children:0,start:null,end:null})
    // let days = info.end && info.start ? (Number(info.end.split(" ")[0]) - Number(info.start.split(" ")[0])) :0
    // const [open, setOpen] = useState(false);
    let locale = useLocale();
    const t = useTranslations("booking")
    return (
        <>
        {/* {
            stape == 1 && (
                <BookingForm setStape={setStape} setInfo={setInfo}/>
            )
        }
         {
            stape == 2 && (
                <BookingChooseForm adults={info.adults} children={info.children} days={days} setStape={setStape} start={info.start} end={info.end} setInfo={setInfo}/>
            )
        }
        {
            stape == 3 && (
                <>
                <GuestInfo setStape={setStape} info={info} days={days} is2={false} setOpen={setOpen}/>
                <Modal isOpen={open} onClose={() => {
                    setOpen(false)
                    redirect(`/${locale}`)
                }} />
                </>
                
            )
        } */}
          <div className="bookingForm bg-[#0A3153] max-lg:min-h-screen text-white px-4 pt-40 sm:pt-44 md:pt-32 lg:pt-40 xl:pt-48 min-[1600px]:pt-[250px] pb-10">
      <div className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[100%] xl:max-w-[78%]">
                <Link href={`/${locale}`} className="inline-block mb-6">
          <Image
            src={"/svg/Pagination/ButtonToLeftSecond.svg"}
            alt=""
            width={70}
            height={70}
            className="w-12 sm:w-14 md:w-16 lg:w-[70px]"
          />
        </Link>
        
        <h2 className="text-[#F4C5A1] hidden lg:flex text-5xl lg:text-6xl xl:text-[70px] items-center gap-6 font-[Cormorant] mb-10">
          <span className="w-20 h-1 bg-[#F4C5A1]"></span> {t("title")}
        </h2>
        
        <h2 className="text-[#F4C5A1] lg:hidden text-2xl sm:text-3xl md:text-4xl text-center font-[Cormorant] mb-8">
           {t("title")}
        </h2>
            <div className="be-booking-wrapper"> 
                <div id="be-booking-form"></div> 
            </div> 
      </div>
      </div>
        </>
    )
}