import AppIcon from './AppIcon.jsx'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Available for freelance projects</span>
        </div>
        <h1 className="display-heading">Selloum Abdelmoncef</h1>
        <p className="hero-subtitle">Full-Stack Developer &amp; Cybersecurity Enthusiast</p>
        <p className="hero-tags">Full-Stack Engineering · Cybersecurity · AI · Technical Leadership</p>
        <p className="hero-description">
          I build modern, scalable web applications with a strong focus on performance, security,
          and real-world problem solving.
        </p>
        <div className="hero-actions">
          <a className="btn btn--primary" href="#contact">
            View My Work
          </a>
          <a className="btn btn--outline" href="#work">
            Start a Project
          </a>
        </div>
        <div className="hero-socials">
          <a className="hero-social" href="https://github.com/T4F0" aria-label="GitHub">
            <AppIcon name="githubLogo" size={20} />
          </a>
          <a className="hero-social" href="mailto:selloummoncif.5@gmail.com" aria-label="Email">
            <AppIcon name="envelopeSimple" size={20} />
          </a>
          <a
            className="hero-social"
            href="https://www.linkedin.com/in/selloum-abdelmoncef/"
            aria-label="LinkedIn"
          >
            <AppIcon name="linkedinLogo" size={20} />
          </a>
          <a className="hero-social" href="#" aria-label="Resume">
            <AppIcon name="fileText" size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
