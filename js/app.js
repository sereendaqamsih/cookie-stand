'use strict';
let citiesArray = [];
let hourWork = [' 6:00am ','7:00am ',' 8:00am ',' 9:00am ',' 10:00am ',' 11:00am ',' 12:00pm ',' 1:00pm ',' 2:00pm ',' 3:00pm ',' 4:00pm ',' 5:00pm ',' 6:00pm ',' 7:00pm '];
let totalArray=[];
let total1=0;
let divEl = document.getElementById('hour');
let articleEl = document.createElement('article');
divEl.appendChild(articleEl);
let tablel = document.createElement('table');
articleEl.appendChild(tablel);
//let tableHeader1 = document.createElement('td');
//tablel.appendChild(tableHeader1);
//let thEl2 = document.createElement('th');
//thEl2.textContent =" cities" ;
  //tableHeader1.appendChild(thEl2);
for (let i=0; i<hourWork.length;i++){
    let tableHeader = document.createElement('td');
  tablel.appendChild(tableHeader);
  let thEl1 = document.createElement('th');
  thEl1.textContent =`${hourWork[i]}` ;
  tableHeader.appendChild(thEl1);
}
function City (location,minCus,maxCus,avgCookiecus,hourWork){
    this.location=location;
    this.minCus=minCus;
    this.maxCus=maxCus;
    this.avgCookiecus=avgCookiecus;
    this.hourWork=hourWork;
    this.cusHour= 0;
    this.cookiesHour= [];
    this.sumCookies=0;
    this.cookies= 0;
    citiesArray.push(location);
}
City.prototype.getCustomernumber= function (min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              this.cusHour = Math.floor(Math.random() * (max - min + 1) + min);
              return this.cusHour;
          }

City.prototype.render=function () {
    let tr4 = document.createElement('tr');
    tablel.appendChild(tr4);

        for ( let i=0 ; i< this.hourWork.length ;i++ ) {
        this.getCustomernumber(this.minCus,this.maxCus);
        this.cookies=Math.ceil(this.avgCookiecus*this.cusHour);
        this.cookiesHour.push (this.cookies);
        this.sumCookies=this.cookies+this.sumCookies;
        let td4 = document.createElement('td');
        tr4.appendChild(td4);
        td4.textContent =` ${this.cookiesHour[i]} `;}   
                }
   

let seattle = new City ('Seattle',23,65,6.3,hourWork);
seattle.getCustomernumber(23,65);
seattle.render();
//seattle.maketable();

let tokyo = new City ('Tokyo',3,24,1.2,hourWork);
tokyo.getCustomernumber(3,24);
tokyo.render();
//tokyo.maketable();

let dubai = new City ('Dubai',11,38,3.7,hourWork);
dubai.getCustomernumber(11,38);
dubai.render();
//dubai.maketable();

let paris = new City ('Paris',20,38,2.3,hourWork);
paris.getCustomernumber(20,38);
paris.render();
//paris.maketable();


let lima = new City ('Lima',2,16,4.6,hourWork);
lima.getCustomernumber(2,16);
lima.render();
//lima.maketable();
for ( let i=0; i< citiesArray.length;i++)
    {       let tr1 = document.createElement('tr');
        tablel.appendChild(tr1);
            let td2 = document.createElement('td');
              tr1.appendChild(td2);
               td2.textContent =`${citiesArray[i]}` ;
         }
          function total (){    
         for (let i=0; i< citiesArray;i++){
           total1=seattle.cookiesHour[i]+tokyo.cookiesHour+dubai.cookiesHour[i]+paris.cookiesHour[i]+lima.cookiesHour[i] ;
           push.totalArray[total1];
           console.log(total1);
           console.log([totalArray]);
         }}
         total();
    //function total () {
      //for (let i=0; i<citiesArray;i++){
      //let total1=seattle.cookiesHour[i]+tokyo.cookiesHour+dubai.cookiesHour[i]+paris.cookiesHour[i]+lima.cookiesHour[i] ;
      //push.totalArray[total1];
      //console.log(totalArray[i]);

   //}}
//total ();
         let tablefooter = document.createElement('tfoot');
         tablel.appendChild(tablefooter);
         let tf1 = document.createElement('tr');
         tablefooter.appendChild(tf1)
         tf1.textContent=`Total`;
         //for (let i=0; i<cookiesHour.length;i++){
             
         //}
         //for(let i=0; i<totalArray.length;i++){
           //  this.cookiesHour[i]+
            //tf1.textContent= `${totalArray[i]}`;}

         //tf1.textContent = 'total'`${totalArray[i]}`;
         //table1.appendChild(thEl1);
         //let tr3 = document.createElement('tr');
         //tablel.appendChild(tr3);
         //let td3 = document.createElement('td');
         //tr3.appendChild(td3);
         //td3.textContent ='Total' ;
