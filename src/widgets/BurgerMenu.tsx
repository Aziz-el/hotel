"use client"
import Link from "next/link";
import { useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Button from "../shared/ui/Button";
type NavItem = {
  label: string;
  href: string;
};

export default function BurgerMenu(){
      const t = useTranslations(); 
      const locale = useLocale();
     let [isActive,setActive] = useState(false)
      useEffect(()=>{
        if(isActive){
          document.body.style.overflow = "hidden"
        }else{
           document.body.style.overflow = "auto"
        }
      },[isActive])
      const pathname = usePathname();
        const navItems: NavItem[] = [
          { label: t("header.home.title"), href: `/${locale}` },
          { label: t("header.aboutUs.title"), href: `/${locale}/aboutUs` },
          { label: t("header.rooms.title"), href: `/${locale}/rooms` },
          { label: t("header.contacts.title"), href: `/${locale}/contacts` },
        ];
    return(<>
     <div className="burger min-lg:hidden ">
         <Image src={"/svg/burger.svg"}  width={20} height={14} alt="burger" className="cursor-pointer" onClick={()=>setActive(true)}/>
         
       </div>
        <div className={`burger_menu  ${isActive ? "translate-x-[120%]" : ""} z min-lg:hidden absolute  transition-[0.5s] -left-[120%] -top-5  w-full min-h-screen  bg-white z-51`}>
    
            <Image src={"/svg/x.svg"} width={28} height={28} alt="" className="absolute right-4 top-4"  onClick={()=>setActive(false)}/>
               <nav className="flex gap-2 text-[18px] font-[Manrope] flex-col font-[500] mt-20  justify-center items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
    
            const textColor = isActive ? "text-[#E0B08B]" : "text-black" 
    
            return (
              <Link
               aria-label={"ahref for navigation to " + item.href} 
                key={item.href}
                href={item.href}
                className={`
        relative px-1 py-1 inline-block
        after:content-['']
        after:absolute after:left-1/2 after:-bottom-1
        after:h-[2px]
        after:bg-[#E0B08B]
        after:rounded-full
        after:-translate-x-1/2
        after:transition-all after:duration-500 after:ease-out
        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
      `}
                onClick={()=>setActive(false)}
              >
                <span className={`flex items-center gap-1 ${textColor}`}>
                  {item.label}
                  
                </span>
    
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E0B08B] rounded-full"></span>
                )}
              </Link>
            );
          })}
              <Link href={`/${locale}/booking`} onClick={()=>setActive(false)}><Button > {t("btn.book.title")}</Button></Link>
        </nav>
           </div>
    </>)
}