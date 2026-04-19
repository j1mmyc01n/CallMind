import { VoiceSelector } from '@/components/agents/VoiceSelector'
import { BookingRules } from '@/components/agents/BookingRules'
import { TestCallPanel } from '@/components/agents/TestCallPanel'

export function AgentEditor() {
  return (
    <div className="grid gap-4">
      <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">
        <h2 className="font-heading text-xl mb-2">Agent Editor</h2>
        <textarea className="w-full rounded border border-[#1c2535] bg-[#0d1017] p-2" rows={4} placeholder="Prompt" />
        <textarea className="mt-2 w-full rounded border border-[#1c2535] bg-[#0d1017] p-2" rows={3} placeholder="FAQ" />
      </div>
      <VoiceSelector />
      <BookingRules />
      <TestCallPanel />
    </div>
  )
}
