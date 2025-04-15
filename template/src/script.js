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

function showAlert(message) {
    // Cria o contêiner do alerta
    const alert = document.createElement("div");
    alert.className = "alert";

    // Adiciona o texto do alerta
    alert.innerHTML = `
        <strong>Usuário adicionado</strong>
        <span>${message}</span>
    `;

    // Adiciona o alerta ao corpo do documento
    document.body.appendChild(alert);

    // Remove o alerta após 3 segundos
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Validação do formulário

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

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

    if (isValid) {
        const userName = nameInput.value.trim();
        showAlert(`${userName} foi adicionado com sucesso!`);
        form.reset();
    }
});
