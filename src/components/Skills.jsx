import Reveal from './Reveal.jsx'
import { skills, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function Skills() {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const data = lang === 'fr' ? frenchData.skills : skills

  return (
    <section className="section">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2 className="section-heading">{t.skills.heading}</h2>
        </div>
        <div className="skills-grid">
          {data.map((skill, i) => (
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
