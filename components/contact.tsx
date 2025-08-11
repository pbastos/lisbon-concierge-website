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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">Call Us</h3>
              <p className="text-lg text-stone-700 font-medium mb-1">(351) 210 993 760</p>
              <p className="text-sm text-stone-500 mb-6">Mon-Sun, 24/7 Support</p>
              <Button 
                variant="outline"
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                onClick={() => window.location.href = 'tel:+351210993760'}
              >
                Call Now
              </Button>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">Email Us</h3>
              <p className="text-lg text-stone-700 font-medium mb-1">info@thelisbonconcierge.com</p>
              <p className="text-sm text-stone-500 mb-6">Quick Response Time</p>
              <Button 
                variant="outline"
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                onClick={() => window.location.href = 'mailto:info@thelisbonconcierge.com'}
              >
                Send Email
              </Button>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">Visit Us</h3>
              <p className="text-lg text-stone-700 font-medium mb-1">Lisbon, Portugal</p>
              <p className="text-sm text-stone-500 mb-6">Serving All Districts</p>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.location.href = 'mailto:info@thelisbonconcierge.com?subject=Property Management Inquiry'}
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-stone-50 rounded-2xl p-12">
            <h3 className="text-2xl font-light text-stone-900 mb-4">
              Ready to transform your property investment?
            </h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Let's discuss how our professional management services can help you achieve maximum returns with minimum effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
