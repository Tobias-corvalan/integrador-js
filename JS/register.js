const form = document.querySelector("#form")
const username = document.querySelector("#name")
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const PHONE_REGEX = /^[0-9]{11}$/;

const isEmpty = value => value === "";

const isBetween = (length, min , max) => length > min && length < max;

const emailValid = email => EMAIL_REGEX.test(email);
const phoneValid = phone => PHONE_REGEX.test(phone);
const passwordValid = password => PASSWORD_REGEX.test(password);

const showError = (input, msj) =>{
    
    const form_field = input.parentElement;
    form_field.classList.remove("valid")
    form_field.classList.add('invalid');
    
    const errorContainer = form_field.querySelector("small")
    errorContainer.textContent = msj;
}

const showSucces = (input) => {

    const form_field = input.parentElement;
    form_field.classList.remove('invalid')
    form_field.classList.add('valid');

    const errorContainer = form_field.querySelector("small")
    errorContainer.textContent = "";

}



const checkUsername = () => {

    let valid = false 

    max = 25;
    min = 3;

    const usernameValue = username.value.trim();

    if(isEmpty(usernameValue)){
        showError(username,"El nombre es obligatorio");
    }else if(!isBetween(usernameValue.length,min,max)){
        showError(username,`El nombre tiene que tener entre ${min} y ${max} letras`);
    }else{
        showSucces(username);
        valid = true
        
    }
    return valid;
}

const checkEmail = () => {

    let valid = false;

    const emailValue = email.value.trim();
    
    if(isEmpty(emailValue)){
        //error
        showError(email,"Se necesita indicar un email obligatoriamente")
    }else if(!emailValid(emailValue)){
        //error
        showError(email,"El email ingresado no es valido")
    }else{
        //correcta
        showSucces(email);
         valid = true;
    }
    return valid;
}


const checkPhone = () => {

    let valid = false;

    const phoneValue = phone.value.trim();
    
    if(isEmpty(phoneValue)){
        //error
        showError(phone,"Se necesita indicar un telofono")
    }else if(!phoneValid(phoneValue)){
        //error
        showError(phone,"El telefono ingresado no es valido, verifique el valor ingresado")
    }else{
        //correcta
        showSucces(phone);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {

    let valid = false;

    const passwordValue = password.value.trim();
    const usernameValue = username.value.trim();
    
    if(isEmpty(passwordValue)){
        //error
        showError(password,"Se necesita indicar una contraseña");
    }else if(!passwordValid(passwordValue)){
        //error
        showError(password,"La contraseña debe tener 8 caracteres, una mayuscula, minuscula y un simbolo");
    }else{
        //correcta
        showSucces(password);
        valid = true;
    }
    return valid;
}

form.addEventListener("submit",e =>{
    e.preventDefault();

    const usernameValid = checkUsername();
    const emailValid = checkEmail();
    const phoneValid = checkPhone();
    const passwordValid = checkPassword();

    const formValid = usernameValid && emailValid && passwordValid && passwordValid;

    console.log("form valido")

})