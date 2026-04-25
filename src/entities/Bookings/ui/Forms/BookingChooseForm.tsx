import Image from "next/image";
import { ROOMS } from "@/src/entities/Rooms/model/mockRooms";
import RoomCardMini from "@/src/entities/Rooms/ui/RoomMiniCard";
import { BookingInfo } from "@/src/entities/Rooms/model/types";
import { useTranslations } from "next-intl";

export default function BookingChooseForm ({adults,children,days,start,end,setInfo,setStape} : {adults : number,children : number,days : number,setStape : (num:number)=>void,start : string|null,end : string|null,setInfo:React.Dispatch<React.SetStateAction<BookingInfo>>}) {
    const t = useTranslations("choose");

    let rooms = ROOMS.filter(room => room.fields.adults >= adults && room.fields.children >= children).slice(0,3)
    return(
        <div className="chooseForm bg-[#0A3153] container max-w-[1200px] mx-auto  w-full min-h-screen pt-30 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-44 2xl:pt-[200px]  pb-10 text-white font-[Manrope]">
            <Image
                src={"/svg/Pagination/ButtonToLeftSecond.svg"}
                alt=""
                width={70}
                height={70}
                className="w-10 sm:w-12 md:w-14 lg:w-16 xl:w-[70px] mb-6 cursor-pointer"
                onClick={()=>setStape(1)}
            />
            
            <h2 className="text-[#F4C5A1] hidden lg:flex text-5xl lg:text-6xl xl:text-[70px] items-center gap-6 font-[Cormorant] mb-10">
                <span className="w-16 lg:w-20 h-1 bg-[#F4C5A1]"></span>  {t("title")}
            </h2>

            <h2 className="text-[#F4C5A1] lg:hidden text-2xl sm:text-3xl md:text-4xl text-center font-[Cormorant] mb-8">
                  {t("title")}
            </h2>

            <div className="ROOMS flex flex-col-reverse lg:flex-row w-full justify-between">
                <div className="rooms flex flex-col gap-8 sm:gap-10 md:gap-12 w-full md:w-[80%] lg:w-[150%] xl:w-[70%] 2xl:w-[70%] min-[1600px]:max-w-[60%] max-lg:mx-auto">
                    {rooms.map(room => (
                        <RoomCardMini roomData={room} guests={adults + children} days={days} key={room.pk} setInfo={setInfo} setStape={setStape}/>
                    ))}
                </div>

                <div className="hidden lg:block w-0.5 bg-white self-stretch"></div>
                <div className="w-full lg:hidden h-0.5 bg-white"></div>

                <div className="infoblock  lg:w-auto max-lg:mx-auto">
    <h3 className="font-bold text-2xl sm:text-3xl md:text-[24px] lg:text-[26px] xl:text-[28px] max-w-[250px] md:max-w-[100px] mb-4 sm:mb-5">
          {t("details")}
    </h3>
    <div className="info font-medium text-lg sm:text-xl md:text-xl lg:text-[18px] xl:text-[20px] flex gap-6 sm:gap-8 md:gap-8">
        <div className="key flex flex-col gap-3">
            <p>{t("checkIn")}</p>
<p>{t("checkOut")}</p>
<p>{t("nights")}</p>
<p>{t("adults")}</p>
{children > 0 && <p>{t("children")}</p>}

        </div>
        <div className="value flex flex-col gap-3">
            <p>{start}</p>
            <p>{end}</p>
            <p>{days}</p>
            <p>{adults}</p>
            {children > 0 && <p>{children}</p>}
        </div>
    </div>
</div>
            </div>
        </div>
    )
}