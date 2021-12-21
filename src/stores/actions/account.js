import { getAccounts } from '@/api/account'

export const fetchAccountsRequest = () => {
  return {
    type: 'FETCH_ACCOUNTS_REQUEST'
  }
}

export const fetchAccountsSuccess = accounts => {
  return {
    type: 'FETCH_ACCOUNTS_SUCCESS',
    payload: accounts
  }
}

export const fetchAccountsFail = () => {
  return {
    type: 'FETCH_ACCOUNTS_FAILED'
  }
}

export const fetchAccounts = () => async dispatch => {
  try {
    dispatch(fetchAccountsRequest())
    const { data } = await getAccounts()
    dispatch(fetchAccountsSuccess(data))
  } catch (error) {
    dispatch(fetchAccountsFail())
  }
}
