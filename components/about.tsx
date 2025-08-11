"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-stone-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-stone-900 mb-8 leading-tight">
              About The Lisbon Concierge
            </h2>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                We are Lisbon's dedicated short-term rental management service, specializing in taking care of your
                property and your guests so you don't have to worry about the day-to-day operations.
              </p>

              <p>
                Whether you live far from your property or simply don't have the time to manage guest arrivals,
                cleaning, and property maintenance, we provide a comprehensive solution that ensures your guests have an
                exceptional experience while protecting your investment.
              </p>

              <p>
                Our local expertise and personal approach mean your property is in trusted hands, and your guests
                receive the warm Portuguese hospitality they expect when visiting our beautiful city.
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
                    <div className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-6">Our Promise</div>
                    
                    <div className="text-2xl lg:text-3xl font-light text-stone-800 leading-tight">
                      Genuine
                    </div>
                    <div className="text-2xl lg:text-3xl font-light text-stone-800 leading-tight">
                      Portuguese
                    </div>
                    <div className="text-2xl lg:text-3xl font-light text-blue-600 leading-tight">
                      hospitality
                    </div>
                    <div className="text-2xl lg:text-3xl font-light text-stone-800 leading-tight">
                      delivered by locals
                    </div>
                    <div className="text-2xl lg:text-3xl font-light text-stone-800 leading-tight">
                      who call Lisbon
                    </div>
                    <div className="text-2xl lg:text-3xl font-light text-blue-600 leading-tight">
                      home
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
