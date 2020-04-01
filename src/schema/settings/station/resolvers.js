module.exports = {
   Query: {
      stations: async (parent, args, { models }) => {
         try {
            const { Station } = models
            const stations = await Station.find({})
            return stations
         } catch (error) {
            return error.message
         }
      },
      station: async (parent, { id }, { models }) => {
         try {
            const { Station } = models
            const station = await Station.findOne({ _id: id })
            return station
         } catch (error) {
            return error.message
         }
      }
   },
   Mutation: {
      createStation: (_, { title }, { models }) => {
         try {
            const { Station } = models
            const station = Station.create({
               title
            })
            return {
               success: true,
               message: 'Added station successfully',
               station
            }
         } catch (error) {
            return error.message
         }
      }
   }
}
