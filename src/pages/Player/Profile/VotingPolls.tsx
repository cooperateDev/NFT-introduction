import React from 'react'

import Carousel from '@components/Carousel'
import { NftCardData } from '@root/constants'
import VotingPoll from './VotingPoll'
import { useTranslation } from 'react-i18next'

const items: JSX.Element[] = []
NftCardData.map(() => items.push(<VotingPoll />))

const VotingPolls: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="fullwidth voting-polls">
      <div className="flex-center">
        <div className="open-polls">
          <div className="blog-title">{t('Open Voting Polls')}</div>
          <div className="poll-container">
            <div className="poll-header">
              What colour Lamborghini should I buy next?
            </div>
            <div className="poll-body">
              <div className="poll-item">
                <div>Verde Mantis(green)</div>
                <div className="green-color">VOTE</div>
              </div>
              <div className="poll-item">
                <div>Rossa Mars(red)</div>
                <div className="green-color">VOTE</div>
              </div>
              <div className="poll-item">
                <div>Bianco Isi(white)</div>
                <div className="green-color">VOTE</div>
              </div>
              <div className="poll-item">
                <div>Giallo Orion(yellow)</div>
                <div className="green-color">VOTE</div>
              </div>
              <div className="poll-item">
                <div>Nero Aldebaran(black)</div>
                <div className="green-color">VOTE</div>
              </div>
            </div>
            <div className="poll-footer">
              <div>Ends June 8, 11:57 PM</div>
              <div>10K votes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fullwidth">
        <div className="blog-title">{t('Closed Voting Polls')}</div>
        <div className="flex-center">
          <div className="carousel">
            <Carousel items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotingPolls
