import React from 'react'
import { useTranslation } from 'react-i18next'

const Giveaways: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="giveaways">
      <div className="blog-title">{t('Giveaways')}</div>
      <div className="flex-center">
        <div className="blog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
      <div className="flex-center">
        <div className="blog-image"></div>
      </div>
      <div className="flex-center">
        <div className="blog-button">Enter</div>
      </div>
    </div>
  )
}

export default Giveaways
