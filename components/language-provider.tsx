"use client"

import React, { createContext, useContext } from "react"
import { usePathname, useRouter } from "next/navigation"
import { translations } from "@/lib/translations"

interface LanguageContextType {
  locale: string
  t: any
  switchLanguage: (newLocale: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ 
  children, 
  locale = 'en' 
}: { 
  children: React.ReactNode
  locale?: string 
}) {
  const router = useRouter()
  const pathname = usePathname()
  
  const t = translations[locale as keyof typeof translations] || translations.en

  const switchLanguage = (newLocale: string) => {
    // Get the current path without the locale
    const segments = pathname.split('/')
    segments[1] = newLocale // Replace the locale segment
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <LanguageContext.Provider value={{ locale, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
