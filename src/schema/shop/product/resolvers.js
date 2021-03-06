module.exports = {
   Accompaniment: {
      type: async (parent, _, { models }) => {
         try {
            const { AccompanimentType } = models
            const type = await AccompanimentType.findOne(parent.type)
            return type
         } catch (error) {
            return error.message
         }
      }
   },
   AccompanimentProduct: {
      product: async (parent, _, { models }) => {
         try {
            const { Product } = models
            const product = await Product.findOne(parent.product)
            return product
         } catch (error) {
            return error.message
         }
      }
   },
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
   },
   Mutation: {
      createProduct: async (_, { title }, { models }) => {
         try {
            const { Product } = models
            const product = await Product.create({ title })
            return {
               success: true,
               message: 'Product created successfully!',
               product
            }
         } catch (error) {
            return error.message
         }
      },
      updateProduct: async (_, { input }, { models }) => {
         try {
            const { Product } = models
            const product = await Product.findOneAndUpdate(
               {
                  _id: input.id
               },
               {
                  $set: {
                     title: input.title,
                     tags: input.tags,
                     description: input.description,
                     realtime: input.realtime,
                     preOrder: input.preOrder,
                     items: input.items
                  }
               },
               {
                  new: true
               }
            )
            return {
               success: true,
               message: 'Product update successfully!',
               product
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
