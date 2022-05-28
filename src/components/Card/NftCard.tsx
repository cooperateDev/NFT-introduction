import React, { useState, useEffect } from 'react'
import SubmitButton from '@components/SubmitButton'
import { INftCard } from '@root/types'
import { useTranslation } from 'react-i18next'
import '@assets/css/components/NftCard.css'
interface Props {
  nft: INftCard
  isBidEnabled?: boolean | null
  showOwnerInfo?: boolean | null
}

const NftCard: React.FC<Props> = ({ nft, isBidEnabled, showOwnerInfo }) => {
  const { t } = useTranslation()
  let countDown: any = null
  const countDownDate = new Date('Jan 5, 2024 15:37:25').getTime()
  const [state, setState] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })
  const updateState = (data: object) => {
    setState(state => ({ ...state, ...data }))
  }

  const initCountDown = () => {
    countDown = setInterval(function () {
      const now = new Date().getTime()
      const distance = countDownDate - now
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(countDown)
        updateState({
          hours: '00',
          minutes: '00',
          seconds: '00',
        })
      } else {
        updateState({
          hours,
          minutes,
          seconds,
        })
      }
    }, 1000)
  }

  useEffect(() => {
    initCountDown()
    return () => {
      clearInterval(countDown)
    }
  }, [])

  return (
    <div className="nft-card">
      <div className="nft">
        <div className="nft-image-cover">
          <img src={nft.img} alt="" className="nft-image" />
        </div>
      </div>
      <div className="second-part">
        {isBidEnabled && (
          <div className="fullwidth">
            <div className="nft-bid-info-header">
              <div>Ending in</div>
              <div>Current Bid</div>
            </div>
            <div className="nft-bid-info-body">
              <div>
                {state.hours}h : {state.minutes}m : {state.seconds}s
              </div>
              <div>2.54</div>
            </div>
          </div>
        )}
        <div className="nft-name">{nft.name}</div>
        <div className="nft-title">{nft.title}</div>
        <div className="nft-number">#{nft.number}</div>
        {isBidEnabled && (
          <SubmitButton
            isDisabled={false}
            title={t('Place Bid')}
            className="nft-bid-button"
            onPress={() => console.log('')}
          />
        )}
        {showOwnerInfo && (
          <>
            <div className="nft-section-divided"></div>
            <div className="nft-owner-color">
              <div>owner: </div>
              <div className="owner-value">{nft.owner}</div>
            </div>
            <div className="nft-2-mint-data">
              <div>Mint Date:</div>
              <div>{nft.mintDate}</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default NftCard
