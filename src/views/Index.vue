<template>
  <div>
    <navBar/>
    <router-view></router-view>
    
  </div>
</template>

<script>
import TelemetryRecord from "../lib/TelemetryRecord";
import Controller from "../lib/controller";
import navBar from "./Header.vue"

class IndexController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);

    this.vm = {};
  }

}

export default new IndexController("Index", {navBar});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>