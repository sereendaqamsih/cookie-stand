'use strict';

let seattle = {

    location: 'Seattle',
    minCus: 23,
    maxCus: 65,
    avgCookiecus: 6.3,
    hourWork : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    cusHour1: [],
    cusHour:0,
    cookiesHour: [],
    sumCookies: 0,
    cookies: 0,
    getCustomernumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.cusHour = Math.floor(Math.random() * (max - min + 1) + min);
        this.cusHour1.push(this.cusHour);
                //return this.cusHour;

              },
              sellcookies: function() { 
                for ( let i=0 ; i< this.hourWork.length ;i++ ){
                this.getCustomernumber(this.minCus,this.maxCus);
                this.cusHour1.push(this.cusHour);
                this.cookies=Math.ceil(this.avgCookiecus*this.cusHour);
                this.cookiesHour.push (this.cookies);
                this.sumCookies=this.cookies+this.sumCookies;
            
                          }},
                render: function () {
                     let divE1 = document.getElementById('hour');
                    let h2E1 = document.createElement('h2');
                    divE1.appendChild(h2E1);
                    h2E1.textContent = this.location;
                    let ulEl = document.createElement('ul');
                    divE1.appendChild(ulEl);
                for ( let i=0 ; i< this.hourWork.length ;i++ ) 
                {
                
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]} cookies`;
                   
                }   
               
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `Total ${ this.sumCookies} cookies`;
                
                }
            }

seattle.sellcookies();
seattle.render();


let tokyo = {

    location: 'Tokyo',
    minCus: 3,
    maxCus: 24,
    avgCookiecus: 1.2,
    hourWork : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    cusHour: 0,
    cusHour1: [],
    cookiesHour: [],
    sumCookies: 0,
    cookies: 0,
    getCustomernumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.cusHour = Math.floor(Math.random() * (max - min + 1) + min);
        return this.cusHour;
              },
    sellcookies: function() { 
    for ( let i=0 ; i< this.hourWork.length ;i++ ){
    this.getCustomernumber(this.minCus,this.maxCus);
    this.cusHour1.push(this.cusHour);
    this.cookies=Math.ceil(this.avgCookiecus*this.cusHour);
    this.cookiesHour.push (this.cookies);
    this.sumCookies=this.cookies+this.sumCookies;

              }},
    render: function () {
         let divE1 = document.getElementById('hour');
        let h2E1 = document.createElement('h2');
        divE1.appendChild(h2E1);
        h2E1.textContent = this.location;
        let ulEl = document.createElement('ul');
        divE1.appendChild(ulEl);
    for ( let i=0 ; i< this.hourWork.length ;i++ ) 
    {
    
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]} cookies`;
       
    }   
   
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total ${ this.sumCookies} cookies`;
    
    }
}
tokyo.sellcookies();
tokyo.render();


let dubai = {

    location: 'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCookiecus: 3.7,
    hourWork : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    cusHour: 0,
    cusHour1: [],

    cookiesHour: [],
    sumCookies: 0,
    cookies: 0,
    getCustomernumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.cusHour = Math.floor(Math.random() * (max - min + 1) + min);
            return this.cusHour;
              },
              sellcookies: function() { 
                for ( let i=0 ; i< this.hourWork.length ;i++ ){
                this.getCustomernumber(this.minCus,this.maxCus);
                this.cusHour1.push(this.cusHour);
                this.cookies=Math.ceil(this.avgCookiecus*this.cusHour);
                this.cookiesHour.push (this.cookies);
                this.sumCookies=this.cookies+this.sumCookies;
            
                          }},
                render: function () {
                     let divE1 = document.getElementById('hour');
                    let h2E1 = document.createElement('h2');
                    divE1.appendChild(h2E1);
                    h2E1.textContent = this.location;
                    let ulEl = document.createElement('ul');
                    divE1.appendChild(ulEl);
                for ( let i=0 ; i< this.hourWork.length ;i++ ) 
                {
                
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]} cookies`;
                   
                }   
               
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `Total ${ this.sumCookies} cookies`;
                
                }
            }
            dubai.sellcookies();
            dubai.render();
            

let paris = {

    location: 'Paris',
    minCus: 20,
    maxCus: 38,
    avgCookiecus: 2.3,
    hourWork : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    cusHour: 0,
    cusHour1: [],

    cookiesHour: [],
    sumCookies: 0,
    cookies: 0,
    getCustomernumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.cusHour = Math.floor(Math.random() * (max - min + 1) + min);
            return this.cusHour;
              },
              sellcookies: function() { 
                for ( let i=0 ; i< this.hourWork.length ;i++ ){
                this.getCustomernumber(this.minCus,this.maxCus);
                this.cusHour1.push(this.cusHour);
                this.cookies=Math.ceil(this.avgCookiecus*this.cusHour);
                this.cookiesHour.push (this.cookies);
                this.sumCookies=this.cookies+this.sumCookies;
            
                          }},
                render: function () {
                     let divE1 = document.getElementById('hour');
                    let h2E1 = document.createElement('h2');
                    divE1.appendChild(h2E1);
                    h2E1.textContent = this.location;
                    let ulEl = document.createElement('ul');
                    divE1.appendChild(ulEl);
                for ( let i=0 ; i< this.hourWork.length ;i++ ) 
                {
                
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]} cookies`;
                   
                }   
               
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `Total ${ this.sumCookies} cookies`;
                
                }
            }
            paris.sellcookies();
            paris.render();
            

let lima = {

    location: 'Lima',
    minCus: 2,
    maxCus: 16,
    cusHour1: [],

    avgCookiecus: 4.6,
    hourWork : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    cusHour: 0,
    cookiesHour: [],
    sumCookies: 0,
    cookies: 0,
    getCustomernumber: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.cusHour = Math.floor(Math.random() * (max - min + 1) + min);
            return this.cusHour;
              },
              sellcookies: function() { 
                for ( let i=0 ; i< this.hourWork.length ;i++ ){
                this.getCustomernumber(this.minCus,this.maxCus);
                this.cusHour1.push(this.cusHour);
                this.cookies=Math.ceil(this.avgCookiecus*this.cusHour);
                this.cookiesHour.push (this.cookies);
                this.sumCookies=this.cookies+this.sumCookies;
            
                          }},
                render: function () {
                     let divE1 = document.getElementById('hour');
                    let h2E1 = document.createElement('h2');
                    divE1.appendChild(h2E1);
                    h2E1.textContent = this.location;
                    let ulEl = document.createElement('ul');
                    divE1.appendChild(ulEl);
                for ( let i=0 ; i< this.hourWork.length ;i++ ) 
                {
                
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]} cookies`;
                   
                }   
               
                let liEl = document.createElement('li');
                ulEl.appendChild(liEl);
                liEl.textContent = `Total ${ this.sumCookies} cookies`;
                
                }
            }
            lima.sellcookies();
            lima.render();
            