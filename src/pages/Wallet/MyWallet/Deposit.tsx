import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

interface Props {
  onSubmit: (v?: any) => void
  onClose: () => void
}

const initialValues = {}

const Deposit: React.FC<Props> = ({ onSubmit, onClose }) => {
  return (
    <section className="wallet-container">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {props => {
          const {} = props
          return (
            <form autoComplete="off">
              <div>
                <div className="fullwidth m0-auto mb-20">
                  <p className="sub-title">My MATIC Deposit Address</p>
                </div>
                <div className="address-box m0-auto">
                  <p>0x3ddfd8df8dfuhuhu38dsadf9090d8f8sdfsf</p>
                  <div className="flex-center">
                    <div className="copy-button"></div>
                  </div>
                </div>
                <div className="deposit-divider m0-auto">
                  <div className="green-line-btn" onClick={onClose}>
                    Close
                  </div>
                </div>
              </div>
            </form>
          )
        }}
      </Formik>
    </section>
  )
}

export default Deposit
