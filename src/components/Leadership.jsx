import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { getProjectImage } from '../data.js'
import {
  leadershipChips,
  journeyEvents,
  kodikos,
  ingehack,
  ingeneer,
  ecsel,
  leadershipInAction,
} from '../data.js'

function EventCard({ badge, eyebrow, title, description, media, image, children, goldBorder, eyebrowTone }) {
  const img = getProjectImage(image)
  return (
    <article className={`event-card ${goldBorder ? 'event-card--gold-border' : ''}`}>
      <div className={`event-media event-media--${media}`}>
        {img ? (
          <img src={img} alt={`${title} photography`} />
        ) : (
          <>
            <AppIcon name={media === 'indigo' ? 'rocketLaunch' : media === 'teal' ? 'shieldWarning' : 'sparkle'} size={72} className="icon-accent" />
            <span className="media-placeholder media-placeholder--absolute">
              Event photography — placeholder
            </span>
          </>
        )}
      </div>
      <div className="event-body">
        <span className="event-badge">{badge}</span>
        <p className={`event-eyebrow event-eyebrow--${eyebrowTone}`}>{eyebrow}</p>
        <h3 className="event-title">{title}</h3>
        <p className="event-desc">{description}</p>
        {children}
      </div>
    </article>
  )
}

function StatsRow({ stats }) {
  return (
    <div className="event-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="event-stat">
          <span className="event-stat-value">{stat.value}</span>
          <span className="event-stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Leadership() {
  return (
    <section className="section section--panel" id="leadership">
      <Reveal className="container leadership-stack">
        <div className="leadership-header">
          <div className="leadership-header-left">
            <p className="eyebrow">Leadership &amp; Events</p>
            <h2 className="leadership-heading">
              Leading technology, cybersecurity, and innovation communities.
            </h2>
            <span className="leadership-badge">
              <AppIcon name="crownSimple" size={15} />
              <span className="leadership-badge-text">President — Ingeniums Club · 2025/26</span>
            </span>
          </div>
          <div className="leadership-header-right">
            <p className="leadership-intro">
              I lead a multidisciplinary student technology community, bringing together developers,
              security enthusiasts, and creatives around shared technical projects. My role spans the
              full lifecycle of large-scale events — from early strategy to on-the-ground execution.
            </p>
            <div className="leadership-chips">
              {leadershipChips.map((chip) => (
                <span
                  key={chip}
                  className={`chip chip--outlined ${chip === 'Community Building' ? 'chip--active' : ''}`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="event-journey">
          <div className="journey-rail">
            <span className="journey-dot journey-dot--accent" />
            <span className="journey-line" />
            <span className="journey-dot journey-dot--muted" />
            <span className="journey-line" />
            <span className="journey-dot journey-dot--muted" />
            <span className="journey-line" />
            <span className="journey-dot journey-dot--muted" />
          </div>
          <div className="journey-entries">
            {journeyEvents.map((event) => (
              <div key={event.title} className="journey-entry">
                <span className={`journey-title journey-title--${event.tone}`}>{event.title}</span>
                <span className="journey-subtitle">{event.subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.05}>
          <EventCard
            badge={kodikos.badge}
            eyebrow={kodikos.eyebrow}
            title={kodikos.title}
            description={kodikos.description}
            media="indigo"
            image={kodikos.image}
            eyebrowTone="default"
          >
            <div className="leadership-chips">
              {kodikos.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
            <StatsRow stats={kodikos.stats} />
          </EventCard>
        </Reveal>

        <Reveal delay={0.05}>
          <EventCard
            badge={ingehack.badge}
            eyebrow={ingehack.eyebrow}
            title={ingehack.title}
            description={ingehack.description}
            media="teal"
            image={ingehack.image}
            eyebrowTone="teal"
          >
            <div className="leadership-chips chips--teal">
              {ingehack.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
            <div className="leadership-chips">
              {ingehack.neutralChips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
            <StatsRow stats={ingehack.stats} />
          </EventCard>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="event-card event-card--gold-border">
            <div className="event-media event-media--gold">
              {getProjectImage(ingeneer.image) ? (
                <img src={getProjectImage(ingeneer.image)} alt={`${ingeneer.title} photography`} />
              ) : (
                <>
                  <span className="media-placeholder media-placeholder--absolute">
                    Event photography — placeholder
                  </span>
                  <AppIcon name="sparkle" size={72} className="icon-accent" />
                </>
              )}
            </div>
            <div className="event-body event-body--wide-gap">
              <span className="event-badge">{ingeneer.badge}</span>
              <p className="event-eyebrow event-eyebrow--gold">{ingeneer.eyebrow}</p>
              <h3 className="event-title">{ingeneer.title}</h3>
              <p className="event-desc event-desc--tall">{ingeneer.description}</p>
              <div className="disciplines-grid">
                {ingeneer.disciplines.map((discipline) => (
                  <div
                    key={discipline.title}
                    className={`discipline-card discipline-card--${discipline.tone}`}
                  >
                    <AppIcon name={discipline.icon} size={20} />
                    <span className="discipline-title">{discipline.title}</span>
                    <span className="discipline-desc">{discipline.description}</span>
                  </div>
                ))}
              </div>
              <div className="quote-box">
                <p className="quote-text">
                  “How well can you adapt when the problem doesn’t fit into a single discipline?”
                </p>
                <p className="quote-sub">
                  Ingeneer is designed to test adaptability, creativity, and technical reasoning — an
                  immersive technical adventure rather than a standard competition.
                </p>
              </div>
              <span className="role-pill">
                <AppIcon name="crownSimple" size={15} />
                Event Leader &amp; Organizer
              </span>
              <div className="leadership-chips">
                {ingeneer.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="ecsel-card">
            <span className="event-badge event-badge--accent">{ecsel.badge}</span>
            <p className="event-eyebrow event-eyebrow--accent-soft">{ecsel.eyebrow}</p>
            <h3 className="event-title">{ecsel.title}</h3>
            <p className="ecsel-sub">{ecsel.subtitle}</p>
            <p className="ecsel-desc">{ecsel.description}</p>
            <div className="ecsel-photos">
              {ecsel.photos.map((photo) => {
                const photoImg = getProjectImage(photo.image)
                return (
                  <div
                    key={photo.label}
                    className={`ecsel-photo ecsel-photo--${photo.tone} ${
                      photo.full ? 'ecsel-photo--full' : 'ecsel-photo--half'
                    }`}
                  >
                    {photoImg ? (
                      <img src={photoImg} alt={photo.label} />
                    ) : (
                      <>
                        <AppIcon name="image" size={photo.iconSize} />
                        <span className="media-placeholder media-placeholder--absolute">{photo.label}</span>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="ecsel-note">
              <AppIcon name="info" size={13} />
              Photo placeholders — ready for real ECSEL Expo photography
            </div>
            <div className="ecsel-role">
              <h4 className="ecsel-role-title">My Role</h4>
              <p className="ecsel-role-name">Ingeniums Club Representative</p>
              <div className="leadership-chips">
                {ecsel.roleChips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <p className="ecsel-quote">
              Leadership isn’t only about organizing events — it’s also about representing a
              community, communicating its vision, and building relationships beyond it.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.05} className="leadership-in-action">
          <h3 className="leadership-in-action-title">Leadership in Action</h3>
          <div className="action-cards">
            {leadershipInAction.map((action) => (
              <div key={action.label} className={`action-card action-card--${action.tone}`}>
                <span className="action-label">{action.label}</span>
                <span className="action-title">{action.title}</span>
                <span className="action-desc">{action.description}</span>
              </div>
            ))}
          </div>
          <p className="leadership-quote">
            Through these events, I learned that successful technical projects are not only about
            technology. They require vision, planning, people, coordination, execution, and the
            ability to adapt.
          </p>
        </Reveal>
      </Reveal>
    </section>
  )
}
