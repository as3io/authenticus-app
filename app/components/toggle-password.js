import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  value: '',
  label: 'Password',
  required: true,
  show: false,
  autocomplete: 'new-password',
  minlength: 6,

  type: computed('show', function() {
    if (this.get('show')) return 'text';
    return 'password';
  }),

  buttonLabel: computed('show', function() {
    if (this.get('show')) return 'Hide Password';
    return 'Show Password';
  }),

  actions: {
    toggleDisplay() {
      this.toggleProperty('show');
    },
  },
});
