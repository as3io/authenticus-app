import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | apps/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:apps/index');
    assert.ok(route);
  });
});
