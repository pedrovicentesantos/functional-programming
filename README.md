# Repositório

Baseado no seguinte [repositório](https://github.com/rodrigobotti/rs-ws-2020-fp), com o objetivo de aplicar alguns conceitos de programação funcional. Além de aplicar os conceitos aprendidos na criação de um crawler, que está na pasta `concepts` do projeto.

O crawler consome uma API criada em Node.js, que está na pasta `api` do projeto.

## Rodando a aplicação

Para rodar a aplicação, basta ter o Docker instalado e rodar o comando: 

````
  npm run api
````

O comando irá iniciar o container e depois disso a aplicação poderá ser acessada em [localhost:3000](http://localhost:3000).

Para parar a aplicação, basta rodar o comando:

```
  npm run api:kill
```

## Endpoints disponíveis

  - GET /api/categories: 
    * Lista todas as categorias disponíveis
  - GET /api/categories/:id/tv-shows/?cursor=:cursor
    * Lista as séries de TV de determinada categoria
  - POST /api/tv-shows/:id
    * Lista uma série de TV específica