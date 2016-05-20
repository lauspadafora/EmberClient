import Ember from 'ember';

export default Ember.Route.extend({
	model() {        
    return this.store.createRecord('frecuencia');
  },
  
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('buttonLabel', 'Guardar');
  },

  renderTemplate() {
    this.render('frecuencia/frecuencia-form');
  },

  actions: {
    saveFrecuencia(newFrecuencia) {
      newFrecuencia.save().then(() => { this.transitionTo('frecuencia'); });       
    },
    willTransition() {          
      this.controller.get('model').rollbackAttributes();
    }
  }	
});
