<!--
Copyright (c) 2020. Pedro Avelino. All Rights Reserved.
-->
<template>
  <div class="charts">

    <div class="chart-area">

      <bar-chart :chartData="divideData(dataSet)" :options="getOptions(dataSet)"/>
      Chart One

    </div>

    <div class="chart-area">
      <polar-chart :chartData="combineDataSet(dataSet)" :options="{}"/>

      Chart Two
    </div>

    <div class="chart-area">
      <doughnut-chart :chartData="combineDataSet(dataSet)" :options="{}"/>
      Chart Three
    </div>

    <div class="chart-area">
      <pie-chart :chartData="combineDataSet(dataSet)" :options="{}"/>
      Chart Four
    </div>
  </div>
</template>

<script>
import Controller from "./lib/controller";
import DataSet from './lib/dataset';
import navBar from "@/views/Header.vue";

//mixins
import barChart from "@/mixins/BarChartMixin";
import lineChart from '@/mixins/LineChartMixin';
import doughnutChart from '@/mixins/DoughnutChartMixin';
import pieChart from '@/mixins/PieChartMixin';
import polarChart from '@/mixins/PolarChartMixin';

class IndexController extends Controller {
  constructor(name, subComponentList = []) {
    
    super(name, subComponentList);

    this.vm = {
    };

    this.methods = {
            
      getOptions( myData ){
        return myData.getOptions()
      },
      
      //We use this so that we can but all of our data ina  single object
      combineDataSet( dataset ){
        return  {datasets: dataset.combinedData, labels: dataset.getLabels() }
      },
      
      //We get our dataset and spread it
      divideData(dataset){
        return dataset.getSpreadData()
      },
    };

    this.injectGetters(["dataSet"])
    this.injectActions(["getAllRecords"])
  }


  vue_beforeMount() {
    this.getAllRecords();
  }

}

export default new IndexController("Index", { navBar, barChart, lineChart, doughnutChart, pieChart, polarChart});
</script>

<style>
.charts {
  flex-wrap: wrap;
}

.chart-area {
  margin: 0 auto;
  border: 1px solid;
  max-width: 50vw;
}
</style>
