const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema(
   {
      name: String,
      zip_codes: [String],
      menuCollections: [
         {
            menuCollection: {
               type: Schema.Types.ObjectId,
               ref: 'MenuCollection'
            },
            availability: [String]
            //    availabilty: {
            //       includeRange: [
            //          {
            //             recurring: [
            //                {
            //                   startDate: Date,
            //                   endDate: Date,
            //                   day: [String],
            //                   startTime: Date,
            //                   endTime: Date
            //                }
            //             ],
            //             customRange: [
            //                {
            //                   startDay: Date,
            //                   endDay: Date,
            //                   startTime: Date,
            //                   endTime: Date
            //                }
            //             ]
            //          }
            //       ],
            //       excludeRange: [
            //          {
            //             startDay: Date,
            //             endDay: Date,
            //             startTime: Date,
            //             endTime: Date
            //          }
            //       ]
            //    }
         }
      ]
   },
   { timestamps: true }
)

module.exports = mongoose.model('menu', menuSchema)
