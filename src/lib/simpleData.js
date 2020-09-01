'use strict';

const colors = [
    '#f87979',
    "33FF4F",
    "#4CC6BF",
    "#B95DED"
]

export default class RawData{
    constructor(label = "No Label", data = "-1", color = "#ffffff"){

        this.label = label;
        this.data = data;
        this.backgroundColor = this.getRandomColor();
    }

    getRandomColor(){

        let min = 0;
        let max = colors.length;

        return colors[Math.floor(Math.random() * (max - min) + min)]
    }
}