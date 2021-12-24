const initialState = {
  projects: [],
  isLoading: false
}

export const projectReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_PROJECTS_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_PROJECTS_SUCCESS':
      return {
        ...state,
        projects: payload,
        isLoading: false
      }
    case 'FETCH_PROJECTS_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default projectReducer
