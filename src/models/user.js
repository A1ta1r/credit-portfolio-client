import {Model} from 'vue-mc'

export default class User extends Model {
  defaults () {
    return {
      id: null,
      email: null,
      username: null,
      password: null,
      role: null
    }
  }

  routes () {
    return {
      fetch: 'http://localhost:8000/user/{id}',
      save: 'http://localhost:8000/signup'
    }
  }
}
