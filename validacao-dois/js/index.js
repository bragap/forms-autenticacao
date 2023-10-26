const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const modal = document.querySelector("dialog");
const btnClose = document.getElementById("btn-close");

form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();

});

const checkInputs = () => {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let valid = true;

    if (usernameValue === '') {

        errorValidation(username, 'Preencha esse campo');
        valid = false;
    } else {

        successValidation(username);
    }
    if (emailValue === '' || !isEmailValid(emailValue)) {

        errorValidation(email, 'Preencha esse campo');
        valid = false;

    } else {

        successValidation(email);
    }

    if (passwordValue.length < 8) {

        errorValidation(password, 'A senha deve ter no mínimo 8 caracteres');
        valid = false;

    } else {

        successValidation(password);
    }


    if (password2Value === '') {

        errorValidation(password2, 'Preencha esse campo');
        valid = false;

    } else if (passwordValue !== password2Value) {

        errorValidation(password2, 'As senhas não conferem');
        valid = false;

    } else {
        successValidation(password2);
    }

    if(valid){
        modal.showModal();
        form.reset();
    }
    
}

const errorValidation = (input, message) => {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

const successValidation = (input) => {

    const formControl = input.parentElement;

    formControl.className = 'form-control success';

}

// Função que valida e-mail
function isEmailValid(email){

    // criar uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}


btnClose.addEventListener("click", () => {  

    modal.close();
    window.location.href = "www.globo.com.br";
}   );