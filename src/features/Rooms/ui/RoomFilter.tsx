'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useFilterStore } from '../model/useFilterStore'
import { useTranslations } from 'next-intl'

export const FilterTabs = () => {
  const t = useTranslations('rooms.category') 
  const { category, isActive, setCategory } = useFilterStore()
  const router = useRouter()
  const searchParams = useSearchParams()

  const tabs = [
    { key: 'luxe', label: t('luxe') },
    { key: 'deluxe', label: t('deluxe') },
    { key: 'all', label: t('all') },
  ]

  useEffect(() => {
    const urlCategory = searchParams.get('category') || 'all'
    setCategory(urlCategory)
  }, [searchParams, setCategory])

  const handleClick = (key: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', key)
    params.set('page', '1')
    router.push(`?${params.toString()}`)
    setCategory(key)
  }

  return (
    <nav className="flex flex-wrap sm:flex-nowrap w-full sm:w-1/2 mx-auto items-center justify-center gap-4 sm:gap-[60px] px-2">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => handleClick(tab.key)}
          className={
            isActive(tab.key)
              ? "text-[#0A3153] text-base sm:text-[24px] font-[Manrope] underline underline-offset-4 font-medium"
              : "text-[#828282] text-base sm:text-[24px] font-[Manrope] hover:text-gray-600"
          }
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
