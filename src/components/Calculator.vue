<template>
  <div id="calculator" class="flex-container">

    <div style="margin-bottom: 0; margin-top: 10pt" class="form-group">
      <label>Название кредита</label>
      <input class="form-control" type="text" id="title" :min="1" v-model="paymentPlan.title"
             placeholder="Введите название" title="Название кредита"/>
    </div>
    <span v-if="errorsCust.month.length" v-bind:key="error" v-for="error in errorsCust.month">{{error}}</span>

    <div style="margin-bottom: 0" class="form-group" v-bind:class="{ 'has-danger': errorsCust.sum.length }">
      <label>Сумма кредита, ₽</label>
      <vue-numeric currency="₽" separator="space" class="form-control" v-model="paymentPlan.paymentAmount"
                   placeholder="сумма"
                   id="sum" title="Сумма кредита" :min="1"
                   :precision="2" :value="paymentPlan.paymentAmount" decimal-separator="."></vue-numeric>
    </div>
    <span v-if="errorsCust.sum.length" v-bind:key="error" v-for="error in errorsCust.sum">{{error}}</span>

    <div style="margin-bottom: 0; margin-top: 10pt" class="form-group"
         v-bind:class="{ 'has-danger': errorsCust.month.length }">
      <label>Количество месяцев</label>
      <input class="form-control" type="number" id="month" :min="1" v-model="paymentPlan.numberOfMonths"
             title="Количество месяцев"/>
    </div>
    <span v-if="errorsCust.month.length" v-bind:key="error" v-for="error in errorsCust.month">{{error}}</span>

    <div style="margin-bottom: 0; margin-top: 10pt" class="form-group"
         v-bind:class="{ 'has-danger': errorsCust.rate.length }">
      <label>Процент в год, %</label>
      <vue-numeric currency="%" separator="space" class="form-control" v-model="paymentPlan.interestRate"
                   placeholder="процент в год"
                   id="rate" title="Процент" :min="0.01"
                   :precision="2" :value="paymentPlan.interestRate" decimal-separator="."></vue-numeric>
    </div>
    <span v-if="errorsCust.rate.length" v-bind:key="error" v-for="error in errorsCust.rate">{{error}}</span>

    <div style="margin-top: 10pt" class="form-group">
      <label>Дата начала платежей</label>
      <datepicker :input-class="datepickerInput" :language="datepickerLocale" v-model="startDate"></datepicker>
    </div>

    <div class="form-group">
      <label class="d-block">Тип выплат</label>
      <label class="radio-inline" for="evenradio" data-toggle="tooltip" title="Равные выплаты">
        <input id="evenradio" type="radio" :value="even" v-model="paymentPlan.paymentType">
        {{even}}
      </label>
      <label class="radio-inline" for="diffradio" data-toggle="tooltip" title="Уменьшающиеся выплаты">
        <input id="diffradio" type="radio" :value="diff" v-model="paymentPlan.paymentType">
        {{diff}}
      </label>
      <div align="left">
        <div v-if="paymentPlan.paymentType === diff">Вычисляется следующим образом:
          <ul>ДП = ОСЗ / ПП + ОСЗ х ПС , где
            <li>ДП - размер дифференцированного платежа</li>
            <li>ОСЗ - остаток ссудной задолженности</li>
            <li>ПП - количество периодов, оставшихся до погашения кредита</li>
            <li>ПС - месячная процентная ставка по кредитному договору, равная 1/12 годовой процентной ставки</li>
          </ul>
        </div>
        <div v-if="paymentPlan.paymentType === even">Равные выплаты каждый месяц</div>
      </div>
    </div>

    <div class="form-control-static">
      <input type="submit" class="btn btn-primary" title="Рассчитать" value="Рассчитать" v-on:click="calculation"/>
      <input type="submit" @click="addPlan" v-if="logged" :class="{'btn-success':paymentPlan.totalPaymentAmount}"
             :disabled="!paymentPlan.totalPaymentAmount" class="btn" title="Добавить кредит себе"
             value="Добавить кредит себе"/>
    </div>
    <h5 v-if="paymentPlan.totalPaymentAmount" class="form-control-static">Итоговая сумма платежей:
      <vue-numeric currency="₽" separator="space" v-bind:value="paymentPlan.totalPaymentAmount" :read-only="true"
                   :precision="2" decimal-separator="."></vue-numeric>
    </h5>
    <h5 v-if="paymentPlan.totalPaymentAmount">
      Переплата по кредиту:
      <vue-numeric currency="₽" separator="space" v-bind:value="paymentDifference" :read-only="true"
                   :precision="2" decimal-separator="."></vue-numeric>
    </h5>
    <PaymentsTable v-if="paymentPlan.totalPaymentAmount" :payments="currentPayments" :page="this.pagination.page"
                   :myPaymentPlan="getPaymentsAmount"
                   :total="paymentPlan.totalPaymentAmount"></PaymentsTable>
    <paginator v-if="paymentPlan.totalPaymentAmount" v-model="pagination" :limit="pagination.limit"
               :length="paymentPlan.paymentList.length"></paginator>
  </div>
