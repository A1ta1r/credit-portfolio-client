import PaymentPlan from '../models/paymentPlan'

export default class Calculator {
  static calculate (plan) {
    if (plan.PaymentType === PaymentPlan.LoanTypes.Even) return this.calculateEqual(plan)
    else return this.calculateDifferentiated(plan)
  }

  static calculateEqual (paymentPlan) {
    var date = paymentPlan.StartDate

    var month = paymentPlan.NumberOfMonths
    var percent = paymentPlan.InterestRate / 12

    var koef = (percent * Math.pow(1 + percent, month)) / (Math.pow(1 + percent, month) - 1)

    var sum = paymentPlan.PaymentAmount * koef

    paymentPlan.PaymentList = []

    for (let i = 0; i < paymentPlan.NumberOfMonths; i++) {
      var currentMonth = date.setMonth(date.getMonth() + i)
      paymentPlan.PaymentList[i] = {
        month: new Date(currentMonth),
        amount: sum
      }
    }

    return paymentPlan
  }

  static calculateDifferentiated (paymentPlan) {
    var date = paymentPlan.StartDate

    var baseFee = paymentPlan.PaymentAmount / paymentPlan.NumberOfMonths
    paymentPlan.PaymentList = []

    for (let i = 0; i < paymentPlan.NumberOfMonths; i++) {
      var currentMonth = date.setMonth(date.getMonth() + 1)
      var sum = baseFee + (paymentPlan.PaymentAmount - baseFee * i) * paymentPlan.InterestRate / paymentPlan.NumberOfMonths
      paymentPlan.PaymentList[i] = {
        month: new Date(currentMonth),
        amount: sum
      }
    }

    return paymentPlan
  }
}
