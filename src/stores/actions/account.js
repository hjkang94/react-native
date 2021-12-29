import { list, get, create } from '@/api/account'

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
    const { data } = await list()
    dispatch(fetchAccountsSuccess(data))
  } catch (error) {
    dispatch(fetchAccountsFail())
  }
}

export const createAccountRequest = () => {
  return {
    type: 'CREATE_ACCOUNT_REQUEST'
  }
}

export const createAccountSuccess = account => {
  return {
    type: 'CREATE_ACCOUNT_SUCCESS',
    payload: account
  }
}

export const createAccountFail = () => {
  return {
    type: 'CREATE_ACCOUNT_FAIL'
  }
}

export const createAccount = item => async dispatch => {
  try {
    dispatch(createAccountRequest())
    await create(item)
    const { data } = await get(item.id)
    dispatch(createAccountSuccess(data))
  } catch (error) {
    dispatch(createAccountFail())
  }
}
