import Service, { inject } from '@ember/service';
import { computed } from '@ember/object';
import ObjectQueryManager from 'ember-apollo-client/mixins/object-query-manager';

export default Service.extend(ObjectQueryManager, {
  session: inject(),
  auth: inject(),

  model: computed.alias('auth.response.user'),

  isAuthenticated: computed.reads('session.isAuthenticated'),

  logout() {
    return this.get('session').invalidate();
  }
});
