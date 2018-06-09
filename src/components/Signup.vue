<template>
  <form class="form-group">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="form-group col-md-6" :class="{'has-danger':errors.first('email') != null}">
        <label for="email">Электронная почта:</label>
        <input id="email" type="email" class="form-control" data-vv-as="Электронная почта" name="email"
               v-validate="'required|email'">
        <span>{{errors.first('email')}}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-danger':errors.first('username') != null}">
        <label for="username">Имя пользователя:</label>
        <input id="username" type="text" class="form-control" name="username" data-vv-as="Имя пользователя"
               v-validate="'required|alpha_num'">
        <span>{{errors.first('username')}}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-danger':errors.has('password')}">
        <label for="password">Пароль:</label>
        <input id="password" type="password" class="form-control" name="password" data-vv-as="Пароль"
               v-validate="{ required: true, min: 3}" v-model="settings.password">
        <span>{{errors.first('password')}}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-danger':errors.has('password_confirmation')}">
        <label for="password_confirmation">Подтверждение пароля:</label>
        <input id="password_confirmation" type="password" class="form-control" data-vv-as="Подтверждение пароля"
               name="password_confirmation" v-model="settings.password_confirmation"
               v-validate="{ required: true, confirmed: settings.password}">
        <span v-if="errors.has('password_confirmation')">Введенные пароли должны совпадать.</span>
      </div>
      <button type="button" class="btn btn-primary">ОК</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Signup.vue',
  data: function () {
    return {
      settings: {
        password: '',
        password_confirmation: ''
      }
    }
  }
}
</script>

<style scoped>
  span {
    color: #d9534f;
  }
</style>
