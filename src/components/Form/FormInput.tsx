/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import classNames from 'classnames'
import '@assets/css/components/FormInput.css'

interface Props {
  id?: string
  type?: 'text' | 'checkbox' | 'radio' | 'email' | 'password' | 'number'
  value?: number | string
  name?: string
  handleChange: (v?: object) => void
  onBlur: (v?: object) => void
  disabled?: boolean
  className?: string
  placeholder?: string
}

const FormInput: React.FC<Props> = ({
  id,
  type,
  value,
  name,
  handleChange,
  onBlur,
  disabled,
  placeholder,
  className,
}) => {
  const [isVisible, setVisible] = useState(false)
  const [inputType, setInputType] = useState(type)

  const toggleVisibility = () => {
    setVisible(!isVisible)
    setInputType(isVisible ? 'text' : 'password')
  }

  const getInputType = () => {
    if (type === 'password') {
      if (isVisible) {
        return 'text'
      }
      return type
    }
    return type
  }

  return (
    <div className="textinput-wrapper">
      <input
        id={id || ''}
        type={getInputType()}
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={e => onBlur(e)}
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(className)}
      />
      {type === 'password' && (
        <>
          {isVisible ? (
            <VisibilityIcon className="input-btn" onClick={toggleVisibility} />
          ) : (
            <VisibilityOffIcon
              className="input-btn"
              onClick={toggleVisibility}
            />
          )}
        </>
      )}
    </div>
  )
}

export default FormInput
