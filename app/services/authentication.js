import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthenticationService extends Service {

  @tracked isLogged = false;
  @tracked users = [];
  @tracked currentUser = null;

  @action
  signup(username, password) {
    let user = this.users.find((user) => user.username === username);
    if (user) {
      return false;
    }

    user = { username, password };
    this.users = [...this.users, user];
    return true;
  }

  @action
  login(username, password) {
    let user = this.users.find((user) => user.username === username && user.password === password);
    if (!user) {
      return false;
    }

    this.isLogged = true;
    this.currentUser = user;
    return true;
  }

  @action
  logout() {
    this.isLogged = false;
    this.currentUser = null;
  }

  @action
  checkLogin() {
    return this.isLogged;
  }

}
