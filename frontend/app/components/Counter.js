'use client'

import { useEffect, useState, useRef } from 'react'

export default function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const endNum = typeof end === 'string' ? parseInt(end) : end
    const increment = endNum / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= endNum) {
        setCount(endNum)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  )
}

