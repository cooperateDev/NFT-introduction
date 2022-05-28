import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import SubmitButton from '@components/SubmitButton'
import AppLayout from '@components/AppLayout'
import { postRequest } from '@root/apis/axiosClient'
import FormInput from '../../../components/Form/FormInput'
import { RequestParams as OnboardingProps } from '@root/types'

const initialValues = {
  old_password: '',
  password: '',
  confirm_password: '',
}

const ChangePasswordForm: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [resetPasswordError, setResetPasswordError] = useState('')
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState('')
  const navigate = useNavigate()

  async function onSubmit(values: OnboardingProps) {
    const reqParams = {
      old_password: values.old_password,
      new_password: values.password,
    }
    if (resetPasswordSuccess) {
      navigate('/')
    } else {
      setResetPasswordError('')
      setLoading(true)
      try {
        const resp = await postRequest('accounts/changePassword', reqParams)
        if (resp) {
          setLoading(false)
          setResetPasswordSuccess(resp.data.message)
        }
      } catch (error: any) {
        setLoading(false)
        setResetPasswordError(error.response.data.message)
      }
    }
  }

  return (
    <section className="onboarding-container">
      <div id="id01" className={classNames('login-form')}>
        <h2 className="page-heading mt-90">Change Password</h2>
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
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              dirty,
            } = props
            return (
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="login-form-container">
                  <div className="field-wrapper">
                    <label>
                      <b>Old Password</b>
                    </label>
                    <FormInput
                      id="old_password"
                      type="password"
                      placeholder="Old Password"
                      name="password"
                      handleChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="field-wrapper">
                    <label>
                      <b>New Password</b>
                    </label>
                    <FormInput
                      id="password"
                      type="password"
                      placeholder="New Password"
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
                    {errors.confirm_password && touched.confirm_password && (
                      <div className="input-feedback">
                        {errors.confirm_password}
                      </div>
                    )}
                  </div>
                  <div className="input-feedback text-center otp-error m-0">
                    {resetPasswordError}
                  </div>
                  <div className="input-feedback text-center otp-success mt-20">
                    {resetPasswordSuccess}
                  </div>
                  <SubmitButton
                    isLoading={isLoading}
                    isDisabled={!isValid || !dirty}
                    title="Reset Password"
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
  )
}

export default ChangePasswordForm
