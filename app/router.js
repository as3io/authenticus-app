import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', { path: '' }, function() {

    this.route('organizations', function() {
      this.route('create');
    });

    this.route('organization', { path: ':org_id' }, function() {
      this.route('apps', function() {
        this.route('create');
      });
      this.route('users', function() {
        this.route('create');
      });
    });
  });

  this.route('account', function() {
    this.route('login');
    this.route('signup');
  });
  this.route('logout');
});

export default Router;
