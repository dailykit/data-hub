module.exports = {
   MenuCollectionItem: {
      menuCollection: async (parent, _, { models }) => {
         try {
            const { MenuCollection } = models
            const response = await MenuCollection.find(parent.menuCollection)
            return response
         } catch (error) {
            return error.message
         }
      }
   },
   Query: {
      menus: async (parent, args, { models }) => {
         try {
            const { Menu } = models
            const menus = await Menu.find({})
            return menus
         } catch (error) {
            return error.message
         }
      },
      menu: async (parent, args, { models }) => {
         try {
            const { Menu } = models
            const menu = await Menu.findOne(args)
            return menu
         } catch (error) {
            return error.message
         }
      }
   }
}
