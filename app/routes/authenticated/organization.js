import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';

import query from 'authenticus-app/gql/queries/organization';

export default Route.extend(RouteQueryManager, {
  model({ org_id }) {
    const variables = { input: { id: org_id } };
    return this.get('apollo').watchQuery({ query, variables, fetchPolicy: 'network-only' }, 'organization');
  },

  afterModel(org) {
    const { id, name } = org;
    localStorage.setItem('selectedOrg', JSON.stringify({ id, name }));
  },
});
