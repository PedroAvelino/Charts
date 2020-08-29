<template>
  <div id="app7">
    <div id="page-container">
        <router-link to="/home"> Index </router-link>
        <router-link to="/admin"> Admin </router-link>
    </div>

  </div>
</template>

<script>
import TelemetryRecord from "../lib/TelemetryRecord";
import Controller from "../lib/controller";

class HeaderController extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);

    this.vm = {};
  }

}

export default new HeaderController("Header");
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