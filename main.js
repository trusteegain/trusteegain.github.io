

var tabLinks =document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-content');


function opentab(stuff){
      
      for ( var tabLink of tabLinks) {
        tabLink.classList.remove("active-links");
      }
      
      for ( var tabContent of tabContents) {
        tabContent.classList.remove('active-tabs');
        
        event.currentTarget.classList.add('active-links');
        document.getElementById(stuff).classList.add('active-tabs');
      }
}



var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-200px";
}

 
 
let planet = document.getElementById('name');
let getBody = document.querySelector("body");

let newElement = document.createElement("h1");

let date = new Date();

let currentHour = date.getHours();

let createTxtMsg;
 

function callMe(){
  
if ( currentHour >= 0 && currentHour < 10 && currentHour == planet) {
  createTxtMsg = "Good morning!";
}else if ( currentHour >= 10 && currentHour < 12) {
  createTxtMsg = "Good day!";
}else if ( currentHour >= 12 && currentHour < 18) {
  createTxtMsg = "Good afternoon!";
}else if ( currentHour >= 18 && currentHour < 22) {
  createTxtMsg = "Good evening!";
}else if ( currentHour >= 22 && currentHour <= 23) {
  createTxtMsg = "Good night!";
} else{
  createTxtMsg = "Are you from a different planet";
}
 alert(createTxtMsg);
}
 

 



 
