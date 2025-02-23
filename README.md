# AR Bank 

O AR Bank é um sistema bancário simples desenvolvido com o objetivo de simular operações bancárias. O sistema permite a interação com informações de conta bancária, cadastro de clientes, login de usuários e visualização do perfil. O projeto utiliza React.js para a construção da interface de usuário e Vite.js como bundler, garantindo um ambiente de desenvolvimento rápido e eficiente.

## Funcionalidades

- **Abrir conta**: simulação de cadastro, em que o usuário fornece informações como nome, agência, banco e tipo de conta. O sistema recebe os dados da conta e insere 0 como estado do saldo.
  
- **Login**: simulação de login a partir de número de conta criado no cadastro (gerado de forma aleatória).

- **Perfil**: após o login, o sistema exibe as informações do usuário, incluindo nome, banco, agência, número da conta e tipo de conta.

**Operações bancárias simuladas**:
- **Depositar**: adiciona o valor recebido no parâmetro no estado saldo; 
- **Sacar**: o usuário pode visualizar o saldo atual de sua conta, total de entradas e saídas;
- **Consultar saldo**: retira o valor recebido como parâmetro do estado saldo. 


## Screenshots

![Website/Home Screenshot](/projeto-base/public/screenshot-home-projeto.png)
<br>
![Website/cadastro Screenshot](/projeto-base/public/screenshot-cadastro-projeto.png)
<br>
![Website/login Screenshot](/projeto-base/public/screenshot-login-projeto.png)
<br>
![Website/login Screenshot](/projeto-base/public/screenshot-perfil-projeto.png)
<br>
![Website/login Screenshot](/projeto-base/public/screenshot-menu-projeto.png)

## Para executar localmente

Clone o projeto

```bash
  git clone https://github.com/Debora-Carvalho/sistema-bancario.git
```

Entre no diretório do projeto

```bash
  cd projeto-base
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Autores

- [@Debora-Carvalho](https://github.com/Debora-Carvalho)


