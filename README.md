# Desafio Login React

Projeto desenvolvido para a disciplina de Desenvolvimento de Interfaces de Usuário para Web.
## Objetivo

Criar uma página de login que envie e-mail e senha para uma API e receba um `access_token`.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- API JSON REST Server disponibilizada pelo professor

## Funcionalidades

- Página de login com e-mail e senha.
- Integração com a API.
- Recebimento do `access_token`.
- Armazenamento do token no Local Storage.

## Como executar

Dentro da pasta do projeto, execute:

1. `npm install`
2. `npm run dev`

**Observação:** a API deve estar em execução na porta 5050 para realizar o login.

## Evidências do funcionamento

### Login realizado com sucesso

Após informar o e-mail e a senha, a aplicação realizou a autenticação pela API e exibiu a mensagem de sucesso.

<img width="480" height="508" alt="Captura de tela 2026-11-07 152759" src="https://github.com/user-attachments/assets/1c034094-1a77-4acc-a2d5-287051aa5633" />

### Access Token recebido

Utilizando o F12 do navegador, foi possível verificar no Local Storage que o `access_token` foi recebido e armazenado corretamente.

<img width="965" height="918" alt="Captura de tela 2026-11-07 152957" src="https://github.com/user-attachments/assets/fd563709-cafd-4d30-bea5-a371fca4f4e9" />
