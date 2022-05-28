import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import SubmitButton from '@components/SubmitButton'
import FormInput from '@components/Form/FormInput'

interface Props {
  onSubmit: (v?: any) => void
  onClose: () => void
}

const initialValues = {
  matic: '',
  address: '',
}

const Send: React.FC<Props> = ({ onSubmit, onClose }) => {
  return (
    <section className="wallet-container">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object().shape({
          matic: Yup.string().required('MATIC Amount Required'),
          address: Yup.string().required('Receiver Address Required'),
        })}
      >
        {props => {
          const { touched, errors, handleChange, handleBlur, handleSubmit } =
            props
          return (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="field-wrapper">
                <label>
                  <b>MATIC Sending:</b>
                </label>
                <FormInput
                  id="matic"
                  type="text"
                  placeholder="Amount"
                  name="matic"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.matic && touched.matic && (
                  <div className="input-feedback">{errors.matic}</div>
                )}
              </div>
              <div className="text-wrapper">
                <div>Maximum coins to send:</div>
                <div
                  className="green-line-btn
                "
                >
                  15.24
                </div>
              </div>
              <div className="field-wrapper">
                <label>
                  <b>Enter Receiver Address:</b>
                </label>
                <FormInput
                  id="address"
                  type="text"
                  placeholder="Receiver Address"
                  name="address"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address && (
                  <div className="input-feedback">{errors.address}</div>
                )}
              </div>
              <div className="send-divider">
                <SubmitButton
                  isDisabled={false}
                  title="Confirm"
                  className="mt-40 m-0auto"
                  onPress={handleSubmit}
                />
                <div
                  className="form-submit-btn btn-disabled mt-20 m-0auto"
                  onClick={onClose}
                >
                  Cancel
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </section>
  )
}

export default Send
