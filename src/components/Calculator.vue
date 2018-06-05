<template>
  <div id="calculator">

    <div class="form-group">
      <label>Сумма кредита</label>
      <input class="form-control" type="number" id="sum" min="0" v-model="sum" title="Сумма кредита"/>
    </div>

    <div class="form-group">
      <label>Количество месяцев</label>
      <input class="form-control" type="number" id="month" v-model="months" title="Количество месяцев"/>
    </div>

    <div class="form-group">
      <label>Процент</label>
      <input class="form-control" type="number" step="0.01" min="0" id="rate" v-model="rate" title="Процент"/>
    </div>

    <div class="form-group">
      <label>Дата начала платежей</label>
      <datepicker :input-class="datepickerInput" :language="datepickerLocale" v-model="startDate"></datepicker>
    </div>

    <div class="form-group">
      <label class="d-block">Тип выплат</label>
      <label class="radio-inline" for="evenradio">
        <input id="evenradio" type="radio" :value="even" v-model="paymentType">
        {{even}}
      </label>
      <label class="radio-inline" for="diffradio">
        <input id="diffradio" type="radio" :value="diff" v-model="paymentType">
        {{diff}}
      </label>
    </div>

    <div class="form-control-static">
      <input type="submit" class="btn btn-primary" title="Рассчитать" value="Рассчитать" v-on:click="calculation"/>
    </div>
    <h5 v-if="total" class="form-control-static">Итоговая сумма платежей: {{total.toFixed(2)}}</h5>
    <PaymentsTable v-if="total" :payments="currentPayments" :total="total"></PaymentsTable>
    <paginator v-if="total" v-model="currentPage" :limit="limit" :length="payments.length"></paginator>
  </div>
</template>

<script>
import PaymentsTable from '../components/PaymentsTable'
import Paginator from '../components/Paginator'
import PaymentPlan from '../models/paymentPlan'
import Calculator from '../services/calculator'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'

export default {
  name: 'calculator',
  components: {Datepicker, PaymentsTable, Paginator},
  data () {
    return {
      paymentType: PaymentPlan.LoanTypes.Even,
      even: PaymentPlan.LoanTypes.Even,
      diff: PaymentPlan.LoanTypes.Differentiated,
      paymentPlan: new PaymentPlan(),
      startDate: new Date(),
      sum: 1000000,
      months: 67,
      rate: 12.4,
      total: 0,
      payments: [],
      datepickerLocale: ru,
      datepickerInput: 'form-control',
      currentPage: 1,
      limit: 12
    }
  },
  methods: {
    calculation: function () {
      this.paymentPlan.PaymentAmount = this.sum
      this.paymentPlan.InterestRate = this.rate / 100
      this.paymentPlan.NumberOfMonths = this.months
      this.paymentPlan.StartDate = this.startDate
      this.paymentPlan.PaymentType = this.paymentType

      this.paymentPlan = Calculator.calculate(this.paymentPlan)
      this.payments = this.paymentPlan.PaymentList
      this.startDate = new Date()
      this.total = this.paymentPlan.TotalPaymentAmount
      this.currentPage = 1
    }
  },
  computed: {
    currentPayments: function () {
      let start = (this.currentPage - 1) * this.limit
      let end = start + this.limit
      return this.payments.slice(start, end)
    }
  }
}
</script>

<style scoped>
  .form-group {
    margin: 0 12rem;
  }

  label {
    margin: 1.5rem 0 0 0;
  }

  th {
    text-align: center;
  }
</style>
