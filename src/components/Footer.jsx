import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function Footer() {
  const { lang } = useLanguage()
  const t = uiStrings[lang].footer

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">{t.brand}</span>
        <span className="footer-copy">{t.copy}</span>
      </div>
    </footer>
  )
}
