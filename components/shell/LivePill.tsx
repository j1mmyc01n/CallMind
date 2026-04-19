interface LivePillProps {
  collapsed: boolean
  count?: number
}

export function LivePill({ collapsed, count = 3 }: LivePillProps) {
  return (
    <div className="px-2 py-2">
      <div className="flex items-center gap-2 rounded-lg border border-[#1c2535] bg-[#111520] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
        {!collapsed && <span className="font-mono-data text-[11px] text-[#e2e8f0]">{count} live agents</span>}
      </div>
    </div>
  )
}
