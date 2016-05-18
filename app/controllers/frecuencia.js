import Ember from 'ember';

export default Ember.Controller.extend({	
	actions: {
	    saveFrecuencia(newFrecuencia) {
	      newFrecuencia.save().then(()=>this.transitionTo('frecuencia'));
	    }
	}
});
