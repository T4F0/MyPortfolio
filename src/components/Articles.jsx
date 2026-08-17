import Reveal from './Reveal.jsx'
import { articles } from '../data.js'

export default function Articles() {
  return (
    <section className="section section--panel" id="articles">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">Knowledge / Lab Notes</p>
          <h2 className="section-heading">Learning by building and documenting</h2>
        </div>
        <div className="articles-grid">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.06}>
              <a className="article-card" href="/#articles">
                <span className="article-category">{article.category}</span>
                <h3 className="article-title">{article.title}</h3>
                <div className="article-meta">
                  <span>{article.meta}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
