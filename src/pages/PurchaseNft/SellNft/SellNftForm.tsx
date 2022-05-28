import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SearchIcon from '@mui/icons-material/Search'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PlayerAvatar from '@assets/images/players/neymar_jr.png'
import { NftPlayerPriceData } from '@root/constants'
import SearchInput from '@components/Form/SearchInput'
import { sleep } from '@utils/helpers'
import { Input } from '@components/Form'
import Spinner from '@components/Spinner'
import ResponseAlert from '@components/ResponseAlert'
import NftSummary from '../components/NftSummary'
import PurchaseButton from '../components/PurchaseButton'
import '@assets/css/pages/PurchaseNft.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeNftValue,
  verifyEmail,
} from '@root/apis/onboarding/authenticationSlice'
import { RootState } from '@root/store/rootReducers'

const SellNftForm: React.FC = () => {
  const maxPurchaseAmt = '15.24'
  const dispatch = useDispatch()
  const [isSearchEnabled, setSearchEnabled] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [fixedPrice, setFixedPrice] = useState('0.5')
  const [totalSum, setTotalSum] = useState('0')
  const [buttonTitle, setButtonTitle] = useState('Sell')
  const authenticationData = useSelector(
    (state: RootState) => state.authentication,
  )
  const { loader, loadingBuy } = authenticationData

  const handleSearch = () => {
    setSearchEnabled(true)
  }
  const handleClose = () => {
    setSearchEnabled(false)
  }

  const handleSell = async () => {
    setResponse('')
    setLoading(true)
    for (let i = 0; i < 3; i++) {
      await sleep(i * 1000)
    }
    setLoading(false)
    const resp = Math.random() < 0.5
    setResponse(resp ? 'Success' : 'Error')
    setButtonTitle(resp ? 'Done' : 'Stake')
  }

  const calculateTotal = (event: any) => {
    const total = (parseFloat(fixedPrice) * event.target.value).toFixed(2)
    setTotalSum(total.toString())
    const reqParams = {
      id: '0000',
      token: total.toString(),
    }
    dispatch(changeNftValue(reqParams))
  }

  useEffect(() => {
    console.log('buymount--')
    getBuyDetails()
  }, [])

  const getBuyDetails = async () => {
    const reqParams = {
      id: '0000',
      token: '9999',
    }
    dispatch(verifyEmail(reqParams))
  }

  return (
    <div className="purchase-container">
      <div className={classnames('balance-progress', loader ? '' : 'hidden')}>
        <div
          className={classnames(
            'loading-spinner-container mb-40 mt-40',
            'show',
          )}
        >
          <div className="loading-spinner">
            <div className="spinner__circle">
              <div className="spinner__circle-gradient"></div>
              <div className="spinner__circle-inner"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classnames('purchase-wrappper', loader ? 'hidden' : '')}>
        <div className="player-title-bar">
          {isSearchEnabled ? (
            <SearchInput
              type="text"
              placeholder="Please enter the search words."
              className="buy-search"
              onChange={() => {
                return
              }}
              onClose={handleClose}
            />
          ) : (
            <>
              <div className="player-title-wrapper">
                <ChevronRightIcon className="icon-color" />
                <img src={PlayerAvatar} />
                <div className="player-text-container">
                  <h6>Neymar Da Silva Santos</h6>
                  <h6>MC00001</h6>
                </div>
              </div>
              <SearchIcon className="icon-color" onClick={handleSearch} />
            </>
          )}
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={{ price: '' }}
          onSubmit={async values => {
            handleSell()
          }}
          validationSchema={Yup.object().shape({
            price: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            } = props
            return (
              <form onSubmit={handleSubmit} autoComplete={'off'}>
                <div className="purchase-form">
                  <div className="form-label-wrapper">
                    <label htmlFor="playerPrice">SELL</label>
                  </div>
                  {errors.price && touched.price && (
                    <div className="input-feedback purchase-error">
                      {errors.price}
                    </div>
                  )}
                  <Input
                    id="sell_price"
                    name="price"
                    type="text"
                    placeholder="Amount"
                    className="input-box"
                    value={values.price}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    onChange={(event: any) => {
                      handleChange(event)
                      calculateTotal(event)
                    }}
                  />
                  {/* {errors.price && touched.price && (
                    <div className="input-feedback">{errors.price}</div>
                  )} */}
                  {values.price === maxPurchaseAmt ? (
                    <div className="form-label-wrapper align-end">
                      <label
                        className="reset-txt"
                        onClick={() => setFieldValue('price', '')}
                      >
                        Clear
                      </label>
                    </div>
                  ) : (
                    <div className="form-label-wrapper align-end">
                      <label>Maximum coins to sell:</label>
                      <label
                        className="form-label-active"
                        onClick={() => setFieldValue('price', maxPurchaseAmt)}
                      >
                        15.24
                      </label>
                    </div>
                  )}
                </div>
                <NftSummary estimatedValue={fixedPrice} totalValue={totalSum} />
                {/* <NftSummary summaryData={NftPlayerPriceData} /> */}
                <div className="spinner-wrapper">
                  <Spinner spinnerStatus={isLoading} />
                </div>
                <div className="purchase-button-wrapper">
                  <ResponseAlert status={response} />
                  <PurchaseButton
                    disabled={isLoading}
                    title={buttonTitle}
                    onPress={handleSubmit}
                  />
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default SellNftForm
