<template>
  <div class="calculator">
    <label for="sum">Сумма кредита</label><input type="number" id="sum" v-model="sum" title="Сумма кредита"/><br>
    <label for="month">Количество месяцев</label><input type="number" id="month" v-model="months"
                                                        title="Количество месяцев"/><br>
    <label for="rate">Процент</label><input type="number" id="rate" v-model="rate" title="Процент"/><br>
    <label>Дата начала платежей</label><datepicker v-model="startDate"></datepicker><br>
    <label for="type">Тип выплат</label><select v-model="paymentType" id="type">
    <option>{{ diff }}</option>
    <option>{{ even }}</option>
  </select><br>
    <input type="submit" title="OK" v-on:click="calculation"/>
    <ul id="calendar1" v-if="calendar !== []">
      <li v-for="item in calendar">
        <label>{{ item.month}} оплатить {{ item.amount }}</label>
      </li>
    </ul>
    <table>
      <tr v-for="item in calendar">
        <td>{{item.month}}</td>
        <td>{{item.amount}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import PaymentPlan from '../models/paymentPlan'
import Calculator from '../services/calculator'
import 'v2-datepicker/lib/index.css'
import Datepicker from 'vuejs-datepicker/src/components/Datepicker'

export default {
  name: 'calculator',
  components: {Datepicker},
  data () {
    return {
      paymentType: PaymentPlan.LoanTypes.Even,
      even: PaymentPlan.LoanTypes.Even,
      diff: PaymentPlan.LoanTypes.Differentiated,
      startDate: new Date(Date.now()),
      sum: 0,
      months: 0,
      rate: 0.0,
      calendar: []

    }
  },
  methods: {
    calculation: function () {
      let plan = new PaymentPlan()
      plan.PaymentAmount = this.sum
      plan.InterestRate = this.rate
      plan.NumberOfMonths = this.months
      plan.StartDate = this.startDate
      plan.PaymentType = this.paymentType

      plan = Calculator.calculateEqual(plan)
      this.calendar = plan.PaymentList
      console.log(plan)
    }
  }
}
</script>

<style scoped>

</style>
