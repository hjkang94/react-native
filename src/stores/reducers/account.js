const initialState = {
  accounts: [],
  isLoading: false
}

export const accountReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_ACCOUNT_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_ACCOUNT_SUCCESS':
      return {
        ...state,
        accounts: payload,
        isLoading: false
      }
    case 'FETCH_ACCOUNT_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default accountReducer
