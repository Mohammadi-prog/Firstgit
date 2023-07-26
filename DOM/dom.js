console.dir(document);
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
var main= document.querySelector('h2');
console.log(headerTitle);
header.style.border='solid 3px #000';
console.log(main);
main.style.fontWeight='bold';
main.style.color='green';
var ms=document.getElementsByTagName('li');
console.log(ms);
ms[0].style.fontWeight='bold';
ms[1].style.fontWeight='bold';
ms[2].style.fontWeight='bold';
ms[3].style.fontWeight='bold';
ms[4].style.fontWeight='bold';
var ele=document.getElementsByClassName('list-group-item');
ele[2].style.backgroundColor='green';
ele[4].style.fontWeight='bold';
console.log(ele);


