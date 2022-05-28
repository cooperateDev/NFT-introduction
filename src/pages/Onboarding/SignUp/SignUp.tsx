import React, { useContext, useEffect, useState } from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '@root/apis/onboarding/authenticationSlice'
import * as Yup from 'yup'
import MetamaskButton from '@components/MetamaskButton'
import FormInput from '../../../components/Form/FormInput'
import SubmitButton from '@components/SubmitButton'
import { RequestParams as OnboardingProps } from '@root/types'
import { RootState } from '@root/store/rootReducers'
import { ConnectContext } from '@root/WalletConnectProvider'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: '',
  confirm_password: '',
}

interface Props {
  onClose: () => void
}

const SignUp: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const [signupError, setSignupError] = useState('')

  const { connectStatus, connect, disconnect } = useContext(ConnectContext)

  async function onSubmit(values: OnboardingProps) {
    setSignupError('')
    setLoading(true)
    dispatch(signUp(values))
  }
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  const { isSignupError } = authenticationData
  const handleConnectMetamask = () => {
    connect()
    navigate('/')
    onClose()
  }

  return (
    <div id="id01" className="login-form">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={async values => {
          onSubmit(values)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Email Required'),
          password: Yup.string()
            .required('Password Required')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
            ),
          confirm_password: Yup.string()
            .required('Confirm Password Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
            setFieldValue,
            isSubmitting,
            isValid,
            dirty,
          } = props
          return (
            <form autoComplete="off">
              <div className="login-form-container">
                <div className="field-wrapper ">
                  <label>
                    <b>Email</b>
                  </label>
                  <FormInput
                    id="email"
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
                    <b>Choose Password</b>
                  </label>
                  <FormInput
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="field-wrapper">
                  <label>
                    <b>Confirm Password</b>
                  </label>
                  <FormInput
                    id="confirm_password"
                    type="password"
                    placeholder="Enter Password"
                    name="confirm_password"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password && (
                    <div className="input-feedback">
                      {errors.confirm_password}
                    </div>
                  )}
                </div>
                {isSignupError && (
                  <div className="input-feedback text-center">
                    {isSignupError}
                  </div>
                )}
                <SubmitButton
                  isDisabled={!isValid || !dirty}
                  title={'Sign Up'}
                  className="signup-btn mt-40 mb-40"
                  onPress={handleSubmit}
                />
                <div className="note-wrapper">
                  <span className="login-text-content">
                    Don't want an account?{' '}
                  </span>
                  <span className="login-text-content">
                    Connect your wallet directly
                  </span>
                  <MetamaskButton onPress={handleConnectMetamask} />
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignUp
