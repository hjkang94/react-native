import { getAccounts } from '../../api/account'

export const fetchAccountRequest = () => {
  return {
    type: 'FETCH_ACCOUNT_REQUEST'
  }
}

export const fetchAccountSuccess = accounts => {
  return {
    type: 'FETCH_ACCOUNT_SUCCESS',
    payload: accounts
  }
}

export const fetchAccountFail = () => {
  return {
    type: 'FETCH_ACCOUNT_FAILED'
  }
}

export const fetchDataAccount = () => async dispatch => {
  try {
    dispatch(fetchAccountRequest())
    const { data } = await getAccounts()
    dispatch(fetchAccountSuccess(data))
  } catch (error) {
    dispatch(fetchAccountFail())
  }
}
