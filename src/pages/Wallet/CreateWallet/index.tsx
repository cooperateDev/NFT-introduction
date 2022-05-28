import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import '@assets/css/pages/Wallet.css'
import { isMobile } from 'web3modal'
import { useSelector } from 'react-redux'
import { RootState } from '@root/store/rootReducers'

interface Props {
  onSubmit: any
}

const CreateWallet: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation()
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  const { loader, isGetWalletError, isCreateWalletDisabled } =
    authenticationData

  return (
    // <div className="purchase-container wallet-wrapper">
    <div
      className={classnames(
        'purchase-container wallet-wrapper',
        isMobile() ? 'mobile-wrapper' : '',
      )}
    >
      <h2 className="wallet-heading mt-40">
        First create a wallet to buy or receive crypto
      </h2>
      <p className="wallet-text">
        Your wallet is protected by a secret.
        <br />
        Only you have access
      </p>
      <div
        className={classnames(
          'button-box',
          isCreateWalletDisabled ? 'disabled' : '',
          loader ? 'hidden' : '',
        )}
        onClick={onSubmit}
      >
        {t('create wallet')}
      </div>
      <div
        className={classnames(
          'loading-spinner',
          'wallet-waiting',
          !loader ? 'hidden' : '',
        )}
      >
        <div className="spinner__circle">
          <div className="spinner__circle-gradient"></div>
          <div className="spinner__circle-inner"></div>
        </div>
        <p>Fetching wallet status...</p>
      </div>
      {isGetWalletError && (
        <div className="input-feedback">{isGetWalletError}</div>
      )}
    </div>
  )
}

export default CreateWallet
