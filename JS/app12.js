'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Chours = [];
 var sumArr = 0;



function Store(name, mincus, maxcus, avgcookie) {  // constructor
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;
    this.shops = [];
    this.sumArr = 0;
    this.multi = 0;

}


Store.prototype.randCustomer=function (minCustomer, maxCustomer) { // generate random number of customer
    var randNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    console.log(`randNum ${randNum}`);
    this.Store = this.Sales;
    return randNum;
}



Store.prototype.Sales= function () { //this number of cookies hourly
    var multi = 0;
    multi = Math.floor(this.randNum * this.avgCookies);
    console.log(`multi ${multi}`);
    return multi;

}











































































// 'use strict'
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var Chours = [];



// function Store(name, mincus, maxcus, avgcookie) {  // constructor
//     this.name = name;
//     this.mincus = mincus;
//     this.maxcus = maxcus;
//     this.avgcookie = avgcookie;
//     this.shops = [];
//     this.sumArr = 0;
//     this.multi = 0;

// }


// Store.prototype.randCustomer = function () { ///  generate random number and num of cookies hourly
//     for (var t = 0; t < hours.length; t++) {
//         var ranNum = Math.floor(Math.random() * ((this.maxcus - this.mincus) + this.mincus));
//         console.log(ranNum);
//     }
//     return ranNum
// }




// multi = Math.floor(this.avgcookie * ranNum);
//         console.log(multi);
//         Chours.push(multi);




// ///// to call construtor 


var Seattle = new Store('Seattle', 23, 65, 6.3);
Seattle.randCustomer();

var Tokoy = new Store('Tokoy', 3, 24, 1.2);
Tokoy.randCustomer();

var Dubai = new Store('Dubai', 11, 38, 3.7);
Dubai.randCustomer();

var Paris = new Store('Paris', 20, 38, 2.3);
Paris.randCustomer();

var Lima = new Store('Lima', 2, 16, 4.6);
Lima.randCustomer();