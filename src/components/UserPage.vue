<template>
  <div class="container-fluid text-center">
    <div class="row content">
      <div class="col-sm-2 sidenav">
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
      </div>
      <div class="col-sm-8 text-left">
        <div class="text-center">
          <h3>Бомжара</h3><br>
          <div class="row">
            <div class="leftColumn">Доходы
              <table cellspacing="0" class="my-table">
                <tr>
                  <td class="sumColumn">
                    <input class="form-control" v-model="currentIncome.sum" placeholder="сумма" min="0" type="text"/>
                  </td>
                  <td class="reasonColumn">
                    <input class="form-control" v-model="currentIncome.source" placeholder="источник" type="text"/>
                  </td>
                  <td>
                    <input class="btn btn-secondary" v-on:click="addIncome" title="Добавить" value="+" type="submit"/>
                  </td>
                </tr>
              </table>
            </div>
            <td class="rightColumn">Расходы
              <table cellspacing="0" class="my-table">
                <tr>
                  <td class="sumColumn">
                    <input class="form-control" v-model="currentExpense.sum" placeholder="сумма" min="0" type="text"/>
                  </td>
                  <td class="reasonColumn">
                    <input class="form-control" v-model="currentExpense.reason" placeholder="источник" type="text"/>
                  </td>
                  <td>
                    <input class="btn btn-secondary" v-on:click="addExpense" title="Добавить" value="+" type="submit"/>
                  </td>
                </tr>
              </table>
            </td>
          </div>
          <hr/>
          <div class="row">
            <div class="leftColumn">
              <table class="table table-bordered">
                <thead>
                <tr>
                  <!--<th class="sumcol">Сумма</th>-->
                  <!--<th class="reasoncol" >Источник</th>-->
                  <!--<th> </th>-->
                </tr>
                </thead>
                <tr v-bind:key="item" v-for="item in income" class="form-control-static">
                  <td>{{ item.sum }}</td>
                  <td>{{ item.source }}</td>
                </tr>
              </table>
            </div>
            <td class="rightColumn">
              <table class="table table-bordered">
                <thead>
                <tr>
                  <!--<th class="sumcol">Сумма</th>-->
                  <!--<th class="reasoncol" >Источник</th>-->
                  <!--<th> </th>-->
                </tr>
                </thead>
                <tr v-bind:key="item" v-for="item in expense" class="form-control-static">
                  <td>{{ item.sum }}</td>
                  <td>{{ item.reason }}</td>
                </tr>
              </table>
            </td>
          </div>
        </div>
        <div class="col-sm-2 sidenav">
          <div class="well">
            <p>ADS</p>
          </div>
          <div class="well">
            <p>ADS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'userPage',
  components: {},
  data () {
    return {
      income: [],
      expense: [],
      currentIncome: {
        sum: 0,
        source: ''
      },
      currentExpense: {
        sum: 0,
        reason: ''
      }
    }
  },
  methods: {
    addIncome: function () {
      this.income.push(this.currentIncome)
      this.currentIncome = {
        sum: 0,
        source: ''
      }
    },
    addExpense: function () {
      this.expense.push(this.currentExpense)
      this.currentExpense = {
        sum: 0,
        reason: ''
      }
    }
  }
}

</script>

<style>
  .my-table {
    width: 100%; /* Ширина всей таблицы */
  }

  .leftColumn {
    width: 50%; /* Ширина левой колонки */
    padding-right: 4px;
  }

  .rightColumn {
    width: 50%;
    padding-left: 4px;
  }

  .sumColumn {
    width: 20%;
  }

  .reasonColumn {
    width: 70%;
  }

</style>
