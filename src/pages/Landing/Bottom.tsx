import React from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Form'
import ContactUs from '@components/Page/Navigation/ContactUs'
import SocialGroup from '@components/Page/Navigation/SocialGroup'

const Bottom: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="bottom">
      <div>
        <span className="blog-title bottom-title">
          {t('latest blog posts')}
        </span>
        <span className="blog-content bottom-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa
          faucibus fringilla et at lectus vitae purus. Mauris felis mattis at
          nisi enim purus, ac blandit tristique.
        </span>
        <div className="bottom-line"></div>
        <span className="blog-title bottom-title">{t('stay in the loop')}</span>
        <span className="blog-content bottom-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa
          faucibus fringilla et at lectus vitae purus. Mauris felis mattis at
          nisi enim purus, ac blandit tristique.
        </span>
        <div>
          <Input
            id="email_address"
            type="text"
            placeholder={t('your email address')}
            className="input-box"
            onChange={() => {
              return
            }}
            onBlur={() => {
              return
            }}
          />
        </div>
        <span className="button-line">
          <div className="button-box">{t('sign up')}</div>
        </span>
        <div className="bottom-line"></div>
        <SocialGroup />
        <div className="bottom-line"></div>
        <span className="blog-title company-title">meCarreira.com</span>
        <span className="blog-content company-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
          condimentum platea enim sit id.
        </span>
        <ContactUs />
        <div className="bottom-line"></div>
        <div className="blog-content copyright">© 2022 meCarreira.com</div>
      </div>
    </div>
  )
}

export default Bottom
