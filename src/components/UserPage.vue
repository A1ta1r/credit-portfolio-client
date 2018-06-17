<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="text-center col-lg-10 col-md-10 ">
      <h3>{{user.username}}</h3><br>
      <!--поля добавления расходов и доходяг-->
      <div>
        <ul class="flex-container">
          <!--доход/расход-->
          <li>
            <p>{{ selectedState }}</p>
            <toggle style="margin-bottom: -6px" v-model="currentIncome.isIncome"></toggle>
          </li>
          <li  id="sum" class="" >
            <vue-numeric currency="₽" separator="space" class="form-control flex-item" v-model="currentIncome.amount"
                         data-vv-as="сумма" placeholder="сумма"
                         name="incomeSum" v-validate="{ min_value:0.01, required:true, decimal:true }"
                         :precision="2" value="" decimal-separator="."></vue-numeric>
          </li>
          <li id="reason" class="">
            <input class="form-control flex-item" name="sourceIncome" v-model="currentIncome.reason"
                   placeholder="источник" type="text"/>
          </li>

          <li  id="frequency" class="" >
            <vue-numeric  class="form-control flex-item smalInt" v-model="currentIncome.frequency"
                          placeholder="Количество"
                          name="frequency" v-validate="{ min_value: 0, required:true, numeric:true }"></vue-numeric>
          </li>
          <li id="period" class="">Периодичность
            <select class="form-control" v-model="currentIncome.paymentPeriod">
              <option>Единовременный</option>
              <option>День</option>
              <option>Неделя</option>
              <option>Месяц</option>
              <option>Квартал</option>
              <option>Год</option>
            </select>
          </li>
          <li id="date" class="">
            <datepicker class="flex-item" :input-class="datepickerInput" :language="datepickerLocale"
                        v-model="currentIncome.startDate">
            </datepicker>
          </li>
          <li id="add" class="">
            <input class="btn btn-success flex-item" v-on:click="addBtnClick" title="Добавить" value="+" type="submit"/>
          </li>
        </ul>
        <span class="">{{ errors.first('incomeSum') }}</span>
      </div>
      <hr/>
      <!--сумма доходов и расходов-->
      <div class="row">
        <div class="leftColumn">
          <label class="form-control form-control-success">
            Доходы:
            <vue-numeric currency="₽" separator="space" v-bind:value="totalIncome" :read-only="true"
                         :precision="2" decimal-separator="."></vue-numeric>
          </label>
        </div>
        <div class="rightColumn">
          <label class="form-control form-control-success">
            Расходы:
            <vue-numeric currency="₽" separator="space" v-bind:value="totalExpense" :read-only="true"
                         :precision="2" decimal-separator="."></vue-numeric>
          </label>

        </div>
      </div>
      <hr/>
      <!--таблички с доходами и расходами на твое содержание-->
      <div class="row">
        <div class="leftColumn">
          <table class="myFavoriteTable table table-bordered">
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
        <td class="rightColumn">
          <table class="table table-bordered">
            <tr v-bind:key="item.id" v-for="item in user.expenses" class="form-control-static">
              <td>
                <vue-numeric currency="₽" separator="space" v-bind:value="item.amount" :read-only="true"
                             :precision="2" decimal-separator="."></vue-numeric>
              </td>
              <td>{{ item.reason }}</td>
              <td>До {{ (new Date(item.startDate)).toLocaleDateString("ru", options)}}</td>
              <td class="deleteRow">
                <input type="button" class="btn btn-secondary btn-sm btn-danger" title="Удалить" value="—"
                       name="deleteIncome"
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
import Toggle from 'vue-libs-simple-toggle'

export default {
  name: 'userPage',
  components: {Datepicker, Toggle},
  data () {
    return {
      user: {},
      options: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      username: localStorage.getItem('username'),
      // true = income false = expense
      currentState: true,
      currentIncome: {
        isIncome: true,
        amount: '',
        reason: '',
        paymentPeriod: '',
        frequency: '',
        startDate: new Date(Date.now()),
        isRepeatable: false
      },
      datepickerLocale: ru,
      datepickerInput: 'form-control'
    }
  },
  computed: {
    totalIncome: function () {
      if (!this.user.incomes) {
        return 0
      }
      let sum = 0
      for (let i = 0; i < this.user.incomes.length; i++) {
        sum += this.user.incomes[i].amount
      }
      return sum
    },
    totalExpense: function () {
      if (!this.user.expenses) {
        return 0
      }
      let sum = 0
      for (let i = 0; this.user !== null && i < this.user.expenses.length; i++) {
        sum += this.user.expenses[i].amount
      }
      return sum
    },
    selectedState: function () {
      if (this.currentIncome.isIncome) return 'Доход'
      else return 'Расход'
    }
  },
  methods: {
    addBtnClick: function () {
      this.currentIncome.amount = parseFloat(this.currentIncome.amount, 10)
      if (this.user.incomes == null) this.user.incomes = []
      if (this.user.expenses == null) this.user.expenses = []

      this.currentIncome.isRepeatable = this.currentIncome.paymentPeriod === 'Единовременный'

      if (this.currentIncome.isIncome) this.user.incomes.push(this.currentIncome)
      else this.user.expenses.push(this.currentIncome)
      this.user.update()

      this.currentIncome = {
        isIncome: this.isIncome,
        amount: this.amount,
        reason: this.reason,
        paymentPeriod: this.paymentPeriod,
        frequency: this.frequency,
        startDate: new Date(Date.now()),
        isRepeatable: this.isRepeatable
      }
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
    user.fetch().then(() => {
      if (user.expenses === null) user.expenses = []
      if (user.incomes === null) user.incomes = []
      this.user = user
    })
  }
}

</script>

<style>
  .flex-item {
    margin-left: 4px;
    margin-right: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .flex-container {
    padding: 1px;
    margin: 0px;
    list-style: none;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-end;
  }

  .smalInt {
    width: 50px;
  }

  .collumnTable {
    flex-wrap: wrap;
  }

  .my-table {
    width: 100%; /* Ширина всей таблицы */
  }

  .leftColumn {
    width: 50%; /* Ширина левой колонки */
    padding-right: 2px;
  }

  .rightColumn {
    width: 50%;
    padding-left: 2px;
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
    width: 180px;
  }

</style>
