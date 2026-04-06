import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
// import { action } from '@ember/object';

export default class HomePage extends Component {
  @service authentication

  @tracked isLogged = this.authentication.isLogged;

}
