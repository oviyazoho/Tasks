import Component from '@glimmer/component';
import {service} from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthLogin extends Component {

  @service authentication;
  @service router;

  @tracked username = '';
  @tracked password = '';

  get canLogin() {
    return this.username && this.password;
  }

  @action
  updateUsername(event) {
    this.username = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
  async login(event) {
    event.preventDefault();

    let success = await this.authentication.login(this.username, this.password);
    if (success) {
      alert('Login successful');
      this.router.transitionTo('dash-board');
    } else {
      alert('Invalid username or password');
    }
  }

}

