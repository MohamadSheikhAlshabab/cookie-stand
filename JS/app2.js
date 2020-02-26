'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Chours = [];
 var sumArr = 0;
var store =[Seattle ,Tokoy ,Dubai , Paris ,Lima];


function Store(name, mincus, maxcus, avgcookie) {  // constructor
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;
    this.shops = [];
    this.sumArr = 0;
    // this.multi = 0;

}


Store.prototype.randCustomer=function (mincus, maxcus) { // generate random number of customer
    for (var r=0; r < hours.length; r++) {
    var randNum = Math.floor(Math.random() * (this.maxcus - this.mincus) + this.mincus);
    console.log(`randNum ${randNum}`);
    var multi = 0;   
    multi = Math.floor(randNum * this.avgcookie  );
    console.log(`multi ${ r}   ${multi}`);
    Chours.push(multi);
    
}
    
    for (var r=0; r < hours.length; r++) {
        
        sumArr += Chours[r];
        Chours.push(`${sumArr} cookies`);
    }
    console.log(`${sumArr}`);
    
}









////////////////// add element done 
Store.prototype.addElement = function () {

var link1 =document.createElement('a');
container.appendChild(link1);
link1.textContent='Index';
link1.setAttribute('href', "index.html");

var link2 =document.createElement('a');
container.appendChild(link2);
link2.textContent='Sales';
link2.setAttribute('href', "sales.html");

 var table1 =document.getElementById('table');
    var trEl = document.createElement('tr');
    // table1.appendChild(trEl);

    for (var u = 0; u !== shops.length; u++) {

        if (shops[u] == this.name) {
            // unList2.textContent = shops[u];

    

        }
    }

    // var unList = document.createElement('ul');
    // container.appendChild(unList);
    for (var numList = 0; numList < hours.length; numList++) {

    var thEl =document.createElement('th');
            trEl.appendChild(thEl);


/////////////////////////// this to add all li 
        // var liEl = document.createElement('li');
        // unList.appendChild(liEl);
        // liEl.textContent = ` ${hours[numList]} : ${Chours[numList]} Cookies`;




        Chours.push(multi);
    }
    if (Chours[numList] != numList) {

        ///////////////////////// this to add new li to total
        // var liEl = document.createElement('li');
        // unList.appendChild(liEl);
        // liEl.textContent = ` Total : ${sumArr} Cookies`;

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
