import { useState, useEffect } from 'react'

/**
 * Hook customizado para media queries otimizado
 * Reduz re-renders desnecessários e melhora performance
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)
    
    const handleChange = (event) => {
      setMatches(event.matches)
    }

    // Usar addEventListener moderno se disponível
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      // Fallback para browsers mais antigos
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [query])

  return matches
}

/**
 * Hook para breakpoints responsivos comuns
 */
export const useBreakpoints = () => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isLargeDesktop = useMediaQuery('(min-width: 1280px)')

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    // Helpers
    isMobileOrTablet: isMobile || isTablet,
    isTabletOrDesktop: isTablet || isDesktop
  }
}

/**
 * Hook para detectar preferências do usuário
 */
export const useUserPreferences = () => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersHighContrast = useMediaQuery('(prefers-contrast: high)')

  return {
    prefersReducedMotion,
    prefersDarkMode,
    prefersHighContrast
  }
}