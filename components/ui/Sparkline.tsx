'use client'

import { Line, LineChart, ResponsiveContainer } from 'recharts'

export function Sparkline({ data }: { data: number[] }) {
  const points = data.map((v, i) => ({ i, v }))
  return (
    <div className="h-12">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <Line type="monotone" dataKey="v" stroke="#c9a84c" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
