import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@root/store/rootReducers'
import SignUp from './SignUp/SignUp'
// import FormSwitch from './components/FormSwitch'
import TabGroup from '@components/TabGroup'
import Login from './Login/Login'
import VerifyEmail from './VerifyEmail/verifyEmail'
import ForgotPassword from './ForgotPassword'
import '@assets/css/pages/Onboarding.css'
interface Props {
  onSubmit?: (v?: boolean) => void
  onClose: () => void
}

const OnboardingForm: React.FC<Props> = ({ onSubmit, onClose }) => {
  const [activeTab, setActiveTab] = useState('Register')
  const [isForgotPasswordSelected, setForgotPasswordSelected] = useState(false)
  const handleGetTab = (tab: string) => {
    setActiveTab(tab)
  }
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )

  useEffect(() => {
    if (authenticationData.activeTab) {
      setActiveTab(authenticationData.activeTab)
    }
  }, [authenticationData])

  const onReturn = () => {
    setForgotPasswordSelected(false)
    setActiveTab('Login')
  }

  const handleForgotPassword = () => {
    setForgotPasswordSelected(true)
  }

  return (
    <section className="onboarding-container">
      <>
        {authenticationData.isSentEmailVerificationMail ? (
          <VerifyEmail email={authenticationData.email} />
        ) : isForgotPasswordSelected ? (
          <ForgotPassword handleReturn={onReturn} />
        ) : (
          <>
            <TabGroup
              defaultTab={activeTab}
              tabSet={['Register', 'Login']}
              getSwitchedTab={handleGetTab}
            />
            {activeTab === 'Register' ? (
              <SignUp onClose={onClose} />
            ) : (
              <Login
                getSubmit={onSubmit}
                handleLinkClick={handleForgotPassword}
              />
            )}
          </>
        )}
      </>
    </section>
  )
}

export default OnboardingForm
