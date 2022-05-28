import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import SubmitButton from '@components/SubmitButton'
import IosShareIcon from '@mui/icons-material/IosShare'
import '@assets/css/pages/Wallet.css'
import BottomPopup from '@components/BottomPopup'
import Send from './Send'
import PassPhrase from './PassPhrase'
import Deposit from './Deposit'
import { isMobile } from '@utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getWalletDetails } from '@root/apis/onboarding/authenticationSlice'
import { RootState } from '@root/store/rootReducers'
interface Props {
  onSubmit: any
}

const MyWallet: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [fixedRate, setFixedRate] = useState('0.00')

  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )

  const {
    loader,
    userWalletData: { USDBalance, address, balance, exchangeRateData },
  } = authenticationData

  useEffect(() => {
    console.log({ exchangeRateData })
    if (exchangeRateData) {
      const rate = parseFloat(exchangeRateData.rate).toFixed(3)
      setFixedRate(rate)
    }
  }, [exchangeRateData])

  //  GET_WALLET_API_NOT_TO_BE_USED_NOW
  // React.useEffect(() => {
  //   dispatch(getWalletDetails())
  // }, [])

  const handleRefreshBalance = (event: any) => {
    event.preventDefault()
    // dispatch(getWalletDetails())
  }

  return (
    <div
      className={classnames(
        'purchase-container wallet-wrapper',
        isMobile() ? 'mobile-wrapper' : '',
      )}
    >
      {loader ? (
        <div className="balance-progress">
          <div
            className={classnames(
              'loading-spinner-container mb-40 mt-40',
              'show',
            )}
          >
            <div className="loading-spinner">
              <div className="spinner__circle">
                <div className="spinner__circle-gradient"></div>
                <div className="spinner__circle-inner"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="balance-card">
            <h2 className="wallet-heading total-balance">$ {USDBalance} USD</h2>
            <p className="wallet-text eth-amt">{fixedRate} MATIC</p>
            <div className="balance-control-wrapper">
              <p onClick={handleRefreshBalance}>Refresh</p>
            </div>
          </div>
          <div className="wallet-btn-container">
            <SubmitButton
              isDisabled={false}
              title={'Buy'}
              className="wallet-btn"
              onPress={() => console.log('')}
            />
            <SubmitButton
              isDisabled={false}
              title={'Send'}
              className="wallet-btn"
              onPress={() => console.log('')}
            />
            <SubmitButton
              isDisabled={false}
              title={'Deposit'}
              className="wallet-btn"
              onPress={() => console.log('')}
            />
          </div>
          <div className="wallet-text export-key-text">
            {' '}
            <IosShareIcon />
            <span>Export private key</span>
          </div>
        </>
      )}
    </div>
  )
}

export default MyWallet
