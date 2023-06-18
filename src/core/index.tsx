import { type ReactNode, createContext, useState } from 'react'
import '../index.css'
import { Notifications } from '..'
export const RokuContext = createContext({ theme: 'system', setTheme: (_: string) => {} })

export function RokuProvider ({
  children, useNotifications = {
    name: 'default',
    className: 'mt-2',
    stack: true,
  },
}: {
  children: ReactNode
  useNotifications?: {
    name: string
    className: string
    stack: boolean
  } | false }) {
  const [theme, setTheme] = useState('light')
  return (
    <RokuContext.Provider value={{ theme, setTheme }}>
      { useNotifications &&
        <Notifications
          {...useNotifications}
        /> }
      { children }
    </RokuContext.Provider>
  )
}
