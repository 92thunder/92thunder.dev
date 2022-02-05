import Cookies from 'js-cookie'
import ky from 'ky'

export const apiClient = ky.create({
  // prefixUrl: 'http://localhost:1323',
  prefixUrl: 'https://92thunder.dev/api',
  headers: {
    'Content-Type': 'application/json',
    ...{
      'session_id': Cookies.get('session_id')
    }
  },
  timeout: 5000
})