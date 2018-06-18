<template>
  <div>
    <h3>{{user.username}}</h3><br>
    <div>
      <table class="table table-bordered">
        <thead>
        <tr class="text-center">
          <th>Название</th>
          <th>Дата начала</th>
          <th>Сумма</th>
        </tr>
        </thead>
        <tr v-bind:key="item" v-for="item in user.paymentPlans" class="form-control-static">
          <td>{{ item.title }}</td>
          <td>C {{ (new Date(item.startDate)).toLocaleDateString("ru", options)}}</td>
          <td>{{ item.paymentAmount }}</td>
          <td class="deleteRow">
            <input type="button" name="deleteCredit" class="btn btn-secondary btn-danger btn-sm" title="Удалить"
                   value="—"
                   @click="deleteCredit(item, $event)"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import User from '../models/user'

export default {
  name: 'Loans',
  components: {},
  data () {
    return {
      user: {},
      options: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      username: localStorage.getItem('username')
    }
  },
  methods: {
    deleteCredit (creditObj, event) {
      let index = this.user.incomes.indexOf(creditObj)
      this.user.paymentPlans.splice(index, 1)
      this.user.update()
    }
  },
  created: function () {
    let user = new User('', '', '')
    user.username = localStorage.getItem('username')
    user.fetch().then(() => {
      this.user = user
      console.log(user)
    })
  }
}
</script>
