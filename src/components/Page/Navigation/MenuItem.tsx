import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { isMobile } from '@utils/helpers'
import DialogBox from '@components/DialogBox'
import ChangePasswordForm from '@pages/Onboarding/ChangePassword/ChangePasswordForm'

interface Props {
  item: any
  index: number
  isMenu: boolean
  className?: string
}

const MenuItem: React.FC<Props> = ({ item, index, isMenu, className }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [showFormPopup, setShowFormPopup] = useState(false)
  const [itemHovered, setItemHovered] = useState(false)
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

  const handleClose = (event: any) => {
    event.stopPropagation()
    setShowFormPopup(false)
  }

  const toggleItemFocused = (isHover: boolean) => {
    setItemHovered(isHover)
  }

  return (
    <div className="notification">
      <div
        className={classnames('notification-title', className)}
        onClick={() => handleClick(item.url)}
        onMouseEnter={() => toggleItemFocused(true)}
        onMouseLeave={() => toggleItemFocused(false)}
      >
        <>
          <DialogBox
            isOpen={showFormPopup}
            onClose={handleClose}
            contentClass="onboarding-popup"
          >
            {index === 1 && <ChangePasswordForm />}
          </DialogBox>
          <div
            className={classnames(
              `link-title ${!Boolean(index) && 'notification-title-color'}`,
              itemHovered ? 'focussed' : '',
            )}
            // onClick={() => handleClick(item.url)}
          >
            {t(item.title)}
          </div>
        </>
        <div className="selected-value-row">
          {!Boolean(index) && isMenu && (
            <div className="selected-value active">{selectedLanguage}</div>
          )}
          <div className={`grey-color ${!Boolean(index) && 'green-color'}`}>
            <ArrowForwardIosIcon fontSize="small" />
          </div>
        </div>
      </div>

      <div className="notification-content">{item.content}</div>
      <div className="notification-date">{item.date}</div>
    </div>
  )
}

export default MenuItem
