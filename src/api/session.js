import URI from 'urijs'
import { callApi } from './common'

export const info = async params => {
  return await callApi('session/info', params)
}

export const login = async () => {
  const res = await callApi('session/login_info', {
    redirect: 'myapp://homebase'
  })
  return URI(res.url)
    .query(res.qs || {})
    .toString()
}

export const logout = () => {
  callApi('session/logout')
}

module.exports = {
  info,
  login,
  logout
}
