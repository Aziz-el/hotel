import { BookingInfo } from "@/src/entities/Rooms/model/types";
import CustomCalendar from "@/src/shared/components/CustomCalendar";
import Button from "@/src/shared/ui/Button";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
  import { useTranslations } from "next-intl";
export default function BookingForm({
  setStape,
  setInfo,
}: {
  setStape: (num: number) => void;
  setInfo: React.Dispatch<React.SetStateAction<BookingInfo>>;
}) {
  let [start, setStart] = useState<number | null>(null);
  let [end, setEnd] = useState<number | null>(null);
  let [adults, setAdults] = useState<number>(1);
  let [children, setChildren] = useState<number>(0);
  let locale = useLocale();
  const t = useTranslations("booking");
  return (
    <div className="bookingForm bg-[#0A3153] container mx-auto max-lg:min-h-screen text-white px-4 pt-40 sm:pt-44 md:pt-32 lg:pt-40 xl:pt-48 min-[1600px]:pt-[250px] pb-10">
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
        
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16 2xl:gap-[100px] mt-10 lg:mt-20">
          <CustomCalendar
            startDate={start}
            endDate={end}
            setStart={setStart}
            setEnd={setEnd}
            setInfo={setInfo}
          />
          
          <div className="hidden lg:block h-[400px] w-0.5 bg-[#BDBDBD]" />
          <div className="w-full lg:hidden h-0.5 bg-[#BDBDBD]" />
          
          <div className="flex flex-col items-center gap-10 md:gap-12">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-2xl sm:text-3xl md:text-[32px]">  {t("adults")}</h3>
              <div className="flex items-center gap-6">
                <button
                  className="cursor-pointer filter disabled:grayscale"
                  disabled={adults <= 1}
                >
                  <Image
                    width={40}
                    height={40}
                    src={"/svg/Pagination/Minus.svg"}
                    alt="minus"
                    onClick={() => setAdults((prev: number) => prev - 1)}
                    className="w-8 sm:w-9 md:w-10"
                  />
                </button>
                <p className="text-2xl sm:text-3xl md:text-[32px] min-w-[50px] text-center">{adults}</p>
                <button
                  className="cursor-pointer filter disabled:grayscale"
                  disabled={adults + 1 > 3 - children}
                >
                  <Image
                    width={40}
                    height={40}
                    src={"/svg/Pagination/Plus.svg"}
                    alt="plus"
                    onClick={() => setAdults((prev) => prev + 1)}
                    className="w-8 sm:w-9 md:w-10"
                  />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 text-center">
              <span>
                <h3 className="text-2xl sm:text-3xl md:text-[32px]">  {t("children")}</h3>
                <h3 className="text-xl sm:text-2xl md:text-[28px]">  {t("childrenAge")}</h3>
              </span>
              <div className="flex items-center gap-6">
                <button
                  className="cursor-pointer filter disabled:grayscale"
                  disabled={children <= 0}
                >
                  <Image
                    width={40}
                    height={40}
                    src={"/svg/Pagination/Minus.svg"}
                    alt="minus"
                    onClick={() => setChildren((prev) => prev - 1)}
                    className="w-8 sm:w-9 md:w-10"
                  />
                </button>
                <p className="text-2xl sm:text-3xl md:text-[32px] min-w-[50px] text-center">{children}</p>
                <button
                  className="cursor-pointer filter disabled:grayscale"
                  disabled={children + 1 > 4 - adults}
                >
                  <Image
                    width={40}
                    height={40}
                    src={"/svg/Pagination/Plus.svg"}
                    alt="plus"
                    onClick={() => setChildren((prev) => prev + 1)}
                    className="w-8 sm:w-9 md:w-10"
                  />
                </button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block h-[400px] w-0.5 bg-[#BDBDBD]" />
          <div className="w-full lg:hidden h-0.5 bg-[#BDBDBD]" />
          
          <Button
            className="w-full sm:w-auto lg:self-end text-lg sm:text-xl md:text-2xl lg:text-[24px] px-8 sm:px-10 py-3 sm:py-4 lg:mb-6"
            disabled={start === null || end === null}
            onClick={() => {
              setInfo((prev) => ({ ...prev, adults: adults, children: children }));
              setStape(2);
            }}
          >
             {t("next")}
          </Button>
        </div>
      </div>
    </div>
  );
}