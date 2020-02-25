'use strict'
// constructor function lab 07

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
var Chours = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
var shops = ['Seattle', 'Paris', 'Lima', 'Dubai', 'Tokoy'];
var sumArr=0;


function Store(name, mincus, maxcus, avgcookie) {
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;

}





Store.prototype.randCustomer = function () {

    var randNum = Math.floor(Math.random() * (this.maxcus - this.mincus) + this.mincus);
    console.log(`randNum ${randNum}`);
    return randNum;
}




Store.prototype.sales = function () {

    var multi = 0;
    multi = Math.floor(this.randCustomer() * this.avgcookie);
    console.log(multi);
    return multi;
}


Store.prototype.CookiesHour = function () {
    for (var r = 0; r < Chours.length; r++) {
        if (Chours[r] === '') {
            Chours[r] = this.sales()    ;
            // console.log(`r=${r} ${Chours[r]}`);
        }

    }
}


Store.prototype.sumTotal = function () {
    for (var n = 0; n < Chours.length; n++) {
        sumArr = sumArr + Chours[n];
    }
    Chours.push(`${sumArr} cookies`);
    console.log(`n=${n} ${sumArr}`);
}




Store.prototype.addElement = function () {


    let divElem = document.createElement('div');

    document.body.appendChild(divElem);
    // divElem.textContent='Seattle';
for(var t=0 ;t <shops.length;t++){
    if (shops[t]==this.name){
    let unList2 = document.createElement('h2');

    document.body.appendChild(unList2);
    unList2.textContent = shops[t];
    }
}

    let unList = document.createElement('ul');

    document.body.appendChild(unList);


    for (var numList = 0; numList < Chours.length; numList++) {

        let itemList = document.createElement('li');
        document.body.appendChild(itemList);
        itemList.textContent = `${hours[numList]}: ${Chours[numList]}`;
        if (numList == Chours.length) {
            itemList.textContent = `Total:${Chours[numList]} cookies`;
            // console.log(`${n} ${sas}`);
        }







        // var container1 = document.getElementById('container');
        // // var divElem = document.createElement('div');

        // // document.body.appendChild(divElem);

        // // divElem.textContent='Seattle';

        // // var unList2 = document.createElement('h2');
        // // container.appendChild(unList2);
        // // unList2.textContent = 'Lima';
        // // console.log(unList2);

        // // var unList = document.createElement('ul');
        // // container.appendChild(unList);


        // var h1El = document.createElement('h1');
        // container1.appendChild(h1El);
        // h1El.textContent = 'Hellllo';
        // console.log(h1El);

        // var tableEl = document.createElement('table');
        // container1.appendChild(tableEl);

        // for (var t = 0; t < shops.length; t++) { //col
        //     var trEl = document.createElement('tr');
        //     document.body.appendChild(trEl);
        //     tableEl.textContent = Chours[t];
        //     console.log(trEl);
        //     for (row = 0; row < Chours.length; row++) { //row
        //         var thEl = document.createElement('th');
        //         document.body.appendChild(thEl);
        //         trEl.textContent = Chours[row];
        //         console.log(thEl);
        //     }
    }
   
 
}

Store.prototype.render=function(){
for (var y=0;y<shops.length;y++){
    if(shops[y]===this.name){
    this.randCustomer();
    this.sales();
    this.CookiesHour();
    this.sumTotal();
    this.addElement();
    }
}
}











var Seattle = new Store('Seattle', 23, 65, 6.3);
Seattle.render();
var Tokoy = new Store('Tokoy', 3, 24, 1.2);
Tokoy.render();
var Dubai = new Store('Dubai', 11, 38, 3.7);
Dubai.render();
var Paris = new Store('Paris', 20, 38, 2.3);
Paris.render();
var Lima = new Store('Lima', 2, 16, 4.6);
Lima.render();
// console.log(Seattle);
// console.log(Tokoy);
// console.log(Dubai);
// console.log(Paris);
// console.log(Lima);
// console.log(Seattle.maxcus);
// console.log(Tokoy);
// console.log(Dubai);
// console.log(Paris);
// console.log(Lima);