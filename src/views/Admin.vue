<!--
Copyright (c) 2020. Pedro Avelino. All Rights Reserved.
-->
<template>
  <div id="app">
   <div>
      <form @submit.prevent="saveRec(myData)">

          <label for='fbuild'>Player Name:</label>
          <input type='text' id="fbuild" value='1' v-model="myData.playerName">

          <label for='fbuild'>Player ID:</label>
          <input type='text' id="fplayerId" value='1' v-model="myData.playerId">

          <label for='fposx'>Posisition X:</label>
          <input type='text' id="fposx" value='' v-model="myData.position.x">

          <label for='fposy'>Posisition X:</label>
          <input type='text' id="fposy" value='' v-model="myData.position.y">

          <label for='faction'>Action: </label>
          <input type='text' id="faction" value='' v-model="myData.status.actions">

          <input type="submit" value="GO!">
      </form>
    </div>

     <div>
      <form @submit.prevent="goGetIt()">
          <label for='fplayerid'>Player ID:</label>
          <input type='text' id="fplayerid" value='' v-model="fetchId">
          <input type="submit" value="FETCH!">
      </form>
    </div>

  </div>
</template>

<script>

import TelemetryRecord from "../lib/TelemetryRecord";
import Controller from "../lib/controller";
import navBar from "./Header.vue"

class AdminController extends Controller {

    constructor(name, subComponentList = []) {
        super(name, subComponentList);
        
        this.vm = {
            localRec: new TelemetryRecord( 1234, "", {x:0, y:0 }),
            savedRecords: [],
            
            //Data to send
            myData: {
              playerName: "Null Name",
              
              position: {
                x: 0,
                y: 0
              },
              
              status: {
                actions: 0
              },

              playerId: 0

            },

            fetchId: 0,

            fetchedData: {},
        };

        this.props = [];

        this.injectActions(["updateRecord", "getRecord"]);
        this.injectGetters(["currentRec", "recordList", "recordCount", "newInfo"]);
    }

//Get the player's data
    goGetIt( ) {

      let payload = {
        playerId:  this.fetchId
      }

      this.getRecord( payload );

      this.fetchedData = this.newInfo;
    }

    saveRec( myData ) {

    
        let trec = new TelemetryRecord(myData.playerName, myData.playerId, myData.position, myData.status.actions);
        this.updateRecord(trec);

        let recString = trec.asString();
        this.savedRecords.push(recString);

        alert("Data added!");
    }
}

    export default new AdminController("Admin", { navBar });
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