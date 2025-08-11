"use client"

import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-stone-50 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-stone-900 leading-tight max-w-6xl mx-auto">
          {t.hero.title}{" "}
          <span className="relative">
            <span className="relative z-10">{t.hero.highlight}</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-4 text-blue-500"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C50 5 100 8 150 12C200 16 250 10 295 15"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: "320",
                  strokeDashoffset: "320",
                  animation: "drawPath 2s ease-in-out 0.5s forwards"
                }}
              />
            </svg>
          </span>
          .
        </h1>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes drawPath {
            to {
              stroke-dashoffset: 0;
            }
          }
        `
      }} />
    </section>
  )
}
