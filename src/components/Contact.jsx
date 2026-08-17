import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal className="contact-content">
        <h2 className="contact-heading">Have an idea worth building?</h2>
        <p className="contact-sub">Let’s turn it into something real.</p>
        <div className="contact-actions">
          <a className="contact-btn contact-btn--primary" href="mailto:selloummoncif.5@gmail.com">
            Start a Project
          </a>
          <a className="contact-btn contact-btn--outline" href="mailto:selloummoncif.5@gmail.com">
            Contact Me
          </a>
        </div>
        <div className="contact-links">
          <a className="contact-link" href="mailto:selloummoncif.5@gmail.com">
            <AppIcon name="envelopeSimple" size={16} />
            selloummoncif.5@gmail.com
          </a>
          <a className="contact-link" href="https://github.com/T4F0">
            <AppIcon name="githubLogo" size={16} />
            GitHub
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/selloum-abdelmoncef/">
            <AppIcon name="linkedinLogo" size={16} />
            LinkedIn
          </a>
          <a className="contact-link" href="https://example.com/cv.pdf">
            <AppIcon name="downloadSimple" size={16} />
            Download CV
          </a>
        </div>
      </Reveal>
    </section>
  )
}
