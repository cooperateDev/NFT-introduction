import React from 'react'
import classnames from 'classnames'
import '@assets/css/components/Spinner.css'

interface Props {
  spinnerStatus?: boolean
  className?: string
}

const Spinner: React.FC<Props> = props => {
  const { spinnerStatus, className = '' } = props
  return (
    <div
      className={classnames(
        'spinner-container',
        className,
        spinnerStatus ? 'show' : '',
      )}
    >
      <span>Awaiting Confirmation</span>
      <div className="spinner">
        <div className="spinner__circle">
          <div className="spinner__circle-gradient"></div>
          <div className="spinner__circle-inner"></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
