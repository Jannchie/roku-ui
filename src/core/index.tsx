import { type ReactNode, createContext, useState } from 'react'

export const RokuContext = createContext({ theme: 'system', setTheme: (_: string) => {} })

export function RokuProvider ({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('system')
  return (
    <RokuContext.Provider value={{ theme, setTheme }}>
      { children }
    </RokuContext.Provider>
  )
}
