import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { securityItems, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function SecurityLab() {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const items = lang === 'fr' ? frenchData.securityItems : securityItems

  return (
    <section className="section section--panel" id="security">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow" style={{ color: 'rgb(140, 150, 255)' }}>
            {t.securityLab.eyebrow}
          </p>
          <h2 className="section-heading">{t.securityLab.heading}</h2>
          <p className="body-text" style={{ maxWidth: '760px' }}>
            {t.securityLab.description}
          </p>
        </div>
        <div className="security-grid">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.04}>
              <div className="security-chip">
                <AppIcon name={item.icon} size={22} className="icon-accent" />
                <span className="security-chip-text">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
