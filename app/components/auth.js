import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Auth extends Component {

  @tracked login = true;

  @action
  toggle() {
    console.log('Toggling between Login and Sign Up');
    this.login = !this.login;
  }
}
