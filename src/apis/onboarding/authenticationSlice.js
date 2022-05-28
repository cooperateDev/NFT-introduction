import { createSlice } from '@reduxjs/toolkit'
import { asyncLocalStorage } from '@utils/helpers'

const loginId = localStorage.getItem('loginId')

const initialState = {
  isAuthenticated: false,
  loader: false,
  isEmailVerified: false,
  isSentEmailVerificationMail: false,
  companyDetails: {},
  refreshingToken: false,
  userId: '',
  email: '',
  name: '',
  userType: '',
  isOtpSent: false,
  activeTab: '',
  isAccessToken: '',
  isRefreshToken: '',
  userName: loginId,
  isSignupFormVisible: false,
  isWalletFormVisible: false,
  isPlayerListFormVisible: false,
  defaultTab: 'Register',
  defaultWalletTab: 'Balance',
  isLoginError: '',
  isGetWalletError: '',
  isSignupError: '',
  isOtpLoginError: '',
  isOtpLoginSuccess: '',
  otpAttempts: 3,
  isEmailResendError: '',
  isEmailResent: '',
  passwordResetError: '',
  passwordResetSuccess: '',
  resetPasswordSuccess: '',
  resetPasswordError: '',
  isVerifyEmailSuccess: '',
  isVerifyEmailError: '',
  isWalletCreatedSuccess: '',
  isWalletCreatedError: '',
  stateAccessToken: '',
  userWalletData: '',
  isCreateWalletDisabled: false,
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state, action) {
      state.loader = true
      state.isLoginError = ''
    },
    loginSuccess(state, action) {
      state.loader = false
      state.isEmailVerified = action.payload.is_email_verified
      state.isAuthenticated = action.payload.is_email_verified
      state.companyDetails = action.payload.company_details
      state.userType = action.payload.type
      state.isOtpSent = true
    },
    emailConfirmReset(state) {
      state.isEmailVerified = true
    },
    loginFailure(state, action) {
      const { payload } = action
      state.loader = false
      state.isAuthenticated = false
      state.isOtpSent = false
      state.userName = ''
      state.isLoginError = payload.response.data.detail
    },
    loginWithOtp(state, action) {
      state.loader = true
      state.isOtpLoginError = ''
    },
    loginWithOtpSuccess(state, action) {
      const { payload } = action
      state.loader = false
      state.isEmailVerified = action.payload.is_email_verified
      state.isAuthenticated = action.payload.is_email_verified
      state.isOtpLoginSuccess = payload.message
      state.isOtpLoginError = ''
      state.otpAttempts = 3
      state.stateAccessToken = payload.data.access
      state.userName = payload.data.user
      localStorage.setItem('loginId', payload.data.user)
      localStorage.setItem('accessToken', payload.data.access)
    },
    getWalletDetails(state) {
      state.loader = true
      state.isGetWalletError = ''
      state.isCreateWalletDisabled = false
    },
    getWalletSuccess(state, action) {
      state.loader = false
      state.userWalletData = action.payload.message
      state.isGetWalletError = ''
    },
    getWalletFailure(state, action) {
      console.log('GWF----', action.payload.response)
      state.loader = false
      state.isWalletCreatedSuccess = ''
      if (action.payload.response?.status === 500) {
        state.isGetWalletError = 'Network Error'
        state.isCreateWalletDisabled = true
      } else {
        if (action.payload.response?.status === 404) {
          state.isGetWalletError = ''
        } else {
          state.isGetWalletError = 'Some error occured'
        }
      }
    },
    loginWithOtpFailure(state, action) {
      const { payload } = action
      state.loader = false
      state.isAuthenticated = false
      state.userName = ''
      state.otpAttempts = state.otpAttempts - 1
      state.isOtpLoginError = payload.response.data.detail
    },
    signUp(state, action) {
      state.loader = true
      state.isSignupError = ''
    },
    signUpSuccess(state, action) {
      state.loader = false
      state.isSentEmailVerificationMail = true
      state.email = action.payload
      state.isSignupError = ''
    },
    closeEmailVerification(state) {
      state.isSentEmailVerificationMail = false
      state.activeTab = 'Login'
    },
    resetSentEmailVerification(state) {
      state.loader = false
      state.isSentEmailVerificationMail = false
      state.isOtpSent = false
      state.defaultTab = 'Register'
    },
    signUpFailure(state, action) {
      const { payload } = action
      state.loader = false
      state.isSignupError = payload.response.data.message
    },
    forgotPassword(state, action) {
      state.loader = true
      state.resetPasswordError = ''
    },
    forgotPasswordSuccess(state, action) {
      state.loader = false
      state.resetPasswordError = ''
      state.resetPasswordSuccess = action.payload.message
    },
    forgotPasswordFailure(state, action) {
      state.loader = false
      state.resetPasswordError = action.payload.response.data.message
    },
    resetFormPassword(state) {
      state.resetPasswordError = ''
      state.resetPasswordSuccess = ''
    },
    logout(state) {
      state.loader = false
      state.isAuthenticated = false
      state.isOtpSent = false
      state.userName = ''
      state.isEmailVerified = false
      state.isSentEmailVerificationMail = false
      state.companyDetails = {}
      state.refreshingToken = false
      state.userId = ''
      state.email = ''
      state.name = ''
      state.userType = ''
      state.activeTab = ''
      state.isAccessToken = ''
      state.isRefreshToken = ''
      state.isSignupFormVisible = false
      state.defaultTab = 'Register'
      state.isLoginError = ''
      state.isSignupError = ''
      state.isOtpLoginError = ''
      state.isOtpLoginSuccess = ''
      state.otpAttempts = 3
    },
    logoutSuccess(state) {
      state.loader = false
      state.isAuthenticated = false
    },
    logoutFailure(state) {
      state.loader = false
    },

    //   state.resetPasswordError = ''
    //   state.resetPasswordSuccess = action.payload.message
    // },
    // forgotPasswordFailure(state, action) {
    //   state.loader = false
    //   state.resetPasswordError = action.payload.response.data.message

    resetPassword(state, action) {
      state.loader = true
    },
    resetPasswordSuccess(state, action) {
      state.loader = false
      state.passwordResetError = ''
      state.passwordResetSuccess = action.payload.message
    },
    resetPasswordFailure(state, action) {
      state.loader = false
      state.passwordResetError = action.payload.response.data.message
    },
    setLoading(state, action) {
      state.loader = action.payload
    },
    changePassword(state) {
      state.loader = true
    },
    emailConfirmation(state) {
      state.loader = true
    },
    resendEmail(state, action) {
      state.loader = true
    },
    resendEmailSuccess(state, action) {
      state.loader = false
      if (action.payload.success) {
        state.isEmailResent = action.payload.message
      } else {
        state.isEmailResendError = action.payload.message
      }
    },
    resendEmailFailure(state, action) {
      const { payload } = action
      state.loader = false
      state.isEmailResendError = payload.response.data.message
    },

    verifyEmail(state, action) {
      state.loader = true
    },
    verifyEmailSuccess(state, action) {
      state.loader = false
      localStorage.setItem('loginId', action.payload.email)
      localStorage.setItem('accessToken', action.payload.data.accessToken)
      state.refreshingToken = false
      state.isVerifyEmailSuccess = true
      state.isVerifyEmailError = ''
      state.isAccessToken = action.payload.data.access
      state.isRefreshToken = action.payload.data.refresh
      state.userName = action.payload.email
      // state.userName =
      //   action.payload.data.user || action.payload.email || ''
      // asyncLocalStorage
      //   .setItem('accessToken', action.payload.data.accessToken)
      //   .then(() => {
      //     state.refreshingToken = false
      //     state.isVerifyEmailSuccess = true
      //     state.isVerifyEmailError = ''
      //     state.isAccessToken = action.payload.data.data.access
      //     state.isRefreshToken = action.payload.data.data.refresh
      //     state.userName =
      //       action.payload.data.user || action.payload.data.email || ''
      //   })
    },
    verifyEmailFailure(state, action) {
      const { payload } = action
      state.loader = false
      state.isVerifyEmailError = payload.response.data.message
    },

    resendEmailConfirmation(state) {
      state.loader = true
    },
    refreshToken(state) {
      state.refreshingToken = true
    },
    refreshTokenSuccess(state, action) {
      state.refreshingToken = false
      state.isAccessToken = action.payload.data.access
      state.isRefreshToken = action.payload.data.refresh
      state.userName =
        action.payload.data.user || action.payload.data.email || ''
    },
    refreshTokenFailure(state) {
      state.refreshingToken = false
      state.isAccessToken = ''
      state.isRefreshToken = ''
      state.userName = ''
    },
    getUserDetails(state) {
      state.refreshingToken = false
    },
    showSignupForm(state) {
      state.isSignupFormVisible = !state.isSignupFormVisible
      state.isOtpSent = false
      state.isSentEmailVerificationMail = false
      state.defaultTab = 'Register'
    },
    showWallet(state) {
      state.isWalletFormVisible = !state.isWalletFormVisible
      state.defaultWalletTab = 'Balance'
    },
    showPlayerListForm(state) {
      state.isPlayerListFormVisible = !state.isPlayerListFormVisible
      state.defaultWalletTab = 'All'
    },
    getUserDetailsSuccess(state, action) {
      const {
        type,
        name,
        email,
        user_id: userId,
        is_email_verified: isEmailVerified,
      } = action.payload

      return {
        ...state,
        name,
        email,
        userId,
        userType: type,
        isEmailVerified,
        refreshingToken: false,
      }
    },
    getUserDetailsFailure(state) {
      state.refreshingToken = false
    },
    createWallet(state, action) {
      state.loader = true
      state.isCreateWalletError = ''
    },
    createWalletSuccess(state, action) {
      console.log('wallet_suc--', action)
      // localStorage.setItem('walletCreated', 'wallet002')
      state.loader = false
      state.isWalletCreatedSuccess = action.payload.message
    },
    createWalletFailure(state, action) {
      const { payload } = action
      state.loader = false
      localStorage.removeItem('walletCreated')
      state.isWalletCreatedError = ''
    },
    //---------------------------------------- BUY_NFT_SLICE_METHODS----------------------------------------//
    changeNftValue(state, action) {
      state.loadingBuy = true
    },
    changeNftValueSuccess(state, action) {
      console.log('wallet_suc--', action)
      state.loadingBuy = false
    },
    changeNftValueFailure(state, action) {
      const { payload } = action
      state.loadingBuy = false
    },
  },
})

