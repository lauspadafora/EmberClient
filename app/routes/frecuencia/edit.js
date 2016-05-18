import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
    return this.store.findRecord('frecuencia', params.id);
  },
  	
	setupController: function(controller, model) {
  	this._super(controller, model);
  	controller.set('buttonLabel', 'Editar');
	},

	renderTemplate() {
    this.render('frecuencia/frecuencia-form');
	},

	actions: {
    saveFrecuencia(newFrecuencia) {
      newFrecuencia.save().then(() => this.transitionTo('frecuencia'));
    },
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  } 
});

