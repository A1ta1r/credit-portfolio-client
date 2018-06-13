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
          <h3>{{ username }}</h3><br>
          <div class="row">
            <div class="leftColumn">Доходы
              <table cellspacing="0" class="my-table">
                <tr>
                  <td class="sumColumn" :class="{'has-danger':errors.first('incomeSum') != null}">
                    <input class="form-control" name="incomeSum" v-model="currentIncome.sum" data-vv-as="сумма"
                           v-validate="{ required: true, numeric: true, min_value:1 }" placeholder="сумма" type="text"/>
                  </td>
                  <td class="reasonColumn">
                    <input class="form-control" name="sourceIncome" v-model="currentIncome.source"
                           placeholder="источник" type="text"/>
                  </td>
                  <td>
                    <input class="btn btn-secondary" v-on:click="addIncome" title="Добавить" value="+" type="submit"/>
                  </td>
                </tr>
              </table>
              <span>{{ errors.first('incomeSum') }}</span>
            </div>
            <td class="rightColumn">Расходы
              <table cellspacing="0" class="my-table">
                <tr>
                  <td class="sumColumn" :class="{'has-danger':errors.first('expenseSum') != null}">
                    <input class="form-control" v-model="currentExpense.sum" data-vv-as="сумма" placeholder="сумма"
                           name="expenseSum" v-validate="{ required:true, numeric:true, min_value:1 }" type="text"/>
                  </td>
                  <td class="reasonColumn">
                    <input class="form-control" v-model="currentExpense.reason" placeholder="источник" type="text"/>
                  </td>
                  <td>
                    <input class="btn btn-secondary" v-on:click="addExpense" title="Добавить" value="+" type="submit"/>
                  </td>
                </tr>
              </table>
              <span>{{errors.first('expenseSum')}}</span>
            </td>
          </div>
          <hr/>
          <div class="row">
            <div class="leftColumn">
              <table class="myFavoriteTable table table-bordered">
                <tr v-bind:key="item" v-for="item in income" class="form-control-static">
                  <td>{{ item.sum }}</td>
                  <td>{{ item.source }}</td>
                  <td class="deleteRow">
                    <input type="btn btn-secondary" name="deleteIncome" class="form-control" title="Удалить" value="—"
                           @click="deleteIncome(item, $event)" />
                  </td>
                </tr>
              </table>
            </div>
            <td class="rightColumn">
              <table class="table table-bordered">
                <tr v-bind:key="item" v-for="item in expense" class="form-control-static">
                  <td>{{ item.sum }}</td>
                  <td>{{ item.reason }}</td>
                  <td class="deleteRow">
                    <input type="btn btn-secondary" class="form-control" title="Удалить" value="—"  name="deleteIncome"
                           @click="deleteExpense(item, $event)" />
                  </td>
                </tr>
              </table>
            </td>
          </div>
        </div>
        <div class="col-sm-2">
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
      username: localStorage.getItem('username'),
      income: [],
      expense: [],
      currentIncome: {
        sum: '',
        source: ''
      },
      currentExpense: {
        sum: '',
        reason: ''
      }
    }
  },
  methods: {
    addIncome: function () {
      this.$validator.validate('incomeSum').then((success) => {
        if (success) {
          this.income.push(this.currentIncome)
          this.currentIncome = {
            sum: '',
            source: ''
          }
        }
      })
    },
    addExpense: function () {
      this.$validator.validate('expenseSum').then((success) => {
        if (success) {
          this.expense.push(this.currentExpense)
          this.currentExpense = {
            sum: '',
            reason: ''
          }
        }
      })
    },
    deleteIncome (incomeObj, event) {
      let index = this.income.indexOf(incomeObj)
      this.income.splice(index, 1)
    },
    deleteExpense (expenseObj, event) {
      let index = this.expense.indexOf(expenseObj)
      this.expense.splice(index, 1)
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

  .deleteRow {
    width: 65px;
  }

</style>