export const {
  login,
  loginSuccess,
  loginFailure,
  loginWithOtp,
  loginWithOtpSuccess,
  loginWithOtpFailure,
  getWalletDetails,
  getWalletSuccess,
  getWalletFailure,
  createWallet,
  createWalletSuccess,
  createWalletFailure,
  signUp,
  signUpSuccess,
  signUpFailure,
  resendEmail,
  resendEmailSuccess,
  resendEmailFailure,
  forgotPassword,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPassword,
  resetPasswordSuccess,
  resetPasswordFailure,
  verifyEmail,
  verifyEmailSuccess,
  verifyEmailFailure,
  logout,
  logoutFailure,
  logoutSuccess,
  setLoading,
  changePassword,
  emailConfirmation,
  resendEmailConfirmation,
  resetSentEmailVerification,
  emailConfirmReset,
  closeEmailVerification,
  refreshToken,
  refreshTokenSuccess,
  refreshTokenFailure,
  getUserDetails,
  getUserDetailsSuccess,
  getUserDetailsFailure,
  showSignupForm,
  showWallet,
  showPlayerListForm,
  resetFormPassword,
  changeNftValue,
  changeNftValueSuccess,
  changeNftValueFailure,
} = authenticationSlice.actions
export default authenticationSlice.reducer
