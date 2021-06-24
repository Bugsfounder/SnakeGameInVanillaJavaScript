console.log('This is Project 4 of JacaScript Tutorial Form Validation Project using Regular Expressions');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validusername = false;
let validemail = false;
let validphone = false;

// console.log(name, email, phone);

// adding addEventListeners here 



// validation of username is here 
username.addEventListener('blur', () => {
    console.log('Name was blured');
    // validate name here 
    let Regular = /^([a-zA-Z])([0-9a-zA-Z]){2,10}$/;
    let string = username.value;
    // console.log(Regular.source, string);
    console.log(Regular, string);
    if (Regular.test(string)) {
        console.log('Your name is valid');
        const delInvalid = username.classList.remove('is-invalid');
        const valid = username.classList.add('is-valid');
        validusername = true;
    } else {
        console.log('Your name is invalid')
        const invalid = username.classList.add('is-invalid');
        validusername = false;
    }
});



// validation of email is here 
email.addEventListener('blur', () => {
    console.log('email was blured');
    // Validate email here 
    let Regular = /^([a-zA-Z0-9_\-\.\%\&\*\#]+)@([a-zA-Z0-9_\-\.\%\&\*\#]+)\.([a-zA-Z]){2,7}$/;
    let string = email.value;
    console.log(Regular, string)
    if (Regular.test(string)) {
        console.log('email matched');
        let delInvalid = email.classList.remove('is-invalid');
        let valid = email.classList.add('is-valid');
        validemail = true;

    } else {
        console.log('email Does Not Matched');
        let invalid = email.classList.add('is-invalid');
        validemail = false;
    }

});



// validation of Phone is here 
phone.addEventListener('blur', () => {
    console.log('phone was blured');
    // Validate phone here 
    let Regular = /^([0-9]){10}$/;
    let string = phone.value;
    console.log(Regular, string);
    if (Regular.test(string)) {
        console.log('phone matched');
        let delInvalid = phone.classList.remove('is-invalid');
        let valid = phone.classList.add('is-valid');
        validphone = true;

    } else {
        console.log('Phone Does Not Matched');
        let invalid = phone.classList.add('is-invalid');
        validphone = false;
    }

});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicked the submit button');
    /// submit your form here
    if (validusername && validemail && validphone) {
        console.log('Informations are valid Submitting your form');
        let success = document.getElementById('success');
        success.classList.add('show');
        faliur.classList.remove('show');
        // console.log(success);
    } else {
        console.log('Informations are invalid your form has been rejected try again leter');
        let faliur = document.getElementById('faliur');
        faliur.classList.add('show');
        success.classList.remove('show');
        // console.log(faliur);
    }


});