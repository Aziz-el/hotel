
import { useLocale } from "next-intl";
import Image from "next/image";
import { BookingInfo, Room } from "../model/types";
import Link from "next/link";
import Button from "@/src/shared/ui/Button";
import { useTranslations } from "next-intl";

export default function RoomCardMini({roomData,guests,days,setInfo,setStape} :{roomData:Room,guests:number,days:number,setInfo:React.Dispatch<React.SetStateAction<BookingInfo>>,setStape:(num:number)=>void}) {
    let locale = useLocale()
    const t = useTranslations("roomCard");

    return (
        <div className="roomMiniCard flex flex-col md:flex-row items-start md:items-center text-white gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <Image 
                src={roomData.fields.historicalImage} 
                alt={"roomImage"} 
                width={387} 
                height={387} 
                className="w-full md:w-[300px] lg:w-[320px] xl:w-[387px] h-[280px] sm:h-[320px] md:h-[280px] lg:h-[320px] xl:h-[387px] object-cover"
            />
            
            <div className="infoBlock flex flex-col justify-between gap-4 sm:gap-5 md:gap-6 font-[Manrope] w-full md:w-auto">
                <div className="in flex flex-col gap-2 sm:gap-3 text-lg sm:text-xl md:text-[20px] font-semibold">
                    <h3 className="text-xl sm:text-2xl md:text-[24px] font-medium">
                        {locale == "en" ? roomData.fields.name_en : roomData.fields.name_ru}
                    </h3>
                   <h4 className="flex items-center justify-between max-w-full sm:max-w-[236px]">
  {t("area")}
  <span className="w-6 sm:w-8 md:w-10 h-0.5 bg-white"></span>
  {roomData.fields.squareType} m²
</h4>

<h4 className="flex items-center justify-between w-full sm:max-w-[300px] md:min-w-[336px]">
  {t("capacity")}
  <span className="w-6 sm:w-8 md:w-10 h-0.5 bg-white"></span>
  {roomData.fields.adults} {t("adults")}
</h4>

                </div>
                <div className="in flex flex-col gap-1 sm:gap-2 font-semibold">
                    <h5 className="text-base sm:text-lg md:text-[18px] flex items-center gap-3 sm:gap-4">
  {t("from")}
  <span className="text-xl sm:text-2xl md:text-[24px] font-bold">
    {roomData.fields.price.toLocaleString("ru-RU")}
  </span>
  SUM
</h5>

<p className="text-base sm:text-lg">
  {t("nightsGuests", { nights: days, guests })}
</p>

                </div>
                <Link 
                    href={`/${locale}/rooms/${roomData.pk}`} 
                    className="text-[#E0B08B] font-semibold text-lg sm:text-xl md:text-[20px] underline underline-offset-6 sm:underline-offset-8"
                > 
                      {t("info")}
                </Link>
                <Button 
                    variant="secondary" 
                    className="w-full sm:w-auto text-base sm:text-lg md:text-lg px-6 sm:px-8 py-3 sm:py-3"
                    onClick={()=>{
                        setInfo((prev)=>{return {...prev,roomId:roomData.pk}})
                        setStape(3)
                    }}
                >
                      {t("choose")}
                </Button>
            </div>
        </div>
    )
}