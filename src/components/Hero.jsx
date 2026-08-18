import AppIcon from './AppIcon.jsx'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function Hero() {
  const { lang } = useLanguage()
  const t = uiStrings[lang].hero

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">{t.badge}</span>
        </div>
        <h1 className="display-heading">Selloum Abdelmoncef</h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <p className="hero-tags">{t.tags}</p>
        <p className="hero-description">{t.description}</p>
        <div className="hero-actions">
          <a className="btn btn--primary" href="#contact">
            {t.viewWork}
          </a>
          <a className="btn btn--outline" href="#work">
            {t.startProject}
          </a>
        </div>
        <div className="hero-socials">
          <a className="hero-social" href="https://github.com/T4F0" aria-label="GitHub">
            <AppIcon name="githubLogo" size={20} />
          </a>
          <a className="hero-social" href="mailto:selloummoncif.5@gmail.com" aria-label="Email">
            <AppIcon name="envelopeSimple" size={20} />
          </a>
          <a
            className="hero-social"
            href="https://www.linkedin.com/in/selloum-abdelmoncef/"
            aria-label="LinkedIn"
          >
            <AppIcon name="linkedinLogo" size={20} />
          </a>
          <a className="hero-social" href="#" aria-label="Resume">
            <AppIcon name="fileText" size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
