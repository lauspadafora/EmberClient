import Ember from 'ember';

export default Ember.Route.extend({
	model() {	
		this.store.unloadAll();		
    	return this.store.findAll('frecuencia');
  	},
  	actions: {
	    deleteFrecuencia(frecuencia) {	    	
	    	frecuencia.deleteRecord();
	    	frecuencia.save().then(() => this.transitionTo('frecuencia'));
	    	//frecuencia.destroyRecord();
	    }
  	}	
});
