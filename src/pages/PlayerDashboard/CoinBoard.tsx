import React, { useEffect } from 'react'

import FormInput from '@components/Form/FormInput'
import Input from '@components/Form/Input'
import Button from '@components/Form/Button'
import Select from '@components/Form/Select'
import '@assets/css/pages/PlayerDashboard.css'

const CoinBoard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="player-dashboard-container">
      <div className="fullwidth">
        <div className="player-dashboard-title">
          Launch your own Player Coin
        </div>
        <div className="player-dashboard-desc">
          You are a football player and want to launch your own player coin? We
          must first verify that it is you!
        </div>
        <div className="input-label">Email Address</div>
        <FormInput
          id="email"
          type="email"
          placeholder="Enter email address"
          name="email"
          // value={}
          handleChange={() => {
            return
          }}
          onBlur={() => {
            return
          }}
        />
        <div className="input-label">
          Given Name & Middle Name (as in Passport)
        </div>
        <FormInput
          id="name"
          type="text"
          placeholder="Enter given name"
          name="name"
          // value={}
          handleChange={() => {
            return
          }}
          onBlur={() => {
            return
          }}
        />
        <div className="input-label">Surname (as in Passport)</div>
        <FormInput
          id="surname"
          type="text"
          placeholder="Enter surname"
          name="surname"
          // value={}
          handleChange={() => {
            return
          }}
          onBlur={() => {
            return
          }}
        />
        <div className="input-label">Artist Name (leave empty if none)</div>
        <FormInput
          id="artistName"
          type="text"
          placeholder="Enter artist name"
          name="artistName"
          // value={}
          handleChange={() => {
            return
          }}
          onBlur={() => {
            return
          }}
        />
        <div className="input-label">Date of Birth</div>
        <div className="birthday">
          <FormInput
            id="day"
            type="number"
            placeholder="DD"
            name="day"
            // value={}
            handleChange={() => {
              return
            }}
            onBlur={() => {
              return
            }}
          />
          <FormInput
            id="month"
            type="number"
            placeholder="MM"
            name="month"
            // value={}
            handleChange={() => {
              return
            }}
            onBlur={() => {
              return
            }}
          />
          <FormInput
            id="year"
            type="number"
            placeholder="YYYY"
            name="year"
            // value={}
            handleChange={() => {
              return
            }}
            onBlur={() => {
              return
            }}
          />
        </div>
        <div className="input-label">Nationality</div>
        <div className="player-dashboard-select">
          <Select placeholder="Select nationality" />
        </div>
        <div className="player-dashboard-notification">
          Important! We have to verify your identity. Before you will be
          approved for a player coin, you will have to confirm your identity and
          for that you will require your ID or Passport alongside a camera.
          Please follow the instructions precicely as you will not be able to do
          the verification multiple times
        </div>
        <div className="terms-conditions-check">
          <Input
            id="text"
            type="checkbox"
            // value={}
            onChange={() => {
              return
            }}
            onBlur={() => {
              return
            }}
          />
          <div className="terms-conditions-desc">
            Accept <span className="terms-conditions">Terms & Conditions</span>
          </div>
        </div>
        <div className="player-dashboard-request-button">
          <Button
            children="Request Player Coin"
            onClick={() => {
              return
            }}
            className="request-player-coin"
          ></Button>
        </div>
      </div>
    </section>
  )
}

export default CoinBoard
