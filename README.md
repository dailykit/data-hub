## Data Hub

> A central graphql server for dailyos apps.

### Installation

Clone the repo and install packages:

```bash
git clone https://github.com/dailykit/data-hub.git
cd data-hub
yarn
```

### Project Structure

```
src
|   - index.js
|   +- models
|   |   - index.js
|   |   - recipe.js
|   +- schema
|   |   +- mutations
|   |   |   - index.js
|   |   +- queries
|   |   |   - index.js
|   |   +- recipes
|   |   |   - types.js
|   |   |   - index.js
|   |   |   - resolvers.js
|   |   - index.js
```

### Models

1. All the mongoose schema models goes inside `models` folder, create a new file for your entity.
2. Import the schema model inside `models/index.js` file.
3. User the existing models as reference while creating your own.
4. Models are already available through `context`

```js
const resolvers = {
   Query: {
      recipes: async (parent, args, { models }) => {
         const { Recipe } = models
         const recipes = await Recipe.find()
         return recipes
      }
   }
}
```

### Queries

1. All the queries goes inside `schema/queries/index.js` file.
2. Group your queries by entity type and leave a empty line before other entities.
   e.g:

```js
type Query {
   recipes: [Recipe]
   recipe(id: ID!): Recipe

   ingredients: [Ingredient]
   ingredient(id: ID!): Ingredient
}
```

### Mutations

1. All the mutations goes inside `schema/mutations.index.js` file.
2. Group your mutations by entity type and leave a empty line before other entities same as queries.
3. Before writing your mutations, extend the `MutationResponse` interface and add the entity name and type as a field.
4. Check the current `index.js` file in mutations for reference.
5. Then go into `responses/index.js` and add an `else if` condition and follow the existing `if` condition.

### Entities

1. Same as `schema/recipes` folder, create one for your entity and add the `index.js`, `types.js` and `resolvers.js` file in the folder.
