import { useCallback, useState } from 'react'

export function useToggle<T> (data: T[]) {
  const [index, setIndex] = useState(0)
  const toggle = useCallback(() => {
    setIndex((index + 1) % data.length)
  }, [index, data])
  return [data[index], toggle]
}
