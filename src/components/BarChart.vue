<!--
Copyright (c) 2020. Pedro Avelino & Alejandro Lopez. All Rights Reserved.
-->
<template>

    <div class="td-bar-chart">
        
    </div>

</template>
<script>
    import Controller from '../lib/controller'

    import { Bar } from 'vue-chartjs'

    class BarChartController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
            }
            this.props = { 

                data: Object,
                options: Object,
            }
        }

        on_mounted(){
            this.renderChart(data, options);
        }

        fillData(){
            this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt()],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    }, {
                        label: 'Data Two',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    }
                ]
            }
        }

       
    }

    export default new BarChartController('BarChart');

</script>
<style scoped>
    .component-style {
        display: flex;
        flex-direction: column;
        height: 8vh;
        width: 100%;
        align-self: center;
    }

    .dir-button{
        margin-left: 10px;
        padding: 0.9em;
        min-width:15vw ;
    }

    .clear{
        float: left;
    }

</style>