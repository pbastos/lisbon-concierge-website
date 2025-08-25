"use client"
import { Users, Sparkles, Key, Shield, Clock, Home, CheckCircle, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { LazyMotionWrapper } from "@/components/lazy-motion-wrapper"
import { motion } from "framer-motion"

export function Services() {
  const { t } = useLanguage()
  
  const serviceComponents = [
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
      icon: TrendingUp,
      title: t.services.priceRevenue.title,
      description: t.services.priceRevenue.description,
    },
  ]

  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <LazyMotionWrapper type="fadeUp" className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </LazyMotionWrapper>

        {/* Main Property Management Service */}
        <LazyMotionWrapper type="fadeUp" delay={0.2} className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-stone-50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-stone-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-light text-stone-900 mb-6">
                  {t.services.propertyManagement.title}
                </h3>
                
                <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                  {t.services.propertyManagement.description}
                </p>

                <div className="text-sm text-blue-600 font-medium uppercase tracking-wider">
                  {t.services.includes}
                </div>
              </div>
            </div>
          </div>
        </LazyMotionWrapper>

        {/* Service Components - What's Included */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceComponents.map((component, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-stone-100 rounded-2xl p-6 group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-stone-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-stone-900 mb-2">
                      {component.title}
                    </h4>
                    
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
