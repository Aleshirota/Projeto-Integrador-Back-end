# Projeto-Integrador-Back-end

O LabEddit é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá criar e curtir publicações.

# Conteúdos Abordados

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


# Login

- Endpoint público utilizado para login. Devolve um token jwt.

![image](https://user-images.githubusercontent.com/111313480/226070874-3032af85-9640-41c8-922c-01399582be05.png)

# Get posts

- Endpoint protegido, requer um token jwt para acessá-lo.

![image](https://user-images.githubusercontent.com/111313480/226070935-a5a1b087-e2f1-479e-b097-f2a31db96f24.png)

# Create post

- Endpoint protegido, requer um token jwt para acessá-lo.

![image](https://user-images.githubusercontent.com/111313480/226070969-0a64f0ff-9642-4bda-ab79-a9678f04c956.png)

# Edit post

- Endpoint protegido, requer um token jwt para acessá-lo.
- Só quem criou o post pode editá-lo e somente o conteúdo pode ser editado.

![image](https://user-images.githubusercontent.com/111313480/226071028-d8a3c31a-c253-4b16-9788-63ea92b6b730.png)

# Delete post

- Endpoint protegido, requer um token jwt para acessá-lo.
- Só quem criou o post pode deletá-lo. Admins podem deletar o post de qualquer pessoa.

![image](https://user-images.githubusercontent.com/111313480/226071052-27e4211e-53dc-4cb4-9d44-9748791aa347.png)

## Like or dislike post (mesmo endpoint faz as duas coisas)

- Endpoint protegido, requer um token jwt para acessá-lo.
- Quem criou o post não pode dar like ou dislike no mesmo.

- Caso dê um like em um post que já tenha dado like, o like é desfeito.
- Caso dê um dislike em um post que já tenha dado dislike, o dislike é desfeito.

- Caso dê um like em um post que tenha dado dislike, o like sobrescreve o dislike.
- Caso dê um dislike em um post que tenha dado like, o dislike sobrescreve o like.

# Like (funcionalidade 1)

![image](https://user-images.githubusercontent.com/111313480/226071140-63ccb32b-3b8b-4c49-be0c-0d3bf161d915.png)

# Dislike (funcionalidade 2)

![image](https://user-images.githubusercontent.com/111313480/226071189-955bb09a-12f4-4ea9-b8fa-7dd230fb95f2.png)

## Segue abaixo o Link do meu Repositório Front-end:

- [Projeto Front-end](https://github.com/Aleshirota/Projeto-Integrador-Front-end)

