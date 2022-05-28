import React, { useState } from 'react'
import SubmitButton from '@components/SubmitButton'
import history from '@root/utils/history'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeEmailVerification,
  resendEmail,
} from '@root/apis/onboarding/authenticationSlice'
import { getRequest } from '@root/apis/axiosClient'
import { RootState } from '@root/store/rootReducers'
import Spinner from '@components/Spinner'

interface Props {
  email: string
}

const VerifyEmail: React.FC<Props> = ({ email }) => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const [verificationError, setVerificationError] = useState('')
  const [resendEmailSuccess, setResendEmailSuccess] = useState('')
  const handleSubmit = () => {
    dispatch(closeEmailVerification())
  }

  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )

  const { isEmailResendError, isEmailResent } = authenticationData

  const handleResendLink = async () => {
    const reqParams = {
      email,
    }
    dispatch(resendEmail(reqParams))
  }

  return (
    <div style={{ height: 'auto', width: '100%', marginTop: '93px' }}>
      <h2 className="page-heading">Verify your email</h2>
      <p className="page-text mt-40">
        We have sent an email to
        <br />
        <u>{email}</u> with a<br />
        verification link.
      </p>

      <p className="page-text mt-40">
        Please click on that link to
        <br />
        activate your account.
      </p>
      <SubmitButton
        isLoading={false}
        title={'Done'}
        className="btn-done verify-btn mt-40"
        onPress={handleSubmit}
      />
      {isEmailResendError ? (
        <div className="input-feedback text-center">{isEmailResendError}</div>
      ) : (
        <>
          {isLoading ? (
            <Spinner className="no-text fullwidth" spinnerStatus={isLoading} />
          ) : isEmailResent ? (
            <p className="page-text semibold fullwidth mt-40">
              <a href="#" className="resend-link no-click">
                {isEmailResent}
              </a>
            </p>
          ) : (
            <p className="page-text semibold mt-40">
              Didn’t get the verification email?{' '}
              <a href="#" className="resend-link" onClick={handleResendLink}>
                Resend
              </a>
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default VerifyEmail
