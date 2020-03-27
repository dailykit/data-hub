const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema(
   {
      name: String,
      zip_codes: [String],
      menuCollections: [
         {
            availability: [String],
            menuCollection: {
               type: Schema.Types.ObjectId,
               ref: 'MenuCollection'
            }
         }
      ]
   },
   { timestamps: true }
)

module.exports = mongoose.model('menu', menuSchema)
