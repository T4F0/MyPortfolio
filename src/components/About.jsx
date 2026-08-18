import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { aboutParagraphs, journey, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function About() {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const paragraphs = lang === 'fr' ? frenchData.aboutParagraphs : aboutParagraphs
  const journeyData = lang === 'fr' ? frenchData.journey : journey

  return (
    <section className="section section--panel" id="about">
      <div className="container">
        <Reveal className="about-grid">
          <div className="about-left">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="about-heading">{t.about.heading}</h2>
          </div>
          <div className="about-right">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="about-paragraph">
                {paragraph}
              </p>
            ))}
            <div className="journey-row">
              {journeyData.map((step, i) => (
                <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span className={`journey-chip ${(step === 'Cybersecurity' || step === 'Cybersécurité') ? 'journey-chip--active' : ''}`}>
                    {step}
                  </span>
                  {i < journeyData.length - 1 && (
                    <AppIcon name="arrowCircleRight" size={14} className="journey-arrow" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
