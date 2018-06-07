<template>
  <div id="calculator" class="flex-container">

    <div class="form-group">
      <label>Сумма кредита</label>
      <input class="form-control" type="number" id="sum" min="1" v-model="paymentPlan.paymentAmount"
             title="Сумма кредита"/>
    </div>

    <div class="form-group">
      <label>Количество месяцев</label>
      <input class="form-control" type="number" id="month" min="1" v-model="paymentPlan.numberOfMonths"
             title="Количество месяцев"/>
    </div>

    <div class="form-group">
      <label>Процент в год</label>
      <input class="form-control" type="number" step="0.01" min="0" id="rate" v-model="paymentPlan.interestRate"
             title="Процент"/>
    </div>

    <div class="form-group">
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
    </div>

    <div class="form-control-static">
      <input type="submit" class="btn btn-primary" title="Рассчитать" value="Рассчитать" v-on:click="calculation"/>
    </div>
    <h5 v-if="paymentPlan.totalPaymentAmount" class="form-control-static">Итоговая сумма платежей:
      {{paymentPlan.totalPaymentAmount.toFixed(2)}}</h5>
    <PaymentsTable v-if="paymentPlan.totalPaymentAmount" :payments="currentPayments"
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

export default {
  name: 'calculator',
  components: {Datepicker, PaymentsTable, Paginator},
  data () {
    return {
      even: PaymentPlan.LoanTypes.Even,
      diff: PaymentPlan.LoanTypes.Differentiated,
      paymentPlan: new PaymentPlan({paymentAmount: 1000000, interestRate: 12.4, numberOfMonths: 24}),
      startDate: Date.now(),
      datepickerLocale: ru,
      datepickerInput: 'form-control',
      pagination: {
        page: 1,
        limit: 12,
        offset: 0
      }
    }
  },
  methods: {
    calculation: function () {
      this.paymentPlan.startDate = new Date(this.startDate)
      this.paymentPlan = Calculator.calculate(this.paymentPlan)
      this.pagination = {
        page: 1,
        limit: 12,
        offset: 0
      }
      this.startDate = Date.now()
    }
  },
  computed: {
    currentPayments: function () {
      let start = (this.pagination.page - 1) * this.pagination.limit
      let end = start + this.pagination.limit
      return this.paymentPlan.paymentList.slice(start, end)
    }
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
