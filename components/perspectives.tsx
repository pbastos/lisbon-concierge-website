"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Perspectives() {
  return (
    <section className="bg-stone-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services Card */}
          <div className="bg-orange-500 rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="p-8 h-96 flex flex-col justify-between relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-sm font-medium tracking-wide">SERVICES</span>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 font-medium tracking-wide">
                  READ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-48 h-48">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-white/30">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M60 100 L100 60 L140 100 L100 140 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="100" cy="100" r="8" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Card */}
          <div className="bg-stone-900 rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="p-8 h-96 flex flex-col justify-between relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-sm font-medium tracking-wide">PROPERTIES</span>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 font-medium tracking-wide">
                  READ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-48 h-48">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-white/30">
                    <rect x="40" y="60" width="120" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
                    <rect x="60" y="80" width="20" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
                    <rect x="120" y="80" width="20" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
                    <rect x="85" y="120" width="30" height="20" stroke="currentColor" strokeWidth="1" fill="none" />
                    <path d="M40 60 L100 30 L160 60" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
