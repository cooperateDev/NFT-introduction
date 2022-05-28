import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { NumberFormat } from '@utils/NumberFormat'
import { Link } from 'react-router-dom'
import '@assets/css/pages/Wallet.css'

interface playerItem {
  img: string
  name: string
  price: number
}

interface Props {
  index?: number
  item: playerItem
}

const PlayerItem: React.FC<Props> = props => {
  const { index, item } = props
  return (
    <div
      key={index}
      className={`nft-item ${!Boolean(index) ? 'nft-first-item' : ''}`}
    >
      <div className="nft-image-section">
        <MoreVertIcon />
        <div className="image-border">
          <img src={item.img} alt="" className="nft-image" />
        </div>
      </div>
      {!Boolean(index) ? (
        <div className="nft-name-section nft-first-name-section">
          <Link to="/staked" className="stake-link">
            <div className="nft-name select_nft_stake">stake / unstake</div>
          </Link>
          <div className="select_nft_cancel">cancel</div>
        </div>
      ) : (
        <div className="nft-name-section">
          <div className="nft-name">{item.name}</div>
          <div>
            <div>
              <span className="green-color">
                {NumberFormat(item.price)} / {''}
              </span>
              {NumberFormat(item.price)}
            </div>
            <div className="nft-price">${NumberFormat(item.price)}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlayerItem
