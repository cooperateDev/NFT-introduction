import { MOBILE_MAX_WIDTH } from '@root/constants'

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const isNumeric = (str: string) => {
  if (typeof str != 'string') {
    return false
  } // we only process strings!
  return !isNaN(parseFloat(str)) && !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export const asyncLocalStorage = {
  setItem: function (key: string, value: string) {
    return Promise.resolve().then(function () {
      localStorage.setItem(key, value)
    })
  },
  getItem: function (key: string) {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key)
    })
  },
  removeItem: function (key: string) {
    return Promise.resolve().then(function () {
      return localStorage.removeItem(key)
    })
  },
}

export const isMobile = () => {
  return window.innerWidth <= MOBILE_MAX_WIDTH
}
