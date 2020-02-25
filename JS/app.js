'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];
var Chours = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
// // var Chours1 = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
 var sumArr = 0;

var seattle = {

    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,

    randCustomer: function (minCustomer, maxCustomer) { // generate random number of customer
        var randNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        console.log(`randNum ${randNum}`);
        return randNum;
    },

    Sales: function () { //this number of cookies hourly
        var multi = 0;
        multi = Math.floor(this.randCustomer() * this.avgCookies);
        console.log(multi);
        return multi;

    },

    CookiesHour: function () { //store random values inside array each item indicate to number of cookies hourly

        for (var r=0; r < Chours.length; r++) {
            if (Chours[r]===''){
            Chours[r] = this.Sales();
            // console.log(`r=${r} ${Chours[r]}`);
            }
            
        }
    },

    sumTotal: function (a) {
        
        for (var n = 0; n < Chours.length; n++) {
            sumArr = sumArr + Chours[n];
            
     
        }
        Chours.push(`${sumArr} cookies`);
        console.log(`n=${n} ${sumArr}`);
    },

    addElement: function () {

        let divElem = document.createElement('div');
    
        document.body.appendChild(divElem);
        // divElem.textContent='Seattle';

        let unList2 = document.createElement('h2');
    
        document.body.appendChild(unList2);
        unList2.textContent='Seattle';

        let unList = document.createElement('ul');
    
        document.body.appendChild(unList);
        
        
        for (var numList = 0; numList < Chours.length; numList++) {
     
            let itemList = document.createElement('li');
            document.body.appendChild(itemList);
            itemList.textContent=`${hours[numList]}: ${Chours[numList]}`;
            if (numList== Chours.length){
                itemList.textContent=`Total:${Chours[numList]} cookies`;
                // console.log(`${n} ${sas}`);
            }
       
        }

      
    }
}

seattle.randCustomer();
seattle.Sales();
seattle.CookiesHour();
seattle.sumTotal();
seattle.addElement();




var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];
var Chours = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
// // var Chours1 = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
 var sumArr = 0;

var Tokyo = {

    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,

    randCustomer: function (minCustomer, maxCustomer) { // generate random number of customer
        var randNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        // console.log(randNum);
        return randNum;
    },

    Sales: function () { //this number of cookies hourly
        var multi = 0;
        multi = Math.floor(this.randCustomer() * this.avgCookies);
        console.log(multi);
        return multi;

    },

    CookiesHour: function () { //store random values inside array each item indicate to number of cookies hourly

        for (var r=0; r < Chours.length; r++) {
            if (Chours[r]===''){
            Chours[r] = this.Sales();
            // console.log(`r=${r} ${Chours[r]}`);
            }
            
        }
    },

    sumTotal: function (a) {
        
        for (var n = 0; n < Chours.length; n++) {
            sumArr = sumArr + Chours[n];
            
     
        }
        Chours.push(`${sumArr} cookies`);
        console.log(`n=${n} ${sumArr}`);
    },

    addElement: function () {

        let divElem = document.createElement('div');
    
        document.body.appendChild(divElem);
        // divElem.textContent='Seattle';

        let unList2 = document.createElement('h2');
    
        document.body.appendChild(unList2);
        unList2.textContent='Tokoy';

        let unList = document.createElement('ul');
    
        document.body.appendChild(unList);
        
        
        for (var numList = 0; numList < Chours.length; numList++) {
     
            let itemList = document.createElement('li');
            document.body.appendChild(itemList);
            itemList.textContent=`${hours[numList]}: ${Chours[numList]}`;
            if (numList== Chours.length){
                itemList.textContent=`Total:${Chours[numList]} cookies`;
                // console.log(`${n} ${sas}`);
            }
       
        }

      
    }
}

Tokyo.randCustomer();
Tokyo.Sales();
Tokyo.CookiesHour();
Tokyo.sumTotal();
Tokyo.addElement();




var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];
var Chours = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
// // var Chours1 = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
 var sumArr = 0;

var Dubai = {

    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,

    randCustomer: function (minCustomer, maxCustomer) { // generate random number of customer
        var randNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        // console.log(randNum);
        return randNum;
    },

    Sales: function () { //this number of cookies hourly
        var multi = 0;
        multi = Math.floor(this.randCustomer() * this.avgCookies);
        console.log(multi);
        return multi;

    },

    CookiesHour: function () { //store random values inside array each item indicate to number of cookies hourly

        for (var r=0; r < Chours.length; r++) {
            if (Chours[r]===''){
            Chours[r] = this.Sales();
            // console.log(`r=${r} ${Chours[r]}`);
            }
            
        }
    },

    sumTotal: function (a) {
        
        for (var n = 0; n < Chours.length; n++) {
            sumArr = sumArr + Chours[n];
            
     
        }
        Chours.push(`${sumArr} cookies`);
        console.log(`n=${n} ${sumArr}`);
    },

    addElement: function () {

        let divElem = document.createElement('div');
    
        document.body.appendChild(divElem);
        // divElem.textContent='Seattle';

        let unList2 = document.createElement('h2');
    
        document.body.appendChild(unList2);
        unList2.textContent='Dubai';

        let unList = document.createElement('ul');
    
        document.body.appendChild(unList);
        
        
        for (var numList = 0; numList < Chours.length; numList++) {
     
            let itemList = document.createElement('li');
            document.body.appendChild(itemList);
            itemList.textContent=`${hours[numList]}: ${Chours[numList]}`;
            if (numList== Chours.length){
                itemList.textContent=`Total:${Chours[numList]} cookies`;
                // console.log(`${n} ${sas}`);
            }
       
        }

      
    }
}

