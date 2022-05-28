import React from 'react'
import { AppLayout } from '@components/index'
import PlayerListForm from './PlayerListForm'

const Player: React.FC = () => {
  return (
    <AppLayout headerStatus="header-status" headerClass="home">
      <PlayerListForm />
    </AppLayout>
  )
}

export default Player
