import axios from 'axios'

export const url = 'http://localhost:8000'

export default axios.create({
  baseURL: url,
  headers: {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
