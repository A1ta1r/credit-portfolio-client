import PaymentPlan from '../models/paymentPlan'
import LoanType from '../models/LoanType'

export default class Calculator {
  static Calculate () {
    let plan = new PaymentPlan()
    plan.PaymentAmount = 100000
    plan.PaymentType = LoanType.Differentiated
    plan.InterestRate = 12.56
    plan.NumberOfMonths = 7
    plan.PaymentList = {}
    plan.StartDate = new Date(Date.now())
    return plan
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
