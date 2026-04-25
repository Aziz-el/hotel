"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function MapBlock() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { rootMargin: "200px" }
    )
    const el = document.getElementById("map-placeholder")
    if (el) observer.observe(el)
    return () => {el && observer.unobserve(el)}
  }, [])
  let path = usePathname()
  return (
    <div
      id="map-placeholder"
      className="w-full
              max-w-[1240px]
              h-[400px]
              sm:h-[500px]
              lg:h-[540px]
              xl:h-[600px]
              2xl:h-[700px] mx-auto relative overflow-hidden mt-10 bg-gray-200"
    >
      {isVisible && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.9093503339427!2d66.95117637642402!3d39.65175460184219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d197a3f9c7231%3A0x4fb4dea764403084!2sSilk%20Road%20Empire!5e0!3m2!1sru!2skg!4v1768154769490!5m2!1sru!2skg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          className="invert-90 hue-rotate-180 contrast-[1.2] brightness-[0.8]"
          allowFullScreen={false}
          loading="lazy"
          lang={path.slice(path.length-2,path.length)}
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      )}
    </div>
  )
}
