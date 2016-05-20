import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tipogasto-datatable', 'Integration | Component | tipogasto datatable', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tipogasto-datatable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tipogasto-datatable}}
      template block text
    {{/tipogasto-datatable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
