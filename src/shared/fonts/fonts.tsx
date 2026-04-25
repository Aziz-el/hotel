import { Cormorant, Manrope } from "next/font/google"
const cormorant = Cormorant({
  style:"normal",
  subsets: ["latin"],
  weight: [ "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
  preload:true,
  adjustFontFallback: true,
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-manrope",
  display: "swap",
  preload:true,
    adjustFontFallback: true,
})


export {manrope,cormorant}