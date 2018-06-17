<template>
  <div>
    <h1>Лента событий</h1>
    <div>
      <table class="table table-bordered">
        <tr v-bind:key="item.id" v-for="item in user.incomes" class="form-control-static">
          <td>
            <vue-numeric currency="₽" separator="space" v-bind:value="item.amount" :read-only="true"
                         :precision="2" decimal-separator="."></vue-numeric>
          </td>
          <td>{{ item.reason }}</td>
          <td class="deleteRow">
            <input type="button" name="deleteIncome" class="btn btn-secondary btn-danger btn-sm" title="Удалить"
                   value="—"
                   @click="deleteIncome(item, $event)"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import User from '../models/user'

export default {
  name: 'Agenda',
  data () {
    return {
      user: {}
    }
  },
  created: function () {
    let user = new User('', '', '')
    user.username = localStorage.getItem('username')
    user.fetch().then(() => {
      if (user.expenses === null) user.expenses = []
      if (user.incomes === null) user.incomes = []
      if (user.paymentPlans === null) user.paymentPlans = []
      this.user = user
    })
  }
}
</script>

<style scoped>

</style>
