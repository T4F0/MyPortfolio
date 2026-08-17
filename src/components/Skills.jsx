import Reveal from './Reveal.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="section">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-heading">What I work with</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 0.06}>
              <div className={`skill-card ${skill.accent ? 'skill-card--accent' : ''}`}>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-text">{skill.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
