
import ContactModalTrigger from "@/src/shared/components/ContactModal";
import MapBlock from "@/src/shared/components/Maps/Map";
import Button from "@/src/shared/ui/Button";
import CustomInput from "@/src/shared/ui/Input";
import Modal from "@/src/shared/ui/Modal";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const t = await getTranslations("contacts")

  return (
    <div className="w-full m-auto">
      <div className="w-full flex flex-col items-center bg-[#0A3153] pb-20 sm:pb-28 lg:pb-35">
        <div className="max-w-[1060px] w-full flex items-center justify-center mt-40  lg:mt-60 px-4">
          <h1 className="font-[Cormorant] text-[28px] sm:text-[32px] md:text-[64px] lg:text-[100px] text-center uppercase text-[#E0B08B] md:text-[#FFFFFF] leading-[110%]">
            {t('title')}
          </h1>
        </div>

        <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row gap-12 lg:gap-42 mt-10 sm:mt-16 md:mt-20 px-4">
          <div className="w-full md:w-[570px]">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#ffffff]">
              {t('formTitle')}
            </h2>
            <ContactModalTrigger/>
          </div>

          <div className="font-[Manrope] text-[#ffffff] w-full md:w-auto">
            <div>
              <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold">
                {t("call")}
              </h1>
              <p className="text-[16px] sm:text-[18px] mt-3 font-medium">
                +998 90 104-00-55
              </p>
              <p className="mt-2 sm:mt-3 text-[16px] sm:text-[18px] font-medium">
                +998 55 705-00-55
              </p>
            </div>

            <div className="mt-6">
              <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold">
                Email
              </h1>
              <p className="text-[16px] sm:text-[18px] font-medium mt-2">
                silkroadempirehotel@gmail.com
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <h1 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold uppercase">
                {t("media")}
              </h1>

              <div className="flex gap-4 sm:gap-5 mt-5 sm:mt-6">
                <Link href="/">
                  <Image src="/svg/Social_Media/inst.svg" width={44} height={44} alt="Inst" />
                </Link>
                <Link href="/">
                  <Image src="/svg/Social_Media/facebook.svg" width={44} height={44} alt="Facebook" />
                </Link>
                <Link href="/">
                  <Image src="/svg/Social_Media/tg.svg" width={44} height={44} alt="Telegram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id = "Местоположения" className="max-w-[1200px] m-auto mt-20 sm:mt-28 lg:mt-35 px-4 mb-24 sm:mb-32 lg:mb-35">
        <div className="flex items-start">
          <h1 className="font-[Cormorant] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-semibold flex items-center gap-4 sm:gap-6  uppercase">
            <span className="w-[30px] sm:w-[60px] h-[3px] border-2 border-[#333333]" />
            {t("location")}
          </h1>
        </div>

        <div className="mt-10 sm:mt-16 lg:mt-20">
          <MapBlock />
        </div>
      </div>
    </div>
  )
}
