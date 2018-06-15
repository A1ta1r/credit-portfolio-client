<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="text-center col-lg-10 col-md-10 ">
      <h3>{{user.username}}</h3><br>
      <div class="row collumnTable">
        <div class="leftColumn">Доходы
          <table cellspacing="0" class="my-table">
            <tr>
              <td class="sumColumn" :class="{'has-danger':errors.first('incomeSum') != null}">
                <input class="form-control" name="incomeSum" v-model="currentIncome.amount" data-vv-as="сумма"
                       v-validate="{ required: true, decimal: true, min_value:1 }" placeholder="сумма" type="text"/>
              </td>
              <td class="reasonColumn">
                <input class="form-control" name="sourceIncome" v-model="currentIncome.reason"
                       placeholder="источник" type="text"/>
              </td>
              <td>
                <input class="btn btn-secondary" v-on:click="addIncome" title="Добавить" value="+" type="submit"/>
              </td>
            </tr>
          </table>
          <span>{{ errors.first('incomeSum') }}</span>
        </div>
        <td class="rightColumn">Расходы
          <table cellspacing="0" class="my-table">
            <tr>
              <td class="sumColumn" :class="{'has-danger':errors.first('expenseSum') != null}">
                <input class="form-control" v-model="currentExpense.amount" data-vv-as="сумма" placeholder="сумма"
                       name="expenseSum" v-validate="{ required:true, decimal:true, min_value:1 }" type="text"/>
              </td>
              <td class="reasonColumn">
                <input class="form-control" v-model="currentExpense.reason" placeholder="источник" type="text"/>
              </td>
              <td class="dateColumn">
                <datepicker :input-class="datepickerInput" :language="datepickerLocale"
                            v-model="currentExpense.endDate">
                  <!--<image href="https://www.iconfinder.com/icons/285670/download/png/256"/>-->
                </datepicker>
              </td>
              <td>
                <input class="btn btn-secondary" v-on:click="addExpense" title="Добавить" value="+" type="submit"/>
              </td>
            </tr>
          </table>
          <span>{{errors.first('expenseSum')}}</span>
        </td>
      </div>
      <hr/>
      <div class="row">
        <div class="leftColumn">
          <input readonly class="form-control" type="text" v-model="totalIncome"/>
        </div>
        <div class="rightColumn">
          <input readonly class="form-control" type="text" v-model="totalExpense"/>
      </div>
      </div>
      <hr/>
      <div class="row">
        <div class="leftColumn">
          <table class="myFavoriteTable table table-bordered">
            <tr v-bind:key="item" v-for="item in user.incomes" class="form-control-static">
              <td>₽{{ item.amount }}</td>
              <td>{{ item.reason }}</td>
              <td class="deleteRow">
                <input type="button" name="deleteIncome" class="btn btn-secondary btn-danger btn-sm" title="Удалить" value="—"
                       @click="deleteIncome(item, $event)"/>
              </td>
            </tr>
          </table>
        </div>
        <td class="rightColumn">
          <table class="table table-bordered">
            <tr v-bind:key="item" v-for="item in user.expenses" class="form-control-static">
              <td>₽{{ item.amount }}</td>
              <td>{{ item.reason }}</td>
              <td>До {{ (new Date(item.endDate)).toLocaleDateString("ru", options)}}</td>
              <td class="deleteRow">
                <input type="button" class="btn btn-secondary btn-sm btn-danger" title="Удалить" value="—" name="deleteIncome"
                       @click="deleteExpense(item, $event)"/>
              </td>
            </tr>
          </table>
        </td>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../models/user'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'

export default {
  name: 'userPage',
  components: {Datepicker},
  data () {
    return {
      user: {},
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      username: localStorage.getItem('username'),
      currentIncome: {
        amount: '',
        reason: ''
      },
      currentExpense: {
        amount: '',
        reason: '',
        endDate: Date.now()
      },
      datepickerLocale: ru,
      datepickerInput: 'form-control'
    }
  },
  computed: {
    totalIncome: function () {
      let sum = 0
      for (let i = 0; i < this.user.incomes.length; i++) {
        sum += this.user.incomes[i].amount
      }
      return 'Общие доходы : ₽ ' + sum
    },
    totalExpense: function () {
      let sum = 0
      for (let i = 0; i < this.user.expenses.length; i++) {
        sum += this.user.expenses[i].amount
      }
      return 'Общие расходы : ₽ ' + sum
    }
  },
  methods: {
    addIncome: function () {
      this.$validator.validate('incomeSum').then((success) => {
        if (success) {
          this.currentIncome.amount = parseFloat(this.currentIncome.amount, 10)
          if (this.user.incomes == null) {
            console.log(this.user.incomes)
            this.user.incomes = []
          }
          this.user.incomes.push(this.currentIncome)
          this.user.update()
          this.currentIncome = {
            amount: '',
            reason: ''
          }
        }
      })
    },
    addExpense: function () {
      this.$validator.validate('expenseSum').then((success) => {
        if (success) {
          this.currentExpense.amount = parseFloat(this.currentExpense.amount, 10)
          if (this.user.expenses == null) this.user.expenses = []
          this.user.expenses.push(this.currentExpense)
          this.user.update()
          this.currentExpense = {
            amount: '',
            reason: '',
            endDate: Date.now()
          }
        }
      })
    },
    deleteIncome (incomeObj, event) {
      let index = this.user.incomes.indexOf(incomeObj)
      this.user.incomes.splice(index, 1)
      this.user.update()
    },
    deleteExpense (expenseObj, event) {
      let index = this.user.expenses.indexOf(expenseObj)
      this.user.expenses.splice(index, 1)
      this.user.update()
    }
  },
  created: function () {
    let user = new User('', '', '')
    user.username = localStorage.getItem('username')
    user.fetch().then(x => {
      if (user.expenses === null) user.expenses = []
      if (user.incomes === null) user.incomes = []
      this.user = user
      console.log(user)
    })
  }
}

</script>

<style>
  .collumnTable {
    flex-wrap: wrap;
  }

  .my-table {
    width: 100%; /* Ширина всей таблицы */
  }

  .leftColumn {
    width: 50%; /* Ширина левой колонки */
    padding-right: 4px;
  }

  .rightColumn {
    width: 50%;
    padding-left: 4px;
  }

  .sumColumn {
    width: 20%;
  }

  .reasonColumn {
    justify-self: auto;
  }

  .deleteRow {
    width: 65px;
  }

  .dateColumn {
    width:180px;
  }

</style>
