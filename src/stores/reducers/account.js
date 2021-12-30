const initialState = {
  accounts: [],
  isLoading: false
}

export const accountReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'FETCH_ACCOUNTS_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_ACCOUNTS_SUCCESS':
      return {
        ...state,
        accounts: payload,
        isLoading: false
      }
    case 'FETCH_ACCOUNTS_FAILED':
      return {
        ...state,
        isLoading: false
      }

    case 'CREATE_ACCOUNT_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'CREATE_ACCOUNT_SUCCESS':
      return {
        ...state,
        accounts: [...state.accounts, payload],
        isLoading: false
      }
    case 'CREATE_ACCOUNT_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default accountReducer
