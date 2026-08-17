import Reveal from './Reveal.jsx'
import { steps } from '../data.js'

export default function HowIWork() {
  return (
    <section className="section section--how">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">How I Work</p>
          <h2 className="section-heading">A clear path from idea to launch</h2>
        </div>
        <div className="how-grid">
          {steps.map((step, i) => (
            <div key={step.number} style={{ display: 'contents' }}>
              <Reveal delay={i * 0.06}>
                <div className="step-card">
                  <span className="step-number">{step.number}</span>
                  <span className="step-title">{step.title}</span>
                  <span className="step-desc">{step.description}</span>
                </div>
              </Reveal>
              {i < steps.length - 1 && <span className="step-connector" />}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
