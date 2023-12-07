function change_Color(){
    document.getElementById('abc').style.backgroundColor = 'blue'
}
function remove_Color(){
    document.getElementById('abc').style.backgroundColor = 'white'
}

/* function change_Case(){
    var emailid=document.getElementById('email').value;
    alert(emailid)
} */
function change_Case(){
    var emailid=document.getElementById('email').value;
    document.getElementById('email').value = emailid.toUpperCase()
}