import { callApi } from './common'

export const getAccounts = async () => {
  const accounts = await callApi('billing/account', {
    reseller_seq: 0
  })

  return {
    status: 'success',
    data: accounts
  }
}

module.exports = {
  getAccounts
}
