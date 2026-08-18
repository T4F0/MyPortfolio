import Reveal from './Reveal.jsx'
import { articles, frenchData } from '../data.js'
import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function Articles() {
  const { lang } = useLanguage()
  const t = uiStrings[lang]
  const data = lang === 'fr' ? frenchData.articles : articles

  return (
    <section className="section section--panel" id="articles">
      <Reveal className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div className="section-head">
          <p className="eyebrow">{t.articles.eyebrow}</p>
          <h2 className="section-heading">{t.articles.heading}</h2>
        </div>
        <div className="articles-grid">
          {data.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.06}>
              <a className="article-card" href="#articles">
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
