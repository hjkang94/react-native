import { callApi } from './common'

export const getProjects = async () => {
  const projects = await callApi('billing/project')

  return {
    status: 'success',
    data: projects
  }
}

module.exports = {
  getProjects
}
