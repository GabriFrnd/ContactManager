// Array para armazenar os usuários cadastrados
let users = JSON.parse(localStorage.getItem('users')) || [];

// Seleciona o formulário e seus campos
const form = document.querySelector("form");
const nameInput = form.querySelector("input[name='name']");
const emailInput = form.querySelector("input[name='email']");
const phoneInput = form.querySelector("input[name='phone']");

// Função para criar uma mensagem de erro
function showError(input, message) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
        error.remove();
    }
    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    input.insertAdjacentElement("afterend", errorMessage);
}

// Função para limpar as mensagens de erro
function clearErrors() {
    const errors = form.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}

// Função para exibir o alerta
function showAlert(message, isSuccess = true) {
    const alert = document.createElement("div");
    alert.className = `alert ${isSuccess ? 'success' : 'error'}`;
    alert.innerHTML = `
        <strong>${isSuccess ? 'Sucesso!' : 'Erro!'}</strong>
        <span>${message}</span>
    `;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

// Funções de validação de duplicados
function isEmailExist(email) {
    return users.some(user => user.email === email);
}

function isPhoneExist(phone) {
    return users.some(user => user.phone === phone);
}

// Validação do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    let isValid = true;
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    // Validação do nome
    if (nameValue === "") {
        showError(nameInput, "O nome é obrigatório.");
        isValid = false;
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        showError(emailInput, "Insira um e-mail válido.");
        isValid = false;
    } else if (isEmailExist(emailValue)) {
        showError(emailInput, "Este e-mail já está cadastrado.");
        isValid = false;
    }

    // Validação do telefone
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phoneValue)) {
        showError(phoneInput, "Insira apenas números no telefone.");
        isValid = false;
    } else if (isPhoneExist(phoneValue)) {
        showError(phoneInput, "Este telefone já está cadastrado.");
        isValid = false;
    }

    // Se tudo estiver válido, adiciona o usuário
    if (isValid) {
        const newUser = {
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            id: Date.now() // ID único baseado no timestamp
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        showAlert(`${nameValue} foi adicionado com sucesso!`);
        form.reset();
    }
});
