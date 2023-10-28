var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e){
  e.preventDefault();

  //Get input value
  var newItem=document.getElementById('item').value;

  //create new li element
  var li=document.createElement('li');

  //Add class
  li.className='list-group-item';
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  
  
   //create del button element
   var deleteBtn=document.createElement('button');
   var editBtn=document.createElement('button');
   

   //Add classes to del button element
   deleteBtn.className='btn btn-danger btn-sm float-right delete';
   editBtn.className='btn btn-danger btn-sm float-right edit';
   
   
    
   //Append text node
   deleteBtn.appendChild(document.createTextNode('X'));
   editBtn.appendChild(document.createTextNode('EDIT'));
   
   li.appendChild(deleteBtn);
   li.appendChild(editBtn);
 
   //Append button to li
   li.appendChild(li);
   
   
  
    //append li to list
   itemList.appendChild(li);
   
   
}
//Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){

    var li=e.target.parentElement;
    itemList.removeChild(li);
    }
  }

} 