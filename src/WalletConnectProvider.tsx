import React, { useState, useCallback } from 'react'
import Web3Modal, { providers } from 'web3modal'
import { ethers } from 'ethers'

type connectStatus = true | false
// Type and component name conflicted
type ConnectContext = {
  connectStatus: connectStatus
  connect: () => void
  disconnect: () => void
}

export const ConnectContext = React.createContext<ConnectContext>(
  {} as ConnectContext,
)

export const WalletConnectProvider: React.FC = ({ children }) => {
  // const [theme, setTheme] = useState<Theme>('light')
  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light')
  // }

  const [connectStatus, setConnectStatus] = useState(false)

  // wallet connect
  const providerOptions: any = {}
  if (!window.ethereum) {
    providerOptions['custom-metamask'] = {
      display: {
        logo: providers.METAMASK.logo,
        name: 'Install MetaMask',
        description: 'Connect using browser wallet',
      },
      package: {},
      connector: async () => {
        window.open('https://metamask.io')
        throw new Error('MetaMask not installed')
      },
    }
  }

  let web3Modal: any
  if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
      network: 'mainnet', // optional
      cacheProvider: true,
      providerOptions, // required
    })
  }

  const connect = async () => {
    const provider = await web3Modal.connect()
    const web3Provider = new ethers.providers.Web3Provider(provider)
    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()
    console.log('connectTest', address, signer)
    // const balance = await signer.getBalance()
    const balance = 0
    console.log('connectTest', balance)

    localStorage.setItem('loginInfo', address)
    localStorage.setItem(
      'balance',
      (parseInt(balance.toString()) / 1000000000000000000).toFixed(4),
    )
    setConnectStatus(true)
    console.log('connect', connectStatus)
  }

  const disconnect = async () => {
    await web3Modal.clearCachedProvider()
    localStorage.removeItem('loginInfo')
    localStorage.removeItem('balance')
    setConnectStatus(false)
    console.log('disconnect', connectStatus)
  }

  return (
    <ConnectContext.Provider
      value={{ connectStatus, connect, disconnect } as ConnectContext}
    >
      {children}
    </ConnectContext.Provider>
  )
}
