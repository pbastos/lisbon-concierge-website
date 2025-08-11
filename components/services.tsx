"use client"
import { Users, Sparkles, Key, Shield, Clock, Home } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Meet and Greet",
      description: "Personal welcome service for your guests with key handover and property orientation",
    },
    {
      icon: Sparkles,
      title: "Cleaning and Preparation",
      description: "Professional cleaning service between stays to ensure your property is always guest-ready",
    },
    {
      icon: Key,
      title: "Key Management",
      description: "Secure key handling and coordination for seamless guest check-ins and check-outs",
    },
    {
      icon: Shield,
      title: "Property Care",
      description: "Regular property maintenance and monitoring to keep your investment in perfect condition",
    },
    {
      icon: Clock,
      title: "Guest Support",
      description: "Ongoing assistance and support for your guests throughout their stay in Lisbon",
    },
    {
      icon: Home,
      title: "Property Management",
      description: "Complete property oversight including maintenance coordination and guest communication",
    },
  ]

  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            Your premium solution for Lisbon
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We help home owners that want to rent their beautiful houses in Lisbon but don't have the possibility to
            receive their guests. Renting a house is hard work - but don't worry, we can handle this for you.
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
