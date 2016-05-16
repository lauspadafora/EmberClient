import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frecuencia-form', 'Integration | Component | frecuencia form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frecuencia-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frecuencia-form}}
      template block text
    {{/frecuencia-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
