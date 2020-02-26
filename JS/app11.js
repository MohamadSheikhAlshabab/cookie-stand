'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Chours = [];



function Store(name, mincus, maxcus, avgcookie) {  // constructor
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;
    this.shops = [];
    this.sumArr = 0;
    this.multi = 0;

}


Store.prototype.generateRandom =function(mincus,maxcus){ ////this to generate random numbers

    for (var t = 0; t < hours.length; t++) {
        var ranNum = Math.floor(Math.random() * (this.maxcus - this.mincus) + this.mincus);
        console.log(ranNum);
        return ranNum;
}
}


Store.prototype.avgCookies =function(){ ////////// this to multiply random with avgcookie

    multi = Math.floor(this.avgcookie * this.generateRandom);
        console.log(multi);
        Chours.push(multi);
        console.log(multi);
        return multi;

}









///// to call construtor 
var Seattle = new Store('Seattle', 23, 65, 6.3);
Seattle.generateRandom();

var Tokoy = new Store('Tokoy', 3, 24, 1.2);
Tokoy.generateRandom();

var Dubai = new Store('Dubai', 11, 38, 3.7);
Dubai.generateRandom();

var Paris = new Store('Paris', 20, 38, 2.3);
Paris.generateRandom();

var Lima = new Store('Lima', 2, 16, 4.6);
Lima.generateRandom();
