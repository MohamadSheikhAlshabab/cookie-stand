'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var sumArr = 0;
var store = [Seattle, Tokoy, Dubai, Paris, Lima];


function Store(name, mincus, maxcus, avgcookie) {  // constructor
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;
    this.Chours = [];
    this.sumArr = 0;


}


Store.prototype.randCustomer = function () { // generate random number of customer and multiply random number by avgcookie 
    // then sum all 14 values of array after multiply and give me sum of array
    for (var r = 0; r < hours.length; r++) {
        var randNum = Math.floor((Math.random() * (this.maxcus - this.mincus) + this.mincus) * this.avgcookie);
        this.Chours.push(randNum);
        console.log(this.Chours[r]);
    }
    for (var i = 0; i < hours.length; i++) {
        this.sumArr += this.Chours[i];
    }
    console.log(` hello ${this.sumArr}`);
this.addElement();
}









////////////////// add element done 
Store.prototype.addElement = function () {

    var container = document.getElementById('container');
    var unList2 = document.createElement('h2');
    container.appendChild(unList2);
    unList2.textContent = `City${store[u]}`;
    
    for (var u = 0; u < Store.length; u++) {
        if (Store[u] == this.name) {
        }
    }
  

    var unList = document.createElement('ul');
    container.appendChild(unList);
    for (var numList = 0; numList < hours.length; numList++) {
        var liEl = document.createElement('li');
        unList.appendChild(liEl);

        liEl.textContent = `${hours[numList]} : ${this.Chours[numList]} Co000000okies`;
        if (Store[numList] == this.name) {
            liEl.textContent = `Total:lllllll${sumArr} cooooooooookies`;

        }

    }

}






















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

