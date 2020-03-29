const mongoose = require('mongoose')

const StationSchema = new mongoose.Schema(
   {
      title: {
         type: String
      }
   },
   {
      timestamps: true
   }
)

module.exports = mongoose.model('Station', StationSchema)
