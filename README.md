# API de Votação
### Sistema de Votação de Pautas por sessão de voto, com tempo de inicio e fim da votação

## Stacks utilizadas
- `javascript` - Linguaguem de programação principal
- `typescript` - Transpilador para javascript

- `TypeORM` - Mapeamento objeto-relacional, abstração do banco de dados
- `Mysql` - Banco de Dados relacional

- `nodejs` - interpretador do javascript
- `express` - framework para nodejs
- `date-fns` - framework para trabalho com datas e horas
- `axios` - framework para trabalhar com API

- `eslint` - Ferramento para identificar estetica e padrões no código
- `prettier` - Ferramneta para estetica do código

- `git` - controle de versionamento, neste projeto utilizei apenas versionamento com o git, não utilizei novas branchs.
- `Insomnia` - Ferramenta para testes da API

# Rotas:
## Pauta
  ### Get `url/pauta`
  ### Post `url/pauta`

Request
```json
  {
    "pauta":"Nome da Pauta",
    "descricao":"Descrição da Pauta"
  }
```
Response
```json
  {
    "pauta": "Nome da Pauta",
    "descricao": "Descrição da Pauta",
    "id": 21
  }
```

## Sessão
  ### Get `url/sessao`
  ### Post `url/sessao`

Request
```json
  {
    "inicio": "2020-05-20T16:43:22.238Z",
    "duracao": 120,
    "pautaId":"21"
  }
```
Response
```json
  {
    "inicio": "2020-05-20T16:43:22.238Z",
    "fim": "2020-05-20T18:43:22.238Z",
    "pautaId": "21",
    "id": 21
  }
```

## Usuario
  ### Get `url/usuario`
  ### Post `url/usuario`

Request
```json
  {
    "nome":"Fulano de Tal",
    "cpf":"70166418803"
  }
```
Response
```json
  {
    "nome": "Fulano de Tal",
    "cpf": "70166418803",
    "id": 21
  }
```

## Para Votar
  ### Get `url/voto`
  ### Post `url/voto`

Request
```json
  {
    "sessaoId":"21",
    "voto": true,
    "usuarioId": "21"
  }
```
Response
```json
  {
    "voto": true,
    "usuarioId": "21",
    "sessaoId": "21",
    "id": 11
  }
```

## Contabilizar os votos
  ### Get `url/voto/:pautaId`

Response
```json
  {
    "pauta": 1,
    "sessao": 1,
    "Voto": {
      "Sim": 1,
      "Nao": 0
    }
  }
```

# Links:
* [Link da API hospedada no Heroku](https://votosessao.herokuapp.com/)
* [Link do Projeto](https://github.com/eps364/VotoSessao)


