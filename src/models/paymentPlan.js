import {Model} from 'vue-mc'

export default class PaymentPlan extends Model {
  static LoanTypes = {'Even': 'Аннуитетный', 'Differentiated': 'Дифференцированный'}

  defaults () {
    return {
      title: 'Новый кредит',
      paymentType: PaymentPlan.LoanTypes.Even,
      paymentAmount: 0,
      interestRate: 0,
      currency: 'RUB',
      numberOfMonths: 0,
      paymentList: [],
      startDate: new Date(),
      totalPaymentAmount: 0,
      errorsCust: {
        sum: [],
        month: [],
        rate: []
      } // Добавил массив ошибок, как в примере
    }
  }

  routes () {
    return {
      fetch: '/loans/{id}',
      save: '/loans'
    }
  }

  options () {
    return {
      validateOnChange: true,
      validateOnSave: true
    }
  }
}
