import { getSummarys } from '@/api/summary'

export const fetchSummarysRequest = () => {
  return {
    type: 'FETCH_SUMMARYS_REQUEST'
  }
}

export const fetchSummarysSuccess = summarys => {
  return {
    type: 'FETCH_SUMMARYS_SUCCESS',
    payload: summarys
  }
}

export const fetchSummarysFail = () => {
  return {
    type: 'FETCH_SUMMARYS_FAILED'
  }
}

export const fetchSummarys = () => async dispatch => {
  try {
    dispatch(fetchSummarysRequest())
    const { data } = await getSummarys()
    dispatch(fetchSummarysSuccess(data))
  } catch (error) {
    dispatch(fetchSummarysFail())
  }
}
