var itemList=document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#green';
//console.log(itemList.parentElement.parentElement.parentElement);
//console.log(itemList.firstChild);
//itemList.firstElementChild.style.backgroundColor="green";
//console.log(itemList.nextSibling);
//itemList.nextElementSibling.style.backgroundColor="green";
//console.log(itemList.previousSibling);
//itemList.previousElementSibling.style.backgroundColor="green";
var newDiv=document.createElement('div');
newDiv.className="hello";
newDiv.id="hello1";
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.color='red';
container.insertBefore(newDiv, h1);
itemList.firstChild.textContent="Hello";

