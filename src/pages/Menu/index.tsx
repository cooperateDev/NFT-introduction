import React, { useState, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import { ConnectContext } from '@root/WalletConnectProvider'
import { AppLayout } from '@components/index'
import MenuItem from '@components/Page/Navigation/MenuItem'
import SocialGroup from '@components/Page/Navigation/SocialGroup'
import ContactUs from '@components/Page/Navigation/ContactUs'
import { MenuItems } from '@root/constants'
import DialogBox from '@components/DialogBox'
import OnboardingForm from '@pages/Onboarding/OnboardingForm'
import {
  logout,
  resetSentEmailVerification,
} from '@root/apis/onboarding/authenticationSlice'
import { asyncLocalStorage, isMobile } from '@utils/helpers'
import { RootState } from '@root/store/rootReducers'
import { useNavigate } from 'react-router'
import '@assets/css/layout/Menu.css'

const Menu: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [showFormPopup, setShowFormPopup] = useState(false)
  const [loggedInId, setLoggedInId] = useState('')
  const dispatch = useDispatch()
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )

  const { connectStatus, connect, disconnect } = useContext(ConnectContext)

  const loginInfo = localStorage.getItem('loginInfo')
  const loginId = localStorage.getItem('loginId')

  const handleClose = () => {
    setShowFormPopup(false)
    dispatch(resetSentEmailVerification())
  }

  const handleSubmit = async (val?: boolean) => {
    setShowFormPopup(false)
    const loginId = await localStorage.getItem('loginId')
    if (loginId) {
      setLoggedInId(loginId)
      navigate(-1)
    }
  }

  const handleShowLogin = () => {
    if (isMobile()) {
      navigate('/signup')
    } else {
      setShowFormPopup(true)
    }
  }

  const handleLogout = async () => {
    await asyncLocalStorage.removeItem('loginId')
    asyncLocalStorage.removeItem('walletCreated')
    asyncLocalStorage.removeItem('accessToken').then(() => {
      dispatch(logout())
      navigate(-1)
    })
    location.reload()
  }

  const handleConnect = async () => {
    connect()
    navigate(-1)
  }

  const handleDisconnect = async () => {
    disconnect()
    navigate(-1)
  }

  return (
    <AppLayout className="menu" footerStatus="footer-status">
      {showFormPopup && (
        <DialogBox
          isOpen={showFormPopup}
          onClose={handleClose}
          closeBtnClass="close-menu-login"
        >
          <OnboardingForm onSubmit={handleSubmit} onClose={handleClose} />
        </DialogBox>
      )}
      {connectStatus || Boolean(loginInfo) ? (
        <div
          className={`button-box ${
            Boolean(loginInfo) ? 'grey-color grey-border-color' : ''
          }`}
          onClick={handleDisconnect}
        >
          {t('sign out')}
        </div>
      ) : (
        <div
          className={classnames(
            'button-box',
            authenticationData.userName ? 'hidden' : '',
          )}
          onClick={handleConnect}
        >
          {t('connect wallet')}
        </div>
      )}
      {loginId && authenticationData.userName ? (
        <div className="button-box" onClick={handleLogout}>
          {t('log out')}
        </div>
      ) : (
        !Boolean(loginInfo) && (
          <div className="button-box" onClick={handleShowLogin}>
            {t('sign up / sign in')}
          </div>
        )
      )}
      <div className="menu-items">
        {MenuItems.map((item, index) => (
          <MenuItem item={item} key={index} index={index} isMenu={true} />
        ))}
      </div>
      <div className="bottom-line"></div>
      <ContactUs />
      <div className="bottom-line"></div>
      <SocialGroup />
    </AppLayout>
  )
}

export default Menu
