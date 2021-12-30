import { list } from '@/api/project'

export const fetchProjectsRequest = () => {
  return {
    type: 'FETCH_PROJECTS_REQUEST'
  }
}

export const fetchProjectsSuccess = projects => {
  return {
    type: 'FETCH_PROJECTS_SUCCESS',
    payload: projects
  }
}

export const fetchProjectsFail = () => {
  return {
    type: 'FETCH_PROJECTS_FAILED'
  }
}

export const fetchProjects = () => async dispatch => {
  try {
    dispatch(fetchProjectsRequest())
    const { data } = await list()
    dispatch(fetchProjectsSuccess(data))
  } catch (error) {
    dispatch(fetchProjectsFail())
  }
}
