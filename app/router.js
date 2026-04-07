import EmberRouter from '@ember/routing/router';
import config from 'tasks/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dash-board');
  this.route('employees');
  this.route('reports');
});
