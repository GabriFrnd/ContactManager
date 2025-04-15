// users.js (no diretório /src/)
document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("tbody");

    // Carrega e exibe os usuários
    loadUsers();

    function loadUsers() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      tbody.innerHTML = ""; // Limpa a tabela antes de recarregar

      if (users.length === 0) {
        tbody.innerHTML = `<tr><td class="no-users" colspan="4">Nenhum usuário cadastrado.</td></tr>`;
        return;
      }

      // Adiciona cada usuário na tabela
      users.forEach((user, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td><button class="delete-btn" data-index="${index}">Excluir</button></td>
        `;
        tbody.appendChild(tr);
      });

      // Adiciona eventos aos botões de exclusão
      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = e.target.getAttribute("data-index");
          deleteUser(index);
        });
      });
    }

    function deleteUser(index) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.splice(index, 1); // Remove o usuário do array
      localStorage.setItem("users", JSON.stringify(users)); // Atualiza o localStorage
      loadUsers(); // Recarrega a lista
    }
  });
