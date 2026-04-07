import { module, test } from 'qunit';
import { setupRenderingTest } from 'tasks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | content/dashboard', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Content::Dashboard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Content::Dashboard>
        template block text
      </Content::Dashboard>
    `);

    assert.dom().hasText('template block text');
  });
});
