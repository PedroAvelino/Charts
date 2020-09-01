'use strict';

import RawData from '../lib/simpleData'

export default class DataSet {
    constructor( datasets = [] ){

        this.datasets = datasets

        //These is used for the pie and donut chart
        this.combinedData = [{
            data: datasets.map( d => d.data ),
            label:  this.getLabels(),
            backgroundColor: datasets.map( d => d.backgroundColor )
        }]
        
        this.options = {
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: true
        }
    }

    getSpreadData(){
        let payload = {
            datasets: this.datasets,
            //labels: this.getLabels()
        }

        return payload;
    }

    getLabels(){
        return this.datasets.map( d => d.label )
    }

    getOptions(){
        return this.options
    }
}
