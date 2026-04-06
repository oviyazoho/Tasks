import { module, test } from 'qunit';
import { setupRenderingTest } from 'tasks/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/side-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Layout::SideBar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Layout::SideBar>
        template block text
      </Layout::SideBar>
    `);

    assert.dom().hasText('template block text');
  });
});
