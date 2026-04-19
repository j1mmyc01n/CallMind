import { redirect } from 'next/navigation'

export default function AgentIndexDetailPage({ params }: { params: { id: string } }) {
  redirect(`/dashboard/agents/${params.id}`)
}
