import { useState } from 'react'
import AppIcon from './AppIcon.jsx'

const desktopLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Security', href: '#security' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Articles', href: '#articles' },
]

const mobileLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Security', href: '#security' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#hero">
          SA
        </a>
        <div className="nav-links">
          {desktopLinks.map((link) => (
            <a key={link.label} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-pill" href="#contact">
          Contact
        </a>
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
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
                    className="mobile-menu-link"
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
