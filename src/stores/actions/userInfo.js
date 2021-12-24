export const fetchUserInfoRequest = () => {
  return {
    type: 'FETCH_USER_INFO_REQUEST'
  }
}

export const fetchUserInfoSuccess = userInfo => {
  return {
    type: 'FETCH_USER_INFO_SUCCESS',
    payload: userInfo
  }
}

export const fetchUserInfoFail = () => {
  return {
    type: 'FETCH_USER_INFO_FAILED'
  }
}

export const fetchUserInfo = item => async dispatch => {
  try {
    dispatch(fetchUserInfoRequest())
    dispatch(fetchUserInfoSuccess(item))
  } catch (error) {
    dispatch(fetchUserInfoFail())
  }
}
