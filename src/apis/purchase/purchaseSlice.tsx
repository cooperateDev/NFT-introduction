import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader: false,
  purchaseAction: '',
  showPurchaseForm: false,
}

const purchaseSlice = createSlice({
  name: 'capacity',
  initialState,
  reducers: {
    setPurchaseMode(state, action) {
      state.purchaseAction = action.payload
    },
    setPurchaseShow(state, action) {
      state.showPurchaseForm = action.payload
    },
  },
})

export const { setPurchaseMode, setPurchaseShow } = purchaseSlice.actions
export default purchaseSlice.reducer
