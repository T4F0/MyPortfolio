import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { securityItems } from '../data.js'

export default function SecurityLab() {
  return (
    <section className="section section--panel" id="security">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow" style={{ color: 'rgb(140, 150, 255)' }}>
            Security Lab
          </p>
          <h2 className="section-heading">On the path to becoming a pentester</h2>
          <p className="body-text" style={{ maxWidth: '760px' }}>
            Beyond building applications, I study how they break — deliberately and seriously. I'm
            currently working through the Hack The Box Academy pentester path with the goal of
            earning the CPTS certification, backed by hands-on practice with Hack The Box machines,
            CTFs, and real-world security tools.
          </p>
        </div>
        <div className="security-grid">
          {securityItems.map((item, i) => (
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
