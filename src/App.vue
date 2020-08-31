<template>
  <div class="charts">

    <div class="chart-area">

      <bar-chart :chartData="chartData" :options="{}"></bar-chart>
      Chart One

    </div>

    <div class="chart-area">
      <line-chart :chartData="chartData" :options="{}"></line-chart>
      Chart Two
    </div>

    <div class="chart-area">
      Chart Three
    </div>

    <div class="chart-area">
      Chart Four
    </div>
  </div>
</template>

<script>
import Controller from "./lib/controller";
import navBar from "@/views/Header.vue";
import barChart from "@/mixins/BarChartMixin";
import lineChart from '@/mixins/LineChartMixin';

class IndexController extends Controller {
  constructor(name, subComponentList = []) {
    
    super(name, subComponentList);

    this.vm = {

      chartData: {
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },

          {
            label: "Data Two",
            backgroundColor: "#f22929",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      },
    };


  }


  getRandomInt(){
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  }
}

export default new IndexController("Index", { navBar, barChart, lineChart });
</script>

<style>
.charts {
  flex-wrap: wrap;
}

.chart-area {
  margin: 2px;
  border: 1px solid;
  max-width: 10vw;
}
</style>
