// Lazy loading optimizado para componentes pesados
import { lazy } from 'react'

// Preload function para cargar componentes antes de que se necesiten
export const preloadComponent = (importFunc) => {
  const Component = lazy(importFunc)
  Component.preload = importFunc
  return Component
}

// Función para lazy load con retry en caso de error
export const lazyWithRetry = (importFunc, retries = 3, interval = 1000) => {
  return lazy(() => {
    return new Promise((resolve, reject) => {
      importFunc()
        .then(resolve)
        .catch((error) => {
          if (retries === 1) {
            reject(error)
            return
          }
          
          setTimeout(() => {
            lazyWithRetry(importFunc, retries - 1, interval)
              .then(resolve)
              .catch(reject)
          }, interval)
        })
    })
  })
}

