// selecting the input fields
let nameValue = document.getElementById('name-value')
let emaliValue = document.getElementById('email-value')
let phoneValue = document.getElementById('phone-value')
let passwordValue = document.getElementById('password-value')

// selecting the error fields
let nameErr = document.getElementById('name-error')
let emailErr = document.getElementById('email-error')
let phoneErr = document.getElementById('phone-error')
let passwordErr = document.getElementById('password-error')

// selecting the button
let addBtn = document.querySelector('button')

if(nameValue.value == 0){
    addBtn.disabled =true
}

// Name field
function validateName(){
    let name = nameValue.value;
    
    if(name.length == 0){
        nameErr.innerHTML =`Enter Your Name<ion-icon name="close-circle" id='icon1'></ion-icon>`
        addBtn.disabled = true;
        return false;
    }

    if(!name.match(/^[A-Za-z]{3,}\s[A-Za-z]{1,}$/)){
        nameErr.innerHTML = 'FullName Required';
        addBtn.disabled = true;
        return false;
    }

    nameErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`
    addBtn.disabled = false;
    return true;
}
nameValue.addEventListener('keyup',validateName);
nameValue.addEventListener('blur',validateName);



// email field
function validateEmail(){
    let email = emaliValue.value;
       
    if(email.length == 0){
        emailErr.innerHTML = `Enter Your E-mail<ion-icon name="close-circle" id='icon2'></ion-icon>`;
        addBtn.disabled = true;
        return false;
    }

    if(!email.match(/^[a-z]{3,}[0-9]{2,}[@][a-z]{4,}\.[com]{3}$/)){
        emailErr.innerHTML ='Enter Valid E-mail';
        addBtn.disabled = true;
        return false

    }
     
    emailErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    addBtn.disabled = false;
    return true;
}

emaliValue.addEventListener('keyup',validateEmail)
emaliValue.addEventListener('blur',validateEmail)



// phoneNumber Field
function validatePhone(){
    let phone = phoneValue.value;

    if(phone.length == 0){
        phoneErr.innerHTML =`Enter Phn Number<ion-icon name="close-circle" id='icon3'></ion-icon>`
        addBtn.disabled = true;
        return false
    }

    if(!phone.match(/^[7-9]{1}[0-9]{9}$/)){
        phoneErr.innerHTML = `Enter Valid Phone number`
        addBtn.disabled = true;
        return false;

    }
    
    phoneErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    addBtn.disabled = false;
    return true
}

phoneValue.addEventListener('keyup',validatePhone)
phoneValue.addEventListener('blur',validatePhone)



// password Field

function validatePaswword(){
    let password = passwordValue.value;

    if(password.length == 0){
        passwordErr.innerHTML =`Create Password<ion-icon name="close-circle" id='icon4'></ion-icon>`
        addBtn.disabled = true;
        return false;
    }

    if(!password.match(/^[A-Za-z0-9\*\$]{12,}$/)){
        passwordErr.innerHTML =`Create Strong Password`
        addBtn.disabled = true;
        return false;
    }

    passwordErr.innerHTML =`<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    addBtn.disabled = false;
    return true;
}

passwordValue.addEventListener('keyup',validatePaswword)
passwordValue.addEventListener('blur',validatePaswword)


// selecting the Form

let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})