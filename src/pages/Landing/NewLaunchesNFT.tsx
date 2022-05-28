import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import Carousel from '@components/Carousel'
import Card from '@components/Card/PlayerCard'
import DialogBox from '@components/DialogBox'
// import DialogBox from '@material-ui/core/Dialog'
import SellNftForm from '@pages/PurchaseNft/SellNft/SellNftForm'
import BuyNftForm from '@pages/PurchaseNft/BuyNft/BuyNftForm'
import { RootState } from '@root/store/rootReducers'
import OnboardingForm from '@pages/Onboarding/OnboardingForm'
import { PlayerCardData } from '@root/constants'
import { showSignupForm } from '@root/apis/onboarding/authenticationSlice'
import { useNavigate } from 'react-router-dom'
import { isMobile } from '@utils/helpers'
import { ConnectContext } from '@root/WalletConnectProvider'
import TabGroup from '@components/TabGroup'
import {
  setPurchaseMode,
  setPurchaseShow,
} from '@root/apis/purchase/purchaseSlice'

const NewLaunchesNFT: React.FC = () => {
  const items: JSX.Element[] = []
  const purchaseModeData = useSelector(
    (state: RootState) => state.purchaseReducer,
  )
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.authentication.userName,
  )

  const [showPopupForm, setShowPopupForm] = useState(false)
  const [loggedInId, setLoggedInId] = useState('')

  const { connectStatus } = useContext(ConnectContext)

  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginInfo = localStorage.getItem('loginInfo')
  const loginId = localStorage.getItem('loginId')

  PlayerCardData.map((item, index) => {
    return items.push(
      <Card
        card={item}
        key={index}
        onBuy={() => handlePurchaseOpen('buy')}
        onSell={() => handlePurchaseOpen('sell')}
      />,
    )
  })

  const handleSubmit = async (val?: boolean) => {
    setShowPopupForm(false)
    const loginId = await localStorage.getItem('loginId')
    if (loginId) {
      setLoggedInId(loginId)
    }
  }

  const fetchSignupForm = () => {
    if (isMobile()) {
      navigate('/signup')
    } else {
      dispatch(showSignupForm())
    }
  }

  const handlePurchaseOpen = (value: string) => {
    dispatch(setPurchaseMode(value.toUpperCase()))
    if (isMobile()) {
      navigate('/' + value.toLowerCase() + '_nft')
    } else {
      dispatch(setPurchaseShow(true))
    }
  }

  const handlePurchaseClose = () => {
    dispatch(setPurchaseMode(''))
    dispatch(setPurchaseShow(false))
  }

  useEffect(() => {
    if (purchaseModeData?.showPurchaseForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [purchaseModeData?.showPurchaseForm])

  return (
    <div className="new-launches-nft-content">
      {purchaseModeData.showPurchaseForm ? (
        <DialogBox
          isOpen={purchaseModeData?.purchaseAction}
          onClose={handlePurchaseClose}
          contentClass=""
          closeBtnClass="close-purchase"
        >
          <TabGroup
            defaultTab={purchaseModeData?.purchaseAction}
            tabSet={['BUY', 'SELL']}
            getSwitchedTab={handlePurchaseOpen}
          />
          {purchaseModeData?.purchaseAction === 'SELL' ? (
            <SellNftForm />
          ) : (
            <BuyNftForm />
          )}
        </DialogBox>
      ) : null}
      <div className="new-launch-title">
        <div className="new-nft-title">{t('favorite player')}</div>
        <div className="new-nft-content">{t('buy player')}</div>
      </div>
      <div className="button-line">
        {Boolean(loginInfo) || Boolean(loginId) ? (
          <div className="button-box-min"></div>
        ) : !isUserAuthenticated && !connectStatus ? (
          <div className="button-box" onClick={() => fetchSignupForm()}>
            {t('sign up')}
          </div>
        ) : null}
      </div>
      <div className="blog-title new-launches-title">{t('new launches')}</div>
      <div className="carousel">
        <Carousel items={items} />
      </div>
      <div className="new-nft-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="more-view-cover">
        <a href="#" className="more-view">
          {t('view all')}
        </a>
      </div>
    </div>
  )
}

export default NewLaunchesNFT
