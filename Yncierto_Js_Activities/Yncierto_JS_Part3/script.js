const buttonSubmit = document.getElementById("btnSubmit");
    const message = document.getElementById("message");

buttonSubmit.addEventListener("click", ()=>{
    const newPassword = document.getElementById("nPass").value;
    const conPassword = document.getElementById("cPass").value;

    if(newPassword === conPassword){
        message.textContent = "Password successfully changed!";
        message.style.color = "green";
    } else{
        message.textContent = "Passwords do not match. Please try again";
        message.style.color = "red";
    }
});