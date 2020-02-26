'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Chours = [];
// var shops = [];
// var sumArr = 0;
// var 


function Store(name, mincus, maxcus, avgcookie) {  // constructor
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;
    this.shops = [];
    this.sumArr = 0;
    this.multi = 0;

}


// Store.prototype.CookiesHour =function () { //store random values inside array each item indicate to number of cookies hourly

//     for (var r=0; r < Chours.length; r++) {
//         if (Chours[r] < 0){
//         Chours[r] = this.randCustomer();
//         console.log(`r=${r} ${Chours[r]}`);
//         }

//     }
//     this.randCustomer();
// }






///////// done finallllllllllly after more than 10 hours 
Store.prototype.randCustomer = function () { ///  generate random number and num of cookies hourly
    for (var t = 0; t < hours.length; t++) {
        var ranNum = Math.floor(Math.random() * ((this.maxcus - this.mincus) + this.mincus));
        console.log(ranNum);
        multi = Math.floor(this.avgcookie * ranNum);
        console.log(multi);
        Chours.push(multi);

        console.log(Chours);
        Chours[t] = multi;  //////////// this is my mistake , i put this line in second for loop  
        console.log(Chours);
    }

    for (var r = 0; r < hours.length; r++) {
        sumArr = sumArr + Chours[r];
        Chours.push(`${sumArr} cookies`);
    }
    this.addElement();
}


////////////////// add element done 
Store.prototype.addElement = function () {
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


   
}




///// to call construtor 


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