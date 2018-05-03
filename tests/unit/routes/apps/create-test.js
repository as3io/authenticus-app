import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | apps/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:apps/create');
    assert.ok(route);
  });
});
