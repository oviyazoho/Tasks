import Component from '@glimmer/component';

export default class Layout extends Component {

  get isDashboard() {
    return this.args.type === 'dashboard';
  }

  get isEmployees() {
    return this.args.type === 'employees';
  }

  get isReports() {
    return this.args.type === 'reports';
  }

}
