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
            const station = await Station.find({ _id: id })
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
            const response = Station.create({
               title
            })
            return response
         } catch (error) {
            return error.message
         }
      }
   }
}
