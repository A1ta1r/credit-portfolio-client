import {Collection} from 'vue-mc'
import {PaymentPlan} from '../models/paymentPlan'

export class PaymentPlanList extends Collection {
  model () {
    return PaymentPlan
  }

  routes () {
    return {
      fetch: '/user/:id/paymentPlans'
    }
  }
}
