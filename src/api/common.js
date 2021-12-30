import axios from 'axios'

export function callApi(path, params, method) {
  return new Promise((resolve, reject) => {
    const get = !method || method === 'get'
    const options = {
      method: method || 'get',
      url: `http://localhost:4000/api/${path}`,
      params: get ? params || {} : undefined,
      data: !get ? params || {} : undefined,
      withCredentials: true
    }

    axios(options)
      .then(resp => {
        return resolve(resp.data)
      })
      .catch(err => {
        if (err.response) {
          return reject({
            success: false,
            status: err.response.status,
            message: err.message
          })
        }

        return reject({ success: false, message: err.message })
      })
  })
}
export default {
  callApi
}
