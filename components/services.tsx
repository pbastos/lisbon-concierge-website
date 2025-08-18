"use client"
import { Users, Sparkles, Key, Shield, Clock, Home } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { MotionWrapper } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

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
        <MotionWrapper type="fadeUp" className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="h-8 w-8 text-stone-700 group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <h3 className="text-xl font-medium text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
