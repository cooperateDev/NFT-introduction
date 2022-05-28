import React, { useState } from 'react'
import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { isMobile } from '@utils/helpers'
import CustomizedSwitches from '@components/Form/Switch'
import ToggleSwitch from '@components/Form/ToggleSwitch'

interface Props {
  item: any
  index: number
  isMenu: boolean
  className?: string
}

const NotificationSettingItem: React.FC<Props> = ({
  item,
  index,
  isMenu,
  className,
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [showFormPopup, setShowFormPopup] = useState(false)
  let selectedLanguage = localStorage.getItem('languageName')

  if (selectedLanguage === null) {
    selectedLanguage = 'English'
  }

  const handleClick = (url: string) => {
    if (isMobile() || !Boolean(index)) {
      navigate('/' + url)
    } else {
      setShowFormPopup(true)
    }
  }

  const handleClose = () => {
    setShowFormPopup(false)
  }

  return (
    <div className="notification">
      <div className="notification-title plain">
        <div className="notification-text">{item.title}</div>
        <div className="selected-value-row">
          <div className={`grey-color ${!Boolean(index) && 'green-color'}`}>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettingItem
