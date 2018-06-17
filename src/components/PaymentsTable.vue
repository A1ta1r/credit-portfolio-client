<template>
  <div id="payemnts-table" class="form-group">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th v-bind:key="item" v-for="item in columnHeads">
          {{item}}
        </th>
      </tr>
      </thead>
      <tr v-bind:key="item.paymentDate" v-for="(item, index) in payments" class="form-control-static">
        <td>{{ (new Date(item.paymentDate)).toLocaleDateString("ru", options) }}</td>
        <td>
          <vue-numeric currency="₽" separator="space" v-bind:value="item.paymentAmount" :read-only="true"
                       :precision="2" decimal-separator="."></vue-numeric>
        </td>
        <td v-if="myPaymentPlan">
          <vue-numeric currency="₽" separator="space" v-bind:value="item.paymentPlan.totalPaymentAmount - countRest(index, page)" :read-only="true"
                       :precision="2" decimal-separator="."></vue-numeric>
        </td>
        <td v-if="!myPaymentPlan">
          <vue-numeric currency="₽" separator="space" v-bind:value="item.paymentPlan.totalPaymentAmount - item.paymentAmount * (index + 1 + ((page - 1) * 12))" :read-only="true"
                       :precision="2" decimal-separator="."></vue-numeric>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PaymentsTable',
  data () {
    return {
      options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      columnHeads: ['Дата платежа', 'Сумма платежа', 'Остаток задолженности']
    }
  },
  props: {
    payments: Array,
    page: Number,
    myPaymentPlan: Array
  },
  methods: {
    countRest: function (currNumb, currPage) {
      let result = 0
      let index = (currPage - 1) * 12 + currNumb + 1
      for (let i = 0; i < index; i++) {
        result = result + this.myPaymentPlan[i]
      }
      return result
    }
  }
}
</script>

<style scoped>
  th {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>
