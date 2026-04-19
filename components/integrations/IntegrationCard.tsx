import { EmployeeCalendarRouter } from '@/components/integrations/EmployeeCalendarRouter'
import { ConfigModal } from '@/components/integrations/ConfigModal'

export function IntegrationCard() {
  return (
    <div className="space-y-4">
      <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">CRM / Calendar / Notifications</div>
      <EmployeeCalendarRouter />
      <ConfigModal />
    </div>
  )
}
