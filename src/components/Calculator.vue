<template>
  <div id="calculator">
    <div class="form-group form-inline">
      <label class="">Сумма кредита</label>
      <input class="form-control" type="number" id="sum" min="0" v-model="sum" title="Сумма кредита"/>
    </div>
    <div class="form-group  form-inline">
      <label>Количество месяцев</label>
      <input class="form-control" type="number" id="month" v-model="months" title="Количество месяцев"/>
    </div>
    <div class="form-group form-inline">
      <label>Процент</label>
      <input class="form-control" type="number" step="0.01" min="0" id="rate" v-model="rate" title="Процент"/>
    </div>
    <div class="form-group form-inline">
      <label>Дата начала платежей</label>
      <datepicker :input-class="datepickerInput" :language="datepickerLocale" v-model="startDate"></datepicker>
    </div>
    <div class="form-group form-inline">
      <label>Тип выплат</label>
      <div class="radio">
        <label class="radio-inline" for="evenradio">
          <input id="evenradio" type="radio" :value="even" v-model="paymentType">
          {{even}}
        </label>
      </div>
      <div class="radio">
        <label class="radio-inline" for="diffradio">
          <input id="diffradio" type="radio" :value="diff" v-model="paymentType">
          {{diff}}
        </label>
      </div>
    </div>
    <div class="form-control-static">
      <input type="submit" class="btn btn-primary" title="Рассчитать" value="Рассчитать" v-on:click="calculation"/>
    </div>
    <div class="form-group" v-if="total">
      <h6 class="form-control-static">Итоговая сумма платежей: {{paymentPlan.TotalPaymentAmount.toFixed(2)}}</h6>
      <table class="table table-bordered">
        <tr v-bind:key="item.paymentDate" v-for="item in calendar" class="form-control-static">
          <td>{{ (new Date(item.paymentDate)).toLocaleDateString("ru", options) }}</td>
          <td>{{ item.paymentAmount.toFixed(2) }} RUB</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import PaymentPlan from '../models/paymentPlan'
import Calculator from '../services/calculator'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'

export default {
  name: 'calculator',
  components: {Datepicker},
  data () {
    return {
      paymentType: PaymentPlan.LoanTypes.Even,
      even: PaymentPlan.LoanTypes.Even,
      diff: PaymentPlan.LoanTypes.Differentiated,
      paymentPlan: new PaymentPlan(),
      startDate: new Date(),
      sum: 1000000,
      months: 12,
      rate: 12.4,
      total: false,
      calendar: [],
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      datepickerLocale: ru,
      datepickerInput: 'form-control'
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
      this.calendar = this.paymentPlan.PaymentList
      this.startDate = new Date()
      this.total = this.paymentPlan.TotalPaymentAmount
    }
  }
}
</script>

<style scoped>
  label {
    margin: 4pt;
  }
</style>
