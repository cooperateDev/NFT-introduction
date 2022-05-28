import React from 'react'
import { useTranslation } from 'react-i18next'

import Carousel from '@components/Carousel'
import { NftCardData } from '@root/constants'
import NftCard from '@components/Card/NftCard'

const items: JSX.Element[] = []
NftCardData.map((item, index) =>
  items.push(<NftCard nft={item} isBidEnabled={true} key={index} />),
)

const NewNFTs: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="new-nfts">
      <div>
        <div className="blog-title">{t('New NFT’s')}</div>
        <div className="fullwidth flex-center">
          <div className="carousel">
            <Carousel items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewNFTs
