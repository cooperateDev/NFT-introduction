import { useTranslation } from 'react-i18next'

import Twitter from '@assets/icons/icon/twitter.svg'
import Instagram from '@assets/icons/icon/Instagram.svg'
import Youtube from '@assets/icons/icon/youtube.svg'
import Discord from '@assets/icons/icon/discord.svg'

const Socials = () => {
  const { t } = useTranslation()

  return (
    <div className="social-icons-group">
      <span className="blog-title">{t('join the community')}</span>
      <div className="social-group">
        <img src={Twitter} alt="" className="social-icons" />
        <img src={Discord} alt="" className="social-icons" />
        <img src={Instagram} alt="" className="social-icons" />
        <img src={Youtube} alt="" className="social-icons" />
      </div>
    </div>
  )
}

export default Socials
