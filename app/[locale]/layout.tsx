import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { translations } from "@/lib/translations"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = translations[params.locale as keyof typeof translations] || translations.en
  
  return {
    title: params.locale === 'pt' 
      ? "The Lisbon Concierge - Gestão Premium de Aluguer de Curta Duração"
      : "The Lisbon Concierge - Premium Short-Term Rental Management",
    description: params.locale === 'pt'
      ? "Serviços profissionais de gestão de aluguer de curta duração em Lisboa. Cuidamos de tudo, desde a comunicação com hóspedes até à manutenção da propriedade."
      : "Professional short-term rental management services in Lisbon. We handle everything from guest communication to property maintenance.",
    alternates: {
      languages: {
        'en': '/en',
        'pt': '/pt',
      }
    }
  }
}

export default function LocaleLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <LanguageProvider locale={params.locale}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}