<template>
  <div class="container-fluid text-center">
    <div class="row content">
      <div class="col-sm-8 text-left">
        <div class="col-sm-2">
        </div>
        <div class="text-center">
          <h3>{{user.username}}</h3><br>
          <div class="row">
            <div class="leftColumn">Доходы
              <table cellspacing="0" class="my-table">
                <tr>
                  <td class="sumColumn" :class="{'has-danger':errors.first('incomeSum') != null}">
                    <input class="form-control" name="incomeSum" v-model="currentIncome.amount" data-vv-as="сумма"
                           v-validate="{ required: true, numeric: true, min_value:1 }" placeholder="сумма" type="text"/>
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
                           name="expenseSum" v-validate="{ required:true, numeric:true, min_value:1 }" type="text"/>
                  </td>
                  <td class="reasonColumn">
                    <input class="form-control" v-model="currentExpense.reason" placeholder="источник" type="text"/>
                  </td>
                  <td class="sumColumn">
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
              <table class="myFavoriteTable table table-bordered">
                <tr v-bind:key="item" v-for="item in user.incomes" class="form-control-static">
                  <td>₽{{ item.amount }}.00</td>
                  <td>{{ item.reason }}</td>
                  <td class="deleteRow">
                    <input type="button" name="deleteIncome" class="btn btn-secondary" title="Удалить" value="—"
                           @click="deleteIncome(item, $event)" />
                  </td>
                </tr>
              </table>
            </div>
            <td class="rightColumn">
              <table class="table table-bordered">
                <tr v-bind:key="item" v-for="item in user.expenses" class="form-control-static">
                  <td>₽{{ item.amount }}.00</td>
                  <td>{{ item.reason }}</td>
                  <td>До {{ (new Date(item.endDate)).toLocaleDateString("ru", options)}}</td>
                  <td class="deleteRow">
                    <input type="button" class="btn btn-secondary" title="Удалить" value="—"  name="deleteIncome"
                           @click="deleteExpense(item, $event)" />
                  </td>
                </tr>
              </table>
            </td>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../models/user'
import Income from '../models/income'
import Expense from '../models/expense'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'

export default {
  name: 'userPage',
  components: { Datepicker },
  data () {
    return {
      user: {},
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      username: localStorage.getItem('username'),
      currentIncome: Income,
      currentExpense: Expense,
      datepickerLocale: ru,
      datepickerInput: 'form-control'
    }
  },
  methods: {
    addIncome: function () {
      this.$validator.validate('incomeSum').then((success) => {
        if (success) {
          this.currentIncome.amount = parseInt(this.currentIncome.amount, 10)
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
          this.currentExpense.amount = parseInt(this.currentExpense.amount, 10)
          console.log(this.currentExpense)
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
    },
    deleteExpense (expenseObj, event) {
      let index = this.user.expenses.indexOf(expenseObj)
      this.user.expenses.splice(index, 1)
    }
  },
  created: function () {
    let user = new User()
    user.username = localStorage.getItem('username')
    user.fetch().then(x => {
      this.user = user
      console.log(user)
    })
  }
}

</script>

<style>
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
    width: 70%;
  }

  .deleteRow {
    width: 65px;
  }

</style>
