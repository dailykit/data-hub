const mongoose = require('mongoose')

const LabelTemplateSchema = new mongoose.Schema(
   {
      title: {
         type: String
      }
   },
   {
      timestamps: true
   }
)

module.exports = mongoose.model('LabelTemplate', LabelTemplateSchema)
