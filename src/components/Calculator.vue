<template>
  <div id="calc" class="calculator">
    <label for="sum">Сумма кредита</label><input type="text" id="sum" title="TextBox"/><br>
    <label for="month">Количество месяцев</label><input type="text" id="month" title="TextBox"/><br>
    <label for="rate">Процент</label><input type="text" id="rate" title="TextBox"/><br>
    <label for="type">Тип выплат</label><select id="type">
    <option>{{ diff }}</option>
    <option>{{ even }}</option>
  </select><br>
    <input type="submit" title="OK"/>
  </div>
</template>

<script>
import LoanType from '../models/LoanType'

var vm = new Vue({
  el: '#type',
  data: {
    diff: LoanType.Differentiated,
    even: LoanType.Even
  }
})
</script>

<style scoped>

</style>
