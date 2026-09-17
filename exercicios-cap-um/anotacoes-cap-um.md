# Introdução ao React

## O que é React?

React é uma biblioteca JavaScript para construir interfaces de usuário.

## O que é JSX?

- Extensão de sintaxe dom Js para descrever a interface de maneira declaritiva;
- Permite escrever marcação semelhante a HTML dentro do código Js.

## Node.js e npm

- Node.js: ambiente de execução Js fora do navegador;
- npm: gerenciador de pacotes.

## **Resumo de Projeto React**

Escreve JSX → o Next.js transforma em JavaScript que o browser entende → o browser renderiza a página. O comando `npm run dev` faz isso em tempo real enquanto você desenvolve.

## Arquivos importantes e scripts npm

- **package.json** - registra dependências e scripts como `dev`, `build` e `start`;
- **.gitignore** - lista arquivos e pastas que não devem ser enviados ao Git.

*Scripts mais utilizados:*

- `npm run dev` - inicia o servidor de desenvolvimento com recarregamento automático;
- `npm run build` - cria uma versão otimizada para produção;
- `npm run start` - executa a aplicação após o `build`.

## O que é um componente?

Um componente é um bloco de código que representa uma parte da interface (UI) da sua aplicação. Em React, componentes são geralmente funções que retornam um conteúdo JSX (semelhante ao HTML), e podem ser reutilizados em várias partes do seu projeto.

## Tipos de export

**Export default:**

- `export default Hello;` -> `.import Hello from './Hello';`
- `export { Hello };` -> `.import { Hello } from './Hello';`

## Tornando componente dinâmico com *props*

Podemos melhorar nosso componente para que ele receba um nome como parâmetro. Esses parâmetros são chamados de `props` em React.