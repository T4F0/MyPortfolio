import Reveal from './Reveal.jsx'
import { steps, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function HowIWork() {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const data = lang === 'fr' ? frenchData.steps : steps

  return (
    <section className="section section--how">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">{t.howIWork.eyebrow}</p>
          <h2 className="section-heading">{t.howIWork.heading}</h2>
        </div>
        <div className="how-grid">
          {data.map((step, i) => (
            <div key={step.number} style={{ display: 'contents' }}>
              <Reveal delay={i * 0.06}>
                <div className="step-card">
                  <span className="step-number">{step.number}</span>
                  <span className="step-title">{step.title}</span>
                  <span className="step-desc">{step.description}</span>
                </div>
              </Reveal>
              {i < data.length - 1 && <span className="step-connector" />}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
