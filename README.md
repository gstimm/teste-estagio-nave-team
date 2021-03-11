# API Node para teste de estágio na Nave.rs

Uma API RESTful feita com Node.js, PostgreSQL, Express, Knex e Objection.

## Como rodar a API

1. Instale o [Node.JS](https://nodejs.org/en/) na versão LTS;
2. Instale o Yarn com o comando: `npm install -g yarn`;
3. Instale o PostgresSQL através do docker. Tutorial em anexo na imagem;

  [![Docker](https://www.ortussolutions.com/__media/logos/docker.png)](https://www.notion.so/Instala-o-do-Docker-629bb75aa46f427589883f6bcbc82af7)

4. Com o docker instalado será necessário criar um container, para isso devemos digitar no terminal:
`docker run --name user_name -e POSTGRES_PASSWORD=your_password -p 5432:5432 -d postgres`
o retorno será o nome do container caso o comando tenha sucesso;
5. Com o container criado, o proximo passo é acessar o banco de dados através de um software de sua escolha, recomendo o [Postbird](https://www.electronjs.org/apps/postbird), e criar uma database e guarde o nome pois ele será utilizado no `.env` junto com os dados `user_name` e `your_password`;
6. Clone o repositório e altere o nome do arquivo `.env.example` para `.env` na raiz do projeto;
7. No arquivo `.env`, complete a DATABASE_URL com postgress://`user_name`:`your_password`@localhost:5432/`database` e a PORT com `3333`;
8. Instale as dependências utilizando o comando: `yarn`;
9. Vamos rodar as migrações para deixar seu banco de dados no formato correto, digite no console:
 `yarn knex migrate:latest` e todas as migrações devem ser rodadas e está tudo pronto para os testes.
10. Inicie a API digitando no console: `yarn dev`;
11. Utilize o [Insomnia](https://insomnia.rest/download) para testar a aplicação;

## Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Navers%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fgstimm%2Fteste-estagio-nave-team%2Fmaster%2FInsomnia.json)

## Directory Structure

```
├── /src
|   ├── /controllers
|   ├── /database
|   |    ├── /migrations
|   ├── /models
|   ├── /routes
|
```

## Endpoints

### GET

`/navers` Rota para listar todos os Navers. (Index) <br/>
`/navers/:id` Rota para detalhar um Naver. (Show) <br/>

`/projects` Rota para listar todos os Projetos. (Index) <br/>
`/projects/:id` Rota para detalhar um Projeto. (Show) <br/>

### POST

`/naver` Rota para criar um novo Naver. (Store) <br/>
`/projects` Rota para criar um novo Projeto. (Store) <br/>

## Dificuldades Encontradas

Para a construção da API, a minha dificuldade foi a criação do banco de dados utilizando as models do Objection, pois apesar de estar acostumado com o Knex, nunca havia utilizado O Objection para abstrair a camada de dados. Todavia, devido a excelente documentação oficial da biblioteca, tudo foi resolvido.
