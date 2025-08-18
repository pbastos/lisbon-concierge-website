"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
  type?: "fadeUp" | "fadeIn" | "slideIn" | "scale"
}

export function MotionWrapper({ 
  children, 
  className = "", 
  delay = 0,
  type = "fadeUp"
}: MotionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[type]}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}