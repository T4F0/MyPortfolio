import AppIcon from './AppIcon.jsx'
import Reveal from './Reveal.jsx'
import { contributionCells } from '../data.js'

export default function GithubActivity() {
  return (
    <section className="section">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">Developer Activity</p>
          <h2 className="section-heading">Building in the open</h2>
        </div>
        <div className="github-card">
          <div className="github-header">
            <div className="github-profile">
              <div className="github-icon-box">
                <AppIcon name="githubLogo" size={24} />
              </div>
              <div className="github-name-col">
                <span className="github-name">Selloum Abdelmoncef</span>
                <span className="github-handle">@selloum-dev on GitHub</span>
              </div>
            </div>
            <a className="github-view" href="https://github.com/T4F0">
              View Profile <AppIcon name="arrowUpRight" size={14} />
            </a>
          </div>
          <div className="contribution-grid">
            {contributionCells.map((opacity, i) => (
              <span
                key={i}
                className="contribution-cell"
                style={{ background: `rgba(91, 110, 245, ${opacity})` }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
