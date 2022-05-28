import React from 'react'

import { AppLayout } from '@components/index'
import Notification from '@components/Page/Navigation/MenuItem'
import { Notifications as NotificationItems } from '@root/constants'
import '@assets/css/pages/Notification.css'

const Notifications: React.FC = () => {
  return (
    <AppLayout className="notifications" footerStatus="footer-status">
      {NotificationItems.map((item, index) => (
        <Notification
          item={item}
          key={index}
          index={index}
          isMenu={false}
          className="notification-title-color"
        />
      ))}
    </AppLayout>
  )
}

export default Notifications
