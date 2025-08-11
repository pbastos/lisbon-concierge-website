"use client"
import Link from "next/link"
import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"

export function Header() {
  const { locale, t, switchLanguage } = useLanguage()
  const pathname = usePathname()

  const navigation = [
    { name: locale === 'pt' ? 'NOSSOS SERVIÇOS' : 'OUR SERVICES', href: "#services" },
    { name: locale === 'pt' ? 'SOBRE' : 'ABOUT', href: "#about" },
    { name: locale === 'pt' ? 'CONTACTO' : 'CONTACT', href: "#contact" },
  ]

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="text-xl font-medium text-stone-900 tracking-wide">THE LISBON CONCIERGE</div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors tracking-wide"
              >
                {item.name}
              </Link>
            ))}

            {/* Language switcher */}
            <div className="flex items-center space-x-2 border-l border-stone-200 pl-6">
              <Globe className="h-4 w-4 text-stone-600" />
              <button
                onClick={() => switchLanguage(locale === 'en' ? 'pt' : 'en')}
                className={`text-sm font-medium tracking-wide text-blue-600 hover:text-blue-700 transition-colors`}
              >
                {locale === 'en' ? 'PT' : 'EN'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
