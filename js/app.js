'use strict';

let hourWork = [' 6:00am ','7:00am ',' 8:00am ',' 9:00am ',' 10:00am ',' 11:00am ',' 12:00pm ',' 1:00pm ',' 2:00pm ',' 3:00pm ',' 4:00pm ',' 5:00pm ',' 6:00pm ',' 7:00pm '];
let div1 = document.getElementById('hour');
let table1 = document.createElement('table');
div1.appendChild(table1);
let location1=[];
let  totalPerhour =0;
let cookiesHourfinal=[];

let header= function ()
   {  
    let tableHeader = document.createElement('tr');
    table1.appendChild(tableHeader);
    let th1 = document.createElement('th');
    tableHeader.appendChild(th1);
    th1.textContent ='cities' ;
    for (let i=0; i<hourWork.length;i++){
    let th1 = document.createElement('th');
    tableHeader.appendChild(th1);
    th1.textContent =`${hourWork[i]}` ;
}
    let th5 = document.createElement('th');
    tableHeader.appendChild(th5);
    th5.textContent ='Daily Location Total' ;
        
}
header();

function City (location,minCus,maxCus,avgCookiecus){
  this.location=location;
  this.minCus=minCus;
  this.maxCus=maxCus;
  this.avgCookiecus=avgCookiecus;
  this.cusHour1= [];
  this.cusHour= 0;
  this.cookiesHour= [];
  this.sumCookies1=[];
  this.sumCookies=0;
  this.cookies= 0;
  location1.push(this);

}
City.prototype.getCustomernumber= function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  this.cusHour = Math.floor(Math.random() * (max - min + 1) + min);
  this.cusHour1.push(this.cusHour);
   }
City.prototype.sellcookies= function() { 
  for ( let i=0 ; i< hourWork.length ;i++ ){
  this.getCustomernumber(this.minCus,this.maxCus);
  this.cusHour1.push(this.cusHour);
  this.cookies=Math.ceil(this.avgCookiecus*this.cusHour);
  this.cookiesHour.push (this.cookies);
  this.sumCookies=this.cookies+this.sumCookies;
  this.sumCookies1.push(this.sumCookies);
  }

}
City.prototype.render= function () { 
let tr1 = document.createElement('tr');
table1.appendChild(tr1);
let td1 =document.createElement('td');
tr1.appendChild(td1);
td1.textContent= (` ${this.location}`);
for ( let i=0; i<hourWork.length;i++){
let td7 = document.createElement('td');
tr1.appendChild(td7);
td7.textContent =` ${this.cookiesHour[i]} `;
 }
 let td8 =document.createElement('td');
 tr1.appendChild(td8);
 td8.textContent=`${this.sumCookies}`
}

let footer = function (){
  let tr6 = document.createElement('tr');
   table1.appendChild(tr6);
   let th6 =document.createElement('th');
   tr6.appendChild(th6);
   th6.textContent= (`Total`);

  let totaloftotal=0;
   for (let i=0; i<hourWork.length;i++) {
  let alltotal =0;
    for (let j=0; j<location1.length ; j++)
{alltotal+= location1[j].cookiesHour[i];
totaloftotal+= location1[j].cookiesHour[i];
  }
  let th9=document.createElement('th');
  tr6.appendChild(th9);
  th9.textContent=`${alltotal}`;
  }
  let th9=document.createElement('th');
  tr6.appendChild(th9);
  th9.textContent=`${totaloftotal}`;
    
}   

      let seattle = new City ('Seattle',23,65,6.3);
      seattle.getCustomernumber(23,65);
      seattle.sellcookies();
      seattle.render();
      
      let tokyo = new City ('Tokyo',3,24,1.2);
      tokyo.getCustomernumber(3,24);
      tokyo.sellcookies();
      tokyo.render();
      
      let dubai = new City ('Dubai',11,38,3.7);
      dubai.getCustomernumber(11,38);
      dubai.sellcookies();
      dubai.render();
      
      let paris = new City ('Paris',20,38,2.3);
      paris.getCustomernumber(20,38);
      paris.sellcookies();
      paris.render();
      
      let lima = new City ('Lima',2,16,4.6);
      lima.getCustomernumber(2,16);
      lima.sellcookies();
      lima.render();
      footer();


      



let branchForm = document.getElementById('citiesform');
branchForm.addEventListener('submit', Addbranch);

function Addbranch(event) {
    event.preventDefault();
    table1.removeChild(table1.lastElementChild);

    let location = event.target.location.value;
    let minCus = event.target.minCus.value;
    let maxCus = event.target.maxCus.value;
    let avgCookiecus = event.target.avgCookiecus.value;
    let newlocation = new City (location,minCus,maxCus,avgCookiecus);
    newlocation.getCustomernumber(minCus,maxCus);
    newlocation.sellcookies();
    newlocation.render();

newfooter();
}

let newfooter = function (){
    let tr6 = document.createElement('tr');
     table1.appendChild(tr6);
     let th6 =document.createElement('th');
     tr6.appendChild(th6);
     th6.textContent= (`Total`);
  
    let totaloftotal=0;
     for (let i=0; i<hourWork.length;i++) {
    let alltotal =0;
      for (let j=0; j<location1.length ; j++)
  {alltotal+= location1[j].cookiesHour[i];
  totaloftotal+= location1[j].cookiesHour[i];
    }
    let th9=document.createElement('th');
    tr6.appendChild(th9);
    th9.textContent=`${alltotal}`;
    }
    let th9=document.createElement('th');
    tr6.appendChild(th9);
    th9.textContent=`${totaloftotal}`;
    let salesFoot = document.getElementById("sales-foot");
    
    }