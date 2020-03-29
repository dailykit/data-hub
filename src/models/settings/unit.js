const mongoose = require('mongoose')

const UnitSchema = new mongoose.Schema(
   {
      title: {
         type: String
      }
   },
   {
      timestamps: true
   }
)

module.exports = mongoose.model('Unit', UnitSchema)
