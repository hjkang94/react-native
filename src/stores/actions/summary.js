import { getSummarys } from '../../api/summary'

export const fetchSummaryRequest = () => {
  return {
    type: 'FETCH_SUMMARY_REQUEST'
  }
}

export const fetchSummarySuccess = users => {
  return {
    type: 'FETCH_SUMMARY_SUCCESS',
    payload: users
  }
}

export const fetchSummaryFail = () => {
  return {
    type: 'FETCH_SUMMARY_FAILED'
  }
}

export const fetchSummarys = () => async dispatch => {
  try {
    dispatch(fetchSummaryRequest())
    const { data } = await getSummarys()
    dispatch(fetchSummarySuccess(data))
  } catch (error) {
    dispatch(fetchSummaryFail())
  }
}
