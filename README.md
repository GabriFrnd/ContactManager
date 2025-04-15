# 📝 Contact Manager  

Um **gerenciador de contatos simples** desenvolvido com **HTML, CSS e JavaScript puro**, permitindo adicionar, listar e remover contatos dinamicamente. Projeto criado para a disciplina de **Tecnologias Web**.  

## 🚀 Funcionalidades Principais  
✔ **Adicionar Contatos** - Insira nome, telefone e e-mail de forma intuitiva  
✔ **Listagem Dinâmica** - Visualize todos os contatos em uma tabela organizada  
✔ **Remoção Instantânea** - Delete contatos com um único clique  
✔ **Persistência de Dados** - Armazenamento automático no `localStorage` do navegador  
✔ **Interface Responsiva** - Adaptável a diferentes tamanhos de tela  
✔ **Validação Básica** - Verificação simples dos campos de entrada  

## 🛠 Tecnologias Utilizadas  
- **HTML5** - Estrutura semântica da aplicação  
- **CSS3** - Estilização moderna com Flexbox  
- **JavaScript** - Funcionalidades sem frameworks  
- **LocalStorage** - Persistência dos dados localmente  

## ⚙️ Como Executar o Projeto

### 📥 Método 1: Execução direta no navegador
1. Faça o download do projeto:
   - Opção A: Clique em "Code" > "Download ZIP" no GitHub
   - Opção B: Clone via Git (recomendado):
     ```bash
     git clone https://github.com/GabriFrnd/ContactManager.git
     ```
2. Extraia os arquivos (se baixou em ZIP)
3. Navegue até a pasta do projeto
4. Abra o arquivo `index.html` no seu navegador

### 🖥️ Método 2: Usando Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Abra a pasta do projeto no VS Code
3. Clique com o botão direito no arquivo `index.html`
4. Selecione "Open with Live Server"
5. A aplicação abrirá automaticamente em: http://localhost:5500

## 🔧 Configuração do EditorConfig

O projeto inclui um arquivo `.editorconfig` para manter a consistência do código entre diferentes editores e IDEs. Veja como utilizá-lo:

### 📜 O que é o EditorConfig?
É um arquivo de configuração que padroniza:
- Codificação de caracteres
- Tipo de indentação (tabs/espaços)
- Tamanho da indentação
- Estilo de quebra de linha
- Entre outras configurações editoriais

### 📥 Instalação
**VS Code** (Recomendado):
1. Abra o marketplace de extensões (Ctrl+Shift+X)
2. Busque por "EditorConfig for VS Code"
3. Clique em "Install"

**Outros Editores**:
- **Sublime Text**: Instale via Package Control
- **Atom**: Instale o pacote `editorconfig`
- **IntelliJ/WebStorm**: Suporte nativo (ativar em Settings > Editor > Code Style)

### 🛠 Configuração do Projeto
O arquivo `.editorconfig` já está incluído na raiz do projeto com estas regras:

```ini
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = crlf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
