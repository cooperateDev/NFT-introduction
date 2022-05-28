import React, { useEffect, useState } from 'react'
import history from '@root/utils/history'
import { Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useNavigate, useLocation } from 'react-router-dom'
import SubmitButton from '@components/SubmitButton'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '@components/AppLayout'
import FormInput from '../../../components/Form/FormInput'
import { RequestParams as OnboardingProps } from '@root/types'
import { resetPassword } from '@root/apis/onboarding/authenticationSlice'
import { RootState } from '@root/store/rootReducers'

const initialValues = {
  password: '',
  confirm_password: '',
}

const ResetPassword: React.FC = props => {
  const [isLoading, setLoading] = useState(false)
  const [resetPasswordError, setResetPasswordError] = useState('')
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState('')
  const [verificationError, setVerificationError] = useState('')
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const paramSet = pathname.split('/')

  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  const { passwordResetError, passwordResetSuccess } = authenticationData

  async function onSubmit(values: OnboardingProps) {
    const reqParams = {
      token: paramSet[paramSet.length - 1],
      new_password: values.password,
      confirm_password: values.confirm_password,
      uidb64: paramSet[paramSet.length - 2],
    }
    if (passwordResetSuccess) {
      navigate('/')
    } else {
      dispatch(resetPassword(reqParams))
    }
  }

  return (
    <AppLayout className="home">
      <section className="verification-container fullwidth">
        <section className="onboarding-container reset-password">
          <div id="id01" className={classNames('login-form')}>
            <h2 className="page-heading mt-90">Reset Password</h2>
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              onSubmit={async values => {
                onSubmit(values)
              }}
              validationSchema={Yup.object().shape({
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
                  isValid,
                  isSubmitting,
                  dirty,
                } = props
                return (
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="login-form-container">
                      <div className="field-wrapper">
                        <label>
                          <b>Enter New Password</b>
                        </label>
                        <FormInput
                          id="password"
                          type="password"
                          placeholder="Enter New Password"
                          name="password"
                          handleChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.password && touched.password && (
                          <div className="input-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div className="field-wrapper">
                        <label>
                          <b>Confirm New Password</b>
                        </label>
                        <FormInput
                          id="confirm_password"
                          type="password"
                          placeholder="Confirm New Password"
                          name="confirm_password"
                          handleChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.confirm_password &&
                          touched.confirm_password && (
                            <div className="input-feedback">
                              {errors.confirm_password}
                            </div>
                          )}
                      </div>
                      <div className="input-feedback text-center otp-error m-0">
                        {passwordResetError}
                      </div>
                      <div className="input-feedback text-center otp-success mt-20">
                        {passwordResetSuccess}
                      </div>
                      <SubmitButton
                        isLoading={isLoading}
                        isDisabled={!isValid || !dirty}
                        title={resetPasswordSuccess ? 'Continue' : 'Submit'}
                        className="signup-btn mt-40 mb-40"
                        onPress={handleSubmit}
                      />
                    </div>
                  </form>
                )
              }}
            </Formik>
          </div>
        </section>
      </section>
    </AppLayout>
  )
}

export default ResetPassword
