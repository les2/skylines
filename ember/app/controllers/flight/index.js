import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['baselayer', 'overlays'],
  baselayer: null,
  overlays: null,

  actions: {
    transitionTo(...args) {
      this.transitionToRoute(...args);
    },
  },
});
