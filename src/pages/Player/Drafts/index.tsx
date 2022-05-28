import { PlayerCardData as PlayerItems } from '@root/constants'
import { NumberFormat } from '@utils/NumberFormat'

const Drafts = () => {
  return (
    <div className="fixed-content">
      <div className="list-header">
        <div>Player</div>
        <div>Amount Drafted</div>
      </div>
      {PlayerItems.map((item, index) => (
        <div key={index} className="nft-item">
          <div className="nft-image-section">
            <div className="image-border">
              <img src={item.img} alt="" className="nft-image" />
            </div>
            <div className="nft-name">{item.name}</div>
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

export default Drafts
