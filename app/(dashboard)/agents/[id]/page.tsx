import { redirect } from 'next/navigation'

export default async function AgentIndexDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  redirect(`/dashboard/agents/${id}`)
}
