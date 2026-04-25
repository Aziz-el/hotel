"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

export default function Nav() {
  const t = useTranslations("header");
  const pathname = usePathname();
  const locale = useLocale();
  const isWhiteBg = pathname === `/${locale}/aboutUs`;

  const navItems: NavItem[] = [
    { label: t("home.title"), href: `/${locale}` },
    { label: t("aboutUs.title"), href: `/${locale}/aboutUs` },
    { label: t("rooms.title"), href: `/${locale}/rooms` },
    { label: t("contacts.title"), href: `/${locale}/contacts` },
  ];
  console.log(pathname);
  
  return (
    <nav className="flex xl:gap-4 lg:gap-4 xl:text-[18px] lg:text-[16px] font-[Manrope] font-[500] max-lg:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href ;
        const textColor = isActive
          ? "text-[#E0B08B]"
          : isWhiteBg
          ? "text-black"
          : "text-white";

        return (
          <Link key={item.href} href={item.href}  aria-label={"ahref for navigation to " + item.href}  className={`
    relative px-1 py-1 inline-block
    after:content-['']
    after:absolute after:left-1/2 after:-bottom-1
    after:h-[2px]
    after:bg-[#E0B08B]
    after:rounded-full
    after:-translate-x-1/2
    after:transition-all after:duration-500 after:ease-out
    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
  `}>
            <span className={`flex items-center gap-1 ${textColor}`}>
              {item.label}
              {isActive && (
                <span className="text-[#E0B08B]">
                  <Image
                    src="/svg/icon/star.svg"
                    width={15}
                    height={15}
                    alt="Star"
                  />
                </span>
              )}
            </span>

            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E0B08B] rounded-full"></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
