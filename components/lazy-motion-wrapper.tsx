"use client"

import { useRef, useEffect, useState } from "react"

interface LazyMotionWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
  type?: "fadeUp" | "fadeIn" | "slideIn" | "scale"
}

export function LazyMotionWrapper({ 
  children, 
  className = "", 
  delay = 0,
  type = "fadeUp"
}: LazyMotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [MotionComponent, setMotionComponent] = useState<any>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Lazy load framer-motion only when needed
          import("framer-motion").then((module) => {
            setMotionComponent(() => module.motion.div)
          })
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  }

  if (!isVisible || !MotionComponent) {
    return (
      <div ref={ref} className={className} style={{ opacity: 0 }}>
        {children}
      </div>
    )
  }

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[type]}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </MotionComponent>
  )
}