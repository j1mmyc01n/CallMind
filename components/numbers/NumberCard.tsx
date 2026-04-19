import { Badge } from '@/components/ui/Badge'

export function NumberCard() {
  return (
    <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl">+1 (555) 010-1000</h2>
        <Badge>active</Badge>
      </div>
      <p className="font-mono-data text-xs text-[#4a6080] mt-2">Main Office</p>
    </div>
  )
}
