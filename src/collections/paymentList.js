import {Collection} from 'vue-mc'
import {Payment} from '../models/Payment'

export class PaymentList extends Collection {
  model () {
    return Payment
  }

  routes () {
    return {
      fetch: '/payments'
    }
  }
}
