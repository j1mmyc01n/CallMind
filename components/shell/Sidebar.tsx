'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { LivePill } from '@/components/shell/LivePill'
import { useSidebarStore } from '@/store/sidebar'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/dashboard', icon: '◈', label: 'Overview' },
  { href: '/dashboard/numbers', icon: '📞', label: 'Numbers' },
  { href: '/dashboard/agents', icon: '🤖', label: 'Agents' },
  { href: '/dashboard/calls', icon: '📋', label: 'Call Logs' },
  { href: '/dashboard/integrations', icon: '🔗', label: 'Integrations' },
]

const NAV_BOTTOM = [
  { href: '/dashboard/billing', icon: '💳', label: 'Billing' },
  { href: '/dashboard/settings', icon: '⚙', label: 'Settings' },
]

type NavItemProps = { href: string; icon: string; label: string; collapsed: boolean }

function NavItem({ href, icon, label, collapsed }: NavItemProps) {
  const pathname = usePathname()
  const active = pathname?.startsWith(href)

  return (
    <Link
      href={href}
      title={collapsed ? label : undefined}
      className={cn(
        'group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-bold',
        'transition-all duration-150 whitespace-nowrap overflow-hidden',
        active
          ? 'bg-[#c9a84c18] text-[#c9a84c] shadow-[inset_0_0_0_1px_#c9a84c44]'
          : 'text-[#4a6080] hover:bg-[#161d2a] hover:text-[#e2e8f0]'
      )}
    >
      <span className="text-base flex-shrink-0">{icon}</span>
      <span className="transition-[opacity,width] duration-[240ms]" style={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}>
        {label}
      </span>
    </Link>
  )
}

function SidebarContent({ collapsed }: { collapsed: boolean }) {
  const { toggle } = useSidebarStore()

  return (
    <aside
      style={{ width: collapsed ? 64 : 228 }}
      className="relative flex h-full flex-shrink-0 flex-col overflow-hidden border-r border-[#1c2535] bg-[#0d1017] transition-[width] duration-[240ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
    >
      <div className="h-16 px-3 flex items-center border-b border-[#1c2535]">
        <div className="font-heading text-lg">{collapsed ? 'CM' : 'CallMind'}</div>
      </div>
      <LivePill collapsed={collapsed} />
      <nav className="flex-1 px-2 py-2 flex flex-col gap-0.5">
        {NAV.map((item) => (
          <NavItem key={item.href} {...item} collapsed={collapsed} />
        ))}
      </nav>
      <div className="px-2 pb-2 border-t border-[#1c2535] pt-2 flex flex-col gap-0.5">
        {NAV_BOTTOM.map((item) => (
          <NavItem key={item.href} {...item} collapsed={collapsed} />
        ))}
      </div>
      <div className="m-2 rounded-lg border border-[#1c2535] bg-[#111520] p-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#2a3a52]" />
          {!collapsed && (
            <div>
              <div className="text-xs text-[#e2e8f0]">Owner</div>
              <div className="font-mono-data text-[10px] text-[#4a6080]">starter</div>
            </div>
          )}
        </div>
        {!collapsed && <div className="mt-2 h-1.5 rounded-full bg-[#1c2535]"><div className="h-1.5 w-1/2 rounded-full bg-[#c9a84c]" /></div>}
      </div>
      <button
        onClick={toggle}
        className="absolute bottom-20 -right-3 z-10 h-6 w-6 rounded-full border border-[#2a3a52] bg-[#1c2535] flex items-center justify-center hover:bg-[#2a3a52] transition-colors"
      >
        {collapsed ? <ChevronRight size={12} className="text-[#4a6080]" /> : <ChevronLeft size={12} className="text-[#4a6080]" />}
      </button>
    </aside>
  )
}

export function Sidebar() {
  const { collapsed, mobileOpen, setMobileOpen } = useSidebarStore()

  return (
    <>
      <div className="hidden md:block">
        <SidebarContent collapsed={collapsed} />
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} aria-label="Close sidebar" />
          <div className="relative z-10 h-full">
            <button className="absolute right-2 top-2 z-20" onClick={() => setMobileOpen(false)} aria-label="Close sidebar">
              <X size={18} />
            </button>
            <SidebarContent collapsed={false} />
          </div>
        </div>
      )}
    </>
  )
}
