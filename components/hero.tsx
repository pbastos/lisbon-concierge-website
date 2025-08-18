"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/lisbon-tram.jpg')`,
          animation: 'kenBurns 20s ease-in-out infinite alternate',
          transform: 'scale(1.1)',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-tight max-w-6xl mx-auto drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
                strokeWidth="8"
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
        </motion.h1>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes drawPath {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes kenBurns {
            0% {
              transform: scale(1.1) translateY(0);
            }
            100% {
              transform: scale(1.2) translateY(-20px);
            }
          }
        `
      }} />
    </section>
  )
}
