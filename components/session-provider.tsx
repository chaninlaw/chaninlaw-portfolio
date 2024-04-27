'use client'
import * as React from 'react'
import { Session, User } from 'lucia'

interface SessionProviderProps {
  children: React.ReactNode
  value: {
    user: User | null
    session: Session | null
  }
}

interface SessionContextValue {
  session: Session | null
  user: User | null
}

const SessionContext = React.createContext<SessionContextValue | null>(null)

export function SessionProvider({ children, value }: SessionProviderProps) {
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession() {
  const context = React.useContext(SessionContext)

  if (!context) {
    throw new Error('useSession must be used within <SessionProvider>')
  }
  return context
}
