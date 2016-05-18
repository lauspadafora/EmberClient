import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost',
	namespace: 'test-api/public',
	headers: {
	'Authorization': 'Bearer uElatMii9trbskdgdaffZYn25N1Lt3R4sWxW0vDc',
	'Content-Type': 'application/vnd.api+json'
	},
	buildURL: function(modelName, id, snapshot, requestType, query) {
		console.log(requestType);
		switch (requestType) {
 			case 'findAll':
 				return this.urlForFindAll(modelName) + "/index"; 			
	 		case 'createRecord':
	        	return this.urlForCreateRecord(modelName) + "/store";
	        case 'findRecord':
	        	return this.urlForFindRecord(modelName) + "/show/" + id;	
	        case 'updateRecord':
	        	return this.urlForUpdateRecord(modelName) + "/update/" + id;	
	        case 'deleteRecord':
	        	return this.urlForDeleteRecord(modelName) + "/destroy/" + id;			
  		} 
      	//return this._super(record,suffix) + "/index"
    }
});
