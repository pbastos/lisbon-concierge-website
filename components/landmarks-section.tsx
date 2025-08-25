"use client"

import { LisbonTram, Ponte25DeAbril, CasteloSaoJorge } from "./lisbon-landmarks"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"

export function LandmarksSection() {
  const { locale } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("landmarks-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="landmarks-section" className="bg-stone-50 py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-stone-900 mb-4">
            {locale === 'pt' ? 'Cuidamos do seu investimento em Lisboa' : 'Taking care of your investment in Lisbon'}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {locale === 'pt' 
              ? 'Da icónica Ponte 25 de Abril ao histórico Castelo de São Jorge, conhecemos cada canto desta bela cidade'
              : 'From the iconic 25 de Abril Bridge to the historic São Jorge Castle, we know every corner of this beautiful city'}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 ${isVisible ? '' : 'opacity-0'}`}>
          <div className="flex flex-col items-center">
            <div className="w-64 h-48 text-blue-500 mb-6 hover:text-blue-600 transition-colors duration-500">
              <LisbonTram />
            </div>
            <h3 className="text-lg font-light text-stone-800">
              {locale === 'pt' ? 'Elétrico 28' : 'Tram 28'}
            </h3>
            <p className="text-sm text-stone-600 text-center mt-2 max-w-xs">
              {locale === 'pt' 
                ? 'Símbolo icónico de Lisboa que percorre os bairros históricos'
                : 'Iconic symbol of Lisbon traveling through historic neighborhoods'}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-64 h-48 text-blue-500 mb-6 hover:text-blue-600 transition-colors duration-500">
              <Ponte25DeAbril />
            </div>
            <h3 className="text-lg font-light text-stone-800">
              {locale === 'pt' ? 'Ponte 25 de Abril' : '25 de Abril Bridge'}
            </h3>
            <p className="text-sm text-stone-600 text-center mt-2 max-w-xs">
              {locale === 'pt' 
                ? 'A majestosa ponte que liga Lisboa à margem sul'
                : 'The majestic bridge connecting Lisbon to the south bank'}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-64 h-48 text-blue-500 mb-6 hover:text-blue-600 transition-colors duration-500">
              <CasteloSaoJorge />
            </div>
            <h3 className="text-lg font-light text-stone-800">
              {locale === 'pt' ? 'Castelo de São Jorge' : 'São Jorge Castle'}
            </h3>
            <p className="text-sm text-stone-600 text-center mt-2 max-w-xs">
              {locale === 'pt' 
                ? 'Fortaleza medieval com vistas deslumbrantes sobre a cidade'
                : 'Medieval fortress with breathtaking views over the city'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}