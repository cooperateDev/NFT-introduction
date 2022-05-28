import SearchBar from '@components/SearchBar'
import { NftCardData as NftItems } from '@root/constants'
import NftCard from '../../../components/Card/NftCard'

const Nfts = () => (
  <>
    <SearchBar />
    <div className="fixed-content dlg-content">
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
  </>
)

export default Nfts
