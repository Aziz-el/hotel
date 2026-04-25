import { RoomList } from "@/src/entities/Rooms/ui/RoomList"
import { FilterTabs } from "@/src/features/Rooms/ui/RoomFilter"
import { getTranslations } from "next-intl/server"
export default async function Page() {
  const t = await getTranslations("rooms")

  return (
    <div className="w-full h-auto">
      <div className="bg-[#0A3153] w-full h-[300px] sm:h-[400px] md:h-[462px] flex items-center justify-center px-4 pt-20">
        <h1 className="text-[40px] sm:text-[60px] md:text-[100px] font-[Cormorant] font-normal uppercase text-white mt-[20px] sm:mt-[30px] md:mt-[40px] text-center">
          {t("title")}
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto w-full h-auto mt-[20px] sm:mt-[80px] px-4">
        <div className="flex items-center justify-center mb-6 sm:mb-10"> 
          <FilterTabs />
        </div>
        <div className="max-w-[1200px] w-full m-auto h-auto mb-20">
          <RoomList />
        </div>
      </div>
    </div>
  )
}
