import { CallDetail } from '@/components/calls/CallDetail'

export function CallTable() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">
        <h2 className="font-heading text-xl">Call Logs</h2>
        <p className="font-mono-data text-xs text-[#4a6080]">Status filter: all / booked / answered / missed</p>
      </div>
      <CallDetail />
    </div>
  )
}
