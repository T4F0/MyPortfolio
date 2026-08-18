import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { getProjectImage, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'
import {
  leadershipChips,
  journeyEvents,
  kodikos,
  ingehack,
  ingeneer,
  ecsel,
  leadershipInAction,
} from '../data.js'

const fr = frenchData

function EventCard({ badge, eyebrow, title, description, media, image, children, goldBorder, eyebrowTone }) {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
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
              {t.leadership.eventPhotoPlaceholder}
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
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const isFr = lang === 'fr'

  const chips = isFr ? fr.leadershipChips : leadershipChips
  const events = isFr ? fr.journeyEvents : journeyEvents
  const kData = isFr ? fr.kodikos : kodikos
  const iData = isFr ? fr.ingehack : ingehack
  const ingData = isFr ? fr.ingeneer : ingeneer
  const eData = isFr ? fr.ecsel : ecsel
  const actionData = isFr ? fr.leadershipInAction : leadershipInAction

  const communityChip = isFr ? 'Construction Communautaire' : 'Community Building'

  return (
    <section className="section section--panel" id="leadership">
      <Reveal className="container leadership-stack">
        <div className="leadership-header">
          <div className="leadership-header-left">
            <p className="eyebrow">{t.leadership.eyebrow}</p>
            <h2 className="leadership-heading">
              {t.leadership.heading}
            </h2>
            <span className="leadership-badge">
              <AppIcon name="crownSimple" size={15} />
              <span className="leadership-badge-text">{t.leadership.badge}</span>
            </span>
          </div>
          <div className="leadership-header-right">
            <p className="leadership-intro">
              {t.leadership.intro}
            </p>
            <div className="leadership-chips">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className={`chip chip--outlined ${chip === communityChip ? 'chip--active' : ''}`}
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
            {events.map((event) => (
              <div key={event.title} className="journey-entry">
                <span className={`journey-title journey-title--${event.tone}`}>{event.title}</span>
                <span className="journey-subtitle">{event.subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.05}>
          <EventCard
            badge={kData.badge}
            eyebrow={kData.eyebrow}
            title={kData.title}
            description={kData.description}
            media="indigo"
            image={kData.image}
            eyebrowTone="default"
          >
            <div className="leadership-chips">
              {kData.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
            <StatsRow stats={kData.stats} />
          </EventCard>
        </Reveal>

        <Reveal delay={0.05}>
          <EventCard
            badge={iData.badge}
            eyebrow={iData.eyebrow}
            title={iData.title}
            description={iData.description}
            media="teal"
            image={iData.image}
            eyebrowTone="teal"
          >
            <div className="leadership-chips chips--teal">
              {iData.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
            <div className="leadership-chips">
              {iData.neutralChips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
            <StatsRow stats={iData.stats} />
          </EventCard>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="event-card event-card--gold-border">
            <div className="event-media event-media--gold">
              {getProjectImage(ingData.image) ? (
                <img src={getProjectImage(ingData.image)} alt={`${ingData.title} photography`} />
              ) : (
                <>
                  <span className="media-placeholder media-placeholder--absolute">
                    {t.leadership.eventPhotoPlaceholder}
                  </span>
                  <AppIcon name="sparkle" size={72} className="icon-accent" />
                </>
              )}
            </div>
            <div className="event-body event-body--wide-gap">
              <span className="event-badge">{ingData.badge}</span>
              <p className="event-eyebrow event-eyebrow--gold">{ingData.eyebrow}</p>
              <h3 className="event-title">{ingData.title}</h3>
              <p className="event-desc event-desc--tall">{ingData.description}</p>
              <div className="disciplines-grid">
                {ingData.disciplines.map((discipline) => (
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
                  {t.leadership.quote}
                </p>
                <p className="quote-sub">
                  {t.leadership.quoteSub}
                </p>
              </div>
              <span className="role-pill">
                <AppIcon name="crownSimple" size={15} />
                {t.leadership.eventLeader}
              </span>
              <div className="leadership-chips">
                {ingData.chips.map((chip) => (
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
            <span className="event-badge event-badge--accent">{eData.badge}</span>
            <p className="event-eyebrow event-eyebrow--accent-soft">{eData.eyebrow}</p>
            <h3 className="event-title">{eData.title}</h3>
            <p className="ecsel-sub">{eData.subtitle}</p>
            <p className="ecsel-desc">{eData.description}</p>
            <div className="ecsel-photos">
              {eData.photos.map((photo) => {
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
              {t.leadership.photoNote}
            </div>
            <div className="ecsel-role">
              <h4 className="ecsel-role-title">{t.leadership.myRole}</h4>
              <p className="ecsel-role-name">{t.leadership.clubRep}</p>
              <div className="leadership-chips">
                {eData.roleChips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <p className="ecsel-quote">
              {t.leadership.communityQuote}
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.05} className="leadership-in-action">
          <h3 className="leadership-in-action-title">{t.leadership.inAction}</h3>
          <div className="action-cards">
            {actionData.map((action) => (
              <div key={action.label} className={`action-card action-card--${action.tone}`}>
                <span className="action-label">{action.label}</span>
                <span className="action-title">{action.title}</span>
                <span className="action-desc">{action.description}</span>
              </div>
            ))}
          </div>
          <p className="leadership-quote">
            {t.leadership.closingQuote}
          </p>
        </Reveal>
      </Reveal>
    </section>
  )
}
