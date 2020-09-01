/*Copyright Pedro Avelino 2020,*/
'use strict';

const colors = [
    '#f87979',
    "33FF4F",
    "#4CC6BF",
    "#B95DED",
    "#B4ECEB",
    "#FF9654",
    "#C1FF54",
    "#5944BC" 
]

export default class RawData{
    constructor(name = "No Label", data = "-1"){

        this.label = name;
        this.data = data;
        this.backgroundColor = this.getRandomColor();
    }

    getRandomColor(){

        let min = 0;
        let max = colors.length;

        return colors[Math.floor(Math.random() * (max - min) + min)]
    }
}