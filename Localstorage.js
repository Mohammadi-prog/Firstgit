var form = document.getElementById("my-form");
form.addEventListener('submit',test);
function test(e){
    
    var user=document.getElementById("name").value;
    var eml=document.getElementById("email").value;
    localStorage.setItem("name",user);
    localStorage.setItem("email",eml);

}