"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="bg-stone-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-stone-900 mb-8 leading-tight">
              {t.about.title}
            </h2>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                {t.about.description1}
              </p>

              <p>
                {t.about.description2}
              </p>

              <p>
                {t.about.description3}
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center min-h-[400px]">
            <div className="max-w-lg">
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-blue-200"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-blue-200"></div>
                
                <div className="px-12 py-16">
                  <div className="space-y-2 text-center">
                    <div className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-6">{t.about.promise}</div>
                    
                    <div className="text-2xl lg:text-3xl font-light text-stone-800 leading-tight">
                      {t.about.quote.line1}
                    </div>
                    <div className={`text-2xl lg:text-3xl font-light leading-tight ${t.about.quote.line2 === 'hospitalidade' ? 'text-blue-600' : 'text-stone-800'}`}>
                      {t.about.quote.line2}
                    </div>
                    <div className={`text-2xl lg:text-3xl font-light leading-tight ${t.about.quote.line3 === 'hospitality' ? 'text-blue-600' : 'text-stone-800'}`}>
                      {t.about.quote.line3}
                    </div>
                    <div className="text-2xl lg:text-3xl font-light text-stone-800 leading-tight">
                      {t.about.quote.line4}
                    </div>
                    <div className="text-2xl lg:text-3xl font-light text-stone-800 leading-tight">
                      {t.about.quote.line5}
                    </div>
                    <div className={`text-2xl lg:text-3xl font-light leading-tight ${t.about.quote.line6 === 'home' || t.about.quote.line6 === 'de casa' ? 'text-blue-600' : 'text-stone-800'}`}>
                      {t.about.quote.line6}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
