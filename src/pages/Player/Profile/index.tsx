import PlayerInfo from './PlayerInfo'
import { PlayerCardData } from '@root/constants'
import { isMobile } from '@utils/helpers'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NewNFTs from './NewNFTs'
import VotingPolls from './VotingPolls'
import Giveaways from './Giveaways'
import InstagramFeed from './InstagramFeed'
import { useEffect, useState } from 'react'
import PlayerChart from './PlayerChart'
import { RootState } from '@root/store/rootReducers'
import DialogBox from '@components/DialogBox'
import SellNftForm from '@pages/PurchaseNft/SellNft/SellNftForm'
import BuyNftForm from '@pages/PurchaseNft/BuyNft/BuyNftForm'
import {
  setPurchaseMode,
  setPurchaseShow,
} from '@root/apis/purchase/purchaseSlice'
import TabGroup from '@components/TabGroup'

const Profile = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [chartView, setChartView] = useState(false)
  const purchaseModeData = useSelector(
    (state: RootState) => state.purchaseReducer,
  )

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
      document.body.style.marginRight = '15px'
      document.body.getElementsByClassName('modal-content')[0].className =
        'modal-content modal-position-adjust'
    } else {
      document.body.style.overflow = ''
      document.body.style.marginRight = '0px'
    }
  }, [purchaseModeData?.showPurchaseForm])

  return (
    <section className="fullwidth">
      {purchaseModeData.showPurchaseForm ? (
        <DialogBox
          isOpen={purchaseModeData?.purchaseAction}
          onClose={() => handlePurchaseClose()}
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
      {chartView ? (
        <PlayerChart onCardView={() => setChartView(false)} />
      ) : (
        <PlayerInfo
          card={PlayerCardData[0]}
          onBuy={() => handlePurchaseOpen('buy')}
          onStake={() => handlePurchaseOpen('stake')}
          onSell={() => handlePurchaseOpen('sell')}
          onChartView={() => setChartView(true)}
        />
      )}
      <NewNFTs />
      <VotingPolls />
      <Giveaways />
      <InstagramFeed />
    </section>
  )
}

export default Profile
