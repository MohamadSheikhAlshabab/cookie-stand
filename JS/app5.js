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





// Store.prototype.Sales=function(){ //// multiple random number by avgcookie

//     var multi = Math.floor(this.randCustomer() * this.avgcookie);
//         console.log(`multi  ${multi}`);
//         // Chours.push(multi);
//         return multi;
// }


Store.prototype.cookiesperhour = function () {
    for (var r = 0; r < Chours.length; r++) {
    //     if (Chours[r] == []) {
    //         Chours[r] = multi;
    //         console.log(`r=${r} ${Chours[r]}`);
    //     }

    // }
    // this.cookiesperhour();
    if (shops[r] != Store[r]){
        // this.cookiesperhour();
        console.log('adssssssssssssssss');
    }
}
this.randCustomer();
this.addElement();
}



Store.prototype.addElement = function () {
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
    // this.Sales();
    // this.cookiesperhour();
    // this.randCustomer();
}




Store.prototype.randCustomer = function () { ///  generate random number

    for (var p = 0; p < hours.length; p++) {
        var randNum = Math.floor(Math.random() * (this.maxcus - this.mincus) + this.mincus);
        console.log(`randNum3  ${randNum}`);
        // Chours.push(randNum);
        // }

        // for (var p = 0; p < hours.length; p++) {

        var multi = Math.floor(randNum * this.avgcookie);
        // console.log(`multi  ${multi}`);

        Chours.push(multi);


    }
    // for (var r = 0; r < Chours.length; r++) {
    //         if (Chours[r] == []) {
    //             Chours[r] = multi;
    //             console.log(`r=${r} ${Chours[r]}`);
    //         }

    //     }
    // this.cookiesperhour();
    // }
    console.log(Chours);


    return multi;

}










var Seattle = new Store('Seattle', 23, 65, 6.3);
Seattle.cookiesperhour();

var Tokoy = new Store('Tokoy', 3, 24, 1.2);
Tokoy.cookiesperhour();

var Dubai = new Store('Dubai', 11, 38, 3.7);
Dubai.cookiesperhour();

var Paris = new Store('Paris', 20, 38, 2.3);
Paris.cookiesperhour();

var Lima = new Store('Lima', 2, 16, 4.6);

// Seattle.randCustomer();

// Tokoy.randCustomer();
// Tokoy.addElement();

// Dubai.randCustomer();
// Dubai.addElement();

// Paris.randCustomer();
// Paris.addElement();

// Lima.randCustomer();
// Lima.addElement();
Lima.cookiesperhour();

// var shopsObject = [Seattle, Tokoy, Dubai, Paris, Lima];

// for (var h = 0; h < shopsObject.length; h++) {
//     if (shopsObject !== shops) {
//         shopsObject[h].randCustomer();
//         shopsObject[h].addElement();

//     }

// }
