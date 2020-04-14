module.exports = {
   Category: {
      products: async (parent, _, { models }) => {
         try {
            const { Product } = models
            const products = await parent.products.map(async id => {
               const product = await Product.findOne(id)
               return product
            })
            return products
         } catch (error) {
            return error.message
         }
      }
   },
   Query: {
      menucollections: async (parent, args, { models }) => {
         try {
            const { MenuCollection } = models
            const collections = await MenuCollection.find({})
            return collections
         } catch (error) {
            return error.message
         }
      },
      menucollection: async (parent, { id }, { models }) => {
         try {
            const { MenuCollection } = models
            const collection = await MenuCollection.findOne({ _id: id })
            return collection
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createMenuCollection: async (_, { title }, { models }) => {
         try {
            const { MenuCollection } = models
            const menuCollection = await MenuCollection.create({ title })
            return {
               success: true,
               message: 'Menu Collection created successfully!',
               menuCollection
            }
         } catch (error) {
            return error.message
         }
      },
      updateMenuCollection: async (_, { input }, { models }) => {
         try {
            const { MenuCollection } = models
            const menuCollection = await MenuCollection.findOneAndUpdate(
               { _id: input.id },
               {
                  $set: {
                     name: input.title,
                     categories: input.categories,
                     availability: input.availability
                  }
               },
               {
                  new: true
               }
            )
            return {
               success: true,
               message: 'Collection updated successfully!',
               menuCollection
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
