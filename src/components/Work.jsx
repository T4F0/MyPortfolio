import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { featuredProjects, workGridProjects, getProjectImage, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

function ProjectLinks({ links }) {
  return (
    <div className="project-links">
      {links.map((link) => (
        <a
          key={link.label}
          className={`project-link ${link.primary ? 'project-link--primary' : ''}`}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {link.label} <AppIcon name="arrowUpRight" size={16} />
        </a>
      ))}
    </div>
  )
}

function FeaturedProject({ project, reverse }) {
  const image = getProjectImage(project.image)
  const media = (
    <div className={`project-media project-media--${project.media}`}>
      {image ? (
        <img src={image} alt={`${project.title} screenshot`} />
      ) : (
        <>
          <AppIcon name={project.icon} size={64} className="icon-accent" />
          {project.placeholder && (
            <span className="media-placeholder">{project.placeholder}</span>
          )}
        </>
      )}
    </div>
  )
  const content = (
    <div className="project-content">
      <p className="eyebrow">{project.eyebrow}</p>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-callout">{project.callout}</div>
      <p className="project-role">{project.role}</p>
      <div className="tech-chips">
        {project.tech.map((t) => (
          <span key={t} className="tech-chip">
            {t}
          </span>
        ))}
      </div>
      <ProjectLinks links={project.links} />
    </div>
  )
  return (
    <article className="project-featured">
      {reverse ? (
        <>
          {content}
          {media}
        </>
      ) : (
        <>
          {media}
          {content}
        </>
      )}
    </article>
  )
}

function GridProject({ project }) {
  const image = getProjectImage(project.image)
  return (
    <article className={`project-card ${project.cta ? 'project-card--cta' : ''}`}>
      <div
        className={`project-media project-media--${project.media} ${
          project.cta ? 'project-media--tall' : 'project-media--short'
        }`}
      >
        {image ? (
          <img src={image} alt={`${project.title} screenshot`} />
        ) : (
          <>
            <AppIcon name={project.icon} size={48} className="icon-accent" />
            {project.placeholder && (
              <span className="media-placeholder">{project.placeholder}</span>
            )}
          </>
        )}
      </div>
      <p className="eyebrow">{project.eyebrow}</p>
      <h3 className="project-title--small">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      {project.callout && (
        <div className={`project-callout project-callout--${project.media}`}>{project.callout}</div>
      )}
      {project.role && <p className="project-role">{project.role}</p>}
      {project.tech && (
        <div className="tech-chips">
          {project.tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>
      )}
      <ProjectLinks links={project.links} />
    </article>
  )
}

export default function Work() {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const projects = lang === 'fr' ? frenchData.featuredProjects : featuredProjects
  const gridProjects = lang === 'fr' ? frenchData.workGridProjects : workGridProjects

  return (
    <section className="section" id="work">
      <Reveal className="container work-stack">
        <div className="section-head">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 className="section-heading">{t.work.heading}</h2>
        </div>
        {projects.map((project, i) => (
          <FeaturedProject key={project.title} project={project} reverse={i % 2 === 1} />
        ))}
        <div className="work-grid">
          {gridProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <GridProject project={project} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
