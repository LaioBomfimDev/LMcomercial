import React, { useState, useEffect, useRef } from 'react'

/**
 * Componente LazyLoad otimizado para carregar conteúdo apenas quando visível
 * Melhora performance inicial da página
 */
const LazyLoad = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  fallback = null,
  once = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Se já foi visível e once=true, não precisa observar mais
    if (once && hasBeenVisible) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        setIsVisible(isIntersecting)
        
        if (isIntersecting && once) {
          setHasBeenVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, once, hasBeenVisible])

  const shouldRender = once ? (isVisible || hasBeenVisible) : isVisible

  return (
    <div ref={elementRef} className={className}>
      {shouldRender ? children : fallback}
    </div>
  )
}

export default LazyLoad

/**
 * Hook para lazy loading de dados
 */
export const useLazyLoad = (loadFunction, dependencies = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await loadFunction()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [isVisible, ...dependencies])

  return { data, loading, error, elementRef }
}