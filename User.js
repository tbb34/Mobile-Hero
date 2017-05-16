/*Login*/
function connect(){
    var field = document.getElementById("username");
    var user = field.value;
    localStorage.setItem("username", user);
    console.log(user + " Created");
}