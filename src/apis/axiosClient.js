import axios from 'axios'
import { API_CONSTANTS as constants } from '@root/constants'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = constants.HOST_URL

// axiosClient.defaults.headers = constants.headers

// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = true

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then(response => response)
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response)
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response)
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response)
}
