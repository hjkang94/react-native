const initialState = {
  userInfo: null,
  isLoading: false
}

export const userInfoReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_USER_INFO_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_USER_INFO_SUCCESS':
      return {
        ...state,
        userInfo: payload,
        isLoading: false
      }
    case 'FETCH_USER_INFO_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default userInfoReducer
