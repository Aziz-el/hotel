"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function LocatorButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.9
      setVisible(window.scrollY > trigger)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const scrollToHome = () => {
    const homeSection = document.getElementById("Home")
    if (!homeSection) return

    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start", 
    })
  }
  return (
    <Image
     onClick={scrollToHome}
  src="/svg/top.svg"
  width={90}
  height={90}
  alt="Назад"
  className={`
    fixed top-[80%]
    md:ml-[92%]
    max-md:ml-[86%]
    w-[50px] h-[50px]
    md:w-[70px] md:h-[70px]
    min-xl:w-[94px] min-xl:h-[94px]
    transition-all duration-300
    z-50
    cursor-pointer
    ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
  `}
/>

  )
}
