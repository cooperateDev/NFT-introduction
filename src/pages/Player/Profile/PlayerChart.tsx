import React, { useEffect, useState } from 'react'
import Chart from './Chart'

interface Props {
  onCardView: any
}

const PlayerChart: React.FC<Props> = ({ onCardView }) => {
  const [chartOption, setChartOption] = useState('Price')
  const [chartPeriod, setChartPeriod] = useState('1D')

  const xAxisData: any = []
  let series = [24]

  const getCount = () => {
    if (chartPeriod === '1D') return 12
    else if (chartPeriod === '7D') return 12 * 7
    else if (chartPeriod === '1M') return 12 * 30
    else if (chartPeriod === '3M') return 12 * 30 * 3
    else if (chartPeriod === '1Y') return 12 * 365
    else if (chartPeriod === 'YTD') return 12 * 120
    else if (chartPeriod === 'ALL') return 12 * 365 * 2
    else return 12
  }

  for (let i = 1; i < getCount(); i++) {
    xAxisData.push('X value')
    series.push(
      Math.abs(Math.round((Math.random() - 0.5) * 2 + series[i - 1])) % 50,
    )
  }

  useEffect(() => {
    xAxisData.length = 0
    series.length = 0
    series = [300]
    for (let i = 1; i < getCount(); i++) {
      xAxisData.push('X value')
      series.push(
        Math.abs(Math.round((Math.random() - 0.5) * 2 + series[i - 1])) % 50,
      )
    }
    console.log('xAxisData', xAxisData)
    console.log('series', series)
  }, [chartPeriod])

  return (
    <>
      <div className="player-chart">
        <div className="flex-middle">
          <div className="fixed-content">
            <div className="chart-header">
              <div className="card-view-button" onClick={() => onCardView()}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 25.451 25.451"
                  xmlSpace="preserve"
                  width="12px"
                  height="15px"
                >
                  <path
                    fill="#6BC909"
                    d="M20.982,0.521v2.006L8.57,12.315c-0.121,0.101-0.195,0.251-0.195,0.41s0.074,0.311,0.195,0.41l12.412,9.79v2.005
                        c0,0.199-0.115,0.383-0.297,0.469c-0.178,0.086-0.395,0.064-0.549-0.061L4.664,13.136c-0.122-0.1-0.194-0.251-0.194-0.41
                        s0.072-0.31,0.194-0.41L20.136,0.113c0.154-0.126,0.371-0.148,0.549-0.061C20.866,0.139,20.982,0.322,20.982,0.521z"
                  />
                </svg>
              </div>
              <div className="player-name">David Villa Sanchez</div>
            </div>
          </div>
          <div className="chart">
            <Chart xAxisData={xAxisData} series={series} />
          </div>
          <div className="fixed-content chart-period">
            <div
              className={chartPeriod === '1D' ? 'button-hover' : ''}
              onClick={() => setChartPeriod('1D')}
            >
              1D
            </div>
            <div
              className={chartPeriod === '7D' ? 'button-hover' : ''}
              onClick={() => setChartPeriod('7D')}
            >
              7D
            </div>
            <div
              className={chartPeriod === '1M' ? 'button-hover' : ''}
              onClick={() => setChartPeriod('1M')}
            >
              1M
            </div>
            <div
              className={chartPeriod === '3M' ? 'button-hover' : ''}
              onClick={() => setChartPeriod('3M')}
            >
              3M
            </div>
            <div
              className={chartPeriod === '1Y' ? 'button-hover' : ''}
              onClick={() => setChartPeriod('1Y')}
            >
              1Y
            </div>
            <div
              className={chartPeriod === 'YTD' ? 'button-hover' : ''}
              onClick={() => setChartPeriod('YTD')}
            >
              YTD
            </div>
            <div
              className={chartPeriod === 'ALL' ? 'button-hover' : ''}
              onClick={() => setChartPeriod('ALL')}
            >
              ALL
            </div>
          </div>
          <div className="fixed-content chart-option">
            <div
              className={chartOption === 'Price' ? 'button-hover' : ''}
              onClick={() => setChartOption('Price')}
            >
              Price
            </div>
            <div
              className={chartOption === 'Market' ? 'button-hover' : ''}
              onClick={() => setChartOption('Market')}
            >
              Market Cap
            </div>
            <div
              className={chartOption === 'Trading' ? 'button-hover' : ''}
              onClick={() => setChartOption('Trading')}
            >
              Trading View
            </div>
            <div
              className={chartOption === 'History' ? 'button-hover' : ''}
              onClick={() => setChartOption('History')}
            >
              History
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerChart
