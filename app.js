const FM = document.getElementById("ffm");
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');


FM.addEventListener("submit", (e)=>{
e.preventDefault();

let formData = {
    email: email.value,
    subject: subject.value,
    message: message.value
}

let xhr = new XMLHttpRequest();
xhr.open('POST', '/');
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
        alert('email sent');
        email.value = "";
        subject.value = "";
        message.value = "";
    }else{
        alert('something went wrong');
    }
}
xhr.send(JSON.stringify(formData));
});