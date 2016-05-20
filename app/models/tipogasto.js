import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  nombre: attr('string'),
  created_at: attr('string'),
  created_by: attr('string'),
  updated_at: attr('string'),
  updated_by: attr('string'),
  deleted_at: attr('string'),
  deleted_by: attr('string')
});
