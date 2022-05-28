import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PlayerCardData as PlayerItems } from '@root/constants'
import { NumberFormat } from '@utils/NumberFormat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchBar from '@components/SearchBar'
import PlayerItem from './PlayerItem'
import '@assets/css/pages/Wallet.css'

const PlayerCoins: React.FC = props => {
  return (
    <>
      <SearchBar isSwitchEnabled={true} />
      <div className="fixed-content dlg-content">
        {PlayerItems.map((item, index) => (
          <PlayerItem item={item} key={index} index={index} />
        ))}
      </div>
    </>
  )
}

export default PlayerCoins
