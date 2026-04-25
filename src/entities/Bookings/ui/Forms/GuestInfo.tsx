"use client"
import { useRoomStore } from "@/src/entities/Rooms/model/RoomsStore";
import { BookingInfo } from "@/src/entities/Rooms/model/types";
import { countries } from "@/src/shared/lib/data/data";
import Button from "@/src/shared/ui/Button";
import CustomInput from "@/src/shared/ui/Input";
import CustomSelector from "@/src/shared/ui/Selector";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface GuestData {
    name: string,
    surname: string,
    patronymic: string,
    country: string
}

export default function GuestInfo({setStape,info,days,is2,setOpen} : {setStape : (num:number)=>void,info:BookingInfo,days:number,is2 : boolean,setOpen?:React.Dispatch<React.SetStateAction<boolean>>}) {
    let {selectedRoom , selectRoom} = useRoomStore()
    const t = useTranslations("guest");

    let [phone,setPhone] = useState("")
    let [email,setEmail] = useState("")
    let [guestsData,setGuestsData] = useState<GuestData[]>(
        Array.from({ length: info.adults }, () => ({
            name: "",
            surname: "",
            patronymic: "",
            country: ""
        }))
    )
    let [comments,setComments] = useState("")
    
    useEffect(()=>{
        selectRoom(info.roomId || 0)
    },[info.roomId])

    const updateGuestData = (index: number, field: keyof GuestData, value: string) => {
        setGuestsData(prev => {
            const updated = [...prev]
            updated[index] = { ...updated[index], [field]: value }
            return updated
        })
    }

    const isFormValid = () => {
        if (!phone || !email) return false
        return guestsData.every(guest => 
            guest.name && guest.surname && guest.patronymic && guest.country
        )
    }
    
    return (
       <div className="guestInfo bg-[#0A3153] container max-w-[1200px] mx-auto w-full min-h-screen h-full pt-40 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-44 2xl:pt-[200px]  pb-10 text-white font-[Manrope]">
         <Image
                src={"/svg/Pagination/ButtonToLeftSecond.svg"}
                alt=""
                width={70}
                height={70}
                onClick={()=>{
                    if(is2) setStape(1) ;else setStape(2)
                }}
                className="w-10 sm:w-12 md:w-14 lg:w-16 xl:w-[70px] mb-6 cursor-pointer"
              />
               <h2 className="text-[#F4C5A1] hidden lg:flex text-5xl lg:text-6xl xl:text-[70px] items-center gap-6 font-[Cormorant] mb-10">
                <span className="w-16 lg:w-20 h-1 bg-[#F4C5A1]"></span>{t("title")}
              </h2>

              <h2 className="text-[#F4C5A1] lg:hidden text-2xl sm:text-3xl md:text-4xl text-center font-[Cormorant] mb-8">
                {t("title")}
              </h2>

              <div className="info flex flex-col-reverse lg:flex-row justify-between mt-8 lg:mt-20">
                <div className="form w-full lg:w-[70%]">
                    <h3 className="font-bold text-xl sm:text-2xl md:text-[24px] mb-4 sm:mb-6">{t("contact")}</h3>
                   
                   <div className="phone mb-4 sm:mb-6">
                     <CustomInput 
                        placeholder={t("phone")} 
                        label="" 
                        type="tel"
                        name="phone" 
                        
                        className="w-full sm:max-w-[400px] md:max-w-[460px]" 
                        onChange={(e) => {let value = e.target.value; value = value.replace(/[^\d+]/g, ""); if (value.includes("+")) { value = "+" + value.replace(/\+/g, "");}
                             setPhone(value);
                         }}  
                        value={phone}
                        maxLength={10}
                        required
                     /> 
                    <p className="text-xs sm:text-sm text-[#BDBDBD] mt-1 sm:mt-2">{t("phoneHint")}</p>
                   </div>

                    <div className="phone mb-6 sm:mb-8 md:mb-10">
                     <CustomInput 
                        placeholder={t("email")}
                        label="" 
                        type="email"
                        name="Email" 
                        className="w-full sm:max-w-[400px] md:max-w-[460px]" 
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        required
                     /> 
                    <p className="text-xs sm:text-sm text-[#BDBDBD] mt-1 sm:mt-2">{t("emailHint")}</p>
                   </div>

                   <div className="guestsDAta mb-6 sm:mb-8 md:mb-10">
                    <h3 className="font-bold text-xl sm:text-2xl md:text-[24px] mb-4 sm:mb-6">{t("guestsTitle")}</h3>
                     {
                        Array.from({ length: info.adults }, (_, index) => (
                            <div className="dataDiv flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-[15px] mb-4 sm:mb-6" key={index}>
                                <CustomInput 
                               
                                    placeholder={t("surname")}
                                    label="" 
                                    name={`surname${index}`} 
                                    className="w-full" 
                                    onChange={(e)=>updateGuestData(index, 'surname', e.target.value)}
                                    value={guestsData[index]?.surname || ""}
                                /> 
                                <CustomInput 
                                    placeholder={t("name")}
                                    label="" 
                                    name={`name${index}`} 
                                    className="w-full" 
                                    onChange={(e)=>updateGuestData(index, 'name', e.target.value)}
                                    value={guestsData[index]?.name || ""}
                                />
                                <CustomInput 
                                    placeholder={t("patronymic")}
                                    label="" 
                                    name={`patronymic${index}`} 
                                    className="w-full" 
                                    onChange={(e)=>updateGuestData(index, 'patronymic', e.target.value)}
                                    value={guestsData[index]?.patronymic || ""}
                                />
                                <CustomSelector 
                                    options={countries} 
                                    placeholder={t("country")} 
                                    name={`country${index}`} 
                                    className="w-full" 
                                    onChange={(e)=>updateGuestData(index, 'country', e)}
                                    value={guestsData[index]?.country || ""}
                                />
                            </div>
                        ))
                     }
                   </div>

                    <div className="guestsDate mb-6 sm:mb-8 md:mb-10">
                    <h3 className="font-bold text-xl sm:text-2xl md:text-[24px] mb-3 sm:mb-4">{t("timeTitle")}</h3>
                    <p className="text-base sm:text-lg md:text-[18px]">{t("timeText")}</p>
                    </div>

                    <div className="payment mb-6 sm:mb-8 md:mb-10">
                        <h3 className="font-bold text-xl sm:text-2xl md:text-[24px] text-[#E0B08B] mb-3 sm:mb-4 md:mb-5">{t("paymentTitle")}</h3>
                        <p className="max-w-full md:max-w-[695px] text-base sm:text-lg md:text-[18px]">{t("paymentText")}</p>
                    </div>

                    <div className="comment">
                        <h4 className="text-base sm:text-lg md:text-[18px] text-[#BDBDBD] mb-2 sm:mb-3">{t("comment")}</h4>
                       <textarea
  name="comment"
  className=" max-h-[160px] sm:h-[200px] md:h-[300px] w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[575px] mb-6 sm:mb-8 md:mb-10 border border-gray-300 rounded-md p-3 outline-none resize-none"
  onChange={(e) => setComments(e.target.value)}
  value={comments}
/>

                        <Button 
                            className="w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[575px] text-base sm:text-lg md:text-xl py-3 sm:py-4" 
                            disabled={!isFormValid()}
                            onClick={()=>{
                                console.log({...info,phone,email,guestsData,comments})
                                setOpen ? setOpen(true) :null
                            }
                            }
                        >
                            {t("submit")}
                        </Button>
                    </div>
                </div>

                <div className="hidden lg:block w-0.5 bg-white self-stretch"></div>
                <div className="w-full lg:hidden h-0.5 bg-white"></div>

                <div className="infoblock lg:w-auto max-lg:mx-auto">
                    <h3 className="font-bold text-2xl sm:text-3xl md:text-[24px] lg:text-[26px] xl:text-[28px] max-w-[250px] md:max-w-[100px] mb-4 sm:mb-5">{t("details")}</h3>
                    <div className="info font-medium text-lg sm:text-xl md:text-xl lg:text-[18px] xl:text-[20px] flex gap-6 sm:gap-8 md:gap-8">
                        <div className="key flex flex-col gap-3">
                            <p>{t("checkIn")}</p>
                            <p>{t("checkOut")}</p>
                            <p>{t("nights")}</p>
                            <p>{t("adults")}</p>
                            {info.children > 0 && <p>{t("children")}</p>}
                            <p>{t("total")}</p>
                        </div>
                        <div className="value flex flex-col gap-3">
                            <p>{info.start}</p>
                            <p>{info.end}</p>
                            <p>{days}</p>
                            <p>{info.adults}</p>
                        {
                            info.children > 0 && <p>{info.children}</p>
                        }
                        <p>
  {selectedRoom?.fields?.price
    ? (selectedRoom.fields.price * days).toLocaleString("ru-RU")
    : "0"}{" "}
  SUM
</p>
                        </div>
                    </div>
                </div>
              </div>
       </div>
    )
}