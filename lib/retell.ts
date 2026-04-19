export async function createRetellAgent(payload: Record<string, unknown>) {
  return { id: 'retell-demo-agent', ...payload }
}

export function getRetellAgentPhone() {
  return process.env.RETELL_AGENT_PHONE ?? ''
}
