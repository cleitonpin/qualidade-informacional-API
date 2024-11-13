# Qualidade Informacional API

## Descrição

Qualidade Informacional API é um projeto desenvolvido com o framework NestJS para gerenciar pesquisas de usuários. Ele utiliza MongoDB como banco de dados, Redis para cache e Nodemailer para envio de emails.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Redis](https://redis.io/)
- [Nodemailer](https://nodemailer.com/)
- [Handlebars](https://handlebarsjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/cleitonpin/qualidade-informacional-api.git
    cd qualidade-informacional-api
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    Crie um arquivo `.env.development` na raiz do projeto e adicione as seguintes variáveis:

    ```env
    DATABASE_URL=<sua-url-do-mongodb>
    EMAIL_HOST=<seu-host-de-email>
    EMAIL_PORT=<sua-porta-de-email>
    EMAIL_USER=<seu-usuario-de-email>
    EMAIL_PASSWORD=<sua-senha-de-email>
    REDIS_HOST=localhost
    REDIS_PORT=6379
    ```

## Uso

1. Inicie o servidor de desenvolvimento:

    ```bash
    npm run start:dev
    ```

2. Acesse a aplicação em `http://localhost:3000`.

## Estrutura do Projeto

- `src`: Diretório contendo o código-fonte da aplicação.
  - `common`: Diretório contendo classes e funções comuns a toda a aplicação.
    - `utils`: Diretório contendo funções utilitárias.
    - `errors`: Diretório contendo classes e funções para tratamento de erros comuns.
    - `views`: Diretório contendo templates de emails.
  - `config`: Diretório contendo arquivos de configuração da aplicação.
  - `modules`: Diretório contendo os módulos da aplicação.
    - `userPoll`: Módulo de pesquisas de usuários.
    - `users`: Módulo de usuários.
  - `app.controller.ts`: Controlador principal da aplicação.
  - `app.module.ts`: Módulo principal da aplicação.
  - `app.service.ts`: Serviço principal da aplicação, contendo a lógica de negócio geral.
  - `main.ts`: Arquivo de inicialização da aplicação.
- `test`: Diretório contendo os testes da aplicação.
- `.env.development`: Arquivo de configuração das variáveis de ambiente para o ambiente de desenvolvimento.
- `.eslintrc.js`: Arquivo de configuração do ESLint.
- `.gitignore`: Arquivo de configuração do Git para ignorar arquivos e diretórios.
- `Jenkinsfile`: Arquivo de configuração do Jenkins.
- `LICENSE`: Arquivo de licença do projeto.

## Testes

Para executar os testes, utilize o comando:

```bash
npm run test
```

Para gerar o relatório de cobertura de testes, utilize o comando:

```bash
npm run test:cov
```

## Autor

- [Cleiton](github.com/cleitonpin)

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
