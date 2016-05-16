import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost',
	namespace: 'test-api/public',
	headers: {
	'Authorization': 'Bearer a88ggBuvipzBmqZLXb9E8JeeyxgxpLsH47Ob9IVx',
	'Content-Type': 'application/vnd.api+json'
	}
});