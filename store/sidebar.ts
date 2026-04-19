import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarState {
  collapsed: boolean
  mobileOpen: boolean
  toggle: () => void
  setMobileOpen: (v: boolean) => void
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      collapsed: false,
      mobileOpen: false,
      toggle: () => set((s) => ({ collapsed: !s.collapsed })),
      setMobileOpen: (v) => set({ mobileOpen: v }),
    }),
    { name: 'callmind_sidebar' }
  )
)
