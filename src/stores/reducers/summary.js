const initialState = {
  summarys: [],
  isLoading: false
}

export const summaryReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_SUMMARYS_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_SUMMARYS_SUCCESS':
      return {
        ...state,
        summarys: payload,
        isLoading: false
      }
    case 'FETCH_SUMMARYS_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default summaryReducer
