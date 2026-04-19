'use client'

import { useEffect, useState } from 'react'

export function useCalls() {
  const [data, setData] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/calls').then((r) => r.json()).then((json) => setData(json)).finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
