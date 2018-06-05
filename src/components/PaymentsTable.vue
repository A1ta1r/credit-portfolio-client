<template>
  <div id="payemnts-table" class="form-group">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th v-bind:key="item" v-for="item in columnHeads">
          {{item}}
        </th>
      </tr>
      </thead>
      <tr v-bind:key="item.paymentDate" v-for="item in payments" class="form-control-static">
        <td>{{ (new Date(item.paymentDate)).toLocaleDateString("ru", options) }}</td>
        <td>{{ item.paymentAmount.toFixed(2) }} RUB</td>
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
      columnHeads: ['Дата платежа', 'Сумма платежа']
    }
  },
  props: {
    payments: Array
  }
}
</script>

<style scoped>
  th {
    text-align: center;
  }
</style>
