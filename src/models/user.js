import {HTTP} from '../main'

export default class User {
  id
  email
  username
  password
  role
  incomes
  expenses
  paymentPlans

  constructor (username, password, email) {
    this.username = username
    this.password = password
    this.email = email
  }

  fetch () {
    return HTTP.get('/user/name/' + this.username, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      this.email = response.data.email
      this.id = response.data.id
      this.role = response.data.roleId
      this.incomes = response.data.incomes
      this.expenses = response.data.expenses
    }).catch((error) => {
      console.log(error)
    })
  }

  save () {
    return HTTP.post('/signup', this, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then(() => {
    }).catch((error) => {
      console.log(error)
    })
  }

  update () {
    return HTTP.post('/user/update', this, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then(() => {

    })
  }

  // Получает из API данные юзера по username из localStorage
  // и кладет их в глобальное хранилище.
  // Метод предназначен для получения текущего юзера.
  static fetchLoggedIn () {
    let username = localStorage.getItem('username')
    if (username === undefined) {
      return undefined
    }
    return HTTP.get('/user/' + username, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      localStorage.setItem('id', response.data.id)
      localStorage.setItem('username', response.data.username)
      localStorage.setItem('role', response.data.role)
      localStorage.setItem('email', response.data.email)
    }).catch((error) => {
      console.log(error)
    })
  }
}
