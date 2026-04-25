'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { RoomCard } from "./RoomCard"
import { ROOMS as mockRooms } from "../model/mockRooms"
import { useFilterStore } from "@/src/features/Rooms/model/useFilterStore"
import { Pagination } from "@/src/shared/ui/Pagination"
import { useRoomStore } from "../model/RoomsStore"

const PAGE_SIZE = 4

export const RoomList = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get("page")) || 1
  const category = searchParams.get("category") || "all" 

  const { rooms } = useRoomStore()

  const filteredRooms =
    category === "all"
      ? mockRooms
      : mockRooms.filter((room) => room.fields.category.toLowerCase() === category)

  const totalPages = Math.ceil(filteredRooms.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const visibleRooms = filteredRooms.slice(start, start + PAGE_SIZE)

  const handlePageClick = (pageNum: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(pageNum))
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex flex-col gap-8">
      {visibleRooms.map((room) => (
        <RoomCard key={room.pk} room={room} />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageClick={handlePageClick}
        />
      )}
    </div>
  )
}
