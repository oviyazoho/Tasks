import Route from '@ember/routing/route';
import {service } from '@ember/service';

export default class IndexRoute extends Route {
  @service authentication;

  async beforeModel() {
    let response = await fetch('/Userdata.json');
    if (!response.ok) {
      throw new Error(`Failed to load users: ${response.status} ${response.statusText}`);
    }

    this.authentication.users = await response.json();
  }
}
