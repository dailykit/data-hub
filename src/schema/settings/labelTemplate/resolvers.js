module.exports = {
   Query: {
      labelTemplates: async (parent, args, { models }) => {
         try {
            const { LabelTemplate } = models
            const labelTemplates = await LabelTemplate.find({})
            return labelTemplates
         } catch (error) {
            return error.message
         }
      },
      labelTemplate: async (parent, { id }, { models }) => {
         try {
            const { LabelTemplate } = models
            const labelTemplate = await LabelTemplate.find({ _id: id })
            return labelTemplate
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createLabelTemplate: (_, { title }, { models }) => {
         try {
            const { LabelTemplate } = models
            const response = LabelTemplate.create({
               title
            })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}
