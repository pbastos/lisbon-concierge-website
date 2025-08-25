'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

interface Review {
  id: number
  name: string
  text: string
  text_pt: string
  rating: number
  source: string
  verified: boolean
  date: string
  property: string
}

export default function Reviews() {
  const { t, locale } = useLanguage()
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/data/reviews.json')
      .then(response => response.json())
      .then(data => {
        setReviews(data.reviews)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading reviews:', error)
        setIsLoading(false)
      })
  }, [])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
  }

  if (isLoading || reviews.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-pulse text-gray-400">{t.reviews.loading}</div>
          </div>
        </div>
      </section>
    )
  }

  const currentReview = reviews[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-light text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
            {t.reviews.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Rating and Verified Badge */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentReview.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  {currentReview.verified && (
                    <div className="flex items-center space-x-1 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>{t.reviews.verified}</span>
                    </div>
                  )}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  "{locale === 'pt' ? currentReview.text_pt : currentReview.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex justify-between items-end pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">{currentReview.name}</p>
                    <p className="text-sm text-gray-500">
                      {currentReview.source}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    {new Date(currentReview.date).toLocaleDateString(locale, {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label={t.reviews.previous}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToReview(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-blue-600 rounded-full'
                        : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                    }`}
                    aria-label={`${t.reviews.goToReview} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label={t.reviews.next}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}