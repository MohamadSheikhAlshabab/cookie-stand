'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Chours = [];
var shops = ['Seattle', 'Tokoy', 'Dubai', 'Paris', 'Lima'];
var sumArr = 0;




// var multi = 1;
// var randNum = 1;

function Store(name, mincus, maxcus, avgcookie) {
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;

}



// Store.prototype.randCustomer = function () {
//     for (var p = 0; p < hours.length; p++) {
//         var randNum = Math.floor(Math.random() * (this.maxcus - this.mincus) + this.mincus);
//         console.log(`randNum  ${randNum}`);

//         var multi = Math.floor(randNum * this.avgcookie);
//         Chours.push(multi);
//     //     console.log(multi);
//         //    if (shops[p] == this.name){
//     //            var t=parseInt(sumArr );
//             //    Chours.push(sumArr);
//             //    sumArr +=Chours;
//             //    console.log(sumArr);
//     //        }
//     //        console.log(`mullti  ${multi}`);
//     //        console.log(`mullti  ${multi}`);
//     // }

// }
// }










Store.prototype.addElement = function () {
    // var container = document.getElementById('container');
    // var unList2 = document.createElement('h2');
    // container.appendChild(unList2);


    var table1 =document.getElementById('table');
    var trEl = document.createElement('tr');
    table1.appendChild(trEl);

    // for (var u = 0; u < shops.length; u++) {

    //     if (shops[u] == this.name) {
    //         unList2.textContent = shops[u];
    //     }
    // }

    // var unList = document.createElement('ul');
    // container.appendChild(unList);
    for (var numList = 0; numList < hours.length; numList++) {
        var thEl =document.createElement('th');
        trEl.appendChild(thEl);
        // var liEl = document.createElement('li');
        // unList.appendChild(liEl);
        // liEl.textContent = `${hours[numList]} : ${Chours[numList]} Co000000okies`;

    //     if ( Chours.length == hours.length ) {

    //         var liEl = document.createElement('li');
    //         unList.appendChild(liEl);
    //     //     liEl.textContent = `Totallllllll  ${sumArr} cooooooooookies`;

    //     }
    }
}





var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokoy = new Store('Tokoy', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);


var shopsObject = [Seattle, Tokoy, Dubai, Paris, Lima];

for (var h = 0; h < shopsObject.length; h++) {
    if (shopsObject[h] !== shops[h]) {
        // shopsObject[h].randCustomer();
        shopsObject[h].addElement();

    }

}
