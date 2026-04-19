'use client'

import { useEffect, useState } from 'react'

export function useAgents() {
  const [data, setData] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch('/api/agents')
      .then((r) => r.json())
      .then((json) => setData(json))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
