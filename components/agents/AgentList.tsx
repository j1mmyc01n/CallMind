import Link from 'next/link'

export function AgentList() {
  return (
    <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">
      <h2 className="font-heading text-xl mb-3">Agents</h2>
      <Link href="/dashboard/agents/1" className="text-[#c9a84c]">Open sample agent</Link>
    </div>
  )
}
