var form=document.getElementById('addForm');
var itemList=document.getElementById('items');


var filter = document.getElementById('filter');
//Form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
  e.preventDefault();

  //Get input value
  var newItem=document.getElementById('item').value;
  var description=document.getElementById('description').value;

  //create new li element
  var li=document.createElement('li');
 

  //Add class
  li.className='list-group-item';
  
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(description));

  //li.appendChild(document.createTextNode(descriptionNode));
  itemList.appendChild(li);
  //descriptionNode.appendChild(li);
  
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
   //descriptionNode.appendChild(li);
   
   
   
   
   
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
//Filter items
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //get li's
 var items = itemList.getElementsByTagName('li');
  
 //convert to an array
 Array.from(items).forEach(function(item){
  var itemName = item.firstChild.textContent;
 var itemName1=item.childNodes[1].textContent;
  
  if(itemName.toLowerCase().indexOf(text) != -1||itemName1.toLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
  }
  else{
    item.style.display = 'none';
  }
 });
}