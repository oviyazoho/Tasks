import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthenticationService extends Service {

  @tracked isLogged = false;
  @tracked users = null;
  @tracked currentUser = null;

  @action
  signup(username, password) {
    let user = this.users.find((user) => user.username === username);
    if (user) {
      alert('Username already exists');
    } else {
      user = { username, password };
      this.users.push(user);
      alert('User created successfully');
    }
  }

  @action
  login(username,password) {
    let user = this.users.find((user) => user.username === username && user.password === password);
    if (user) {
      this.isLogged = true;
      this.currentUser = user;
    } else {
      alert('Invalid username or password');
    }
  }

  @action
  logout() {
    this.isLogged = false;
    this.currentUser = null;
  }

}
