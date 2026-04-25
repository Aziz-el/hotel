"use client"

import Image from "next/image";
import Link from "next/link";
import Button from "../shared/ui/Button";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/router";
type NavItem = {
  label: string;
  href: string;
};

export default function Footer() {
    const locale = useLocale();

    
   const [mounted, setMounted] = useState(false);
  const navItems: NavItem[] = [
    { label: "Услуги", href: `Услуги` },
    { label: "Номера", href: `/${locale}/rooms` },
    { label: "Как добраться", href: `Местоположения` },
    { label: "О нас", href: `/${locale}/aboutUs` },
    { label: "Контакты", href: `/${locale}/contacts` },
  ]

  const [time,setTime] = useState<string | null>(null)
   useEffect(() => {
        setMounted(true);
    const update = () => {
      setTime(new Date().toLocaleTimeString())
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  const scrollToHome = (name:string) => {
    const homeSection = document.getElementById(name)
    if (!homeSection) return

    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start", 
    })
  }
    if (!mounted) return <footer className="h-[200px]" aria-hidden />;
  return (
  <footer>
    <div className="footer  bg-[#0A3153] text-white pt-28 pb-20">
        <div className="footer_head flex items-center ">
          <hr className="w-full  "/>
          <Image
            src="/webp/Main/logo.webp"
            alt="Logo"
            width={290}
            height={172}
            priority
            className="w-[490px] max-sm:w-[169px] max-md:w-[180px] max-lg:w-[200px] "
          />
          <hr className="w-full"/>
        </div>

        <div className="footer_body flex xl:items-start max-sm:mx-auto max-sm:w-[90%] max-sm:flex-col font-[Manrope] justify-around mt-10 container  mx-auto">
          <div className="first_block xl:text-[18px] max-sm:text-[14px]">
            <div className="info flex flex-col gap-2">
              <h3 className="hover:text-[#E0B08B] transform duration-300">Улица Амир темур 29</h3>
              <h3 className="hover:text-[#E0B08B] transform duration-300">silkroadempirehotel@gmail.com</h3>
              <h3 className="hover:text-[#E0B08B] transform duration-300">+998 90 104-00-55</h3>
              <h3 className="hover:text-[#E0B08B] transform duration-300">+998 55 705-00-55</h3>
            </div>
            <div className="iconcs flex gap-5 mt-13.5 max-sm:hidden">
               <a href={"https://www.facebook.com/people/Silkroadempirehotel/100082200878629/#"}><Image src={"/svg/Social_Media/facebook.svg"} width={50} height={50} alt="Facebook1" className="max-md:w-[40px] "/></a>
               <a href={"https://www.instagram.com/silkroadempirehotel"}><Image src={"/svg/Social_Media/inst.svg"} width={50} height={50} alt="Inst1" className="max-md:w-[40px]"/></a>
               <a href={"/"}><Image src={"/svg/Social_Media/tg.svg"} width={50} height={50} alt="Tg1" className="max-md:w-[40px]"/></a>

            </div>
          </div>
          <div className="second_block">
            <div className="links  flex flex-col xl:gap-4 xl:text-[18px] max-sm:text-[14px]  max-sm:mt-7 max-sm:gap-2 ">
              {
                navItems.map(el=><Link key= {el.href} href={el.label != "Услуги" && el.label != "Как добраться" ? el.href : ""}  aria-label={"ahref for navigation to " + el.href}  onClick={()=>(el.label == "Услуги" || el.label == "Как добраться" ? scrollToHome(el.href) : null )} className="hover:text-[#E0B08B] transform duration-300"> {el.label}</Link>)
              }
            </div>
          </div>
          <div className="third_block">
            <div className="booking xl:text-[24px] max-sm:text-[20px]  max-sm:mt-4 flex flex-col xl:gap-7.5 max-sm:gap-3.75">
              <h3>Готовы забронировать?</h3>
               <Link href={`/${locale}/booking/`}><Button className="max-md:w-[150px] w-[270px] max-md:h-[50px] h-[70px] max-md:text-[15px]" >Забронировать</Button></Link>
            </div>
             <div className="time mt-7.5">
              <h3 className="text-[20px]">Местное время</h3>
              <p className="text-[24px]">{time ?? "--:--:--"}</p>
             
             </div>
             <div className="iconcs flex gap-5 mt-6 sm:hidden">
               <a href={"https://www.facebook.com/people/Silkroadempirehotel/100082200878629/#"}><Image src={"/svg/Social_Media/facebook.svg"} width={50} height={50} alt="Facebook" /></a>
               <a href={"https://www.instagram.com/silkroadempirehotel"}><Image src={"/svg/Social_Media/inst.svg"} width={50} height={50} alt="Inst"/></a>
               <a href={"/"}><Image src={"/svg/Social_Media/tg.svg"} width={50} height={50} alt="Tg"/></a>

            </div>
          </div>
        </div>
        <div className="aa flex mx-auto items-end max-h-[10px] pt-20 justify-center text-[14px] max-sm:text-[12px] font-[Cormorant] text-[18px]">
                <p>PROlab Agency </p>
                <a href="https://github.com/Aziz-el">/ Abdulaziz Askarov</a>
                <a href="https://github.com/ahmedow-s">/ MuhammadAziz Ahmadjanov</a>

              </div>
    </div>
  </footer>
  )
}