Dubai.randCustomer();
Dubai.Sales();
Dubai.CookiesHour();
Dubai.sumTotal();
Dubai.addElement();




var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];
var Chours = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
// // var Chours1 = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
 var sumArr = 0;

var Paris = {

    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,

    randCustomer: function (minCustomer, maxCustomer) { // generate random number of customer
        var randNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        // console.log(randNum);
        return randNum;
    },

    Sales: function () { //this number of cookies hourly
        var multi = 0;
        multi = Math.floor(this.randCustomer() * this.avgCookies);
        console.log(multi);
        return multi;

    },

    CookiesHour: function () { //store random values inside array each item indicate to number of cookies hourly

        for (var r=0; r < Chours.length; r++) {
            if (Chours[r]===''){
            Chours[r] = this.Sales();
            // console.log(`r=${r} ${Chours[r]}`);
            }
            
        }
    },

    sumTotal: function (a) {
        
        for (var n = 0; n < Chours.length; n++) {
            sumArr = sumArr + Chours[n];
            
     
        }
        Chours.push(`${sumArr} cookies`);
        console.log(`n=${n} ${sumArr}`);
    },

    addElement: function () {

        let divElem = document.createElement('div');
    
        document.body.appendChild(divElem);
        // divElem.textContent='Seattle';

        let unList2 = document.createElement('h2');
    
        document.body.appendChild(unList2);
        unList2.textContent='Paris';

        let unList = document.createElement('ul');
    
        document.body.appendChild(unList);
        
        
        for (var numList = 0; numList < Chours.length; numList++) {
     
            let itemList = document.createElement('li');
            document.body.appendChild(itemList);
            itemList.textContent=`${hours[numList]}: ${Chours[numList]}`;
            if (numList== Chours.length){
                itemList.textContent=`Total:${Chours[numList]} cookies`;
                // console.log(`${n} ${sas}`);
            }
       
        }

      
    }
}

Paris.randCustomer();
Paris.Sales();
Paris.CookiesHour();
Paris.sumTotal();
Paris.addElement();




var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];
var Chours = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
var shops =['Seattle','Paris','Lima','Dubai','Tokoy'];
// // var Chours1 = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
 var sumArr = 0;

var Lima = {

    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,

    randCustomer: function (minCustomer, maxCustomer) { // generate random number of customer
        var randNum = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        // console.log(randNum);
        return randNum;
    },

    Sales: function () { //this number of cookies hourly
        var multi = 0;
        multi = Math.floor(this.randCustomer() * this.avgCookies);
        console.log(multi);
        return multi;

    },

    CookiesHour: function () { //store random values inside array each item indicate to number of cookies hourly

        for (var r=0; r < Chours.length; r++) {
            if (Chours[r]===''){
            Chours[r] = this.Sales();
            // console.log(`r=${r} ${Chours[r]}`);
            }
            
        }
    },

    sumTotal: function (a) {
        
        for (var n = 0; n < Chours.length; n++) {
            sumArr = sumArr + Chours[n];
            
     
        }
        Chours.push(`${sumArr} cookies`);
        console.log(`n=${n} ${sumArr}`);
    },

    addElement: function () {
          
        

        let divElem = document.createElement('div');
    
        document.body.appendChild(divElem);
        // divElem.textContent='Seattle';

        let unList2 = document.createElement('h2');
    
        document.body.appendChild(unList2);
        unList2.textContent='Lima';

        let unList = document.createElement('ul');
    
        document.body.appendChild(unList);


        var container=document.getElementById('container');

        var tableEl = document.createElement('table');
        container.appendChild(tableEl);
        var trEl= document.createElement('tr');
        tableEl.appendChild(trEl);


        
        for (var numList = 0; numList < Chours.length; numList++) {

            
     
            let itemList = document.createElement('li');
            document.body.appendChild(itemList);
            itemList.textContent=`${hours[numList]}: ${Chours[numList]}`;
            if (numList== Chours.length){
                itemList.textContent=`Total:${Chours[numList]} cookies`;
                // console.log(`${n} ${sas}`);
            } 

      
        

      
       
        }

      
    }
}

Lima.randCustomer();
Lima.Sales();
Lima.CookiesHour();
Lima.sumTotal();
Lima.addElement();






function seattleBran (randCustomer,Sales,cookies,sumTotal,addElement){

    this.randCustomer=randCustomer;
    this.Sales=Sales;
    this.cookies=cookies;
    this.sumTotal=sumTotal;
    this.addElement=addElement;
}

//  seattleBran(randNum,multi,Chours[r],sumArr)
 


