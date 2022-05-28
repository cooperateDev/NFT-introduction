import React, { useEffect, useState } from 'react'

import { AppLayout } from '@components/index'
import AboutContent from './AboutContent'
import DialogBox from '@components/DialogBox'
import OnboardingForm from '@pages/Onboarding/OnboardingForm'
import { RootState } from '@root/store/rootReducers'
import { useDispatch, useSelector } from 'react-redux'
import {
  createWalletFailure,
  createWalletSuccess,
  getWalletDetails,
  showSignupForm,
  showWallet,
  showPlayerListForm,
} from '@root/apis/onboarding/authenticationSlice'
import { asyncLocalStorage, isMobile } from '@utils/helpers'
import { useNavigate } from 'react-router-dom'
import WalletForm from '@pages/Wallet/WalletForm'
import NewLaunchesNFT from './NewLaunchesNFT'
import LatestCreateNFT from './LatestCreateNFT'
import Bottom from './Bottom'
import '@assets/css/pages/Landing.css'
import PlayerListForm from '@pages/PlayerList/PlayerListForm'

const About: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthorized = useSelector(
    (state: RootState) => state.authentication.isAccessToken,
  )
  const [loggedInId, setLoggedInId] = useState('')
  const loginId = localStorage.getItem('accessToken')

  const handleSubmit = async (val?: boolean) => {
    // setShowPopupForm(false)
    handleClose()
    const loginId = await localStorage.getItem('loginId')
    if (loginId) {
      setLoggedInId(loginId)
    }
  }

  const showSignupPopup = useSelector(
    (state: RootState) => state.authentication.isSignupFormVisible,
  )

  const showWalletPopup = useSelector(
    (state: RootState) => state.authentication.isWalletFormVisible,
  )

  const showPlayerListPopup = useSelector(
    (state: RootState) => state.authentication.isPlayerListFormVisible,
  )

  const handleClose = () => {
    if (isMobile()) {
      navigate('/')
    } else {
      if (showSignupPopup) {
        dispatch(showSignupForm())
      } else if (showWalletPopup) {
        dispatch(showWallet())
      } else {
        dispatch(showPlayerListForm())
      }
    }
  }

  useEffect(() => {
    if (showSignupPopup || showWalletPopup || showPlayerListPopup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [showSignupPopup, showWalletPopup, showPlayerListPopup])

  return (
    <AppLayout className="home">
      {showSignupPopup && (
        <DialogBox isOpen={showSignupPopup} onClose={handleClose}>
          <OnboardingForm onSubmit={handleSubmit} onClose={handleClose} />
        </DialogBox>
      )}
      {showWalletPopup && (
        <DialogBox isOpen={showWalletPopup} onClose={handleClose}>
          <WalletForm />
        </DialogBox>
      )}
      {showPlayerListPopup && (
        <DialogBox isOpen={showPlayerListPopup} onClose={handleClose}>
          <PlayerListForm />
        </DialogBox>
      )}
      <section className="new-launches-nft">
        <NewLaunchesNFT />
      </section>
      <section className="latest-create-nft">
        <LatestCreateNFT />
      </section>
      <section className="about-section">
        <AboutContent />
      </section>
      <section className="bottom-section">
        <Bottom />
      </section>
    </AppLayout>
  )
}

export default About
