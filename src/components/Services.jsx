import { useState } from 'react'
import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { services } from '../data.js'

function Accordion({ item, open, onToggle }) {
  return (
    <div className="accordion" onClick={onToggle}>
      <div className="accordion-header">
        <div className="accordion-label">
          <AppIcon name="stack" size={22} className="icon-accent" />
          <span className="accordion-title">{item.title}</span>
        </div>
        <AppIcon
          name={open ? 'caretUp' : 'caretDown'}
          size={18}
          className="accordion-caret"
        />
      </div>
      {open && (
        <div className="accordion-body">
          <p className="accordion-body-text">{item.description}</p>
        </div>
      )}
    </div>
  )
}

export default function Services() {
  const [openSet, setOpenSet] = useState(() => new Set())

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
      }
      return next
    })
  }

  return (
    <section className="section" id="services">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">What I Can Build</p>
          <h2 className="section-heading">Services built around your product, not a template</h2>
        </div>
        <div className="services-grid">
          {services.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Accordion
                item={item}
                open={openSet.has(i)}
                onToggle={() => toggle(i)}
              />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
