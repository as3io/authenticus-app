import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('org', function() {
    this.route('apps', function() {
      this.route('create');
    });
    this.route('users', function() {
      this.route('create');
    });
  });
  this.route('login');
});

export default Router;
