import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost',
	namespace: 'test-api/public',
	headers: {
	'Authorization': 'Bearer 3vaDj33vgskOKxe8BUnWoWxyslMZqnSjyjMFXj9O',
	'Content-Type': 'application/vnd.api+json'
	},
	buildURL: function(modelName, id, snapshot, requestType, query) {
		console.log(requestType);
		switch (requestType) {
 			case 'findAll':
 				if (modelName == "tipogasto") {
	        		return this.urlForCreateRecord() + "/tipogasto/index";
	        	}
	        	else {
 					return this.urlForFindAll(modelName) + "/index"; 			
 				}
	 		case 'createRecord':
		 		if (modelName == "tipogasto") {
	        		return this.urlForCreateRecord() + "/tipogasto/store";
	        	}
	        	else {
	        		return this.urlForCreateRecord(modelName) + "/store";
	        	}
	        case 'findRecord':
	        	if (modelName == "tipogasto") {
	        		return this.urlForCreateRecord() + "/tipogasto/show" + id;
	        	}
	        	else {
	        		return this.urlForFindRecord(modelName) + "/show/" + id;	
	        	}
	        case 'updateRecord':
	        	return this.urlForUpdateRecord(modelName) + "/update/" + id;	
	        case 'deleteRecord':
	        	return this.urlForDeleteRecord(modelName) + "/destroy/" + id;			
  		} 
      	//return this._super(record,suffix) + "/index"
    }
});
