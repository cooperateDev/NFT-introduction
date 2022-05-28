import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import SubmitButton from '@components/SubmitButton'
import FormInput from '@components/Form/FormInput'

interface Props {
  onSubmit: (v?: any) => void
  onClose: () => void
}

const initialValues = {
  passphrase: '',
}

const PassPhrase: React.FC<Props> = ({ onSubmit, onClose }) => {
  return (
    <section className="wallet-container">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object().shape({
          passphrase: Yup.string().required('Secret passphrase Required'),
        })}
      >
        {props => {
          const { touched, errors, handleChange, handleBlur, handleSubmit } =
            props
          return (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div>
                <div className="fullwidth">
                  <p className="sub-title">
                    Enter your secret passphrase to unlock your wallet
                  </p>
                </div>
                <div className="field-wrapper">
                  <label></label>
                  <FormInput
                    id="passphrase"
                    type="text"
                    placeholder="Secret passphrase"
                    name="passphrase"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.passphrase && touched.passphrase && (
                    <div className="input-feedback">{errors.passphrase}</div>
                  )}
                </div>
                <div className="passphrase-divider">
                  <SubmitButton
                    isDisabled={false}
                    title="Confirm"
                    className="mt-40 m-0auto"
                    onPress={handleSubmit}
                  />
                  <SubmitButton
                    isDisabled={false}
                    title="Cancel"
                    className="btn-disabled mt-20 m-0auto"
                    onPress={onClose}
                  />
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </section>
  )
}

export default PassPhrase
