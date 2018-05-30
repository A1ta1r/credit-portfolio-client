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
    return plan
  }
}
