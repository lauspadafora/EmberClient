import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	modelNameFromPayloadKey: function(payloadKey) {
    	if (payloadKey === 'tiposgastos') {
      		return this._super("tipogasto");
    	} else {
     		return this._super(payloadKey);
    	}
  	}
});
