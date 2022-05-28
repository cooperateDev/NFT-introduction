import React from 'react'
import { SummaryItem, ItemProps } from '@root/types'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { RootState } from '@root/store/rootReducers'

interface Props {
  // summaryData: SummaryItem[]
  estimatedValue: string
  totalValue: string
}

// {
//   id: 1,
//   label: 'Estimated price per coin',
//   value: '0.02147898 MATIC',
// },
// {
//   id: 2,
//   label: 'Total estimated',
//   value: '2.2214 MATIC',
// },

const PriceItem: React.FC<ItemProps> = props => {
  // const { priceData } = props
  const { label, value, isLoading } = props
  return (
    <li className="pricing-list-item">
      <div className="ms-2 me-auto">{label}</div>
      <div
        className={classNames(
          'spinner__circle size-small',
          isLoading ? '' : 'hidden',
        )}
      >
        <div className="spinner__circle-gradient"></div>
        <div className="spinner__circle-inner"></div>
      </div>
      <span
        className={classNames('pricing-value-text', isLoading ? 'hidden' : '')}
      >
        {value} MATIC
      </span>
    </li>
  )
}

const NftSummary: React.FC<Props> = props => {
  const { estimatedValue, totalValue } = props
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  const { loadingBuy } = authenticationData

  return (
    <div className="pricing-summary-wrapper">
      <h4>Summary</h4>
      <ol className="pricing-list-group">
        {/* {summaryData.map((item, i) => (
          <React.Fragment key={item.id}>
            <PriceItem priceData={item} />
            <div
              className={classNames(
                'divide pricing-list-divider',
                !summaryData[i + 1] ? 'hide' : '',
              )}
            ></div>
          </React.Fragment>
        ))} */}
        <React.Fragment>
          <PriceItem
            label="Estimated price per coin"
            value={estimatedValue}
            isLoading={loadingBuy}
          />
          <div className="divide pricing-list-divider"></div>
        </React.Fragment>
        <React.Fragment>
          <PriceItem
            label="Total estimated"
            value={totalValue}
            isLoading={loadingBuy}
          />
        </React.Fragment>
      </ol>
    </div>
  )
}

export default NftSummary
