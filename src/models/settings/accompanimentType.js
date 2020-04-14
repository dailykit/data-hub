const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
   {
      title: {
         type: String
      }
   },
   {
      timestamps: true
   }
)

module.exports = mongoose.model('AccompanimentType', Schema)
