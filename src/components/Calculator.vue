<template>
  <div class="calculator">
    <label for="sum">Сумма кредита</label><input type="number" id="sum" min="0" v-model="sum" title="Сумма кредита"/><br>
    <label for="month">Количество месяцев</label><input type="number" id="month" v-model="months"
                                                        title="Количество месяцев"/><br>
    <label for="rate">Процент</label><input type="number" step="0.01" min="0" id="rate" v-model="rate" title="Процент"/><br>
    <label for="datepicker">Дата начала платежей</label><datepicker id="datepicker" v-model="startDate"></datepicker><br>
    <label for="type">Тип выплат</label><select v-model="paymentType" id="type">
    <option>{{ diff }}</option>
    <option>{{ even }}</option>
  </select><br>
    <input type="submit" title="OK" v-on:click="calculation"/>
    <table>
      <tr v-bind:key="item" v-for="item in calendar">
        <td>{{ item.month.toLocaleDateString("ru", options)}}</td>
        <td>{{item.amount.toFixed(2)}}</td>
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
      sum: 1000000,
      months: 12,
      rate: 12.4,
      calendar: [],
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

    }
  },
  methods: {
    calculation: function () {
      let plan = new PaymentPlan()
      plan.PaymentAmount = this.sum
      plan.InterestRate = this.rate / 100
      plan.NumberOfMonths = this.months
      plan.StartDate = this.startDate
      plan.PaymentType = this.paymentType

      plan = Calculator.calculate(plan)
      this.calendar = plan.PaymentList
      console.log(plan)
    }
  }
}
</script>

<style scoped>

</style>
