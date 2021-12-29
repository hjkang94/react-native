import { callApi } from './common'

export const list = async () => {
  const accounts = await callApi('billing/account', {
    reseller_seq: 0
  })

  return {
    status: 'success',
    data: accounts
  }
}

export const get = async id => {
  const account = await callApi(`billing/account/${id}`)

  return {
    status: 'success',
    data: account
  }
}

export const create = async item => {
  const account = await callApi('billing/account', item, 'POST')

  return {
    status: 'success',
    data: account
  }
}

module.exports = {
  list,
  get,
  create
}
