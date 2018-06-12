import {HTTP} from '../main'

export function signIn (username, password) {
  HTTP.post('/signin', {
    username: this.settings.username,
    password: this.settings.password
  }).then((response) => {
    HTTP['Authorization'] = 'Bearer ' + response.data.token
  }).catch((error) => {
    console.log(error.message)
  })
}

export function refreshToken () {
  HTTP.post('/refreshToken', {
    username: this.settings.username,
    password: this.settings.password
  }).then((response) => {
    HTTP['Authorization'] = 'Bearer ' + response.data.token
  }).catch((error) => {
    console.log(error.message)
  })
}
