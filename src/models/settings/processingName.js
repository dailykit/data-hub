const mongoose = require('mongoose')
const Schema = mongoose.Schema

const processingNameSchema = new Schema(
   {
      name: String
   },
   { timestamps: true }
)

module.exports = mongoose.model('processingName', processingNameSchema)
