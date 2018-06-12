import {HTTP} from '../main'

export function signIn (username, password) {
  console.log('signin...')
  return HTTP.post('/signin', {
    username: username,
    password: password
  }).then((response) => {
    HTTP.defaults.headers.Authorization = 'Bearer ' + response.data.token
    console.log('done signin')
    console.log(HTTP.defaults.headers.Authorization)
  }).catch((error) => {
    console.log(error.message)
  })
}

export function refreshToken () {
  HTTP.post('/refreshToken', {
    username: this.settings.username,
    password: this.settings.password
  }).then((response) => {
    HTTP.defaults.headers.Authorization = 'Bearer ' + response.data.token
    console.log(HTTP.headers)
  }).catch((error) => {
    console.log(error.message)
  })
}
