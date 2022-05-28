import React from 'react'
import LinkIcon from '@mui/icons-material/Link'
import { useTranslation } from 'react-i18next'
import { NumberFormat } from '@root/utils/NumberFormat'
import { IPlayerCard as CardProps } from '@root/types'
import { useNavigate } from 'react-router-dom'
import '@assets/css/components/PlayerCard.css'

interface Props {
  card: CardProps
  onBuy: any
  onSell: any
}

const Card: React.FC<Props> = ({ card, onBuy, onSell }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(card.profileLink)
  }

  return (
    <>
      <div className="card" onClick={handleClick}>
        <div className="inside-card">
          <div>{card.ethPrice} ETH</div>
          <div>${NumberFormat(card.price)} USD</div>
        </div>
        <div className="time">
          <div>TIME REMAINING</div>
          <div>{card.time}</div>
        </div>
        <div className="img">
          <img src={card.img} alt="" className="img-radius cache-img" />
        </div>
        <div className="name">{card.name}</div>
        <div className="link">
          <div className="link-icon">
            <LinkIcon />
          </div>
          <a href="" className="link-color">
            Link to Profile
          </a>
        </div>
        <div className="divide"></div>
        <div className="changed-price">
          <div>price change 24h</div>
          <div className="number-color">{card.changedPrice}</div>
        </div>
        <div className="coin-issued">
          <div>coin issued</div>
          <div>{NumberFormat(card.coinIssued)}</div>
        </div>
        <div className="holders">
          <div>holders</div>
          <div className="number-color">{NumberFormat(card.holders)}</div>
        </div>
        {/* ------- ORIGINAL CODE FOR REDIRECTING TO BUY/SELL PAGE ------- */}
        {/* <div className="bottom-part">
          <Link className="navigation-link" to="/buy_nft">
            <div className="buy">{t('buy')}</div>
          </Link>
          <Link className="navigation-link" to="/sell_nft">
            <div className="sell">{t('sell')}</div>
          </Link>
        </div> */}
        {/* ------- CODE FOR OPENING BUY/SELL DIALOG ------- */}
        <div className="bottom-part">
          <div
            className="buy"
            onClick={(e: any) => {
              e.stopPropagation()
              onBuy()
            }}
          >
            {t('buy')}
          </div>
          <div
            className="sell"
            onClick={(e: any) => {
              e.stopPropagation()
              onSell()
            }}
          >
            {t('sell')}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
