import { useTranslation } from 'react-i18next'

import { ContactUs as ContactUsItems } from '@root/constants'

const ContactUs = () => {
  const { t } = useTranslation()

  return (
    <div className="App">
      {ContactUsItems.map((item, index) => (
        <div className="page-link" key={index}>
          {t(item)}
        </div>
      ))}
    </div>
  )
}

export default ContactUs
