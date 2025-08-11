"use client"

import { Star } from "lucide-react"

export function Reviews() {
  const reviews = [
    { platform: "Excellent", rating: 5, count: "4.8" },
    { platform: "Excellent", rating: 5, count: "4.9" },
    { platform: "Excellent", rating: 5, count: "4.7" },
    { platform: "Excellent", rating: 5, count: "4.8" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12">
          {reviews.map((review, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <div className="text-sm font-semibold text-gray-900">{review.platform}</div>
              <div className="text-xs text-gray-600">{review.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