</template>

<script>
import PaymentsTable from '../components/PaymentsTable'
import Paginator from '../components/Paginator'
import PaymentPlan from '../models/paymentPlan'
import Calculator from '../services/calculator'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'
import {checkLoggedIn} from '../services/auth'
import User from '../models/user'

export default {
  name: 'calculator',
  components: {Datepicker, PaymentsTable, Paginator},
  data () {
    return {
      even: PaymentPlan.LoanTypes.Even,
      diff: PaymentPlan.LoanTypes.Differentiated,
      user: {},
      paymentPlan: new PaymentPlan(),
      planToSave: null,
      startDate: Date.now(),
      datepickerLocale: ru,
      datepickerInput: 'form-control',
      errorsCust: {
        sum: [],
        month: [],
        rate: []
      }, // Добавил массив ошибок, как в примере
      pagination: {
        page: 1,
        limit: 12,
        offset: 0
      },
      paymentDifference: 0
    }
  },
  methods: {
    calculation: function () {
      let paymAmnt = this.paymentPlan.paymentAmount
      let numbMnth = this.paymentPlan.numberOfMonths
      let intrRate = this.paymentPlan.interestRate
      this.errorsCust.sum = []
      this.errorsCust.month = []
      this.errorsCust.rate = []
      if (paymAmnt && numbMnth && intrRate) {
        if (!(paymAmnt <= 0 || paymAmnt > 999999999) && !(numbMnth <= 0 || numbMnth > 600) && !(intrRate <= 0 || intrRate > 2000)) {
          if (!((numbMnth + '').indexOf('.') >= 0)) {
            this.paymentPlan.startDate = new Date(this.startDate)
            this.paymentPlan = Calculator.calculate(this.paymentPlan)
            this.planToSave = Object.assign(this.paymentPlan)
            this.pagination = {
              page: 1,
              limit: 12,
              offset: 0
            }
            this.paymentDifference = this.paymentPlan.totalPaymentAmount - this.paymentPlan.paymentAmount
          } else {
            this.errorsCust.month.push('Нецелое количество месяцев')
            // Тут ещё нужно удалить старый план оплат, чтоб при ошибке не было цифр внизу
          }
        } else {
          if (paymAmnt <= 0) this.errorsCust.sum.push('Отрицательная или нулевая сумма кредита')
          if (paymAmnt > 999999999) this.errorsCust.sum.push('Слишком большое число суммы кредита')
          if (numbMnth <= 0) this.errorsCust.month.push('Отрицательное или нулевое количество месяцев')
          if (numbMnth > 600) this.errorsCust.month.push('Слишком большое число количества месяцев')
          if (intrRate <= 0) this.errorsCust.rate.push('Отрицательный или нулевой процент в год')
          if (intrRate > 2000) this.errorsCust.rate.push('Слишком большое число процента в год')
          // Тут ещё нужно удалить старый план оплат, чтоб при ошибке не было цифр внизу
        }
      } else {
        if (!paymAmnt) this.errorsCust.sum.push('Требуется указать сумму кредита')
        if (!numbMnth) this.errorsCust.month.push('Требуется указать количество месяцев')
        if (!intrRate) this.errorsCust.rate.push('Требуется указать процент в год')
        // Тут ещё нужно удалить старый план оплат, чтоб при ошибке не было цифр внизу
      }
    },
    addPlan: function () {
      if (this.user.paymentPlans == null) this.user.paymentPlans = []
      this.paymentPlan.interestRate = parseFloat(this.paymentPlan.interestRate)
      this.paymentPlan.numberOfMonths = parseFloat(this.paymentPlan.numberOfMonths)
      this.paymentPlan.paymentAmount = parseFloat(this.paymentPlan.paymentAmount)
      this.user.paymentPlans.push(this.planToSave)
      this.user.update()

      this.planToSave = {}
    }
  },
  computed: {
    logged: function () { return checkLoggedIn() },
    currentPayments: function () {
      let start = (this.pagination.page - 1) * this.pagination.limit
      let end = start + this.pagination.limit
      return this.paymentPlan.paymentList.slice(start, end)
    },
    getPaymentsAmount: function () {
      if (this.paymentPlan.paymentType === this.even) {
        return undefined
      } else {
        let result = []
        for (let i = 0; i < this.paymentPlan.paymentList.length; i++) {
          result.push(this.paymentPlan.paymentList[i].paymentAmount)
        }
        return result
      }
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
  },
  mounted: function () {
    this.paymentPlan.paymentAmount = 300001
    this.paymentPlan.interestRate = 12
    this.paymentPlan.numberOfMonths = 24
  }
}
</script>

<style scoped>
  #calculator {
    margin: 0 16px;
  }

  label {
    margin: 16px 0 0 0;
  }

  th {
    text-align: center;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
</style>
