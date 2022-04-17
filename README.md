# Desafio 01 - ReactJS

O desafio consiste em construir a interface de um e-commerce de games.

**Requisitos**
- Os produtos devem ser renderizados dinamicamente através do **products.json**;
- Os valores exibidos no checkout (subtotal e total) devem ser calculados dinamicamente;
- Ao adicionar o vários do mesmo item no carrinho o mesmo deverá ser agrupado;
- O usuário poderá adicionar e remover ou alterar a quantidade de produtos do carrinho;
- Feedbacks visuais das ações do usuários (loading em botões, mensagens de sucesso em toast...);
- Os valores monetários devem ser formatados de acordo com a moeda brasileira;

### 🛠 Tecnologias
- [ReactJS](https://pt-br.reactjs.org/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- [styled components](https://styled-components.com/)

### Rodando o projeto

```bash
# Clone este repositório
$ git clone https://github.com/millenabomtempo/desafio-supera-01

# Instale as dependências
$ yarn

# Execute a aplicação backend
$ yarn server

# O servidor inciará na porta:3333 - acesse http://localhost:3333

# Execute a aplicação frontend
$ yarn dev

# A aplicação inciará na porta:3000 - acesse http://localhost:3000/
```

### Features

- [x] Renderizar JSON
- [x] Valores calculados dinamicamente
- [x] Agrupar itens
- [x] Feedbacks visuais
- [x] Formatar conforme moeda brasileira
- [ ] Melhorar validações
- [ ] Melhorar layout e feedbacks visuais

![desafio-react](https://user-images.githubusercontent.com/47898033/163735382-31d669d8-4596-42db-bd97-74819ffabe22.gif)
