import { all } from 'redux-saga/effects'
import PurchaseSaga from '@root/apis/purchase/purchaseApi'
import AuthenticationSaga from '@root/apis/onboarding/authenticationApi'
import walletSaga from '@root/apis/wallet/walletApi'

// Here you can include all the saga which you write for components

export default function* rootSaga() {
  yield all([PurchaseSaga()])
  yield all([AuthenticationSaga()])
  yield all([walletSaga()])
}
