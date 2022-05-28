import React from 'react'
import { useTranslation } from 'react-i18next'

import { NumberFormat } from '@root/utils/NumberFormat'
import { IPlayerCard as CardProps } from '@root/types'
import SubmitButton from '@components/SubmitButton'

interface Props {
  card: CardProps
  onBuy: any
  onStake: any
  onSell: any
  onChartView: any
}

const PlayerInfo: React.FC<Props> = ({
  card,
  onBuy,
  onStake,
  onSell,
  onChartView,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="player-card">
        <div className="fixed-content">
          <div className="img">
            <img src={card.img} alt="" className="img-radius" />
            <div
              className="chart-view-button"
              onClick={() => onChartView()}
            ></div>
          </div>
          <div className="name">{card.name}</div>
          <div className="player-cost">
            <span className="green-color">{card.ethPrice} ETH</span>
            <span>/</span>
            <span>${NumberFormat(card.price)} USD</span>
          </div>
          <div className="player-stake">
            <span>YOUR STAKE: </span>
            <span className="green-color">{10.23}</span>
          </div>
          <div className="divide"></div>
          <div className="profile-info">
            <div>COINS IN CIRCULATION:</div>
            <div className="green-color">{NumberFormat(card.coinIssued)}</div>
          </div>
          <div className="profile-info">
            <div>MECARREIRA MARKET VALUE:</div>
            <div>$10,000</div>
          </div>
          <div className="changed-price">
            <div>COIN ISSUE DATE:</div>
            <div className="green-color">24.02.22</div>
          </div>
          <div className="profile-info">
            <div>NFT'S ISSUED:</div>
            <div className="green-color">6978</div>
          </div>
          <div className="button-line">
            <SubmitButton
              isDisabled={false}
              title={'Buy'}
              className="button-box"
              onPress={onBuy}
            />
            <SubmitButton
              isDisabled={true}
              title={'Stake Coin'}
              className="button-box"
              onPress={onBuy}
            />
            <SubmitButton
              isDisabled={false}
              title={'Sell'}
              className="button-box"
              onPress={onSell}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerInfo
