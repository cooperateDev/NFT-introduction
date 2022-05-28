import React, { useEffect, useState, useContext } from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { ConnectContext } from '@root/WalletConnectProvider'
import Home from '@assets/icons/icon/home.png'
import SigninIcon from '@assets/icons/icon/signin.svg'
import Players from '@assets/icons/icon/players.svg'
import NFT from '@assets/icons/icon/nft.svg'
import SigninInActive from '@assets/icons/icon/signinInActive.svg'
import NFTsActive from '@assets/icons/icon/nftsActive.svg'
import { RootState } from '@root/store/rootReducers'
import FooterNav from './FooterNav'
import { useNavigate } from 'react-router-dom'
import { isMobile } from '@utils/helpers'
import {
  showPlayerListForm,
  showSignupForm,
  showWallet,
} from '@root/apis/onboarding/authenticationSlice'
import '@assets/css/layout/Footer.css'

interface Props {
  className?: string
  navigationStatus: boolean
}

const Footer: React.FC<Props> = ({ className, navigationStatus }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [playerStyle, setPlayerStyle] = useState('')
  const [nftsStyle, setNftsStyle] = useState('')
  const [signinStyle, setSigninStyle] = useState('footer-active-signin')
  const [PlayersImg, setPlayersImg] = useState(Players)
  const [NFTsImg, setNFTsImg] = useState(NFT)
  const [SigninIconImg, setSigninIconImg] = useState(SigninIcon)
  const [SignText, setSignText] = useState('sign in')
  const loginInfo = localStorage.getItem('loginInfo')
  const loginId = localStorage.getItem('loginId')

  const { connect } = useContext(ConnectContext)
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  useEffect(() => {
    if (loginInfo !== null) {
      setSigninStyle('footer-inactive-signin')
      setSigninIconImg(SigninInActive)
      setSignText('wallet')
    }
  }, [loginInfo])

  useEffect(() => {
    console.log({ authenticationData })
    if (authenticationData.userName) {
      setSignText('Wallet')
    }
  }, [authenticationData])

  const onClickPlayer = () => {
    if (isMobile()) {
      navigate('/player_list')
    } else {
      dispatch(showPlayerListForm())
    }
  }

  const onClickNFTs = () => {
    setNFTsImg(NFT)
  }

  const onClickSignin = () => {
    if (!loginId && SignText !== 'wallet') {
      // setPlayerStyle('')
      // setNftsStyle('')
      // setSigninStyle('footer-active-signin')
      // setPlayersImg(Players)
      // setNFTsImg(NFT)
      // setSigninIconImg(SigninIcon)
      // connect()
      // setSignText('wallet')
      if (isMobile()) {
        navigate('/signup')
      } else {
        dispatch(showSignupForm())
      }
    } else {
      if (isMobile()) {
        navigate('/wallet')
      } else {
        dispatch(showWallet())
      }
    }
  }

  return (
    <footer
      className={classnames(
        'footer',
        className,
        navigationStatus ? '' : 'navigation-status',
      )}
    >
      <div className="home-icon">
        <img src={Home} alt="" className="home-img" />
      </div>
      <div className="footer-nav">
        <FooterNav
          onClickPlayer={onClickPlayer}
          onClickNFTs={onClickNFTs}
          onClickSignin={onClickSignin}
          playerStyle={playerStyle}
          nftsStyle={nftsStyle}
          signinStyle={signinStyle}
          PlayersImg={PlayersImg}
          NFTsImg={NFTsImg}
          SigninIconImg={SigninIconImg}
          SignText={t(SignText)}
        />
      </div>
    </footer>
  )
}

export default Footer
