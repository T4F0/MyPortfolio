import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { experience, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function Experience() {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const data = lang === 'fr' ? frenchData.experience : experience

  return (
    <section className="section">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2 className="section-heading">{t.experience.heading}</h2>
        </div>
        <div className="experience-grid">
          {data.map((item, i) => (
            <Reveal
              key={item.number}
              delay={i * 0.06}
              className={i === 1 || i === 2 ? 'experience-card--narrow' : ''}
            >
              <div className="experience-card">
                <AppIcon name={item.icon} size={24} className="experience-icon" />
                <span className="experience-number">{item.number}</span>
                <h3 className="experience-title">{item.title}</h3>
                <p className="experience-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
