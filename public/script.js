
window.addEventListener('DOMContentLoaded', (event) => {

    // window.location.assign('/signin');
})


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
        fetch('http://localhost:4000/signin', {
            method: "POST", 
            body: urlEncoded,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
    
            }
        })
    
        // window.location.assign('/success'); //Redirects user to the thank you page
    })

}