module.exports = {
   Item: {
      defaultRecipe: async (parent, _, { models }) => {
         try {
            const { Recipe } = models
            const recipe = await Recipe.findOne(parent.defaultRecipe)
            return recipe
         } catch (error) {
            return error.message
         }
      }
   },
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
            const product = await Product.findOne({ _id: id })
            return product
         } catch (error) {
            return error.message
         }
      }
   }
}
