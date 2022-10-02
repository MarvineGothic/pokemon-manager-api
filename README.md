# ✨Wiredelta Backend Sample Tasks ✨
## Project : Pokemon Manager API

### 🚨 Requirements
- DATABASE : **PostgreSQL**
- LANGUAGE : **TypeScript (Node.js)**
- FRAMEWORKS : **[Fastify](https://www.npmjs.com/package/fastify)** & **[Prisma (ORM)](https://www.prisma.io/)**

### ℹ️ Notes
The scope of this sample project is to handle Pokemon data and expose routes that let clients interact with it in the way that is discribed below.

The orginal Pokemon data is found at [PokeAPI](https://pokeapi.co/docs/v2)

### 🏗️ Tasks
- Create an API which will have the following features:
  - Basic authentication (You need to be logged in to add/edit/delete)
  - A list of paginated Pokemons (each item should contain: name, height, weight and image). The result should be:
    - sortable by name, height and weight;
    - filterable by name, height range and weight range.
  - The pagination should allow the clients to choose how many items are displayed on a page. Allowed values: 10, 20 and 50;
  - Ability to add/edit/delete custom Pokemons.
- Bonus points
  - Use GraphQL instead of REST endpoints
  - Use the Nest.js framework
  
### 📨 Submitting
Upload your project to your Git & include the url of the repository in your application. Remember that the repository must be public!