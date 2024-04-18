function setFormMessage(formElement, tyoe, message){
    const messageElement = formElement.querySelector("form__message");
messageElement.textContent = message;
messageElement.classList.remove("form__message--succss", "form__message--error");
messageElement.classList.add('form__message--${type}');
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
});

document.querySelector("#linkCreateAccount") .addEventListener("click", e => {
   e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
});

document.querySelector("#linkLogin") .addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
});





















/**
 * Grabbing the HTML Form data and transferring to the backend to be processed in node js
 */

const form = document.querySelector('form');


if (form) {
    form.addEventListener('submit', (e) => {
    e.preventDefault(); //Prevents HTML From Submitting the Form

        const formData = new FormData(form);
    
        const urlEncoded = new URLSearchParams(formData).toString();
    

        //! Change according to host
        fetch('http://localhost:3000/submit', {
            method: "POST", 
            body: urlEncoded,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
    
            }
        })
    
        // window.location.assign('/success'); //Redirects user to the thank you page
    })

}