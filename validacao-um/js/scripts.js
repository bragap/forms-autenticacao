const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector("#job");

const modal = document.querySelector("#myModal");
const modalMessage = document.querySelector("#modalMessage");
const closeButton = document.querySelector("#closeButton");


form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (nameInput.value === "") {
        showMessage("Por favor, preencha o seu nome.");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        showMessage("Por favor, preencha um email válido.");
        return;
    }

    if (!validatePassword(passwordInput.value, 8)) {
        showMessage("A senha precisa ter no mínimo 8 dígitos.");
        return;
    }

    if (jobSelect.value === "") {
        showMessage("Por favor, selecione a sua situação.");
        return;
    }

    if (messageInput.value === "") {
        showMessage("Por favor, escreva uma mensagem.");
        return;
    }

   form.submit();
   
});

// Função que valida e-mail
function isEmailValid(email){

    // criar uma regex para va  lidar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

// Função para validar senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        // senha valida
        return true;
    }
    // senha invalida
    return false;
}

function showMessage(message){
    modalMessage.innerHTML = message;
    modal.showModal();
}


closeButton.addEventListener("click", function closeModal() {
    modal.close();
});

