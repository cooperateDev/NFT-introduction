import { PlayerCardData as PlayerItems } from '@root/constants'
import { NumberFormat } from '@utils/NumberFormat'

const Supporters = () => {
  return (
    <div className="fixed-content">
      <div className="list-header">
        <div>Address</div>
        <div>Amount Staked</div>
      </div>
      {PlayerItems.map((item, index) => (
        <div key={index} className="nft-item">
          <div className="nft-address-section">
            <div>0x3486d8df...</div>
          </div>
          <div className="nft-price-section">
            <div>{NumberFormat(item.price)}</div>
            <div className="nft-price">${NumberFormat(item.price)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Supporters
