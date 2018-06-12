import {HTTP} from '../main'

// Метод делает запрос к API для получения JWT,
// затем производит запись JWT и username в localStorage для
// использования в других частях приложения
export function signIn (username, password) {
  return HTTP.post('/signin', {
    username: username,
    password: password
  }).then((response) => {
    localStorage.setItem('token', 'Bearer ' + response.data.token)
    localStorage.setItem('username', username)
  }).catch((error) => {
    console.log(error.message)
  })
}

// Метод делает запрос к API для обновления текущего JWT,
// затем производит запись JWT в localStorage для
// использования в других частях приложения
export function refreshToken () {
  HTTP.get('/refreshToken', {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then((response) => {
    localStorage.setItem('token', 'Bearer ' + response.data.token)
    console.log(HTTP.headers)
  }).catch((error) => {
    console.log(error.message)
  })
}
