import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  nombre: attr('string'),
  created_at: attr('string'),
  created_by: attr('number'),
  updated_at: attr('string'),
  updated_by: attr('number'),
  deleted_at: attr('string'),
  deleted_by: attr('number')
});
