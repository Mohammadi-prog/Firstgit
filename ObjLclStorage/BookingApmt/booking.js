var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);

//Add item
function addItem(e){
    var Name=document.getElementById('name').value;
  var Email=document.getElementById('email').value;
  var Mobile=document.getElementById('mobile').value;

    let myobj={
        Name,
        Email,
        Mobile
    }
    localStorage.setItem(myobj.Email,JSON.stringify(myobj));

 
  //create new li element
  var li=document.createElement('li');

  //Add class
  li.className='list-group-item';
  //Add text node with input value
 li.textContent=myobj.Name+'-'+myobj.Email+'-'+myobj.Mobile;
  itemList.appendChild(li);
  
   
    
   
e.preventDefault();
   
}
