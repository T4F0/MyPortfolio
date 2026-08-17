import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { aboutParagraphs, journey } from '../data.js'

export default function About() {
  return (
    <section className="section section--panel" id="about">
      <div className="container">
        <Reveal className="about-grid">
          <div className="about-left">
            <p className="eyebrow">About Me</p>
            <h2 className="about-heading">From code to what runs underneath it</h2>
          </div>
          <div className="about-right">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="about-paragraph">
                {paragraph}
              </p>
            ))}
            <div className="journey-row">
              {journey.map((step, i) => (
                <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span className={`journey-chip ${step === 'Cybersecurity' ? 'journey-chip--active' : ''}`}>
                    {step}
                  </span>
                  {i < journey.length - 1 && (
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
