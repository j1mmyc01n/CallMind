'use client'

import { useEffect, useState } from 'react'

export function useNumbers() {
  const [data, setData] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/numbers').then((r) => r.json()).then((json) => setData(json)).finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
