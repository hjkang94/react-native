import { callApi } from './common'

export const list = async () => {
  const projects = await callApi('billing/project')

  return {
    status: 'success',
    data: projects
  }
}

module.exports = {
  list
}
