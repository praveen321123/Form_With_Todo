let nameValue = document.getElementById('Username-value')
let passwordValue = document.getElementById('LogPassword-value')

let nameErr = document.getElementById('Username-error')
let passwordErr = document.getElementById('LogPassword-error')

let addBtn = document.querySelector('button')

if(nameValue.value == 0){
	addBtn.disabled = true
}

// Name field
function validateName(){
    let name = nameValue.value;
    
    if(name.length == 0){
        nameErr.innerHTML =`Enter UserName<ion-icon name="close-circle" id='icon1'></ion-icon>`
        addBtn.disabled = true;
        return false;
    }

    if(!name.match(/^[A-Za-z]{3,}[0-9]{2,}$/)){
        nameErr.innerHTML = 'Wrong UserName';
        addBtn.disabled = true;
        return false;
    }

    nameErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`
    addBtn.disabled = false;
    return true;
}
nameValue.addEventListener('keyup', validateName);
nameValue.addEventListener('blur', validateName);


function validatePaswword(){
	let password = passwordValue.value;

	if(password.length == 0){
			passwordErr.innerHTML =`Enter Password<ion-icon name="close-circle" id='icon4'></ion-icon>`
			addBtn.disabled = true;
			return false;
	}

	if(!password.match(/^[A-Za-z0-9\*\$]{6,}$/)){
			passwordErr.innerHTML =`Incorrect Password`
			addBtn.disabled = true;
			return false;
	}

	passwordErr.innerHTML =`<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
	addBtn.disabled = false;
	return true;
}

passwordValue.addEventListener('keyup',validatePaswword)
passwordValue.addEventListener('blur',validatePaswword)