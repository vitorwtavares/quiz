import axios from 'axios'

const defaultOptions = {
  baseURL: 'https://opentdb.com/'
}

const instance = axios.create(defaultOptions)

export default instance
