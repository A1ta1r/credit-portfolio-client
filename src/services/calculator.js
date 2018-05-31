import PaymentPlan from '../models/paymentPlan'
import {Payment} from '../models/Payment'

export default class Calculator {
  static calculate (plan) {
    if (plan.PaymentType === PaymentPlan.LoanTypes.Even) {
      return this.calculateEqual(plan)
    } else {
      return this.calculateDifferentiated(plan)
    }
  }

  static calculateEqual (paymentPlan) {
    let date = paymentPlan.StartDate

    let month = paymentPlan.NumberOfMonths
    let percent = paymentPlan.InterestRate / 12

    let koef = (percent * Math.pow(1 + percent, month)) / (Math.pow(1 + percent, month) - 1)

    let sum = paymentPlan.PaymentAmount * koef

    paymentPlan.TotalPaymentAmount = sum * paymentPlan.NumberOfMonths
    paymentPlan.PaymentList = []

    for (let i = 0; i < paymentPlan.NumberOfMonths; i++) {
      let currentMonth = date.setMonth(date.getMonth() + 1)
      paymentPlan.PaymentList[i] = new Payment({paymentDate: currentMonth, paymentAmount: sum})
    }
    return paymentPlan
  }

  static calculateDifferentiated (paymentPlan) {
    let date = paymentPlan.StartDate

    let baseFee = paymentPlan.PaymentAmount / paymentPlan.NumberOfMonths

    paymentPlan.TotalPaymentAmount = 0
    paymentPlan.PaymentList = []

    for (let i = 0; i < paymentPlan.NumberOfMonths; i++) {
      let currentMonth = date.setMonth(date.getMonth() + 1)
      let sum = baseFee + (paymentPlan.PaymentAmount - baseFee * i) * paymentPlan.InterestRate / paymentPlan.NumberOfMonths
      paymentPlan.PaymentList[i] = new Payment({paymentDate: currentMonth, paymentAmount: sum})
      paymentPlan.TotalPaymentAmount += sum
    }

    return paymentPlan
  }
}
