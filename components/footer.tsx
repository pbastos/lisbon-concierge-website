"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t, locale } = useLanguage()
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-lg font-medium text-stone-900 tracking-wide mb-4">THE LISBON CONCIERGE</div>
            <p className="text-stone-600 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-stone-900 mb-4 tracking-wide">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">
                  {locale === 'pt' ? 'Serviços' : 'Services'}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">
                  {locale === 'pt' ? 'Sobre' : 'About'}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-stone-600 hover:text-stone-900 transition-colors text-sm">
                  {locale === 'pt' ? 'Contacto' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium text-stone-900 mb-4 tracking-wide">{t.footer.contact}</h3>
            <div className="space-y-2 text-sm text-stone-600">
              <p>(351) 210 993 760</p>
              <p>info@thelisbonconcierge.com</p>
              <p>Lisbon, Portugal</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-12 pt-8">
          <p className="text-center text-sm text-stone-500">&copy; 2019 - 2025 The Lisbon Concierge. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
