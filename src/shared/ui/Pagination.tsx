'use client'

import { useTranslations } from "next-intl"
import Button from "./Button"

interface Props {
  currentPage: number
  totalPages: number
  onPageClick: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageClick }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const t = useTranslations("btn.book") 

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageClick(currentPage + 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 md:pt-30">
      <Button
        onClick={handleNext}
        className="text-[20px] max-w-[575px] font-[Manrope] font-semibold transition text-[#828282] hover:text-gray-600"
      >
        {t("showAll")}
      </Button>

      <div className="flex gap-3">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageClick(p)}
            className={`w-9 h-9 text-[20px] font-[Manrope] font-semibold transition ${
              p === currentPage
                ? "text-[#E0B08B] underline underline-offset-4 font-bold"
                : "text-[#828282] hover:text-gray-600"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}
