import {HTTP} from '../main'

export default class User {
  id
  email
  username
  password
  role

  constructor (username, password, email) {
    this.username = username
    this.password = password
    this.email = email
  }

  fetch () {
    return HTTP.get('/user/' + this.username).then((response) => {
      this.email = response.data.email
      this.id = response.data.id
      this.role = response.data.roleId
    }).catch((error) => {
      console.log(error)
    })
  }

  save () {
    return HTTP.post('/signup', this).then(() => {
    }).catch((error) => {
      console.log(error)
    })
  }
}
