"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { MotionWrapper } from "@/components/motion-wrapper"

export function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <MotionWrapper type="fadeUp" className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </MotionWrapper>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <motion.div 
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Phone className="h-7 w-7 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{t.contact.callUs}</h3>
              <p className="text-lg text-stone-700 font-medium">(351) 210 993 760</p>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Mail className="h-7 w-7 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{t.contact.emailUs}</h3>
              <p className="text-lg text-stone-700 font-medium">info@thelisbonconcierge.com</p>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <MapPin className="h-7 w-7 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{t.contact.visitUs}</h3>
              <p className="text-lg text-stone-700 font-medium">Lisbon, Portugal</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
