"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{t.contact.callUs}</h3>
              <p className="text-lg text-stone-700 font-medium">(351) 210 993 760</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{t.contact.emailUs}</h3>
              <p className="text-lg text-stone-700 font-medium">info@thelisbonconcierge.com</p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{t.contact.visitUs}</h3>
              <p className="text-lg text-stone-700 font-medium">Lisbon, Portugal</p>
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-stone-50 rounded-2xl p-12">
            <h3 className="text-2xl font-light text-stone-900 mb-4">
              {t.contact.ctaTitle}
            </h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.contact.ctaSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
