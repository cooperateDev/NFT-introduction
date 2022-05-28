/* eslint-disable no-unused-vars */
import React from 'react'
import Modal from 'react-modal'
import classnames from 'classnames'
import '@assets/css/components/BottomPopup.css'
interface Props {
  formActive?: string
  isOpen: boolean
  children: React.ReactNode
  contentClass?: string
}

Modal.setAppElement('#root')

const BottomPopup: React.FC<Props> = ({ isOpen, children, contentClass }) => {
  return (
    <div
      id="myBottomPopup"
      className={classnames('bottom-popup', isOpen ? 'show' : '')}
    >
      <div className={classnames('bottom-popup-content', contentClass)}>
        {children}
      </div>
    </div>
  )
}

export default BottomPopup
