# Expense Control Application

Este projeto é uma aplicação de controle de despesas, composta por um backend em Node.js, frontend em React, e um banco de dados PostgreSQL, orquestrados via Docker Compose.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- Docker

## Configuração do ambiente

1. **Arquivo `.env`**: O arquivo `.env` necessário está presente no diretório `./backend`. Este arquivo deve conter as variáveis de ambiente necessárias para o PostgreSQL, pgAdmin e a API, como exemplo:

   ```env
   JWT_SECRET=sua_chave_secreta

   DB_HOST=seu_host_db
   DB_PORT=sua_porta_db
   DB_USERNAME=seu_usuario_db
   DB_PASSWORD=sua_senha_db
   DB_NAME=nome_do_banco

   POSTGRES_PORT=5432
   POSTGRES_HOST=pgsql
   POSTGRES_USER=seu_usuario_postgres
   POSTGRES_PASSWORD=sua_senha_postgres
   POSTGRES_DB=nome_do_banco_postgres

   PGADMIN_USER=seu_email@dominio.com
   PGADMIN_PASSWORD=sua_senha_pgadmin
   ```

2. **Volumes de dados**: O Docker Compose irá automaticamente criar volumes para persistir os dados do PostgreSQL.

## Como rodar a aplicação

Para rodar a aplicação, execute o comando a seguir no terminal:

```bash
docker compose --env-file ./backend/.env up --build
```

## O que o comando irá fazer

- **Construir e iniciar os serviços** definidos no `docker-compose.yml`.
- O serviço **PostgreSQL (`pgsql`)** será iniciado, juntamente com o **pgAdmin (`pgadmin4`)**, a **API (`api`)** e o **frontend (`react`)**.
- O serviço **`api`** só será iniciado após o PostgreSQL estar disponível e saudável.
- O frontend **`react`** só será iniciado após a API estar disponível.

## Acesso à aplicação

- **API Backend**: A API estará disponível em [http://localhost:3000](http://localhost:3000).
- **Frontend**: O frontend estará disponível em [http://localhost:5173](http://localhost:5173).
- **pgAdmin**: O pgAdmin estará disponível em [http://localhost:8080](http://localhost:8080). Use o e-mail e senha configurados no arquivo `.env` para acessar.

## Estrutura dos contêineres

- **`pgsql`**: Contêiner do PostgreSQL, responsável pelo banco de dados.
- **`pgadmin4`**: Contêiner do pgAdmin, interface gráfica para gerenciar o PostgreSQL.
- **`api`**: Contêiner da API em Node.js, que interage com o banco de dados e fornece endpoints para o frontend.
- **`react`**: Contêiner do frontend em React, que consome a API.

## Encerrando os contêineres

Para parar e remover os contêineres, redes e volumes definidos no Docker Compose, execute:

```bash
docker compose down
```
