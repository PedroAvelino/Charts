<template>
  <div class="charts">

    <div class="chart-area">

      <bar-chart :chartData="divideData(dataSet)" :options="getOptions(dataSet)"/>
      Chart One

    </div>

    <div class="chart-area">
      <polar-chart :chartData="spreadDataSet(dataSet)" :options="{}"/>

      Chart Two
    </div>

    <div class="chart-area">
      <doughnut-chart :chartData="spreadDataSet(dataSet)" :options="{}"/>
      Chart Three
    </div>

    <div class="chart-area">
      <pie-chart :chartData="spreadDataSet(dataSet)" :options="{}"/>
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
          getOptions( myData ){
    return myData.getOptions()
  }
    };

    this.injectGetters(["dataSet"])
  }

  //We use this so that we can spread the info of our data
  spreadDataSet( dataset ){

    return  {datasets: dataset.combinedData, labels: dataset.getLabels() }
  }

  //We get our dataset and spread it
  divideData(dataset){
    return dataset.getSpreadData()

  }

  getRandomInt(){
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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
