import { all, call, put, takeLatest } from 'redux-saga/effects'
import { setPurchaseMode } from './purchaseSlice'

function* createPurchaseMode(action: any) {
  try {
    yield put(setPurchaseMode('buy'))
  } catch (e) {
    yield put(setPurchaseMode('sell'))
  }
}

export default function* rootSaga() {
  yield all([setPurchaseMode])
}
