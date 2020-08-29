<template>
  <div class="charts">
    <div class="chart-area">Chart One</div>
    <div class="chart-area">Chart Two</div>
    <div class="chart-area">Chart Three</div>
    <div class="chart-area">Chart Four</div>
  </div>
</template>

<script>
import Controller from "./lib/controller";
import navBar from "@/views/Header.vue"

class IndexController extends Controller {

    constructor(name, subComponentList = []) {
        super(name, subComponentList);
        
        this.vm = {

        };
    }

    
}

export default new IndexController("Index", {navBar});

</script>

<style>
.charts {
  flex-wrap: wrap;
}

.chart-area{
  margin:  2px;
  border: 1px solid;
  max-width: 10vw;
}
</style>
