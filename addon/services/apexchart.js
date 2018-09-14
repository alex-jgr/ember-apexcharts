import Service from '@ember/service';
import ApexCharts from 'apexcharts';
import { get, set } from '@ember/object';

export default Service.extend({
    chart: null,

    getInstance () {
        return this;
    },

    makeChart (element, options ) {
        let chart = this.get('chart');
        if (!chart) {
            chart = new ApexCharts(element, options);
            this.set('chart', chart);
        }
        
        return chart;
    },

    render () {
        let chart = get(this, 'chart');
        if (chart) {
            return chart.render();
        } else {
            return null;
        }
    }
});
