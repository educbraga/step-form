# Formulário em etapas

![Imagem do Projeto](./images/projeto.png)

## Tecnologias Utilizadas

- **VueJS 3**: Utilizando a Composition API para construção dos componentes frontend.
- **Node.js com Express**: Usados para executar um servidor simples responsável por servir a aplicação e manipular solicitações de API.
- **CSS**: O projeto utiliza um [sistema de grade de 8 pontos](https://spec.fm/specifics/8-pt-grid) para consistência de layout e [BEM](https://getbem.com) para nomeação de classes CSS para melhorar a legibilidade e manutenção.

---

# Guia de Configuração e Execução do Projeto

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en) instalado. A fim de promover consistência entre os ambientes de desenvolvimento, este projeto especifica a versão do Node no arquivo .nvmrc:

```plaintext:.nvmrc
lts/iron
```

Você pode gerenciar diferentes versões do Node em seu sistema usando o [nvm](https://github.com/nvm-sh/nvm).

## Instruções de execução local

1. **Clone o repositório**:

   ```sh
   git clone https://github.com/educbraga/step-form.git
   ```

   ```sh
   cd <diretorio-do-repositorio>
   ```

2. **Instale as dependências**:

   ```sh
   npm install
   ```

3. **Para visualizar a aplicação, execute o servidor**:

   ```sh
   npm run server
   ```

   Este comando irá gerar uma build com o Vite e iniciar o servidor Express que é responsável pela API backend e expor a aplicação em seu navegador.

4. **Acesse a aplicação em seu navegador de preferência em**:

   ```sh
   http://localhost:3000
   ```

---

Opcional - **Para desenvolvimento, execute o servidor de desenvolvimento**:

```sh
npm run dev
```

## Endpoints

`[GET] /registration`

- Responsável por renderizar uma página html que irá carregar os componentes do formulário no browser.

`[POST] /registration`

- API de cadastro responsável por receber os dados submetidos pelo usuário em formato JSON e responder para o client.

## Informações adicionais

O macro defineModel() utilizado no projeto foi uma adição do vue 3.4. Ele agrega uma prop e um emit. Para mais informações acesse:

- https://vuejs.org/api/sfc-script-setup.html#definemodel
- https://vuejs.org/guide/components/v-model.html
