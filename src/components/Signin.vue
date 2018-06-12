<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="col-md-4">
      <div class="form-group" :class="{'has-danger':errors.first('username') != null}">
        <label for="username">Имя пользователя:</label>
        <input id="username" type="text" class="form-control" name="username" data-vv-as="Имя пользователя"
               v-validate="'required'" v-model="settings.username">
      </div>
      <span>{{errors.first('username')}}</span>
      <div class="form-group" :class="{'has-danger':errors.has('password')}">
        <label for="password">Пароль:</label>
        <input id="password" type="password" class="form-control" name="password" data-vv-as="Пароль"
               v-validate="'required'" v-model="settings.password">
      </div>
      <span>{{errors.first('password')}}</span>
      <div>
        <button type="submit" class="btn btn-primary" id="confirm_btn" @click="signin">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import {signIn} from '../services/auth'

export default {
  name: 'Signin',
  data: function () {
    return {
      settings: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin: function () {
      this.$validator.validateAll().then((success) => {
        if (success) {
          signIn(this.settings.username, this.settings.password)
          this.$router.push('/user/' + this.settings.username)
        }
      }).catch((error) => {
        console.log('err ' + error.message)
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
