# Sistema de Login com Diferenciação de Usuário e Dashboard

Este é um sistema de autenticação de usuários criado com Node.js e SQLite, que permite que os usuários façam login como **Aluno** ou **Professor** e acessem um **Dashboard** específico após o login. Este projeto é um exemplo básico de um sistema de autenticação com banco de dados e gerenciamento de sessões.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Uso](#uso)
- [Futuras Melhorias](#futuras-melhorias)
- [Contribuição](#contribuição)

## Pré-requisitos

- **Node.js**: Versão 12 ou superior.
- **NPM**: Gerenciador de pacotes do Node.js.
- **SQLite**: Banco de dados embutido para armazenar as informações de usuário.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/GilkleytonSI/App-login.git
    cd app-login
    ```

2. Instale as dependências do Node.js:

    ```bash
    npm install
    ```

3. Inicie o banco de dados e a tabela de usuários:

    O código já está configurado para criar automaticamente a tabela de `users` com alguns dados de teste. Esse processo será executado ao iniciar o servidor pela primeira vez.

## Estrutura do Projeto

app-login/
├── server.js               # Arquivo principal do servidor Node.js
├── database.db             # Arquivo do banco de dados SQLite
├── public/                 # Pasta para arquivos frontend
│   ├── index.html          # Página de login
│   ├── dashboard.html      # Página de dashboard
│   ├── style.css           # Estilos para as páginas
│   └── script.js           # Código JavaScript para a interface
└── package.json            # Arquivo de dependências Node.js


## Uso

1. **Inicie o servidor**:

    ```bash
    node server.js
    ```

2. **Acesse a página de login** no navegador:

    ```
    http://localhost:3000
    ```

3. **Faça login** com um dos usuários de teste:

    - **Aluno**: Usuário: `aluno1`, Senha: `1234`
    - **Professor**: Usuário: `professor1`, Senha: `abcd`

4. **Acesso ao Dashboard**: Após o login, o usuário será redirecionado para o dashboard, onde verá uma mensagem de boas-vindas e a opção de logout.

## Futuras Melhorias

Aqui estão algumas ideias para aprimorar este projeto:

- **Criptografia de Senhas**: Use um algoritmo como bcrypt para armazenar senhas de forma segura no banco de dados.
- **Recuperação de Senha**: Implemente uma função para os usuários redefinirem suas senhas via e-mail.
- **Autenticação por JWT**: Em vez de sessões de servidor, considere o uso de tokens JWT para autenticação de usuários em APIs RESTful.
- **Registros e Perfis de Usuários**: Permitir que novos usuários se registrem, com validação de função (aluno ou professor) e criação de perfis personalizados.
- **Interface de Admin**: Adicionar um painel administrativo para gerenciamento de usuários e funções.
- **Teste Automatizado**: Implemente testes automatizados para verificar a autenticação, segurança e interface do sistema.
- **Integração com Banco de Dados Relacional**: Expanda o sistema para funcionar com bancos de dados mais robustos, como PostgreSQL ou MySQL, para maior escalabilidade.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_ com melhorias, correções ou novas funcionalidades.