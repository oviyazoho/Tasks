import Component from '@glimmer/component';
import {service } from '@ember/service';
import { action } from '@ember/object';

export default class LayoutHeader extends Component {
  @service authentication;

  @action
  logout() {
    this.authentication.logout();
  }
}
