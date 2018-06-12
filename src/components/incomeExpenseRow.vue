<template>
  <tr v-bind:key="item" v-for="item in income" class="form-control-static">
    <td>{{ item.sum }}</td>
    <td>{{ item.source }}</td>
    <td>
      <input type="submit" name="deleteIncome" :click="deleteIncome"/>
    </td>
  </tr>
</template>

<script>
export default {
  name: '67'
}
</script>
