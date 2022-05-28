import React from 'react'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

interface Props {
  onClickPlayer: any
  onClickNFTs: any
  onClickSignin: any
  playerStyle: string
  nftsStyle: string
  signinStyle: string
  PlayersImg: any
  NFTsImg: any
  SigninIconImg: any
  SignText: string
}

const FooterNav: React.FC<Props> = ({
  onClickPlayer,
  onClickNFTs,
  onClickSignin,
  playerStyle,
  nftsStyle,
  signinStyle,
  PlayersImg,
  NFTsImg,
  SigninIconImg,
  SignText,
}) => {
  const { t } = useTranslation()

  return (
    <div className="footer-item-box">
      <div
        className={classnames('footer-nav-item', playerStyle)}
        onClick={onClickPlayer}
      >
        <img src={PlayersImg} alt="" />
        {t('players')}
      </div>
      <div
        className={classnames('footer-nav-item', nftsStyle)}
        onClick={onClickNFTs}
      >
        <img src={NFTsImg} alt="" />
        NFTS
      </div>
      <div
        className={classnames('footer-nav-item', signinStyle)}
        onClick={onClickSignin}
      >
        <img src={SigninIconImg} alt="" />
        {t(SignText)}
      </div>
    </div>
  )
}

export default FooterNav
