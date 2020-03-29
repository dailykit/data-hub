const mongoose = require('mongoose')

const PackagingSchema = new mongoose.Schema(
   {
      title: {
         type: String
      }
   },
   {
      timestamps: true
   }
)

module.exports = mongoose.model('Packaging', PackagingSchema)
