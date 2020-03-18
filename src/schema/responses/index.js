module.exports = {
   MutationResponse: {
      __resolveType(response) {
         if (response.recipe) {
            return 'RecipeResponse'
         }
         return null
      }
   }
}
