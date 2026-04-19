'use client'

import { Menu } from 'lucide-react'
import { useSidebarStore } from '@/store/sidebar'

export function Topbar() {
  const setMobileOpen = useSidebarStore((s) => s.setMobileOpen)

  return (
    <header className="h-16 border-b border-[#1c2535] bg-[#0d1017] px-4 flex items-center justify-between">
      <button className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open sidebar">
        <Menu className="text-[#e2e8f0]" size={18} />
      </button>
      <h1 className="font-heading text-xl">CallMind</h1>
      <div className="font-mono-data text-xs text-[#4a6080]">Dashboard</div>
    </header>
  )
}
