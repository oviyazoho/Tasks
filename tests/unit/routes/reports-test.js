import { module, test } from 'qunit';
import { setupTest } from 'tasks/tests/helpers';

module('Unit | Route | Reports', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:reports');
    assert.ok(route);
  });
});
