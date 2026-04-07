import Component from '@glimmer/component';
import {service } from '@ember/service';
// import { tracked } from '@glimmer/tracking';
// import { action } from '@ember/object';

export default class HomePage extends Component {
  @service authentication

  get isLogged() {
    // console.log("this.authentication.isLogged:", this.authentication.isLogged);
    return this.authentication.isLogged;
  }

}
