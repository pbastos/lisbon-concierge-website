"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight, Wifi, Car, Coffee } from "lucide-react"
import Image from "next/image"

export function Properties() {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Chiado",
      location: "Chiado, Lisbon",
      rating: 4.9,
      reviews: 127,
      price: "€85",
      image: "/placeholder.svg?height=400&width=600",
      type: "Apartment",
      amenities: ["Wifi", "Parking", "Coffee"],
      revenue: "+45%",
    },
    {
      id: 2,
      title: "Historic Townhouse in Alfama",
      location: "Alfama, Lisbon",
      rating: 4.8,
      reviews: 89,
      price: "€120",
      image: "/placeholder.svg?height=400&width=600",
      type: "Townhouse",
      amenities: ["Wifi", "Coffee"],
      revenue: "+38%",
    },
    {
      id: 3,
      title: "Luxury Penthouse in Príncipe Real",
      location: "Príncipe Real, Lisbon",
      rating: 5.0,
      reviews: 45,
      price: "€200",
      image: "/placeholder.svg?height=400&width=600",
      type: "Penthouse",
      amenities: ["Wifi", "Parking", "Coffee"],
      revenue: "+52%",
    },
  ]

  const amenityIcons = {
    Wifi: Wifi,
    Parking: Car,
    Coffee: Coffee,
  }

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Properties That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Perform
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how we've transformed properties across Lisbon into high-performing rental investments
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-white/90 text-slate-900 hover:bg-white">{property.type}</Badge>
                  <Badge className="bg-green-500 text-white">{property.revenue}</Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-slate-900">{property.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>

                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Amenities */}
                <div className="flex items-center space-x-3 mb-4">
                  {property.amenities.map((amenity, idx) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
                    return (
                      <div key={idx} className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-4 w-4 text-slate-600" />
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {property.price}
                      <span className="text-sm font-normal text-slate-500">/night</span>
                    </div>
                    <div className="text-sm text-slate-500">({property.reviews} reviews)</div>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-lg bg-transparent">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Want similar results?</h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let us analyze your property's potential and show you how much more you could be earning
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Property Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
