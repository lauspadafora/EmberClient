import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frecuencia-datatable', 'Integration | Component | frecuencia datatable', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frecuencia-datatable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frecuencia-datatable}}
      template block text
    {{/frecuencia-datatable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
