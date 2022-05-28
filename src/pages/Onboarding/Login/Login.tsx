import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import OtpInput from 'react-otp-input'
import classNames from 'classnames'
import MetamaskButton from '@components/MetamaskButton'
import FormInput from '../../../components/Form/FormInput'
import { RequestParams as OnboardingProps } from '@root/types'
import SubmitButton from '@components/SubmitButton'
import { RootState } from '@root/store/rootReducers'
import { useDispatch, useSelector } from 'react-redux'
import {
  login,
  loginFailure,
  loginSuccess,
  loginWithOtp,
  refreshTokenSuccess,
  resetSentEmailVerification,
} from '@root/apis/onboarding/authenticationSlice'
import { isNumeric } from '@utils/helpers'

const initialValues = {
  email: '',
  password: '',
}

interface ResponseType {
  email?: string
  access?: string
}

interface Props {
  getSubmit?: any //(v?: boolean) => void
  handleLinkClick?: any
}

const Login: React.FC<Props> = ({ getSubmit, handleLinkClick }) => {
  const [isLoading, setLoading] = useState(false)
  const [otpNumber, setOtpNumber] = useState('')
  // const [otpAttempts, setOtpAttempts] = useState(3)
  const [otpError, setOtpError] = useState('')
  const [otpValidationError, setOtpValidationError] = useState('')
  const [signinError, setSigninError] = useState('')
  const [loginSuccessMsg, setLoginSuccessMsg] = useState('')

  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const updateState = (data: object) =>
    setState(state => ({ ...state, ...data }))

  const dispatch = useDispatch()
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )

  const {
    isOtpSent,
    isLoginError,
    isOtpLoginError,
    otpAttempts,
    isOtpLoginSuccess,
  } = authenticationData

  useEffect(() => {
    if (isOtpLoginSuccess) {
      dispatch(resetSentEmailVerification())
      setTimeout(() => {
        getSubmit(true)
      }, 1000)
    }
  }, [isOtpLoginSuccess])

  useEffect(() => {
    return clearForm()
  }, [])

  const clearForm = () => {
    setLoading(false)
    setOtpNumber('')
    // setOtpAttempts(3)
    setOtpError('')
    setSigninError('')
  }

  async function onSubmit(values: OnboardingProps) {
    setOtpValidationError('')
    updateState({
      email: values.email,
      password: values.password,
    })
    dispatch(login(values))
  }

  function handleLoginWithOtp() {
    if (!isOtpLoginSuccess) {
      const reqParams = {
        email: state.email,
        password: state.password,
        otp: otpNumber,
      }
      if (otpNumber.length === 6 && isNumeric(otpNumber)) {
        dispatch(loginWithOtp(reqParams))
      } else {
        setOtpValidationError('Please enter a valid OTP')
        setOtpError('')
      }
    } else {
      dispatch(resetSentEmailVerification())
      setTimeout(() => {
        getSubmit(true)
      }, 1000)
    }
  }

  const onChangeOtp = (otp: string) => {
    setOtpNumber(otp)
  }

  const cancelOtpLogin = () => {
    dispatch(loginFailure(true))
    clearForm()
  }

  return (
    <>
      <div
        id="id01"
        className={classNames('login-form', isOtpSent ? 'hide' : '')}
      >
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={async values => {
            onSubmit(values)
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Invalid email')
              .required('Email Required'),
            password: Yup.string()
              .required('Password Required')
              .min(8, 'Password is too short - should be 8 chars minimum.')
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
              ),
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              // setFieldValue,
              isValid,
              // isSubmitting,
              dirty,
            } = props
            return (
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="login-form-container">
                  <div className="field-wrapper ">
                    <label>
                      <b>Email</b>
                    </label>
                    <FormInput
                      id="user_email"
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      value={values.email}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="field-wrapper">
                    <label>
                      <b> Password</b>
                    </label>
                    <FormInput
                      id="user_password"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={values.password}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </div>
                  {isLoginError && (
                    <div className="input-feedback text-center">
                      {isLoginError}
                    </div>
                  )}
                  <SubmitButton
                    isLoading={isLoading}
                    isDisabled={!isValid || !dirty}
                    title={'Sign In'}
                    className="signup-btn mt-40 mb-40"
                    onPress={handleSubmit}
                  />
                  <div className="note-wrapper">
                    <span className="login-text-content">
                      Want to connect your wallet instead?
                    </span>
                    <MetamaskButton onPress={handleSubmit} />
                    <p className="page-text font-16">
                      <a
                        href="#"
                        className="resend-link"
                        onClick={handleLinkClick}
                      >
                        Forgot Password?
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
      <div className={classNames('otp-form', isOtpSent ? 'show' : 'hide')}>
        <h2 className="page-heading">Enter OTP</h2>
        <p className="page-text mt-40 mb-40">
          Please enter the OTP
          <br />
          received on your
          <br />
          Registered E-mail ID.
        </p>
        <OtpInput
          value={otpNumber}
          onChange={onChangeOtp}
          numInputs={6}
          separator={<span></span>}
          inputStyle="input-box otp"
          containerStyle="otp-wrapper"
        />
        {isOtpLoginError ? (
          <div className="input-feedback text-center otp-error">
            {isOtpLoginError}
            {otpAttempts > 0 ? `. You have ${otpAttempts} attempts left.` : ''}
          </div>
        ) : (
          <div className="input-feedback text-center">{otpValidationError}</div>
        )}
        {isOtpLoginSuccess && (
          <p className="page-text resend-link fullwidth mt-20">
            {isOtpLoginSuccess}
          </p>
        )}
        <SubmitButton
          isDisabled={otpAttempts < 1}
          title={'Done'}
          className="btn-done verify-btn mt-40"
          onPress={() => handleLoginWithOtp()}
        />
        {otpAttempts < 1 && (
          <p className="page-text mt-40">
            <a href="#" className="resend-link" onClick={cancelOtpLogin}>
              Back to Login
            </a>
          </p>
        )}
        <p className="page-text mt-40">
          Didn’t get the OTP?{' '}
          <a href="#" className="resend-link">
            Resend
          </a>
        </p>
      </div>
    </>
  )
}

export default Login
