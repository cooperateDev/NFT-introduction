import React from 'react'
import { AppLayout } from '@components/index'
import CoinBoard from './CoinBoard'

const PlayerDashboard: React.FC = () => {
  return (
    <AppLayout
      headerStatus="header-status"
      headerClass="home"
      footerStatus="footer-status"
    >
      <CoinBoard />
    </AppLayout>
  )
}

export default PlayerDashboard
