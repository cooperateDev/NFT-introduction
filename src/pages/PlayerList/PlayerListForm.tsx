import React, { useEffect, useState } from 'react'
import TabGroup from '@components/TabGroup'
import { PlayerCardData as PlayerItems } from '@root/constants'
import { NumberFormat } from '@utils/NumberFormat'
import SearchBar from '@components/SearchBar'
import '@assets/css/pages/PlayerList.css'

const PlayerListForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [field, setField] = useState('NAME')
  const handleGetTab = (tab: string) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="player-list-container">
      <>
        <div className="fullwidth">
          <TabGroup
            defaultTab={activeTab}
            tabSet={['All', 'New', 'Pro', 'Talent']}
            getSwitchedTab={handleGetTab}
          />
          <SearchBar />
        </div>
        <div className="fixed-content dlg-content">
          <div className="list-header">
            <div
              className={field === 'NAME' ? 'button-hover' : ''}
              onClick={() => setField('NAME')}
            >
              NAME
            </div>
            <div
              className={field === 'MARKET_CAP' ? 'button-hover' : ''}
              onClick={() => setField('MARKET_CAP')}
            >
              MARKET CAP
            </div>
            <div
              className={field === 'PRICE' ? 'button-hover' : ''}
              onClick={() => setField('PRICE')}
            >
              PRICE
            </div>
            <div
              className={field === '24H_CHANGE' ? 'button-hover' : ''}
              onClick={() => setField('24H_CHANGE')}
            >
              24H CHANGE
            </div>
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
                <div className="nft-price">${NumberFormat(item.price)}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  )
}

export default PlayerListForm
