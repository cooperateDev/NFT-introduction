import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import AppLayout from '@components/AppLayout'
import CheckIcon from '@mui/icons-material/Check'

import { Languages } from '@root/constants'
import i18n from '@root/i18n'
import '@assets/css/pages/Language.css'

const Language = () => {
  const { t } = useTranslation()
  const [lang, setLang] = useState(localStorage.getItem('language'))

  if (lang === null) {
    setLang('en')
  }

  const changeLanguage = (name: string, lng: string) => {
    i18n.changeLanguage(lng)
    setLang(lng)
    localStorage.setItem('languageName', name)
    localStorage.setItem('language', lng)
  }

  return (
    <AppLayout className="language-container" footerStatus="footer-status">
      <div className="language-title">{t('language')}</div>
      {Languages.map((item, index) => (
        <div
          className="language"
          key={index}
          onClick={() => changeLanguage(item.name, item.symbol)}
        >
          <div>{item.name}</div>
          <div className="check-icon">
            {lang === item.symbol && <CheckIcon fontSize="small" />}
          </div>
        </div>
      ))}
    </AppLayout>
  )
}

export default Language
