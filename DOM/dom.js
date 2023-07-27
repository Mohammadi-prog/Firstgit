//console.dir(document);
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//var main= document.querySelector('h2');
//console.log(headerTitle);
//header.style.border='solid 3px #000';
//console.log(main);
//main.style.fontWeight='bold';
//main.style.color='green';
//var ms=document.getElementsByTagName('li');
//console.log(ms);
//ms[0].style.fontWeight='bold';
//ms[1].style.fontWeight='bold';
//ms[2].style.fontWeight='bold';
//ms[3].style.fontWeight='bold';
//ms[4].style.fontWeight='bold';
//var ele=document.getElementsByClassName('list-group-item');
//ele[2].style.backgroundColor='green';
//ele[4].style.fontWeight='bold';
//console.log(ele);

//QUERYSELECTOR//
var header=document.querySelector("#main-header");
header.style.borderBottom='solid 4px #ccc';
 
var input=document.querySelector('input');
input.value="hello world";

var submit=document.querySelector('input[type="submit"]');
submit.value="send";
 
var item = document.querySelector('.list-group-item');
item.style.color='red';



var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.textContent=' ';


var secondchild = document.querySelector('.list-group-item:nth-child(2)');
secondchild.style.backgroundColor='green';

//QUEUESELECTORALL//
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent="Hello";

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
 
even[0].style.color='green';
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

