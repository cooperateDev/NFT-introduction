import React from 'react'
import { AppLayout } from '@components/index'
import ChangePasswordForm from './ChangePasswordForm'

const ChangePassword: React.FC = () => {
  return (
    <AppLayout
      headerStatus="header-status"
      headerClass="home"
      footerStatus="footer-status"
    >
      <ChangePasswordForm />
    </AppLayout>
  )
}

export default ChangePassword
