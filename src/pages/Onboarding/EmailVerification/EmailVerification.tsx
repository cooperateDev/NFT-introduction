import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SubmitButton from '@components/SubmitButton'
import { verifyEmail } from '@root/apis/onboarding/authenticationSlice'
import AppLayout from '@components/AppLayout'
import { RootState } from '@root/store/rootReducers'
import Spinner from '@components/Spinner'

const EmailVerification: React.FC = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const pathSet = pathname.split('/')

  useEffect(() => {
    getEmailVerified()
  }, [])

  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  const { isVerifyEmailError, loader, isVerifyEmailSuccess } =
    authenticationData

  const getEmailVerified = async () => {
    const reqParams = {
      id: pathSet[pathSet.length - 2],
      token: pathSet[pathSet.length - 1],
    }
    dispatch(verifyEmail(reqParams))
  }

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <AppLayout className="home">
      <section className="verification-container fullwidth">
        <div className="email-verification-container">
          {isVerifyEmailError ? (
            <h2 className="page-heading text-error">{isVerifyEmailError}</h2>
          ) : isVerifyEmailSuccess ? (
            <h2 className="page-heading">
              Congratulations! Your account has been verified.
            </h2>
          ) : (
            <h2 className="page-heading">
              Please wait while your account is getting verified...
            </h2>
          )}
          {loader ? (
            <div className="spinner-wrapper">
              <Spinner spinnerStatus={true} />
            </div>
          ) : isVerifyEmailSuccess ? (
            <SubmitButton
              title={'Continue'}
              className="btn-done verify-btn mt-40"
              onPress={handleNavigate}
            />
          ) : null}
        </div>
      </section>
    </AppLayout>
  )
}

export default EmailVerification
