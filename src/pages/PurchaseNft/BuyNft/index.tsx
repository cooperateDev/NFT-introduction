import React, { useEffect } from 'react'
import { AppLayout } from '@components/index'
import BuyNftForm from './BuyNftForm'
import TabGroup from '@components/TabGroup'
import { setPurchaseMode } from '@root/apis/purchase/purchaseSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isMobile } from '@utils/helpers'
import '@assets/css/pages/PurchaseNft.css'

const BuyNft: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGetPurchaseTab = (tab: string) => {
    if (isMobile()) {
      navigate('/' + tab.toLowerCase() + '_nft')
    } else {
      dispatch(setPurchaseMode(tab))
    }
  }

  return (
    <AppLayout
      headerStatus="header-status"
      headerClass="home"
      footerStatus="footer-status"
    >
      <section className="players-buy">
        <TabGroup
          defaultTab={'BUY'}
          tabSet={['BUY', 'SELL']}
          getSwitchedTab={handleGetPurchaseTab}
        />
        <BuyNftForm />
      </section>
    </AppLayout>
  )
}

export default BuyNft
