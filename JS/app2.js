'use strict'
// constructor function lab 07

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
var Chours = [];
var shops = ['Seattle', 'Tokoy', 'Dubai', 'Paris', 'Lima'];
var sumArr = 0;
var multi = 1;
var randNum = 1;


// console.log("sasadsasadsadsa" + Chours)
function Store(name, mincus, maxcus, avgcookie) {
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;
    
}




// console.log("sasadsasadsadsa" + Chours)
Store.prototype.randCustomer = function () {
    
    for (var n = 0; n < hours.length; n++) {
        randNum = Math.floor(Math.random() * (this.maxcus - this.mincus) + this.mincus);
        console.log(`randNum  ${randNum}`);
        // Chours.push(`${randNum} Cookies`);
        multi = Math.floor(this.randNum * this.avgcookie);
        console.log('multi', multi);
        // Chours.push(`${multi} Cookies`);
        // return multi;
        // return randNum;
        console.log(`n=${n} ${sumArr}`);
        
        sumArr = sumArr + Chours[n];
        console.log(`n=${n} ${sumArr}`);
        Chours.push(multi);
        console.log(sumArr);
    }
}


// console.log("sasadsasadsadsa" + Chours)


// Store.prototype.sales = function () {
    
    // var multi = 0;
    // multi = Math.floor(this.randCustomer() * this.avgcookie);
    // console.log(multi);
// Chours.push(multi);
// return multi;
// }


// console.log("sasadsasadsadsa" + Chours)
// Store.prototype.CookiesHour = function () {
    // for (var r = 0; r < Chours.length; r++) {
        //     if (Chours[r] == !NaN) {
            //         Chours[r] = this.sales()    ;
//         // console.log(`r=${r} ${Chours[r]}`);
//     }

// }
// }


// console.log(Chours)
// Store.prototype.sumTotal = function () {
    //     for (var n = 0; n < Chours.length; n++) {
        //         sumArr = sumArr + Chours[n];
        //     }
        //     Chours.push(`${sumArr} `);
        //     console.log(`n=${n} ${sumArr}`);
        // }
        // console.log("sasadsasadsadsa" + Chours)
        
        
        
        Store.prototype.addElement = function () {
    
            
            //var div = document.getElementById('container')
    
            //     let divElem = document.createElement('div');
    
            //     document.body.appendChild(divElem);
            //     // divElem.textContent='Seattle';
    // for(var t=0 ;t <shops.length;t++){
        //     if (shops[t]==this.name){
            //     let unList2 = document.createElement('h2');
            
            //     document.body.appendChild(unList2);
            //     unList2.textContent = shops[t];
    //     }
    // }
    
    //     let unList = document.createElement('ul');
    
    //     document.body.appendChild(unList);
    
    
    //     for (var numList = 0; numList < Chours.length; numList++) {
        
        //         let itemList = document.createElement('li');
        //         document.body.appendChild(itemList);
        //         itemList.textContent = `${hours[numList]}: ${Chours[numList]}`;
        //         if (numList == Chours.length) {
            //             // itemList.textContent = `Total:${Chours[numList]} cookies`;
            //             // console.log(`${n} ${sas}`);
    //         }
    
    
    

    console.log("sasadsasadsadsa" + Chours)
    // if ()
    
    
    var container = document.getElementById('container');
    
    //  var divElem = document.createElement('div');
    
    // // document.body.appendChild(divElem);
    
    // // divElem.textContent='Seattle';
    
    var unList2 = document.createElement('h2');
    container.appendChild(unList2);
    for (var u = 0; u < shops.length; u++) {
        if (shops[u] == this.name) {
            unList2.textContent = shops[u];
        }
    }
    // console.log(unList2);
    
    var unList = document.createElement('ul');
    container.appendChild(unList);
    for (var numList = 0; numList < Chours.length; numList++) {
        var liEl = document.createElement('li');
        unList.appendChild(liEl);
        
        liEl.textContent = `${hours[numList]}: ${Chours[numList]} `;
        //         if (numList == Chours.length) {
            //             // liEl.textContent = `Total:${Chours[numList]} cookies`;
            //         // //     // console.log(`${n} ${sas}`);
            //         }
    }
    
    var Seattle = new Store('Seattle', 23, 65, 6.3);
    var Tokoy = new Store('Tokoy', 3, 24, 1.2);
    var Dubai = new Store('Dubai', 11, 38, 3.7);
    var Paris = new Store('Paris', 20, 38, 2.3);
    var Lima = new Store('Lima', 2, 16, 4.6);
    console.log(Seattle)
    Seattle.randCustomer()
    
    var shopsObject = [Seattle, Tokoy, Dubai, Paris, Lima];

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
    // }


}

// console.log("sasadsasadsadsa" + Chours)

// Store.prototype.render=function(){
// for (var y=0;y<shops.length;y++){
//     if(shops[y]===this.name){
//     this.randCustomer();
//     this.sales();
//     this.CookiesHour();
//     this.sumTotal();
//     this.addElement();

//     }
// }


// }








console.log('lorerm1');

// for (var h = 0; h < shopsObject.length; h++) {
    // if (shopsObject[h] !== shops[h]) {

        // console.log(shopsObject);
        // shopsObject[h].randCustomer();
// Seattle.randCustomer();
//         console.log('lorerm2');
        // shopsObject[h].sales();
        // shopsObject[h].CookiesHour();
        // shopsObject[h].sumTotal();
        // shopsObject[h].addElement();
        // Seattle.addElement();
    // }
    // this.render();
//     console.log('lorerm3');
// }
// console.log('lorerm4');

// Tokoy.randCustomer();
// Tokoy.sales();
// Tokoy.CookiesHour();
// Tokoy.sumTotal();
// Tokoy.addElement();
// // Tokoy.render();
// Dubai.randCustomer();
// Dubai.sales();
// Dubai.CookiesHour();
// Dubai.sumTotal();
// Dubai.addElement();
// // Dubai.render();
// Paris.randCustomer();
// Paris.sales();
// Paris.CookiesHour();
// Paris.sumTotal();
// Paris.addElement();
// // Paris.render();
// console.log(Paris,Dubai,Lima)
// Lima.sales();
// Lima.CookiesHour();
// Lima.sumTotal();
// Paris.addElement();
// // Lima.render();
// // console.log(Seattle);
// // console.log(Tokoy);
// // console.log(Dubai);
// // console.log(Paris);
// // console.log(Lima);
// // console.log(Seattle.maxcus);
// // console.log(Tokoy);
// // console.log(Dubai);
// // console.log(Paris);
// // console.log(Lima);