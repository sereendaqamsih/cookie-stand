'use strict';

let seattle = {

    location: 'Seattle',
    minCus: 23,
    maxCus: 65,
    avgCookiecus: 6.3,
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
    render: function () {
        //let divE2 = document.getElementById('location');
        //let articleE2 = document.createElement('article');
        //divE2.appendChild(articleE2);
        //let h2E2 = document.createElement('h2');
        //articleE2.appendChild(h2E2);
        //h2E2.textContent = this.location;
        //let ulE2 = document.createElement('ul');
        //articleE2.appendChild(ulE2);
        let divEl = document.getElementById('hour');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        ulEl.textContent = this.location;


    for ( let i=0 ; i< this.hourWork.length ;i++ ) 
    {
    this.getCustomernumber(this.minCus,this.maxCus);
    this.cookies=6.3*this.cusHour;
    this.cookiesHour.push (this.cookies);
    this.sumCookies=this.cookies+this.sumCookies;
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]}`;
    
   
    }   
   
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.sumCookies;
    
    }
}

seattle.render();

let tokyo = {

    location: 'Tokyo',
    minCus: 3,
    maxCus: 24,
    avgCookiecus: 1.2,
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
    render: function () {
       
        let divEl = document.getElementById('hour');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        ulEl.textContent = this.location;


    for ( let i=0 ; i< this.hourWork.length ;i++ ) 
    {
    this.getCustomernumber(this.minCus,this.maxCus);
    this.cookies=6.3*this.cusHour;
    this.cookiesHour.push (this.cookies);
    this.sumCookies=this.cookies+this.sumCookies;
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]}`;
    
   
    }   
   
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.sumCookies;
    
    }
}

tokyo.render();


let dubai = {

    location: 'Dubai',
    minCus: 11,
    maxCus: 38,
    avgCookiecus: 3.7,
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
    render: function () {
       
        let divEl = document.getElementById('hour');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        ulEl.textContent = this.location;


    for ( let i=0 ; i< this.hourWork.length ;i++ ) 
    {
    this.getCustomernumber(this.minCus,this.maxCus);
    this.cookies=6.3*this.cusHour;
    this.cookiesHour.push (this.cookies);
    this.sumCookies=this.cookies+this.sumCookies;
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]}`;
    
   
    }   
   
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.sumCookies;
    
    }
}

dubai.render();

let paris = {

    location: 'Paris',
    minCus: 20,
    maxCus: 38,
    avgCookiecus: 2.3,
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
    render: function () {
       
        let divEl = document.getElementById('hour');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        ulEl.textContent = this.location;


    for ( let i=0 ; i< this.hourWork.length ;i++ ) 
    {
    this.getCustomernumber(this.minCus,this.maxCus);
    this.cookies=6.3*this.cusHour;
    this.cookiesHour.push (this.cookies);
    this.sumCookies=this.cookies+this.sumCookies;
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]}`;
    
   
    }   
   
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.sumCookies;
    
    }
}

paris.render();

let lima = {

    location: 'Lima',
    minCus: 2,
    maxCus: 16,
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
    render: function () {
       
        let divEl = document.getElementById('hour');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        ulEl.textContent = this.location;


    for ( let i=0 ; i< this.hourWork.length ;i++ ) 
    {
    this.getCustomernumber(this.minCus,this.maxCus);
    this.cookies=6.3*this.cusHour;
    this.cookiesHour.push (this.cookies);
    this.sumCookies=this.cookies+this.sumCookies;
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =` ${this.hourWork[i]} ${this.cookiesHour[i]}`;
    
   
    }   
   
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.sumCookies;
    
    }
}

lima.render();


