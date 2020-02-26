'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Chours = [];
var shops = [Seattle, Tokoy, Dubai, Paris, Lima];
var sumArr = 0;



function Store(name, mincus, maxcus, avgcookie) {  // constructor
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;

}




Store.prototype.randCustomer = function () {

    var randNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    console.log(`randNum ${randNum}`);
return randNum ;

    // var multi = 0;
    // multi = Math.floor(randNum * this.avgCookies);
    // console.log(`mulllti${multi}`);
    
    // for (var r = 0; r < Chours.length; r++) {
    //     if (Chours[r] == 0) {
    //         Chours[r] = this.Sales();
    //         // console.log(`r=${r} ${Chours[r]}`);
    //     }

    // }
    // this.CookiesHour();
    // console.log(`r=${r} ${Chours[r]}`);
    // this.sumTotal();

    // for (var n = 0; n < Chours.length; n++) {
    //     sumArr = sumArr + Chours[n];


    // }
    // Chours.push(`${sumArr} cookies`);
    // console.log(`n=${n} ${sumArr}`);
    // // this.Sales();
    // this.addElement();


    // this.CookiesHour();
    
        // this.Sales();
    // return  multi;

}




Store.prototype.CookiesHour = function () {

    var multi = 0;
    multi = Math.floor(this.randCustomer() * this.avgCookies);
    console.log(`mulllti${multi}`);
    // this.randCustomer();
    
    return multi;

}




// Store.prototype.Sales = function () {


//     for (var r = 0; r < Chours.length; r++) {
//         if (Chours[r] == 0) {
//             Chours[r] = this.Sales();
//             // console.log(`r=${r} ${Chours[r]}`);
//         }

//     }
//     // this.CookiesHour();
//     console.log(`r=${r} ${Chours[r]}`);
//     this.sumTotal();
    
// }





// Store.prototype.sumTotal = function () {

//     for (var n = 0; n < Chours.length; n++) {
//         sumArr = sumArr + Chours[n];


//     }
//     Chours.push(`${sumArr} cookies`);
//     console.log(`n=${n} ${sumArr}`);
//     // this.Sales();
//     this.addElement();
// }







Store.prototype.addElement= function () {
   
    var container = document.getElementById('container');
    var unList2 = document.createElement('h2');
    container.appendChild(unList2);


    // var table1 =document.getElementById('table');
    // var trEl = document.createElement('tr');
    // table1.appendChild(trEl);

    for (var u = 0; u !== shops.length; u++) {

        if (shops[u] == this.name) {
            unList2.textContent = shops[u];
        }
    }

    var unList = document.createElement('ul');
    container.appendChild(unList);
    for (var numList = 0; numList <= hours.length; numList++) {
        //     var thEl =document.createElement('th');
        //     trEl.appendChild(thEl);
        var liEl = document.createElement('li');
        unList.appendChild(liEl);
        liEl.textContent = ` ${hours[numList]} : ${Chours[numList]} Co000000okies`;

        // if ( numList  <= hours.length ) {

        //     var liEl = document.createElement('li');
        //     unList.appendChild(liEl);
        // //     liEl.textContent = `Totallllllll  ${sumArr} cooooooooookies`;

        // }
    }
    // this.randCustomer();
    // this.CookiesHour();
    // this.Sales();
    // this.sumTotal();
}









var Seattle = new Store('Seattle', 23, 65, 6.3);

var Tokoy = new Store('Tokoy', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);

Seattle.randCustomer();
// Seattle.addElement();

Tokoy.randCustomer();
// Tokoy.addElement();

Dubai.randCustomer();
// Dubai.addElement();

Paris.randCustomer();
// Paris.addElement();

Lima.randCustomer();
// Lima.addElement();