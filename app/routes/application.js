import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    transitionTo(name) {
      return this.transitionTo(name);
    },
  },
});
