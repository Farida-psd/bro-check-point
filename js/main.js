var getUserName = prompt(" Hello! are u ok bro?");

console. log(getUserName);

document.getElementById("userName").innerText = getUserName

/*tooltip*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })