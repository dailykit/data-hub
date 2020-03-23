module.exports = {
   RecipeItem: {
      recipe: async (parent, _, { models }) => {
         try {
            const { Recipe } = models
            const recipe = await Recipe.findOne(parent.recipe)
            return recipe
         } catch (error) {
            return error.message
         }
      }
   },
   Query: {
      products: async (parent, args, { models }) => {
         try {
            const { Product } = models
            const products = await Product.find({})
            return products
         } catch (error) {
            return error.message
         }
      },
      product: async (parent, { id }, { models }) => {
         try {
            const { Product } = models
            const product = await Product.find(id)
            return product
         } catch (error) {
            return error.message
         }
      }
   }
}
