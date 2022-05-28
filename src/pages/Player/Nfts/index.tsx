import { NftCardData as NftItems, TABULET_MAX_WIDTH } from '@root/constants'
import NftCard from '../../../components/Card/NftCard'

const Nfts = () => (
  <>
    {window.innerWidth <= TABULET_MAX_WIDTH ? (
      <div className="fixed-content">
        <div className="nft-line">
          <div className="nft-column">
            {NftItems.map((item, index) => {
              return index % 2 === 0 && <NftCard nft={item} key={index} />
            })}
          </div>
          <div className="nft-column">
            {NftItems.map((item, index) => {
              return index % 2 === 1 && <NftCard nft={item} key={index} />
            })}
          </div>
        </div>
      </div>
    ) : (
      <div className="nft-line nft-line-ex">
        <div className="nft-column">
          {NftItems.map((item, index) => {
            return index % 4 === 0 && <NftCard nft={item} key={index} />
          })}
        </div>
        <div className="nft-column">
          {NftItems.map((item, index) => {
            return index % 4 === 1 && <NftCard nft={item} key={index} />
          })}
        </div>
        <div className="nft-column">
          {NftItems.map((item, index) => {
            return index % 4 === 2 && <NftCard nft={item} key={index} />
          })}
        </div>
        <div className="nft-column">
          {NftItems.map((item, index) => {
            return index % 4 === 3 && <NftCard nft={item} key={index} />
          })}
        </div>
      </div>
    )}
  </>
)

export default Nfts
