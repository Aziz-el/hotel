import Button from "@/src/shared/ui/Button";
import Image from "next/image";
import HomeSwiper from "@/src/shared/components/Swipers/HomeSwiper";
import MapBlock from "@/src/shared/components/Maps/Map";
import TripSwiper from "@/src/shared/components/Swipers/TripSwiper";
import RoomsSwiper from "@/src/shared/components/Swipers/RoomsSwiper";
import LocatorButton from "@/src/shared/ui/LocatorButton";
import { getLocale, getTranslations } from "next-intl/server";
import { services } from "@/src/shared/lib/data/data";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("main");
  const locale = await getLocale();

  return (
    <main className="text-white">
      <LocatorButton />

      <section id="Home">
        <HomeSwiper />
      </section>
         <div className="bg-[#0A3143] ">
        <div id="be-search-form" className="be-container  max-w-[1240px] container  mx-auto">
        </div>
        </div>
      <section className="py-16 lg:py-24 xl:py-32 bg-[#0A3153]">
        <div className="container mx-auto max-w-[1240px] px-4 sm:px-10 md:px-15 lg:px-20 xl:px-0">
          <div className="grid max-md:items-center lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
            
            <div className="flex flex-col max-lg:items-center gap-6">
              <h2 className="text-[#E0B08B] text-2xl lg:text-4xl xl:text-6xl font-[Cormorant] font-semibold flex items-center gap-4  max-lg:self-start">
                <span className="w-8 h-0.5 xl:w-15 xl:h-0.75 bg-[#E0B08B]" />
                {t("aboutUs.left.title")}
              </h2>

              <div className="hidden lg:block space-y-5 font-[Manrope]">
                <p className="text-base xl:text-lg font-medium text-[#F2F2F2]">
                  {t("aboutUs.left.desctop.first")}
                </p>
                <p className="text-base xl:text-lg font-medium text-[#F2F2F2] max-w-[560px]">
                  {t("aboutUs.left.desctop.second")}
                </p>
              </div>

              <div className="lg:hidden font-[Manrope]">
                <p className="text-sm font-medium text-[#F2F2F2]">
                  {t("aboutUs.left.mobile.desc")}
                </p>
              </div>

              <div className="relative w-full aspect-[5/6] max-w-md lg:max-w-lg rounded-t-[250px] overflow-hidden mt-4">
                <Image
                  src="/webp/Main/AboutUs/AboutUs_Left.webp"
                  alt="Silk Road Empire Hotel Interior"
                  quality={60}
                  fill
                  className="object-cover object-[45%_10%]"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 420px"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="relative w-full aspect-[5/6] max-w-md lg:max-w-lg mx-auto lg:mx-0">
                <Image
                  src="/webp/Main/Home/Home_BG_3.webp"
                  alt="Hotel Exterior View"
                  quality={60}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 530px"
                />
              </div>

              <p className="text-sm md:text-base lg:text-base font-medium font-[Manrope] leading-relaxed xl:leading-8">
                {t("aboutUs.right.desc")}
              </p>

              <Link href={`/${locale}/rooms`} className="hidden xl:block">
                <Button className="w-full max-w-md">
                  {t("aboutUs.right.button")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="Услуги" className="bg-white py-16 lg:py-24 ">
        <div className="container mx-auto px-4 sm:px-10 md:px-15 lg:px-20 max-w-[1400px]">
          <h2 className="text-[#333333] text-3xl lg:text-5xl xl:text-6xl font-[Cormorant] font-semibold flex items-center gap-4 mb-10 lg:mb-16">
            <span className="w-8 h-0.5 lg:w-12 lg:h-0.75 bg-[#333333]" />
            {t("advantages.title")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 justify-items-center">
            {services.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center justify-center gap-4 lg:gap-5 
                           w-full aspect-square  lg:max-w-[225px] xl:max-w-[285px]
                           border border-[#E0B08B] text-[#333333] cursor-pointer
                           hover:bg-[#FFF9F5] transition-colors"
              >
                <Image
                  src={item.icon}
                  alt={`${t(`advantages.items.${item.text}`)} icon`}
                  width={90}
                  height={97}
                  className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                  loading="eager"
                />
                <p className="font-[Manrope] text-sm lg:text-lg xl:text-2xl text-center px-4 max-w-[140px]">
                  {t(`advantages.items.${item.text}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Номера" className="bg-[#0A3153] py-16 lg:py-24 min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
        <div className="container max-w-[1400px] lg:px-13 mx-auto px-4">
          <h2 className="text-[#F4C5A1] text-3xl lg:text-5xl xl:text-6xl font-[Cormorant] font-semibold flex items-center gap-4 mb-10 lg:mb-16 max-w-[95%] mx-auto">
            <span className="w-8 h-0.5 lg:w-12 lg:h-0.75 bg-[#F4C5A1]" />
            <span className="hidden lg:inline">{t("rooms.titleDesktop")}</span>
            <span className="lg:hidden">{t("rooms.titleMobile")}</span>
          </h2>
          <RoomsSwiper />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24 min-h-[400px] lg:min-h-[500px]">
        <div className="container  lg:px-13 max-w-[1400px] mx-auto px-4">
          <h2 className="text-[#333333] text-3xl lg:text-5xl xl:text-6xl font-[Cormorant] font-semibold flex items-center gap-4 mb-10 lg:mb-16 max-w-[95%] mx-auto">
            <span className="w-8 h-0.5 lg:w-12 lg:h-0.75 bg-[#333333]" />
            {t("trip.title")}
          </h2>
          <TripSwiper />
        </div>
      </section>

      <section id="Местоположения" className="bg-[#0A3153] py-16 lg:py-24">
        <div className="container lg:px-13 max-w-[1400px] mx-auto px-4">
          <h2 className="text-[#F4C5A1] text-3xl lg:text-5xl xl:text-6xl font-[Cormorant] font-semibold flex items-center gap-4 mb-10 lg:mb-16 max-w-[95%] mx-auto">
            <span className="w-8 h-0.5 lg:w-12 lg:h-0.75 bg-[#F4C5A1]" />
            <span className="hidden lg:inline">{t("map.titleDesktop")}</span>
            <span className="lg:hidden">{t("map.titleMobile")}</span>
          </h2>
          <MapBlock />
        </div>
      </section>
    </main>
  );
}
