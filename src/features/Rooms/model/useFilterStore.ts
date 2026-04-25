import { create } from "zustand"

interface FilterState {
  category: string
  setCategory: (category: string) => void
  isActive: (key: string) => boolean
}

export const useFilterStore = create<FilterState>((set, get) => ({
  category: "all",
  setCategory: (category) => set({ category }),
  isActive: (key) => get().category === key,
}))
