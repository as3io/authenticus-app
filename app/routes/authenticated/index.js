import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    const selected = localStorage.getItem('selectedOrg');
    if (selected) {
      const { id } = JSON.parse(selected);
      return this.transitionTo('authenticated.organization', id);
    }
  },
});



