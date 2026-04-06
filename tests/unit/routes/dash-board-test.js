import { module, test } from 'qunit';
import { setupTest } from 'tasks/tests/helpers';

module('Unit | Route | DashBoard', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dash-board');
    assert.ok(route);
  });
});
