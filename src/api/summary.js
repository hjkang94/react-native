import { callApi } from './common'

export const getSummarys = async () => {
  const summarys = await callApi(
    'billing/usage_monthly/015511-0AD477-A67749/202111'
  )

  return {
    status: 'success',
    data: summarys
  }
}

module.exports = {
  getSummarys
}
