import Image from "next/image";
import LanguageSwitcher from "@/src/features/Language/ui/LanguageSwitcher";
import Button from "@/src/shared/ui/Button";
import Nav from "../shared/components/CustomNav";
import BurgerMenu from "./BurgerMenu";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Header() {
  const t = await getTranslations("");
  const locale = await getLocale();

  return (
    <header className="absolute top-0 md:top-[22px] left-0 w-full z-10">
      <div className="container mx-auto min-2xl:max-w-[1400px] max-2xl:max-w-[1200px] px-4 sm:px-10 md:px-15 lg:px-20 max-sm:max-w-[95%]
                  xl:max-w-[1400px]  ">
        <div className="grid grid-cols-3 items-center gap-4 py-4 md:h-[150px]">
          <div className="flex items-center justify-start">
            <Nav />
            <BurgerMenu />
          </div>
          <div className="flex justify-center">
            <Link href={`/${locale}`} aria-label="Home">
              <Image
                src="/webp/Main/logo.webp"
                alt="Silk Road Empire Hotel Logo"
                width={239}
                height={142}
                priority
                className="w-[149px] md:w-[180px] lg:w-[200px] xl:w-[239px] h-auto"
              />
            </Link>
          </div>
          <div className="flex items-center justify-end gap-4 lg:gap-8">
            <Link href={`/${locale}/booking`} aria-label="book" className="max-lg:hidden">
              <Button
                variant="primary"
                className="lg:w-[170px] xl:w-[240px] lg:h-[50px] xl:h-[65px] xl:text-[18px] lg:text-[16px]"
              >
                {t("btn.book.title")}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
