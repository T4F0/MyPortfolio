import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

function detectLanguage() {
  if (typeof window === 'undefined') return 'en'
  const path = window.location.pathname
  return path.startsWith('/fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    const title =
      lang === 'fr'
        ? 'Selloum Abdelmoncef — Développeur Full-Stack & Cybersécurité'
        : 'Selloum Abdelmoncef — Full-Stack Developer & Cybersecurity'
    document.title = title
  }, [lang])

  useEffect(() => {
    const handlePopState = () => {
      setLang(detectLanguage())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const toggleLanguage = () => {
    const path = window.location.pathname
    const hash = window.location.hash
    const search = window.location.search

    let newPath
    if (lang === 'fr') {
      newPath = path.replace(/^\/fr(\/|$)/, '/en$1')
      if (newPath === path) newPath = '/en'
    } else {
      if (path === '/' || path === '') {
        newPath = '/fr'
      } else {
        newPath = path.replace(/^\/en(\/|$)/, '/fr$1')
        if (newPath === path) newPath = '/fr' + path
      }
    }

    window.history.pushState({}, '', newPath + search + hash)
    setLang(lang === 'fr' ? 'en' : 'fr')
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
