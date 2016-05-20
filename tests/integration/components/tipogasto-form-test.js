import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tipogasto-form', 'Integration | Component | tipogasto form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tipogasto-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tipogasto-form}}
      template block text
    {{/tipogasto-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
