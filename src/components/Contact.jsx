import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'
import cvFile from '../assets/SELLOUM ABDELMONCEF CV.pdf'

export default function Contact() {
  const { lang } = useLanguage()
  const t = uiStrings[lang].contact

  return (
    <section className="contact" id="contact">
      <Reveal className="contact-content">
        <h2 className="contact-heading">{t.heading}</h2>
        <p className="contact-sub">{t.sub}</p>
        <div className="contact-actions">
          <a className="contact-btn contact-btn--primary" href="mailto:selloummoncif.5@gmail.com">
            {t.startProject}
          </a>
          <a className="contact-btn contact-btn--outline" href="mailto:selloummoncif.5@gmail.com">
            {t.contactMe}
          </a>
        </div>
        <div className="contact-links">
          <a className="contact-link" href="mailto:selloummoncif.5@gmail.com">
            <AppIcon name="envelopeSimple" size={16} />
            selloummoncif.5@gmail.com
          </a>
          <a className="contact-link" href="https://github.com/T4F0">
            <AppIcon name="githubLogo" size={16} />
            {t.github}
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/selloum-abdelmoncef/">
            <AppIcon name="linkedinLogo" size={16} />
            {t.linkedin}
          </a>
          <a className="contact-link" href={cvFile} download>
            <AppIcon name="downloadSimple" size={16} />
            {t.downloadCV}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
