"use client"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl";

import { Dispatch, SetStateAction } from "react";
type BookingInfo = {
  adults:   number;
  children: number;
  start:    string|null;
  end:      string|null;
};
type Props = {
  startDate: number | null
  endDate: number | null
  setStart: (d: number | null) => void
  setEnd: (d: number | null) => void
  setInfo: Dispatch<SetStateAction<BookingInfo>>;
}

export default function CustomCalendar({
  startDate,
  endDate,
  setStart,
  setEnd,
  setInfo
}: Props) {
  const t = useTranslations("calendar");
const weekdays = t.raw("weekdays") as string[];
const months = t.raw("months") as string[];

  const [date, setDate] = useState(() => new Date())
  const year = date.getFullYear()
  const month = date.getMonth()

  const formatDate = (ts: number | null)  => {
  if (!ts) return "—"
  const d = new Date(ts)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

  const prevMonth = () => setDate(new Date(year, month - 1, 1))
  const nextMonth = () => setDate(new Date(year, month + 1, 1))
  const firstDay = new Date(year, month, 1)
  let start = firstDay.getDay()
  start = start === 0 ? 6 : start - 1
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const getDayTs = (dayIndex: number) => new Date(year, month, dayIndex + 1).getTime()
  useEffect(() => {
    setInfo((prev: {adults : number,children : number,start : string| null ,end  : string |null})=> {
      return {
        ...prev,
        start : formatDate(startDate),
        end : formatDate(endDate)
      }
    })
  },[startDate,endDate])
  const handleClick = (dayIndex: number) => {
    const ts = getDayTs(dayIndex)
    if (startDate === null || (startDate !== null && endDate !== null)) {
      setStart(ts)
      setEnd(null)
      return
    }
    if (ts > startDate) setEnd(ts)
    else setStart(ts)
  }
  return (
    <div className="select-none relative z-99 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px]">
      <div className="flex justify-between pb-3 sm:pb-4 text-base sm:text-lg">
        <div>
          <p className="text-xs sm:text-sm opacity-60">{t("checkIn")}</p>
          <p className="font-medium text-base sm:text-lg">{formatDate(startDate)}</p>
        </div>
        <div>
          <p className="text-xs sm:text-sm opacity-60">{t("checkOut")}</p>
          <p className="font-medium text-base sm:text-lg">{formatDate(endDate)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 text-lg sm:text-xl font-semibold">
        <button onClick={prevMonth} className="px-2 py-1 rounded hover:bg-[#E0B08B] transition text-base sm:text-lg">{"<"}</button>
        <div className="text-base sm:text-lg md:text-xl">{months[month]} {year}</div>
        <button onClick={nextMonth} className="px-2 py-1 rounded hover:bg-[#E0B08B] transition text-base sm:text-lg">{">"}</button>
      </div>
      <div className="grid grid-cols-7 gap-2 sm:gap-3">
        {weekdays.map(d => (
          <div key={d} className="text-center text-xs sm:text-sm opacity-60">{d}</div>
        ))}
        {Array.from({ length: start }).map((_, i) => <div key={i} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const ts = getDayTs(i)
          const isStart = startDate === ts
          const isEnd = endDate === ts
          const inRange = startDate !== null && endDate !== null && ts > startDate && ts < endDate
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`
                text-center py-2 sm:py-2.5 md:py-3 rounded cursor-pointer text-base sm:text-lg
                transition-colors
                ${isStart || isEnd ? "bg-[#E0B08B]" : ""}
                ${inRange ? "bg-[#807772]" : "hover:bg-[#E0B08B]"}
              `}
            >
              {i + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}