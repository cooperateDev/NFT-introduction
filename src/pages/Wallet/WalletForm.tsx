import React, { useEffect, useState } from 'react'
import TabGroup from '@components/TabGroup'
import CreateWallet from './CreateWallet'
import CreateSecret from './CreateSecret'
import MyWallet from './MyWallet'
import PlayerCoins from './PlayerCoins'
import { useDispatch, useSelector } from 'react-redux'
import Nfts from './Nfts'
import { RootState } from '@root/store/rootReducers'
import { getWalletDetails } from '@root/apis/onboarding/authenticationSlice'

const WalletForm: React.FC = () => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('Balance')
  const [isSecretForm, toggleSecretForm] = useState(false)
  const [isWalletOpen, setIsWalletOpen] = useState(false)
  // const isWallet = localStorage.getItem('walletCreated')
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  const { isWalletCreatedSuccess } = authenticationData

  console.log('walFormAuthStar---', authenticationData)
  const loginInfo = localStorage.getItem('loginInfo')

  const handleGetTab = (tab: string) => {
    setActiveTab(tab)
  }
  //  GET_WALLET_API_NOT_TO_BE_USED_NOW
  // React.useEffect(() => {
  //   dispatch(getWalletDetails())
  // }, [])

  useEffect(() => {
    if (activeTab === 'Balance') {
      toggleSecretForm(false)
      if (!authenticationData.userName && loginInfo) setIsWalletOpen(true)
      else setIsWalletOpen(false)
    }
  }, [activeTab])

  const handleSubmit = () => {
    toggleSecretForm(!isSecretForm)
  }
  const handleSecretSubmit = () => {
    toggleSecretForm(!isSecretForm)
    setIsWalletOpen(!isWalletOpen)
  }

  const handleWalletSubmit = () => {
    console.log('wallet created')
  }

  return (
    <section className="wallet-container">
      <div className="fullwidth">
        <TabGroup
          defaultTab={activeTab}
          tabSet={['Balance', 'Player Coins', 'NFT’s']}
          tabClassName="wallet-tab"
          getSwitchedTab={handleGetTab}
        />
      </div>
      {activeTab === 'Player Coins' ? (
        <PlayerCoins />
      ) : activeTab === 'Balance' ? (
        <>
          {isSecretForm && !isWalletCreatedSuccess ? (
            <CreateSecret onSubmit={handleSecretSubmit} />
          ) : // isWalletOpen ||
          //   isWalletCreatedSuccess ||
          //   isWallet ||
          isWalletCreatedSuccess ||
            authenticationData?.userWalletData?.address ? (
            <MyWallet onSubmit={handleWalletSubmit} />
          ) : (
            <CreateWallet onSubmit={handleSubmit} />
          )}
        </>
      ) : (
        <Nfts />
      )}
    </section>
  )
}

export default WalletForm
