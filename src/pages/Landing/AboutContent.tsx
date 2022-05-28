import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import Question from '@assets/icons/icon/question.svg'
import BuyVideo from '@assets/images/buyVideo.svg'
import Faq from '@components/Page/Faq'
import { useDispatch, useSelector } from 'react-redux'
import { showSignupForm } from '@root/apis/onboarding/authenticationSlice'
import { RootState } from '@root/store/rootReducers'
import { isMobile } from '@utils/helpers'
import { useNavigate } from 'react-router-dom'

const AboutContent: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.authentication,
  )

  const fetchSignupForm = () => {
    if (isMobile()) {
      navigate('/signup')
    } else {
      dispatch(showSignupForm())
    }
  }

  return (
    <div className="about-content">
      <div>
        <div className="about-section">
          <div className="question-icon">
            <img src={Question} alt="" />
          </div>
          <span className="blog-title mecarriera-title">{t('what is')}</span>
          <span className="blog-content about-center-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
            condimentum platea enim sit id.
          </span>
          <span className="blog-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa
            faucibus fringilla et at lectus vitae purus. Mauris felis mattis at
            nisi enim purus, ac blandit tristique.
          </span>
          <span className="blog-title faq-title">FAQ's</span>
          <Faq />
          <span className="blog-title buy-title">{t('how to buy')}</span>
          <span className="blog-content buy-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
            condimentum platea enim sit id.
          </span>
          <div className="buy-video">
            <img src={BuyVideo} alt="" />
          </div>
          <span className="blog-content buy-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
            condimentum platea enim sit id.
          </span>
          {!isUserAuthenticated.userName ? (
            <span className="button-line">
              <span
                className="button-box register-button"
                onClick={() => fetchSignupForm()}
              >
                {t('register')}
              </span>
            </span>
          ) : (
            <div className="placeholder-about" />
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
