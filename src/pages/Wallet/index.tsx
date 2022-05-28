import React from 'react'
import { AppLayout } from '@components/index'
import WalletForm from './WalletForm'
import '@assets/css/pages/Wallet.css'

const Wallet: React.FC = () => {
  return (
    // <AppLayout
    //   headerStatus="header-status"
    //   headerClass="home"
    //   footerStatus="footer-status"
    // >
    <AppLayout className="notifications p-0" footerStatus="footer-status">
      <WalletForm />
    </AppLayout>
  )
}

export default Wallet
