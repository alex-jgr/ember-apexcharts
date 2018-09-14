// import Ember from 'ember';

import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/ember-apexchart';
import { get } from '@ember/object';
// export default Ember.Component.extend({

export default Component.extend({
  layout,
  options: null,
  // apexchart: Ember.inject.service(),
  apexchart: service(),
  tagName: 'div',
  classNames: ['apexchart'],
  init () {
    this._super(...arguments);
  },
  didInsertElement () {
    // let apexchart = Ember.get(this, 'apexchart');
    let apexchart = get(this, 'apexchart');

    console.log("[ APEXCHART ]", this.get('apexchart'));
    // let options = Ember.get(this, 'options');
    let options = get(this, 'options');

    let chart = apexchart.makeChart(this.get('element'), options);
    chart.render();
  }
});
