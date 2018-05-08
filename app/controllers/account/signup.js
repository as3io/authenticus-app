import Controller from '@ember/controller';
import { inject } from '@ember/service';

import mutation from 'authenticus-app/gql/mutations/create-user';

export default Controller.extend({
  email: '',
  password: '',
  givenName: '',
  familyName: '',

  errorMessage: null,

  apollo: inject(),
  session: inject(),

  isLoading: false,

  actions: {
    async signup() {
      this.set('isLoading', true);
      this.set('errorMessage', null);
      const payload = this.getProperties('email', 'password', 'givenName', 'familyName');
      const variables = { input: { payload } };
      const { email, password } = payload;
      try {
        await this.get('apollo').mutate({ mutation, variables }, 'createUser');
        await this.get('session').authenticate('authenticator:application', email, password);
      } catch (e) {
        this.set('errorMessage', e.errors.length ? e.errors[0].message : 'An unknown error has occurred.');
      } finally {
        this.set('isLoading', false);
      }
    },
    toggleShowPassword() {
      this.toggleProperty('isPasswordShown');
    },
  },
});
