const initialState = {
  accounts: [],
  isLoading: false
}

export const accountReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
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

    default:
      return state
  }
}

export default accountReducer
