import Service from '@ember/service';
import ApexCharts from 'apexcharts';
import { get, set } from '@ember/object';

export default Service.extend({
    chart: null,

    getInstance () {
        return this;
    },
    getChartInstance () {
        return this.get('chart');
    },
    makeChart (element, options ) {
        let chart = this.get('chart');
        if (!chart) {
            chart = new ApexCharts(element, options);
            this.set('chart', chart);
        }
        
        return chart;
    },
    updateData (data) {
        let chart = this.get('chart');
        if (chart) {
            chart.updateSeries(data);
        }
    },
    destroyChart () {
        let chart = this.get('chart');
        chart.destroy();
        this.set('chart', null);
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
