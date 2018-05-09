import Component from '@ember/component';
import ComponentQueryManager from 'ember-apollo-client/mixins/component-query-manager';
import LoadingMixin from 'authenticus-app/mixins/loading-mixin';

import updateCurrentUserProfile from 'authenticus-app/gql/mutations/update-current-user-profile';

export default Component.extend(LoadingMixin, ComponentQueryManager, {
  isUpdateProfileOpen: false,
  isChangePasswordOpen: false,

  actions: {
    displayChangePassword() {
      this.set('isChangePasswordOpen', true);
    },
    displayUpdateProfile() {
      this.set('isUpdateProfileOpen', true);
    },
    saveProfile() {
      this.showLoading();
      const mutation = updateCurrentUserProfile;
      const { givenName, familyName } = this.get('model');
      const input = { givenName, familyName };
      const variables = { input };
      return this.get('apollo').mutate({ mutation, variables }, 'updateCurrentUserProfile')
        .then(() => {
          this.set('isUpdateProfileOpen', false);
          this.get('notify').success('User profile successfully updated.');
        })
        .catch(e => this.get('graphErrors').show(e))
        .finally(() => this.hideLoading())
      ;
    },
  },

});
