/**
 * Utilitários de performance para otimização de eventos e funções
 */

/**
 * Debounce - Executa função apenas após delay sem novas chamadas
 * Ideal para: input search, resize events, API calls
 */
export const debounce = (func, delay) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

/**
 * Throttle - Limita execução da função a uma vez por intervalo
 * Ideal para: scroll events, mouse move, animation frames
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * RequestAnimationFrame throttle - Otimizado para animações
 * Ideal para: scroll animations, parallax effects
 */
export const rafThrottle = (func) => {
  let ticking = false
  return function (...args) {
    if (!ticking) {
      requestAnimationFrame(() => {
        func.apply(this, args)
        ticking = false
      })
      ticking = true
    }
  }
}

/**
 * Memoização simples para funções puras
 * Ideal para: cálculos pesados, transformações de dados
 */
export const memoize = (func, getKey = (...args) => JSON.stringify(args)) => {
  const cache = new Map()
  return function (...args) {
    const key = getKey(...args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.apply(this, args)
    cache.set(key, result)
    return result
  }
}

/**
 * Lazy loading de módulos/componentes
 * Ideal para: code splitting, componentes pesados
 */
export const lazyImport = (importFunc, fallback = null) => {
  const React = require('react')
  return React.lazy(() => {
    return importFunc().catch(() => {
      return { 
        default: () => fallback || React.createElement('div', null, 'Erro ao carregar componente')
      }
    })
  })
}

/**
 * Otimização de imagens responsivas
 * Gera srcset baseado em tamanhos fornecidos
 */
export const generateSrcSet = (basePath, sizes, format = 'webp') => {
  return sizes
    .map(size => {
      const path = basePath.replace(/\.(\w+)$/, `-${size}w.${format}`)
      return `${path} ${size}w`
    })
    .join(', ')
}

/**
 * Preload de recursos críticos
 * Ideal para: fontes, imagens hero, CSS crítico
 */
export const preloadResource = (href, as, type = null, crossorigin = null) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) link.type = type
  if (crossorigin) link.crossOrigin = crossorigin
  document.head.appendChild(link)
}

/**
 * Detecção de suporte a WebP
 * Cache o resultado para evitar múltiplas verificações
 */
let webpSupport = null
export const supportsWebP = () => {
  if (webpSupport !== null) return Promise.resolve(webpSupport)
  
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      webpSupport = webP.height === 2
      resolve(webpSupport)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

/**
 * Intersection Observer helper
 * Simplifica uso do Intersection Observer
 */
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}

/**
 * Performance monitoring
 * Mede tempo de execução de funções
 */
export const measurePerformance = (name, func) => {
  return function (...args) {
    const start = performance.now()
    const result = func.apply(this, args)
    const end = performance.now()
    console.log(`${name} executou em ${end - start} millisegundos`)
    return result
  }
}

/**
 * Cleanup de event listeners
 * Facilita remoção de múltiplos listeners
 */
export class EventListenerManager {
  constructor() {
    this.listeners = []
  }

  add(element, event, handler, options = {}) {
    element.addEventListener(event, handler, options)
    this.listeners.push({ element, event, handler, options })
  }

  removeAll() {
    this.listeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler)
    })
    this.listeners = []
  }
}