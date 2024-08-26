# Introdução ao TypeScript

## O que é o JavaScript

JavaScript (JS) começou como uma linguagem de script para navegadores e evoluiu para uma linguagem forte para desenvolver aplicações na web.
Node.js estendeu o uso do JS para o servidor, permitindo desenvolvimento multiplataforma.



## O que é TypeScript?

TypeScript é um (superset), uma extensão do JavaScript que adiciona tipagem e alguns outros recursos para tornar o JavaScript mais fácil de usar para aplicações de grande escala. A principal diferença entre TypeScript e JavaScript é a adição de tipos estáticos pelo TypeScript.

`https://www.typescriptlang.org/`



## Por que usar TypeScript?

- **Melhoria da qualidade do código:** Com tipos estáticos, é mais fácil prevenir certos tipos de erros em tempo de compilação.

- **Facilidade de manutenção:** O código TypeScript é mais fácil de refatorar, entender e manter.

- **Detecção precoce de erros:** A tipagem estática ajuda a identificar erros antes da compilação e execução do código. 



### Preciso instalar o TypeScript?

Sim, é necessário instalar o TypeScript globalmente ou localmente no seu projeto. A instalação global (`-g`) permite usar o TypeScript em qualquer projeto no seu sistema, enquanto a instalação local (`-D`) é específica para um projeto.

Para instalar o TypeScript
```bash
    npm install typescript -D

    npm install -g typescript
```

Para desinstalar o TypeScript

```bash
  npm uninstall -g typescript

  npm uninstall typescript
```

## Configuração e Compilação

A configuração inicial do TypeScript envolve sua instalação e a compilação de arquivos `.ts` para `.js`.



### Como compilar TypeScript?

Use o comando `tsc` (TypeScript Compiler), que compila o arquivo TypeScript para JavaScript e `node` para executar o arquivo compilado em js. 

```bash

tsc nome_do_arquivo.ts

node nome_do_arquivo.js

```
Para facilitar o desenvolvimento e evitar a necessidade de compilar manualmente cada arquivo após mudanças, você pode utilizar o modo de observação do TypeScript:

```bash

tsc --watch
```
Se quiser monitorar um arquivo específico.

```bash

tsc nome_do_arquivo.ts --watch

```

Este comando mantém o TypeScript em execução, compilando automaticamente seus arquivos `.ts` para `.js` sempre que detectar mudanças.



### Compilação Automática em Projetos Next.js e Nest.js

Quando você cria um novo projeto usando Next.js ou Nest.js, não é necessário instalar o TypeScript globalmente nem configurar o processo de compilação manualmente. Esses frameworks vêm com uma configuração de TypeScript pré-definida e integrada, que compila automaticamente seus arquivos TypeScript durante o desenvolvimento e a construção do projeto.

Isso simplifica significativamente o processo de configuração para novos projetos, permitindo que você se concentre no desenvolvimento sem se preocupar com detalhes de compilação.



## Ferramentas e Ambiente

Ferramentas como Node.js e o arquivo de configuração `tsconfig.json` são essenciais no desenvolvimento com TypeScript.

### O que é Node.js?

Node.js é um ambiente de execução para JavaScript no servidor, permitindo rodar aplicações JavaScript fora de um navegador.

### Por que o npx do Next.js e do Nest.js já trazem o TypeScript?

Esses frameworks adotam TypeScript como padrão para aproveitar os benefícios da tipagem estática, integrando-o profundamente em seu ecossistema e fluxo de trabalho de desenvolvimento. Isso elimina a necessidade de configurações adicionais e garante que todos os projetos criados com esses frameworks estejam prontos para usar TypeScript desde o início.


`npx @nestjs/cli new name_project`


### O que é o tsconfig?

O `tsconfig.json` é um arquivo de configuração do TypeScript que especifica as opções de compilação e o comportamento do compilador. Ele permite personalizar como o TypeScript e o editor de código tratam seu código, incluindo a definição do diretório de saída para os arquivos compilados, as bibliotecas de tipo a serem incluídas e muitas outras opções que afetam a compilação e a verificação de tipo.

---