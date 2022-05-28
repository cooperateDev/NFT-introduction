import React from 'react'
import { AppLayout } from '@components/index'
import PlayerForm from './PlayerForm'

const Player: React.FC = () => {
  return (
    <AppLayout headerStatus="header-status" headerClass="home">
      <PlayerForm />
    </AppLayout>
  )
}

export default Player
