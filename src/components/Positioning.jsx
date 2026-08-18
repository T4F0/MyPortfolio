import { useLanguage } from '../useLanguage.jsx'
import { uiStrings } from '../data.js'

export default function Positioning() {
  const { lang } = useLanguage()
  const t = uiStrings[lang].positioning

  return (
    <div className="positioning">
      <p className="positioning-text">{t}</p>
    </div>
  )
}
