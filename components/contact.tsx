"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            Ready to get started?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Contact us today to learn how we can help you maximize your property's potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              <div className="flex flex-col items-center text-center pt-8 md:pt-0">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">Call Us</h3>
                <p className="text-stone-600 mb-4">(351) 210 993 760</p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-blue-600 hover:text-blue-700"
                  onClick={() => window.location.href = 'tel:+351210993760'}
                >
                  Call Now →
                </Button>
              </div>

              <div className="flex flex-col items-center text-center pt-8 md:pt-0">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">Email Us</h3>
                <p className="text-stone-600 mb-4">info@thelisbonconcierge.com</p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-blue-600 hover:text-blue-700"
                  onClick={() => window.location.href = 'mailto:info@thelisbonconcierge.com'}
                >
                  Send Email →
                </Button>
              </div>

              <div className="flex flex-col items-center text-center pt-8 md:pt-0">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">Visit Us</h3>
                <p className="text-stone-600 mb-4">Lisbon, Portugal</p>
                <p className="text-sm text-stone-500">Available 24/7</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200 text-center">
              <p className="text-stone-600 mb-6">
                Let's discuss how our professional management services can transform your property investment.
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide px-8"
                onClick={() => window.location.href = 'mailto:info@thelisbonconcierge.com?subject=Property Management Inquiry'}
              >
                Start Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
