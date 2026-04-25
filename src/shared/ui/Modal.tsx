'use client'

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const t = useTranslations("modal")


    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/50
      px-4
    "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-[#FBFBFB]
          w-full max-w-[700px]
          h-auto md:h-[493px]
          flex flex-col items-center justify-center
          py-10 md:py-0
        "
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6"
        >
          <Image src="/svg/x.svg" width={32} height={32} alt="close" />
        </button>

        <div className="flex items-center justify-center">
          <Image src="/svg/icon/chek.svg" width={70} height={70} alt="success" />
        </div>

        <div className="
          flex flex-col items-center justify-center
          text-center
          w-full max-w-[450px]
          mt-5 px-4
        ">
          <h1 className="
            font-[Cormorant]
            text-[24px] sm:text-[32px]
            font-semibold
            uppercase
          ">
            {t("thanks")}
          </h1>

          <p className="
            font-[Manrope]
            text-[16px] sm:text-[18px]
            font-medium
            tracking-normal
            mt-6
          ">
            {t("desc")}
            <span className="text-[#E0B08B]"> @silkroadempirehotel</span>
          </p>
        </div>
      </div>
    </div>
  )
}
