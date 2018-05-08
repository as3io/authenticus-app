import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  actions: {
    transitionTo(name) {
      return this.transitionTo(name);
    },
  },
});
