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

### Seeding Fake Data.

> Location `/src/tests/data`

Inside the data folder, the files for generating fake data for the models are present. Any number of documents can be created for the models. This is implemented using [mongoose dummy](https://www.npmjs.com/package/mongoose-dummy).

There are two main files which are being used to generate the data collectively and save it to the database. They are:

1. `dummy.js`
2. `save.js`

#### Working

* `dummy.js`

   * `generate_fake_data` takes as an input the model, total number of documents that are to be generated and *forceFields* which takes an object with key-value pairs. The **key** represents a key in the document for which a specific **value** has to be provided explicitly. 

          *forceFields*

            ```
               {
                  key: [String, Array, Object]
               }
            ```  
      The function then uses the passed parameters to generate the data using:
      ```
         dummy(model, options)
      ```

   * `random` takes the total number of documents and returns a random number less than the total number of documents. (For getting specific data from the array of documents generated previously for different models.)


   * `fake_data` is the function where the generation of documents for different models takes place. For each model any specific data that is being provided externally can be specified in the *forceFields* argument. Therefore the users can use their own logic to explicitly provide the data for different fields in a document of a particular model.

* `save.js`

   This is the file where the data generated in `dummy.js` file is obtained by calling the `fake_data` function. The data then is saved into the database for each model.

#### Steps

```
1. Create a '.env' file at root.
2. Inside the file set up the URI for the database.
   For Example. DB_URI=mongodb://localhost:27017/database-name
3. Go to /src/index.js file.
4. import 'saveToDB' from save.js
5. Inside the then block of mongoose.connect call the function.
6. The database will get populated with the data.
```