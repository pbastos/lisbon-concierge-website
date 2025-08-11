"use client"
import { Users, Sparkles, Key, Shield, Clock, Home } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Services() {
  const { t } = useLanguage()
  
  const services = [
    {
      icon: Users,
      title: t.services.meetGreet.title,
      description: t.services.meetGreet.description,
    },
    {
      icon: Sparkles,
      title: t.services.cleaning.title,
      description: t.services.cleaning.description,
    },
    {
      icon: Key,
      title: t.services.keyManagement.title,
      description: t.services.keyManagement.description,
    },
    {
      icon: Shield,
      title: t.services.propertyCare.title,
      description: t.services.propertyCare.description,
    },
    {
      icon: Clock,
      title: t.services.guestSupport.title,
      description: t.services.guestSupport.description,
    },
    {
      icon: Home,
      title: t.services.propertyManagement.title,
      description: t.services.propertyManagement.description,
    },
  ]

  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-stone-200 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-stone-700" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
