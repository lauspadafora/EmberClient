import Ember from 'ember';

export default Ember.Route.extend({
	model() {        
    	return this.store.createRecord('tipogasto');
  	},

  	setupController: function(controller, model) {
    	this._super(controller, model);
    	controller.set('buttonLabel', 'Guardar');
  	},

  	renderTemplate() {
    	this.render('tipogasto/tipogasto-form');
  	},

  	actions: {
    	saveTipoGasto(newTipoGasto) {
    		newTipoGasto.save().then(() => { this.transitionTo('tipogasto'); });         	      
    	},
    	willTransition() {          
    		this.controller.get('model').rollbackAttributes();
    	}
  	}	
});
