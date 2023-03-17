# Projeto-Integrador-Back-end

O LabEddit é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá criar e curtir publicações.

# Conteúdo Abordado

## Índice 
- <a href ="#funcionalidades">Funcionalidades do Projeto</a>
- <a href="#Typescript">Typescript</a>
- <a href="#Express">Express</a>
- <a href="SQL e SQLite">SQL e SQLite</a>
- <a href="#Knex">Knex</a>
- <a href="#POO">POO</a>
- <a href="#Arquitetura em camadas">Arquitetura em camadas</a>
- <a href="#Geração de UUID">Geração de UUID</a>
- <a href="#Geração de hashes">Geração de hashes</a>
- <a href="#Autenticação e autorização">Autenticação e autorização</a>
- <a href="#Roteamento">Roteamento</a>
- <a href="#Postman">Postman</a>

# Banco de Dados

![Capturar](https://user-images.githubusercontent.com/111313480/226069415-f0fa8b0d-8112-493f-8ad5-37233c68dd2e.PNG)

# Lista de Requisitos

- Endpoints
- [x] Signup
- [x] Login
- [x] get posts
- [x] edit post
- [x] like / dislike post

- Autenticação e autorização

- [x] identificação UUID
- [x] senhas hasheadas com Bcrypt
- [x] tokens JWT

- Código

- [x] POO
- [x] Arquitetura em camadas
- [x] Roteadores no Express

- Documentação Postman
- [Link demostração](https://documenter.getpostman.com/view/24460930/2s93JzKfQe)
- [x] README.md

## Exemplos de requisição

# Signup

- Endpoint público utilizado para cadastro. Devolve um token jwt.

![image](https://user-images.githubusercontent.com/111313480/226070793-45282ff7-f9a2-47d3-9171-a7b24aae780c.png)

// response
// status 201 CREATED
{
  token: "um token jwt"
}

# Login

- Endpoint público utilizado para login. Devolve um token jwt.

// request POST /users/login
// body JSON
{
  "email": "beltrana@email.com",
  "password": "beltrana00"
}

// response
// status 200 OK
{
  token: "um token jwt"
}

# Get posts

- Endpoint protegido, requer um token jwt para acessá-lo.

// request GET /posts
// headers.authorization = "token jwt"

// response
// status 200 OK
[
    {
        "id": "uma uuid v4",
        "content": "Hoje vou estudar POO!",
        "likes": 2,
        "dislikes" 1,
        "createdAt": "2023-01-20T12:11:47:000Z"
        "updatedAt": "2023-01-20T12:11:47:000Z"
        "creator": {
            "id": "uma uuid v4",
            "name": "Fulano"
        }
    },
    {
        "id": "uma uuid v4",
        "content": "kkkkkkkkkrying",
        "likes": 0,
        "dislikes" 0,
        "createdAt": "2023-01-20T15:41:12:000Z"
        "updatedAt": "2023-01-20T15:49:55:000Z"
        "creator": {
            "id": "uma uuid v4",
            "name": "Ciclana"
        }
    }
]

#Create post

- Endpoint protegido, requer um token jwt para acessá-lo.

// request POST /posts
// headers.authorization = "token jwt"
// body JSON
{
    "content": "Partiu happy hour!"
}

// response
// status 201 CREATED

# Edit post

- Endpoint protegido, requer um token jwt para acessá-lo.
- Só quem criou o post pode editá-lo e somente o conteúdo pode ser editado.

// request PUT /posts/:id
// headers.authorization = "token jwt"
// body JSON
{
    "content": "Partiu happy hour lá no point de sempre!"
}

// response
// status 200 OK

# Delete post

- Endpoint protegido, requer um token jwt para acessá-lo.
- Só quem criou o post pode deletá-lo. Admins podem deletar o post de qualquer pessoa.

// request DELETE /posts/:id
// headers.authorization = "token jwt"

// response
// status 200 OK
