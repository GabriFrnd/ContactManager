// Seleciona o formulário e seus campos

const form = document.querySelector("form");
const nameInput = form.querySelector("input[name='name']");
const emailInput = form.querySelector("input[name='email']");
const phoneInput = form.querySelector("input[name='phone']");

// Função para criar uma mensagem de erro

function showError(input, message) {
    // Remove qualquer mensagem de erro existente
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
        error.remove();
    }

    // Cria uma nova mensagem de erro
    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;

    // Insere a mensagem logo após o input
    input.insertAdjacentElement("afterend", errorMessage);
}

// Função para limpar as mensagens de erro

function clearErrors() {
    const errors = form.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}

// Validação do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário
    clearErrors(); // Limpa mensagens de erro anteriores

    let isValid = true;

    // Valida o campo Nome
    if (nameInput.value.trim() === "") {
        showError(nameInput, "O nome é obrigatório.");
        isValid = false;
    }

    // Valida o campo E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, "Insira um e-mail válido.");
        isValid = false;
    }

    // Valida o campo Telefone
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, "Insira apenas números no telefone.");
        isValid = false;
    }

    // Caso todos os campos sejam válidos, pode prosseguir

    if (isValid) {
        const userName = nameInput.value.trim(); // Obtém o nome do usuário
        alert(`${userName} adicionado com sucesso!`); // Mostra o alerta com o nome do usuário
        form.reset(); // Limpa o formulário
    }
});
