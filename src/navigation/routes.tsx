import React from 'react'
import {
  Routes as GroupRoutes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import {
  About,
  Notification,
  NotificationSettings,
  Menu,
  Language,
  BuyNft,
  SellNft,
  Staked,
  Onboarding,
  EmailVerification,
  ResetPassword,
  ChangePassword,
  CreateWallet,
  Player,
  PlayerList,
  PlayerDashboard,
} from '@pages/index'
import store from '@root/store/store'

const Routes: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <GroupRoutes>
          <Route path="/" element={<About />} />
          <Route path="/signup" element={<Onboarding />} />
          <Route path="/buy_nft" element={<BuyNft />} />
          <Route path="/sell_nft" element={<SellNft />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/notifications_settings"
            element={<NotificationSettings />}
          />
          <Route path="/language" element={<Language />} />
          <Route
            path="/accounts/verify/email/:refreshToken/:jwtToken"
            element={<EmailVerification />}
          />
          <Route
            path="/accounts/resetPassword/:uid/:token"
            element={<ResetPassword />}
          />
          <Route path="/accounts/changePassword" element={<ChangePassword />} />
          <Route path="/staked" element={<Staked />} />
          <Route path="/player/:id" element={<Player />} />
          <Route
            path="/accounts/resetPassword/:uid/:token"
            element={<ResetPassword />}
          />
          <Route path="/wallet" element={<CreateWallet />} />
          <Route path="/player_list" element={<PlayerList />} />
          <Route path="/player_Dashboard" element={<PlayerDashboard />} />
        </GroupRoutes>
      </Router>
    </ReduxProvider>
  )
}

export default Routes
