<template>
  <div class="d-flex flex-column justify-content-center align-items-center col-md-4">
    <div class="form-group" :class="{'has-danger':errors.first('email') != null}">
      <label for="email">Электронная почта:</label>
      <input id="email" type="email" class="form-control" data-vv-as="Электронная почта" name="email"
             v-validate="'required|email'" placeholder="Укажите email" v-model="settings.email">
    </div>
    <span>{{errors.first('email')}}</span>
    <div class="form-group" :class="{'has-danger':errors.first('username') != null}">
      <label for="username">Имя пользователя:</label>
      <input id="username" type="text" class="form-control" name="username" data-vv-as="Имя пользователя"
             v-validate="'required|alpha_num'" placeholder="Укажите имя пользователя" v-model="settings.username">
    </div>
    <span>{{errors.first('username')}}</span>
    <div class="form-group" :class="{'has-danger':errors.has('password')}">
      <label for="password">Пароль:</label>
      <input id="password" type="password" class="form-control" name="password" data-vv-as="Пароль"
             v-validate="{ required: true, min: 3}" v-model="settings.password" placeholder="Укажите пароль">
    </div>
    <span>{{errors.first('password')}}</span>
    <div class="form-group" :class="{'has-danger':errors.has('password_confirmation')}">
      <label for="password_confirmation">Подтверждение пароля:</label>
      <input id="password_confirmation" type="password" class="form-control" data-vv-as="Подтверждение пароля"
             name="password_confirmation" v-model="settings.password_confirmation"
             v-validate="{ required: true, confirmed: settings.password}" placeholder="Подтвердите пароль">
    </div>
    <span v-if="errors.has('password_confirmation')">Введенные пароли должны совпадать.</span>
    <div>
      <button type="button" class="btn btn-primary" id="confirm_btn" @click="signup">ОК</button>
    </div>
  </div>
</template>

<script>
import User from '../models/user'
import {signIn} from '../services/auth'

export default {
  name: 'Signup',
  data: function () {
    return {
      settings: {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    signup: function () {
      this.$validator.validateAll().then((success) => {
        if (success) {
          let user = new User(
            this.settings.username,
            this.settings.password,
            this.settings.email
          )
          user.save().then(() => {
            signIn(user.username, user.password).then(() => {
              this.$router.push('/user/' + this.settings.username)
              user.fetch().then(() => {
              })
            })
          })
        }
      }).catch((error) => {
        console.log('err ' + error.message)
        this.errors.push(error)
      })
    }
  }
}
</script>

<style scoped>
  .form-group {
    margin-bottom: 0;
  }

  label {
    margin-top: 16px;
  }

  span {
    color: #d9534f;
  }

  #confirm_btn {
    margin-top: 16px;
  }
</style>
