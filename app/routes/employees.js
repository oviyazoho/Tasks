import Route from '@ember/routing/route';
import {service } from '@ember/service';

export default class EmployeesRoute extends Route {

  @service authentication;

  beforeModel() {
    if (!this.authentication.checkLogin()) {
      return this.transitionTo('index');
    }
  }
}
