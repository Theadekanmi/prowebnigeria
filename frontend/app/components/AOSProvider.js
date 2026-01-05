'use client'

import { useEffect } from 'react'

export default function AOSProvider({ children }) {
  useEffect(() => {
    // Dynamically import AOS to avoid render-blocking
    import('aos').then((AOS) => {
      import('aos/dist/aos.css')
      AOS.default.init({
        duration: 600,
        easing: 'ease-out',
        once: true,
        offset: 50,
      })
    })
  }, [])

  return children
}
