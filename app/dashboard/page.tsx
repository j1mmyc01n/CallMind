import { StatCard } from '@/components/ui/StatCard'

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Calls" value="128" trend={[2, 4, 3, 5, 8, 7]} />
      <StatCard label="Bookings" value="41" trend={[1, 2, 3, 3, 4, 6]} />
      <StatCard label="Minutes" value="893" trend={[4, 4, 5, 6, 6, 8]} />
      <StatCard label="Revenue" value="$4,120" trend={[3, 5, 4, 7, 9, 10]} />
    </div>
  )
}
