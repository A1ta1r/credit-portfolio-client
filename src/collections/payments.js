import {Collection} from 'vue-mc'
import {Payment} from '../models/Payment';

export class Payments extends Collection {
  model () {
    return Payment
  }
  routes () {
    return {
      fetch: '/payments'
    }
  }
}
