import purchaseReducer from '@root/apis/purchase/purchaseSlice'
import authentication from '@root/apis/onboarding/authenticationSlice'
import wallet from '@root/apis/wallet/walletSlice'

export const rootReducer = {
  authentication,
  purchaseReducer,
  wallet,
}

export type RootState = ReturnType<typeof rootReducer>
