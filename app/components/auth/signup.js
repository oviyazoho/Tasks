import Component from '@glimmer/component';
import {service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthSignup extends Component {

  @service authentication;

  @tracked username = '';
  @tracked password = '';

  get canSignup() {
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
  async signup(event) {
    event.preventDefault();

    try {
      await this.authentication.signup(this.username, this.password);
      this.args.toggleLogin?.();
    } catch (error) {
      alert('Signup failed: ' + error.message);
    }
  }

}
