import React from 'react'
import { useTranslation } from 'react-i18next'

const InstagramFeed: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="instagram-feed">
      <div className="blog-title">{t('Instagram Feed')}</div>
      <div className="flex-center">
        <div className="blog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
      <div className="flex-center">
        <div className="blog-image"></div>
      </div>
      <a className="blog-button" href="#" target="_blank">
        GO TO INSTAGRAM
      </a>
    </div>
  )
}

export default InstagramFeed
