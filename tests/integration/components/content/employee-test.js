import { module, test } from 'qunit';
import { setupRenderingTest } from 'tasks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | content/employee', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Content::Employee />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Content::Employee>
        template block text
      </Content::Employee>
    `);

    assert.dom().hasText('template block text');
  });
});
