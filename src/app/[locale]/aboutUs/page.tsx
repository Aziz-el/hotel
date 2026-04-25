import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();

  return (
    <div className="w-full m-auto mt-45 sm:mt-60">
      <section className="max-w-[1200px] w-full m-auto px-4 bg-white ">
  <div className="flex m-auto items-center justify-center w-full max-w-[250px] sm:max-w-[735px]">
    <h1 className="font-[Cormorant] font-semibold md:font-normal text-[32px] sm:text-[64px] text-center md:text-7xl lg:text-[100px] leading-[110%] tracking-normal text-center uppercase z-5">
      SILK ROAD EMPIRE HOTEL
    </h1>
  </div>

  <div className="flex relative bottom-5 justify-center md:justify-between items-center gap-4">
    <div className="hidden md:block">
      <Image src={'/webp/about/Letter.webp'} width={316} height={421} alt="Rooms" loading="lazy"/>
    </div>

    <div className="relative md:bottom-14 lg:bottom-22">
      <Image 
        src={'/webp/about/LuxRoom.webp'} 
        width={483} 
        height={600} 
        alt="Rooms" 
        className="w-full max-w-[300px] md:max-w-[483px] h-auto"
        loading="eager"
      />
    </div>

    <div className="hidden md:block">
      <Image src={'/webp/about/PinkRoom.webp'} width={316} height={421} alt="Rooms" />
    </div>
  </div>

  <div className="w-full max-w-[566px] items-center m-auto relative bottom-10 mt-10  lg:mt-0 md:bottom-20 px-2 ">
    <p className="text-center text-base md:text-[18px] font-[Manrope] font-[500]">
      {t("describes.silk.title")}
    </p>
  </div>
</section>


      <section className="bg-[#0A3153] w-full mt-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 py-20 lg:py-[150px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-auto max-w-[520px] mx-auto lg:mx-0">
              <Image src="/webp/about/About.webp" width={520} height={700} alt="Restaurant" loading="lazy"/>
            </div>

            <div className="w-full lg:w-[465px] mt-8 lg:mt-0 lg:text-left">
              <div className="flex items-center lg:justify-start gap-5 lg:gap-7">
                <span className="w-[30px] sm:w-[60px] lg:inline-block h-[3px] border-2 border-[#E0B08B]" />
                <h2 className="text-[#E0B08B] text-4xl sm:text-5xl lg:text-[60px] uppercase font-[Cormorant] font-[600]">
                  {t("restaurant.title")}
                </h2>
              </div>
              <p className="text-[#FFFFFF] text-base sm:text-lg lg:text-[18px] font-[Manrope] mt-5">
                {t("restaurant.description")}
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-10 items-center mt-16 lg:mt-20">
            <div className="w-full lg:w-[465px] mt-8 lg:mt-0 lg:text-left">
              <div className="flex items-center lg:justify-start gap-5 lg:gap-7">
                <span className="w-[30px] sm:w-[60px] h-[3px] border-2 border-[#E0B08B]" />
                <h2 className="text-[#E0B08B] text-4xl sm:text-5xl lg:text-[60px] uppercase font-[Cormorant] font-[600]">
                  {t("museum.title")}
                </h2>
              </div>
              <p className="text-[#FFFFFF] text-base sm:text-lg lg:text-[18px] font-[Manrope] mt-5">
                {t("museum.description")}
              </p>
            </div>

            <div className="w-full lg:w-auto max-w-[570px] mx-auto lg:mx-0">
              <Image src="/webp/about/Museum.webp" width={570} height={700} alt="Museum" loading="lazy" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center mt-16 lg:mt-20">
            <div className="w-full lg:w-auto max-w-[520px] mx-auto lg:mx-0">
              <Image src="/webp/about/About.webp" width={520} height={700} alt="Terrace" loading="lazy"/>
            </div>

            <div className="w-full lg:w-[465px] mt-8 lg:mt-0 lg:text-left" >
              <div className="flex items-center lg:justify-start gap-5 lg:gap-7">
                <span className="w-[30px] sm:w-[60px] h-[3px] border-2 border-[#E0B08B]" />
                <h2 className="text-[#E0B08B] text-4xl sm:text-5xl lg:text-[60px] uppercase font-[Cormorant] font-[600]">
                  {t("terrace.title")}
                </h2>
              </div>
              <p className="text-[#FFFFFF] text-base sm:text-lg lg:text-[18px] font-[Manrope] mt-5">
                {t("terrace.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[320px] sm:max-w-[1200px]  mx-auto h-auto  pt-[80px] sm:pt-[150px] pb-[150px] sm:px-[30px]">
        <div className="flex items-center gap-4">
          <span className="w-[30px] sm:w-[60px] h-[3px] bg-[#333333]" />
          <h1 className="text-[32px] sm:text-[60px] font-semibold font-[Cormorant] uppercase">
            {t("conditions.title")}
          </h1>
        </div>
        <div className="hidden sm:block mt-8 bg-[#BDBDBD] w-full h-[1px]"></div>

        <div className="flex gap-20 sm:justify-between items-center w-full h-[100px] font-[Manrope]">
          <h1 className="text-[14px] w-[93px] sm:w-150 sm:text-[24px] font-bold uppercase">
            {t("conditions.chekIn")}
          </h1>
          <p className="text-start w-150 font-semibold text-[14px] sm:text-[20px]">14:00</p>
        </div>

        <div className="hidden sm:block mt-8 bg-[#BDBDBD] w-full h-[1px]"></div>

        <div className="flex gap-20 sm:justify-between items-center w-full sm:h-[100px] font-[Manrope]">
          <h1 className="w-[93px] sm:w-150 text-[14px] sm:text-[24px] font-bold uppercase">
            {t("conditions.chekOut")}
          </h1>
          <p className="text-start w-150 font-semibold text-[14px] sm:text-[20px]">12:00</p>
        </div>

        <div className="hidden sm:block mt-8 bg-[#BDBDBD] w-full h-[1px]"></div>

        <div className="flex items-start mt-5 gap-18 sm:justify-between w-full h-[200px] font-[Manrope]">
          <h1 className="w-[93px] sm:w-150 text-[14px] sm:text-[24px] font-bold uppercase">
            {t("conditions.cancel.title")}
          </h1>
          <p className="w-[159px] sm:w-150 font-semibold text-[14px] sm:text-[20px]">
            {t("conditions.cancel.description")}
          </p>
        </div>

        <div className="hidden sm:block mt-8 bg-[#BDBDBD] w-full h-[1px]"></div>

        <div className="flex gap-18 items-start mt-10 sm:justify-between w-full h-[200px] font-[Manrope]">
          <h1 className="w-[93px] text-[14px] sm:w-150 sm:text-[24px] font-bold uppercase">
            {t("conditions.order.title")}
          </h1>
          <div className="w-[159px] sm:w-150">
            <p className="text-[14px] sm:text-start font-semibold sm:text-[20px]">
              {t("conditions.order.description")}
            </p>
          </div>
        </div>

        <div className="hidden sm:block mt-8 bg-[#BDBDBD] w-full h-[1px]"></div>
      </section>
    </div>
  );
}
