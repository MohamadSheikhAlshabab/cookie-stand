'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var store = [];
var store1 = ['Seattle', 'Tokoy', 'Dubai', 'Paris', 'Lima'];
var total = [];
// var Chours = [];
// var sumArr = 0;


var form = document.getElementById("addCity");

form.addEventListener('Submit', function (event) {
    event.preventDefault();
    console.log(event);
})

console.log(store);
function Store(name, mincus, maxcus, avgcookie) {  // constructor
    this.name = name;
    this.mincus = mincus;
    this.maxcus = maxcus;
    this.avgcookie = avgcookie;
    this.Chours = [];
    this.sumArr = 0;
    store.push(this);


}


Store.prototype.randCustomer = function () { // generate random number of customer and multiply random number by avgcookie 
    // then sum all 14 values of array after multiply and give me sum of array
    for (var j = 0; j < hours.length; j++) {
        var randNum = Math.floor((Math.random() * (this.maxcus - this.mincus) + this.mincus) * this.avgcookie);
        this.Chours.push(randNum);
        console.log(`${j} ${this.Chours[j]}`);
        // console.log(store[j]);
    }
    for (var i = 0; i < hours.length; i++) {
        this.sumArr += this.Chours[i];
        // console.log(store[i]);
    }
    console.log(` hello ${this.sumArr}`);
    total = this.sumArr;


    // this.addElement();

}









var table1 = document.getElementById('table');



function tableheader() {

    /////////////// create  table and first row (th made up from hours)

    ////// to create row
    var tr1 = document.createElement('tr');
    table1.appendChild(tr1);

    ///// for coloumn of cities
    var th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = ` City `;


    ///// for every hour
    for (var k = 0; k < hours.length; k++) {
        var th2 = document.createElement('th');
        tr1.appendChild(th2);
        th2.textContent = ` ${hours[k]}  `;
        // console.log(store[k]);

    }
    // for Daily total
    var th3 = document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent = ` Daily Location Total `;


}
tableheader();







Store.prototype.addElement = function () {
this.randCustomer();

    var tr2 = document.createElement('tr');
    table1.appendChild(tr2);
    var td1 = document.createElement('td');
    tr2.appendChild(td1);
    for (var t = 0; t < hours.length; t++) {
        if (store1[t] == this.name) {
            td1.textContent = ` ${store1[t]} `;
            // console.log(store[t]);

            for (var m = 0; m <= hours.length; m++) {

                var td3 = document.createElement('td');
                tr2.appendChild(td3);
                // console.log(this.Chours[m]);

                td3.textContent = `${this.Chours[m]} `;
                // console.log(store[m]);
            }

            var td4 = document.createElement('td');
            tr2.appendChild(td4);
            td3.textContent = `${this.sumArr} `;


        }
    }



}



function add(){

    var myForm = document.getElementById('addCity');
    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
console.log('ddddd');
        var name = event.target.name.value;
        var mincus = event.target.mincus.value;
        var maxcus = event.target.maxcus.value;
        mincus = parseInt(mincus);
        maxcus = parseInt(maxcus);
        var avgcookie = event.target.avgcookie.value;
        avgcookie = parseFloat(avgcookie);

        if (maxcus > mincus) {
            table1.removeChild(table1.lastChild);
            var addedShop = new Store(name, mincus, maxcus, avgcookie);
            addedShop.randomCusNum();
            addedShop.render();
            console.log(addedShop.cookiesPerHour);
            console.log(addedShop.cusPerHour);
            //submt=true;
            // tablefooter();
        }
        else {
            alert(" max/cust SHOULD BE GREATER THAN min/cust");
        }

    });
}
add();

































// ///// to call construtor 


var Seattle = new Store('Seattle', 23, 65, 6.3);
Seattle.addElement();

var Tokoy = new Store('Tokoy', 3, 24, 1.2);
Tokoy.addElement();

var Dubai = new Store('Dubai', 11, 38, 3.7);
Dubai.addElement();

var Paris = new Store('Paris', 20, 38, 2.3);
Paris.addElement();

var Lima = new Store('Lima', 2, 16, 4.6);
Lima.addElement();




// function tablefooter() {

//     var tr6 = document.createElement('tr');
//     table1.appendChild(tr6);
//     var td6 = document.createElement('td');
//     tr6.appendChild(td6);
//     td6.textContent = ` Total `;
//     var totalcol =0;
//     var totalshop=0;
//     for (var u = 0; u < hours.length; u++) {
//     // for (var r = 0; r < store1.length; r++) {
//             var td7 = document.createElement('td');
//             tr6.appendChild(td7);
//             td7.textContent = totalcol;
//             // totalcol=;

//         totalshop = 'd';



//         // }

//     }
// }




// Store.prototype.hh = function () { 

function tablefooter() {




    var tr3 = document.createElement('tfoot');
    table1.appendChild(tr3);
    var tdfooter = document.createElement('td');
    tr3.appendChild(tdfooter);
    tdfooter.textContent = "Totals";
    var totalOftatals = 0;


    for (var i = 0; i < hours.length; i++) {

        var colomSum = 0;
        for (var j = 0; j < store1.length; j++) {

            colomSum += 5;
            // console.log(this.Chours[j]);
            // console.log(this.Chours[j][i]);

        }
        totalOftatals = totalOftatals + colomSum;
        var tdfoot = document.createElement('td');
        tr3.appendChild(tdfoot);
        tdfoot.textContent = colomSum;
    }

    var tdtotal = document.createElement('td');
    tr3.appendChild(tdtotal);
    tdtotal.textContent = totalOftatals;









}

tablefooter();




