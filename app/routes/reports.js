import Route from '@ember/routing/route';
import {service } from '@ember/service';

export default class ReportsRoute extends Route {

  @service authentication;

  beforeModel() {
    if (!this.authentication.checkLogin()) {
      return this.transitionTo('index');
    }
  }
}
