'use strict';

import Controller from '@/lib/controller'
import { Doughnut , mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

class Chart extends Controller{

    constructor( name, subComponentList ){
        super(name, subComponentList);

        this.extends = Doughnut;
        this.vm = {};
        this.props = {
            chartData: Object,
            options: Object,
        }
        this.mixins = { reactiveProp };
    }

    vue_mounted(){
        this.renderChart( this.chartData, this.options )
    }
}

export default new Chart('DoughnutChart', { Doughnut });