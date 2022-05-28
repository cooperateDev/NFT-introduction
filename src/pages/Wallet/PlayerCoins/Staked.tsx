/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import Slider from '@material-ui/core/Slider'

import { AppLayout } from '@components/index'
import PlayerAvatar from '@assets/images/players/neymar_jr.png'
import { Input } from '@components/Form'
import { sleep } from '@utils/helpers'
import Spinner from '@components/Spinner'
import ResponseAlert from '@components/ResponseAlert'
import '@assets/css/pages/Staking.css'

const Staked = () => {
  const [stakeAmount, setStakeAmount] = useState(0.0)
  const [value, setValue] = useState<number | number[]>(0.0)
  const [isLoading, setLoading] = useState(false)
  const [stakingStatus, setStakingStatus] = useState('Stake')
  const [response, setResponse] = useState('')

  const stakedValue = 14.346
  const bnbToUsd = 324.34

  const balance = localStorage.getItem('balance')
  let balanceNum = 0.0

  if (balance !== null && balance !== '') balanceNum = parseFloat(balance)

  const onClickStaking = async () => {
    setResponse('')
    setLoading(true)
    for (let i = 0; i < 3; i++) {
      await sleep(i * 1000)
    }
    setLoading(false)
    const resp = Math.random() < 0.5
    setResponse(resp ? 'Success' : 'Error')
    setStakingStatus(resp ? 'Done' : 'Stake')
  }

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue)

    const value = parseFloat(newValue.toString())
    setStakeAmount((value / 100) * balanceNum)
  }
  const onChange = (v: any) => {
    setStakeAmount(v.target.value)
    setValue((v.target.value / balanceNum) * 100)
  }

  const onClickMax = () => {
    setValue(100)
    setStakeAmount(balanceNum)
  }

  const onClick75 = () => {
    setValue(75)
    setStakeAmount(balanceNum * 0.75)
  }

  const onClick50 = () => {
    setValue(50)
    setStakeAmount(balanceNum * 0.5)
  }

  const onClick25 = () => {
    setValue(25)
    setStakeAmount(balanceNum * 0.25)
  }

  return (
    <AppLayout footerStatus="footer-status">
      <section className="staking-container">
        <div className="staked">
          <div className="nft-image-section">
            <div className="image-border">
              <img src={PlayerAvatar} alt="" className="nft-image" />
            </div>
            <div className="player-name">
              <div className="staked-name">David Villa Sanchez</div>
              <div className="staked-name">MC00001</div>
            </div>
          </div>

          <div className="staked-amount-raw">
            <span className="staked-amount">{stakedValue}</span>
            <span
              className={`minus-symbol ${
                Boolean(stakedValue) && 'minus-symbol-green'
              }`}
            >
              -
            </span>
          </div>
          <div className="staked-amount-raw">
            <span className="staked-amount usd-amount">
              {stakedValue * bnbToUsd} USD
            </span>
            <span className="plus-symbol">+</span>
          </div>

          <div>
            <div className="stake-label">STAKE:</div>
            <Input
              type="number"
              name="staked"
              onChange={e => onChange(e)}
              disabled={false}
              value={stakeAmount}
              className="input-stake-value"
              onBlur={() => {
                return
              }}
              min={0}
              max={balanceNum}
            />
            <div className="balance">Balance: {balance}</div>
          </div>

          <div className="slider-bar">
            <Slider
              defaultValue={0.0}
              aria-labelledby="discrete-slider-custom"
              step={1}
              value={typeof value === 'number' ? value : 0.0}
              onChange={handleSliderChange}
            />
          </div>
          <div className="slider-value">{value}%</div>

          <div className="rate-group">
            <div className="rate" onClick={onClick25}>
              25%
            </div>
            <div className="rate rate-50" onClick={onClick50}>
              50%
            </div>
            <div className="rate rate-75" onClick={onClick75}>
              75%
            </div>
            <div className="rate" onClick={onClickMax}>
              MAX
            </div>
          </div>
        </div>
        <Spinner spinnerStatus={isLoading} />
        <ResponseAlert status={response} />
        {!isLoading && (
          <div className="stake-button" onClick={onClickStaking}>
            {stakingStatus}
          </div>
        )}
      </section>
    </AppLayout>
  )
}

export default Staked
