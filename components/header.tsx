"use client"
import Link from "next/link"
import { Search } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const { language, setLanguage } = useLanguage()

  const navigation = [
    { name: "OUR SERVICES", href: "#services" },
    { name: "OUR PROPERTIES", href: "#properties" },
    { name: "OUR TEAM", href: "#about" },
    { name: "STORIES", href: "#stories" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  language === "en" ? "text-stone-900" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                EN
              </button>
              <span className="text-stone-400">|</span>
              <button
                onClick={() => setLanguage("pt")}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  language === "pt" ? "text-stone-900" : "text-stone-600 hover:text-stone-900"
                }`}
              >
                PT
              </button>
            </div>

            <button className="text-stone-600 hover:text-stone-900 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
