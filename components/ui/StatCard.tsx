import { Sparkline } from '@/components/ui/Sparkline'

export function StatCard({ label, value, trend }: { label: string; value: string; trend: number[] }) {
  return (
    <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">
      <div className="font-mono-data text-[10px] uppercase text-[#4a6080]">{label}</div>
      <div className="font-heading text-3xl">{value}</div>
      <Sparkline data={trend} />
    </div>
  )
}
