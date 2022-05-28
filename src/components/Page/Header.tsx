import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'

import { AddressFormat } from '@root/utils/AddressFormat'
import SearchInput from '@components/Form/SearchInput'
import { AppLogo, Container } from '..'
import { RootState } from '@root/store/rootReducers'
import Logo from '@assets/images/logo-min.png'
import '@assets/css/layout/Header.css'

interface Props {
  className?: string
  navigationStatus: boolean
  headerClassName?: string
}

const Header: React.FC<Props> = ({
  className,
  navigationStatus,
  headerClassName,
}) => {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  const [isSearchEnabled, setSearchEnabled] = useState(false)
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )

  const handleGoBack = () => {
    navigate(-1)
  }

  let loginInfo = localStorage.getItem('loginInfo')
  const loginId = localStorage.getItem('loginId')

  if (loginInfo !== null) {
    loginInfo = AddressFormat(loginInfo, 10)
  }
  // if (loginId !== null) {
  //   loginId = AddressFormat(loginId, 10)
  // }
  const handleClose = () => {
    setSearchEnabled(false)
  }

  const handleSearch = () => {
    setSearchEnabled(true)
  }

  const openSettings = () => {
    navigate('/notifications_settings')
  }

  return (
    <header>
      <Container>
        {pathname === '/' || pathname === '/staking' ? (
          <div
            className={classnames(
              'header',
              // navigationStatus ? '' : 'navigation-status',
              headerClassName,
            )}
          >
            <Link to="/notifications">
              <NotificationsOutlinedIcon className="icon-color main-menu-btn" />
            </Link>
            <ArrowBackIcon className="sub-menu-btn" />
            {authenticationData.userName ? (
              <div className="wallet-address">
                {loginId ? (
                  <h6 className="header-title">{loginId}</h6>
                ) : (
                  <h6 className="header-title">
                    {t('wallet')} ({loginInfo})
                  </h6>
                )}
              </div>
            ) : (
              <AppLogo className={classnames(className)} />
            )}
            <Link to="/menu">
              <DehazeOutlinedIcon className="icon-color main-menu-btn" />
            </Link>
            <CloseIcon className="icon-color sub-menu-btn" />
          </div>
        ) : pathname === '/notifications' ? (
          <div
            className={classnames(
              'header',
              authenticationData.userName ? 'user-header' : '',
            )}
          >
            <ArrowBackIcon
              className="icon-color"
              onClick={() => handleGoBack()}
            />
            {Boolean(loginInfo) || Boolean(loginId) ? (
              <div className="wallet-address">
                <h6 className="header-title">
                  {t('wallet')} ({loginInfo || loginId})
                </h6>
              </div>
            ) : (
              <Link to="/">
                <img src={Logo} alt="" className="logo-img" />
              </Link>
            )}
            <SettingsIcon
              className="icon-color"
              onClick={() => openSettings()}
            />
          </div>
        ) : pathname === '/language' || pathname === '/menu' ? (
          <div className="header menu-language-background">
            {isSearchEnabled ? (
              <SearchInput
                type="text"
                placeholder="Please enter the search words."
                className="buy-search in-menu-search"
                onChange={() => {
                  return
                }}
                onClose={handleClose}
              />
            ) : (
              <SearchIcon className="icon-color" onClick={handleSearch} />
            )}
            {!isSearchEnabled &&
              (Boolean(loginInfo) || Boolean(loginId) ? (
                <div className="wallet-address">
                  {loginInfo ? (
                    <h6 className="header-title">
                      {t('wallet')} ({loginInfo})
                    </h6>
                  ) : (
                    <h6 className="header-title">{loginId}</h6>
                  )}
                </div>
              ) : (
                <Link to="/">
                  <img src={Logo} alt="" className="logo-img" />
                </Link>
              ))}
            {!isSearchEnabled && (
              <CloseIcon
                className="icon-color"
                onClick={() => handleGoBack()}
              />
            )}
          </div>
        ) : (
          <div className="header">
            <ArrowBackIcon
              className="icon-color"
              onClick={() => handleGoBack()}
            />
            {Boolean(loginInfo) ? (
              <div className="wallet-address">
                <h6 className="header-title">
                  {t('wallet')} ({loginInfo})
                </h6>
              </div>
            ) : (
              <Link to="/">
                <img src={Logo} alt="" className="logo-img" />
              </Link>
            )}
            <CloseIcon className="icon-color" onClick={() => handleGoBack()} />
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
