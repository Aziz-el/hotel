import Footer from "@/src/widgets/Footer"
import Header from "@/src/widgets/Header"
import { NextIntlClientProvider } from "next-intl"
import { manrope,cormorant } from "@/src/shared/fonts/fonts"
import { Metadata } from "next"
import "./globals.css"
import { getMessages } from 'next-intl/server';
import Script from "next/script"
export const metadata : Metadata= {
  title: "Silk Road Empire",
  description: "Silk Road Empire — роскошный отель, вдохновлённый наследием Великого Шёлкового пути, где история встречается с современным комфортом.",
  openGraph:{
    title: "Silk Road Empire",
    description:"Silk Road Empire — роскошный отель, вдохновлённый наследием Великого Шёлкового пути, где история встречается с современным комфортом.",
    images:[
      {
        url:"/webp/Main/Home/Home_BG.webp",
        width:800,
        height:600,
        alt:"Silk Road Empire"
      }
    ]
  }
  }
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params 

  let  messages=await getMessages({locale:locale}) 

  return (
    <html lang={locale}>
      <body className={`${cormorant.variable} ${manrope.variable}  `}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className=" mx-auto ">
            <Header />
            <main className="max-lg:min-h-screen">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
      <Script src="/script.js"  strategy="afterInteractive"/>
    </html>
  );
}
