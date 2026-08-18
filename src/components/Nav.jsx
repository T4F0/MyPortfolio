import { useState, useEffect, useRef } from 'react'
import AppIcon from './AppIcon.jsx'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

const sectionIds = ['#hero', '#services', '#work', '#security', '#about', '#leadership', '#articles', '#contact']

function getActiveSection() {
  if (typeof window === 'undefined') return ''
  const scrollY = window.scrollY + 120
  let active = ''
  for (const id of sectionIds) {
    const el = document.querySelector(id)
    if (el && el.offsetTop <= scrollY) {
      active = id
    }
  }
  return active
}

export default function Nav() {
  const { lang, toggleLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const t = uiStrings[lang]

  useEffect(() => {
    setActiveSection(getActiveSection())
    const onScroll = () => setActiveSection(getActiveSection())
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const desktopLinks = lang === 'fr'
    ? [
        { label: t.nav.home, href: '#hero' },
        { label: t.nav.work, href: '#work' },
        { label: t.nav.security, href: '#security' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.leadership, href: '#leadership' },
        { label: t.nav.articles, href: '#articles' },
      ]
    : [
        { label: 'Home', href: '#hero' },
        { label: 'Work', href: '#work' },
        { label: 'Security', href: '#security' },
        { label: 'About', href: '#about' },
        { label: 'Leadership', href: '#leadership' },
        { label: 'Articles', href: '#articles' },
      ]

  const mobileLinks = lang === 'fr'
    ? [
        { label: t.nav.home, href: '#hero' },
        { label: t.nav.services, href: '#services' },
        { label: t.nav.work, href: '#work' },
        { label: t.nav.security, href: '#security' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.leadership, href: '#leadership' },
        { label: t.nav.articles, href: '#articles' },
        { label: t.nav.contact, href: '#contact' },
      ]
    : [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#work' },
        { label: 'Security', href: '#security' },
        { label: 'About', href: '#about' },
        { label: 'Leadership', href: '#leadership' },
        { label: 'Articles', href: '#articles' },
        { label: 'Contact', href: '#contact' },
      ]

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button
          className="lang-switcher lang-switcher--desktop"
          onClick={toggleLanguage}
          aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
          title={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
        >
          <span className={`lang-option ${lang === 'en' ? 'lang-active' : ''}`}>EN</span>
          <span className="lang-divider">|</span>
          <span className={`lang-option ${lang === 'fr' ? 'lang-active' : ''}`}>FR</span>
        </button>
        <div className="nav-links">
          {desktopLinks.map((link) => (
            <a
              key={link.label}
              className={`nav-link${activeSection === link.href ? ' nav-link--active' : ''}`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-pill" href="#contact">
          {t.nav.contact}
        </a>
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.nav.toggleMenu}
        >
          <AppIcon name="list" size={20} />
        </button>
        {open && (
          <div className="nav-mobile-wrap">
            <div className="mobile-menu">
              <div className="mobile-menu-links">
                {mobileLinks.map((link) => (
                  <a
                    key={link.label}
                    className={`mobile-menu-link${activeSection === link.href ? ' mobile-menu-link--active' : ''}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mobile-lang-switcher">
                <button
                  className="lang-switcher lang-switcher--mobile"
                  onClick={() => {
                    toggleLanguage()
                    setOpen(false)
                  }}
                  aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
                >
                  <span className={`lang-option ${lang === 'en' ? 'lang-active' : ''}`}>EN</span>
                  <span className="lang-divider">|</span>
                  <span className={`lang-option ${lang === 'fr' ? 'lang-active' : ''}`}>FR</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
