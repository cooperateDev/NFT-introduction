import React from 'react'

import { AppLayout } from '@components/index'
import NotificationSettingItem from '@pages/NotificationSettings/NotificationSettingItem'
import { NotificationList } from '@root/constants'
import '@assets/css/pages/NotificationSettings.css'

const NotificationSettings: React.FC = () => {
  return (
    <AppLayout className="notifications" footerStatus="footer-status">
      <div className="new-nft-title settings-title">Notification Settings</div>
      <div className="switch-container mt-40">
        <NotificationSettingItem
          item={{ title: 'Show Notifications' }}
          key={0}
          index={0}
          isMenu={false}
          className="notification-title-color"
        />
        <div className="bottom-line m-0"></div>
        {NotificationList.map((item, index) => (
          <NotificationSettingItem
            item={item}
            key={index}
            index={index}
            isMenu={false}
            className="notification-title-color"
          />
        ))}
        <div className="bottom-line m-0"></div>
      </div>
    </AppLayout>
  )
}

export default NotificationSettings
