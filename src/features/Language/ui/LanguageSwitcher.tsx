"use client";

import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale(); 
  const containerRef = useRef<HTMLDivElement>(null);
  const langRefs = useRef<Record<string, HTMLDivElement>>({});

  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });

  const currentLocale = locale.toUpperCase();

  const isWhiteBg = pathname.endsWith("/aboutUs");
  const textColor = isWhiteBg ? "text-black" : "text-white";

  const updateLinePosition = () => {
    const el = langRefs.current[currentLocale];
    const parent = containerRef.current;
    if (!el || !parent) return;

    const rect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    setLineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
    });
  };

  useLayoutEffect(() => {
    updateLinePosition();
  }, [currentLocale, pathname]);

  useEffect(() => {
    window.addEventListener("resize", updateLinePosition);
    return () => window.removeEventListener("resize", updateLinePosition);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-10 font-medium select-none cursor-pointer"
    >
      {(["RU", "EN"] as const).map((l, i) => {
        const href = pathname.replace(/^\/(en|ru)/, `/${l.toLowerCase()}`);

        return (
          <div key={l} className="py-1 flex items-center">
            <div
              ref={(el) => {
                if (el) {
                  langRefs.current[l] = el;
                }
              }}
              className={textColor}
            >
              <Link href={href}>{l}</Link>
            </div>
            {i === 0 && <span className={`${textColor} px-1`}>|</span>}
          </div>
        );
      })}

      <span
        className="absolute bottom-0 h-[2px] bg-[#F4C5A1] transition-all duration-300"
        style={lineStyle}
      />
    </div>
  );
}
