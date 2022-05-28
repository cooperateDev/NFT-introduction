import React, { useEffect, useState } from 'react'
import TabGroup from '@components/TabGroup'
import Profile from './Profile'
import Nfts from './Nfts'
import Drafts from './Drafts'
import Supporters from './Supporters'
import SearchBar from '@components/SearchBar'
import '@assets/css/pages/Player.css'

const PlayerDetailForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Profile')
  const handleGetTab = (tab: string) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="player-container">
      <>
        <div className="tab-bar-container">
          <TabGroup
            defaultTab={activeTab}
            tabSet={['Profile', `NFT's`, 'Drafts', 'Supporters']}
            getSwitchedTab={handleGetTab}
          />
        </div>
        <div className="search-bar-container">
          {activeTab !== 'Profile' && <SearchBar />}
        </div>
        {activeTab === 'Profile' && <Profile />}
        {activeTab === `NFT's` && <Nfts />}
        {activeTab === 'Drafts' && <Drafts />}
        {activeTab === 'Supporters' && <Supporters />}
      </>
    </section>
  )
}

export default PlayerDetailForm
